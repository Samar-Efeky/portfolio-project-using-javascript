export function setupObserver() {
  const sectionView = document.querySelectorAll(".show-section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.3) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // وقف المراقبة بعد أول ظهور
      }
    });
  }, {
    threshold: 0.3 // أول ما يوصل 30% من العنصر
  });

  sectionView.forEach(section => {
    observer.observe(section);
  });
}
