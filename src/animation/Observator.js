// observer.js
export function createObserver(callback, options = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry, entry.isIntersecting);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
    ...options,
  });

  return observer;
}