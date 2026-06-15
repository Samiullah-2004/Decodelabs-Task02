    (function () {
      const toggle = document.getElementById('navToggle');
      const nav    = document.getElementById('primaryNav');

      if (!toggle || !nav) return;

      toggle.addEventListener('click', function () {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        nav.classList.toggle('is-open');
        // Swap aria-label for screen readers
        toggle.setAttribute(
          'aria-label',
          isOpen ? 'Open navigation menu' : 'Close navigation menu'
        );
      });

      // Close nav when a link is tapped (smooth UX on mobile)
      nav.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-label', 'Open navigation menu');
        });
      });
    })();
  