export const watchElementVisibility = (element, listener) => {
 if (!window || typeof window !== "object") return

 if (window.IntersectionObserver) {
   const observer = new IntersectionObserver(
     entries => {
       entries.forEach(entry => {
         if (entry.target === element) {
           listener(entry.isIntersecting);
         }
       });
     },
     { threshold: [0, 0.01] }
   );
   observer.observe(element);
   return () => {
     observer.disconnect();
   };
 } else {
   listener(true);
   return noop;
 }
}

export const noop = () => {} 