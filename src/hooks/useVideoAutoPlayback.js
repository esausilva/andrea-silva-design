import { useRef, useEffect } from 'react';

const useVideoAutoPlayback = options => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const cb = entries => {
    const [entry] = entries;

    if (entry.isIntersecting) videoRef.current.play();
    else videoRef.current.pause();
  };

  useEffect(() => {
    if (IntersectionObserver === null || IntersectionObserver === undefined)
      return () => {};

    const observer = new IntersectionObserver(cb, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, videoRef];
};

export { useVideoAutoPlayback };
