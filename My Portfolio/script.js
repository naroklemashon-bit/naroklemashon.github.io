document.addEventListener('DOMContentLoaded', () => {

  // 1. CTA Button Smooth Scrolling Action
  const btnViewWork = document.querySelector('.btn-primary');
  const btnGetInTouch = document.querySelector('.btn-secondary');

  if (btnViewWork) {
    btnViewWork.addEventListener('click', () => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (btnGetInTouch) {
    btnGetInTouch.addEventListener('click', () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 2. Scroll Reveal Animation for Cards
  const observerOptions = {
    threshold: 0.15, // Triggers when 15% of the element is in view
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply scroll reveal styling & observer to all cards
  const cards = document.querySelectorAll(
    '.focus-card, .skill-card, .project-card, .service-card, .contact-card'
  );

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    revealOnScroll.observe(card);
  });

});