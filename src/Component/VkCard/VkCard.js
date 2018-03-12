import React from 'react';
import Card from 'react-toolbox/lib/card/Card';

import VkAvatar from './VkAvatar';
import VkFullname from './VkFullname';
import VkButton from './VkButton';

export default ({ userData }) => (
  <Card>
    <div>
      <VkAvatar image = {userData.avatarUrl} />
      <VkFullname fullname = {`${userData.firstname} ${userData.surename}`} />
      <VkButton />
    </div>
  </Card>
);