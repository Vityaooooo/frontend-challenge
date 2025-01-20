import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = (loadMore) => {
  const observer = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        loadMore();  // Загружаем больше данных
      }
    };

    observer.current = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 1.0, // Trigger when 100% of the element is visible
    });

    if (observer.current) {
      const target = document.querySelector('#load-more-trigger');
      if (target) {
        observer.current.observe(target);  // Наблюдаем за элементом
      }
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();  // Очищаем observer при размонтировании компонента
      }
    };
  }, [loadMore]);

  return observer;
};

export default useInfiniteScroll;
