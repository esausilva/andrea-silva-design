import React from 'react';

import { CollectionLayout } from '~src/components/layouts/CollectionLayout';
import { Seo } from '~components/helpers/SEO';
import collectionData from '~content/collections/wander-collection.json';

const GardenCollection = () => {
  return (
    <CollectionLayout
      hero={{
        title: 'Shop The Wander Collection',
        image: 'art-collections/wander-collection/wander-collection-header.jpg',
        imageTitle: 'October Collection - The Wander Collection',
      }}
      description={`I guess you could say the inspiration for Wander began when my husband and I moved to Tennessee in the spring of 2020. The spring of 2020 brought with it many things, the most notable being all the unknowns and chaos that sprung from a global pandemic. Finding ourselves transplanted in an unfamiliar territory all while the world was, in effect shutting down, was unsettling to say the least. And yet, while everything was closing down, something else was opening up to us. It was the outdoors that stayed open even when everything else shut down. Immersing myself in the natural God-given beauty of middle Tennessee was such a peaceful life-giving gift. So yes, the inspiration for Wander came from many miles of exploration here in Tennessee, but also from a spirit of adventure that existed in my heart long before. While you may not find yourself physically wandering through the same paths I have, it is my hope through this collection that you will find that same spirit of adventure and peace wherever you choose to wander.`}
    >
      {collectionData}
    </CollectionLayout>
  );
};

export default GardenCollection;

export const Head = ({ location }) => (
  <Seo pageTitle="Wander Collection" pathName={location.pathname} />
);
