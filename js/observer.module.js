export function setupObserver() {
    const sectionView = document.querySelectorAll(".show-section");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
  
        if (ratio === 1) {
          entry.target.classList.add('show');
        } else if (ratio < 0.5) {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100) // [0, 0.01, ..., 1]
    });
  
    sectionView.forEach(section => {
      observer.observe(section);
    });
}