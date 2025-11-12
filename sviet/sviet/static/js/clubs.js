document.addEventListener('DOMContentLoaded', () => {
      const headers = document.querySelectorAll('.committee-header');
      const hamburger = document.getElementById('hamburger');
      const mobileMenu = document.getElementById('mobileMenu');

      headers.forEach(header => {
        header.addEventListener('click', () => {
          const body = header.nextElementSibling;
          const icon = header.querySelector('.toggle-icon');
          const isOpen = body.classList.contains('open');
          document.querySelectorAll('.committee-body').forEach(b => {
            b.classList.remove('open');
            b.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
          });
          if (!isOpen) {
            body.classList.add('open');
            icon.textContent = '−';
          }
        });
      });

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.style.display = hamburger.classList.contains('active') ? 'flex' : 'none';
      });

      document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
          hamburger.classList.remove('active');
          mobileMenu.style.display = 'none';
        }
      });
    });