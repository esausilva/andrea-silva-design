import { useState, useEffect } from 'react';

const useCollectionSlug = position => {
  const [collectionSlug, setCollectionSlug] = useState('');

  useEffect(() => {
    const urlParts = window.location.href.split('/').filter(Boolean);
    const slug = urlParts[urlParts.length - position];

    setCollectionSlug(slug);

    return () => {};
  }, [position]);

  return { collectionSlug };
};

export { useCollectionSlug };
