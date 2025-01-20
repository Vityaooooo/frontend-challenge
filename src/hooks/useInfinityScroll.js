import { useEffect, useRef } from 'react';

const useInfiniteScroll = (loadMore, isLoading) => {
	const observer = useRef(null);

	useEffect(() => {
		const callback = (entries) => {
			if (entries[0].isIntersecting && !isLoading) {
				loadMore();
			}
		};

		if (observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver(callback, {
			rootMargin: '0px',
			threshold: 1.0,
		});

		const target = document.querySelector('#load-more-trigger');
		if (target) observer.current.observe(target);

		return () => {
			if (observer.current) observer.current.disconnect();
		};
	}, [loadMore, isLoading]);

	return observer;
};

export default useInfiniteScroll;
