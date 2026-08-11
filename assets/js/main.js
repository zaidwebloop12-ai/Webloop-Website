/* ==========================================================================
   Webloop Agency — site scripts
   Vanilla JS, no dependencies. Every module is defensive: if the markup
   for a feature isn't on the page, the module simply does nothing.
   ========================================================================== */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  var $ = function (sel, ctx) {
    return (ctx || document).querySelector(sel);
  };
  var $$ = function (sel, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  };

  /* ------------------------------------------------------------ Preloader */
  function initPreloader() {
    var el = $('.preloader');
    if (!el) return;

    var fill = $('.preloader__fill', el);

    function finish() {
      el.classList.add('is-done');
      window.setTimeout(function () {
        el.hidden = true;
      }, 600);
    }

    if (prefersReducedMotion) {
      el.hidden = true;
      return;
    }

    var start = null;
    var duration = 900;

    function tick(now) {
      if (start === null) start = now;
      var p = Math.min(1, (now - start) / duration);
      if (fill) fill.style.width = Math.round((1 - Math.pow(1 - p, 3)) * 100) + '%';
      if (p < 1) {
        window.requestAnimationFrame(tick);
      } else {
        finish();
      }
    }
    window.requestAnimationFrame(tick);

    // Safety net: never let the overlay trap the page.
    window.setTimeout(finish, 3000);
  }

  /* --------------------------------------------------------------- Navbar */
  function initNavbar() {
    var navbar = $('.navbar');
    if (!navbar) return;

    var progress = $('.navbar__progress', navbar);
    var ticking = false;

    function update() {
      var y = window.pageYOffset;
      navbar.classList.toggle('is-scrolled', y > 24);

      if (progress) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        var ratio = max > 0 ? Math.min(1, y / max) : 0;
        progress.style.transform = 'scaleX(' + ratio + ')';
      }
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  }

  /* ---------------------------------------------------------- Mobile menu */
  function initMobileMenu() {
    var toggle = $('.nav-toggle');
    var menu = $('#mobile-menu');
    if (!toggle || !menu) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.hidden = !open;
      document.body.style.overflow = open ? 'hidden' : '';
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // A resize past the desktop breakpoint should never leave the body locked.
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024 && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
      }
    });

    setOpen(false);
  }

  /* --------------------------------------------------------- Scroll reveal */
  function initReveal() {
    var items = $$('.reveal');
    if (!items.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    items.forEach(function (el) {
      var delay = el.getAttribute('data-delay');
      if (delay) el.style.setProperty('--reveal-delay', delay + 'ms');
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* -------------------------------------------------------- Stat counters */
  function initCounters() {
    var stats = $$('[data-count]');
    if (!stats.length) return;

    function run(el) {
      var target = parseFloat(el.getAttribute('data-count')) || 0;
      var suffix = el.getAttribute('data-suffix') || '';

      if (prefersReducedMotion) {
        el.textContent = target + suffix;
        return;
      }

      var duration = 1600;
      var start = null;

      function tick(now) {
        if (start === null) start = now;
        var p = Math.min(1, (now - start) / duration);
        var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) window.requestAnimationFrame(tick);
      }
      window.requestAnimationFrame(tick);
    }

    if (!('IntersectionObserver' in window)) {
      stats.forEach(run);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          run(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    stats.forEach(function (el) {
      el.textContent = '0' + (el.getAttribute('data-suffix') || '');
      observer.observe(el);
    });
  }

  /* -------------------------------------------------------------- Marquee */
  function initMarquee() {
    var track = $('.marquee__track');
    if (!track) return;

    // Duplicate the row so the -50% translation loops seamlessly.
    var originals = Array.prototype.slice.call(track.children);
    originals.forEach(function (child) {
      var copy = child.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      track.appendChild(copy);
    });
  }

  /* ------------------------------------------------------------ Spotlight */
  function initSpotlight() {
    var cards = $$('.spotlight');
    if (!cards.length) return;

    cards.forEach(function (card) {
      card.addEventListener('pointermove', function (event) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', event.clientX - rect.left + 'px');
        card.style.setProperty('--my', event.clientY - rect.top + 'px');
      });
    });
  }

  /* ------------------------------------------------------ Portfolio filter */
  function initFilters() {
    var buttons = $$('.filter-btn');
    var grid = $('.work-grid');
    if (!buttons.length || !grid) return;

    var cards = $$('[data-category]', grid);
    var counter = $('[data-filter-count]');
    var total = cards.length;

    function apply(category) {
      var shown = 0;

      cards.forEach(function (card) {
        var match = category === 'All' || card.getAttribute('data-category') === category;
        card.classList.toggle('is-filtered', !match);
        card.classList.remove('filter-in');

        if (match) {
          card.style.animationDelay = shown * 70 + 'ms';
          // Force a reflow so the animation restarts on every filter change.
          void card.offsetWidth;
          card.classList.add('filter-in');
          shown += 1;
        }
      });

      if (counter) {
        counter.innerHTML =
          'Showing <b>' + shown + '</b> of ' + total + (total === 1 ? ' project' : ' projects');
      }
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        buttons.forEach(function (other) {
          other.setAttribute('aria-pressed', String(other === button));
        });
        apply(button.getAttribute('data-filter'));
      });
    });
  }

  /* ---------------------------------------------------------- Contact form */
  function initContactForm() {
    var form = $('#contact-form');
    if (!form) return;

    var success = $('#form-success');
    var successName = $('#success-name');
    var submitBtn = $('button[type="submit"]', form);
    var resetBtn = $('#send-another');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    var rules = {
      name: function (value) {
        if (!value.trim()) return 'Please tell us your name.';
        if (value.trim().length < 2) return 'That name looks a little short.';
        return '';
      },
      email: function (value) {
        if (!value.trim()) return 'We need an email to reply to.';
        if (!emailPattern.test(value.trim())) return 'Please enter a valid email address.';
        return '';
      },
      service: function (value) {
        return value ? '' : 'Choose the service you need.';
      },
      budget: function (value) {
        return value ? '' : 'Pick a budget range so we can scope properly.';
      },
      message: function (value) {
        if (!value.trim()) return 'A short description helps us reply usefully.';
        if (value.trim().length < 20) return 'Just a little more detail — 20 characters minimum.';
        return '';
      }
    };

    function fieldOf(control) {
      return control.closest('.field');
    }

    function showError(control, message) {
      var field = fieldOf(control);
      if (!field) return;
      var box = $('.field__error', field);
      field.classList.toggle('is-invalid', Boolean(message));
      control.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (box) box.textContent = message;
    }

    function validateField(control) {
      var rule = rules[control.name];
      if (!rule) return true;
      var message = rule(control.value);
      showError(control, message);
      return !message;
    }

    Object.keys(rules).forEach(function (name) {
      var control = form.elements[name];
      if (!control) return;

      control.addEventListener('blur', function () {
        validateField(control);
      });

      control.addEventListener('input', function () {
        if (fieldOf(control) && fieldOf(control).classList.contains('is-invalid')) {
          validateField(control);
        }
      });

      if (control.tagName === 'SELECT') {
        control.addEventListener('change', function () {
          control.classList.toggle('has-value', Boolean(control.value));
          validateField(control);
        });
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var firstInvalid = null;
      Object.keys(rules).forEach(function (name) {
        var control = form.elements[name];
        if (!control) return;
        if (!validateField(control) && !firstInvalid) firstInvalid = control;
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      // No backend is wired up — this stands in for the real submission.
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('data-label', submitBtn.textContent);
        submitBtn.textContent = 'Sending…';
      }

      window.setTimeout(function () {
        var name = (form.elements.name.value || '').trim().split(' ')[0];
        if (successName) successName.textContent = name || 'there';

        form.hidden = true;
        if (success) {
          success.hidden = false;
          success.focus();
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.getAttribute('data-label') || 'Submit Project';
        }
      }, 900);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        $$('.field', form).forEach(function (field) {
          field.classList.remove('is-invalid');
        });
        $$('select', form).forEach(function (select) {
          select.classList.remove('has-value');
        });
        if (success) success.hidden = true;
        form.hidden = false;
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        form.elements.name.focus();
      });
    }

    // Prefill "Service Needed" when arriving from a service card.
    var params = new URLSearchParams(window.location.search);
    var wanted = params.get('service');
    if (wanted && form.elements.service) {
      var select = form.elements.service;
      Array.prototype.forEach.call(select.options, function (option) {
        if (option.value.toLowerCase().replace(/[^a-z]+/g, '-') === wanted) {
          select.value = option.value;
          select.classList.add('has-value');
        }
      });
    }

    var project = params.get('project');
    if (project && form.elements.message && !form.elements.message.value) {
      var label = project.replace(/-/g, ' ').replace(/\b\w/g, function (c) {
        return c.toUpperCase();
      });
      form.elements.message.value =
        'I saw the ' + label + " case study and I'm interested in something similar. " +
        "Here's what we have in mind: ";
    }
  }

  /* ------------------------------------------------------------ Back to top */
  function initBackToTop() {
    var button = $('.to-top');
    if (!button) return;

    function update() {
      button.classList.toggle('is-visible', window.pageYOffset > 900);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ------------------------------------------------------------------ Year */
  function initYear() {
    $$('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ------------------------------------------------------------------ Boot */
  function init() {
    initPreloader();
    initNavbar();
    initMobileMenu();
    initReveal();
    initCounters();
    initMarquee();
    initSpotlight();
    initFilters();
    initContactForm();
    initBackToTop();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
