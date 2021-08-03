import React from 'react';

import { CollectionLayout } from '~src/components/layouts/CollectionLayout';
import gardenCollectionData from '~content/collections/garden-collection.json';

const GardenCollection = () => {
  return (
    <CollectionLayout
      hero={{
        title: 'The Garden Collection',
        image: 'art-collections/garden-collection/garden-collection-cover.jpg',
        imageTitle: 'June Collection - The Garden Collection',
      }}
      pageTitle="The Garden Collection"
    >
      {gardenCollectionData}
    </CollectionLayout>
  );
};

export default GardenCollection;
