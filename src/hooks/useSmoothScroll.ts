import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    let isScrolling = false;
    let scrollEndTimeout: ReturnType<typeof setTimeout>;
    let lastCheckTime = 0;
    let wheelAccumulator = 0;

    const checkAndScrollToNext = () => {
      if (isScrolling) return;

      const now = Date.now();
      // Throttle checks to avoid too frequent updates
      if (now - lastCheckTime < 100) return;
      lastCheckTime = now;

      const currentScroll = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = 0.65;

      // If we're at the top (header area), don't auto-scroll
      if (currentScroll < 100) return;

      // If we're near the bottom (footer area), don't auto-scroll
      const footer = document.getElementById('footer');
      if (footer && currentScroll + viewportHeight > footer.offsetTop - 100) return;

      // First check project cards (more specific)
      const projectCards = document.querySelectorAll('.project-card');
      for (let i = 0; i < projectCards.length; i++) {
        const card = projectCards[i] as HTMLElement;
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;
        const cardBottom = cardTop + cardHeight;
        
        // Check if we're viewing this card
        if (currentScroll >= cardTop - viewportHeight * 0.5 && currentScroll < cardBottom) {
          const scrolledPastTop = currentScroll - cardTop;
          const scrollProgress = scrolledPastTop / cardHeight;
          
          // If we've scrolled past threshold of this card, go to next
          if (scrollProgress >= scrollThreshold && i < projectCards.length - 1) {
            const nextCard = projectCards[i + 1] as HTMLElement;
            if (nextCard) {
              isScrolling = true;
              const targetPosition = nextCard.offsetTop - 50;
              
              // Use requestAnimationFrame for smoother animation
              const startPosition = window.scrollY;
              const distance = targetPosition - startPosition;
              const duration = Math.min(Math.abs(distance) * 0.5, 800); // Max 800ms
              const startTime = performance.now();

              const animateScroll = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth deceleration
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const currentPosition = startPosition + distance * easeOutCubic;
                
                window.scrollTo(0, currentPosition);

                if (progress < 1) {
                  requestAnimationFrame(animateScroll);
                } else {
                  isScrolling = false;
                }
              };

              requestAnimationFrame(animateScroll);
              return;
            }
          }
        }
      }

      // Then check sections
      const sections = ['hero', 'techs', 'projects'];
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (!element) continue;

        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if we're viewing this section
        if (currentScroll >= sectionTop - viewportHeight * 0.5 && currentScroll < sectionBottom) {
          const scrolledPastTop = currentScroll - sectionTop;
          const scrollProgress = scrolledPastTop / sectionHeight;
          
          // If we've scrolled past threshold of this section, go to next
          if (scrollProgress >= scrollThreshold && i < sections.length - 1) {
            const nextSection = document.getElementById(sections[i + 1]);
            if (nextSection) {
              isScrolling = true;
              const targetPosition = nextSection.offsetTop;
              
              // Use requestAnimationFrame for smoother animation
              const startPosition = window.scrollY;
              const distance = targetPosition - startPosition;
              const duration = Math.min(Math.abs(distance) * 0.5, 800); // Max 800ms
              const startTime = performance.now();

              const animateScroll = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth deceleration
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const currentPosition = startPosition + distance * easeOutCubic;
                
                window.scrollTo(0, currentPosition);

                if (progress < 1) {
                  requestAnimationFrame(animateScroll);
                } else {
                  isScrolling = false;
                }
              };

              requestAnimationFrame(animateScroll);
              return;
            }
          }
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Only handle scrolls down
      if (e.deltaY < 30) {
        wheelAccumulator = 0;
        return;
      }
      
      if (isScrolling) return;

      // Accumulate wheel events to avoid triggering too early
      wheelAccumulator += e.deltaY;
      
      // Only trigger if accumulated enough scroll
      if (wheelAccumulator > 100) {
        wheelAccumulator = 0;
        // Small delay to let natural scroll happen first
        setTimeout(() => {
          checkAndScrollToNext();
        }, 150);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    
    // Check on scroll end (when user stops scrolling) with longer delay
    const handleScroll = () => {
      clearTimeout(scrollEndTimeout);
      scrollEndTimeout = setTimeout(() => {
        if (!isScrolling) {
          checkAndScrollToNext();
        }
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollEndTimeout);
    };
  }, []);
};

