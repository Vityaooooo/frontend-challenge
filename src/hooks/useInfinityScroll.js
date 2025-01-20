import { useEffect, useRef } from 'react';

const useInfiniteScroll = (loadMore) => {
	const observer = useRef(null);

	useEffect(() => {
		const callback = (entries) => {
			if (entries[0].isIntersecting) {
				loadMore();
			}
		};

		observer.current = new IntersectionObserver(callback, {
			rootMargin: '0px',
			threshold: 1.0,
		});

		if (observer.current) {
			const target = document.querySelector('#load-more-trigger');
			if (target) {
				observer.current.observe(target);
			}
		}

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [loadMore]);

	return observer;
};

export default useInfiniteScroll;
