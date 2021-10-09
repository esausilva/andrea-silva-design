import React from 'react';

import { CollectionLayout } from '~src/components/layouts/CollectionLayout';
import collectionData from '~content/collections/garden-collection.json';

const GardenCollection = () => {
  return (
    <CollectionLayout
      hero={{
        title: 'Shop The Garden Collection',
        image: 'art-collections/garden-collection/garden-collection-cover.jpg',
        imageTitle: 'June Collection - The Garden Collection',
      }}
      pageTitle="The Garden Collection"
      description={`These paintings were created as part of "The Garden Collection," a series of paintings that was inspired by summers at my grandparents' farm and garden and my desire to grow a garden of my own. I can still remember helping gather the fruits and vegetables from the biggest garden I had ever seen. There was the walk to the garden with an empty bucket, the heat of the sun as we’d look around vines and under plant foliage, and the triumph of a full bucket of produce as we’d trudge back to the house. There’s just something about the taste of a juicy tomato or a crisp cucumber that you picked with your own hands just minutes earlier. In spite of my adult enthusiasm for gardening, I’ve been met, sadly, with more failures than successes, but I’m just stubborn enough to keep trying. As I tried my hand at gardening once again in the summer of 2021, I also started this collection, my own little garden on paper.`}
    >
      {collectionData}
    </CollectionLayout>
  );
};

export default GardenCollection;
