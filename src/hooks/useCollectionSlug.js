import { useState, useEffect } from 'react';

const useCollectionSlug = position => {
  const [collectionSlug, setCollectionSlug] = useState('');

  useEffect(() => {
    const urlParts = window.location.href.split('/');
    const slug = urlParts[urlParts.length - position];

    setCollectionSlug(slug);

    return () => {};
  }, [collectionSlug, position]);

  return { collectionSlug };
};

export { useCollectionSlug };
