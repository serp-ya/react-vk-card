import React from 'react';
import CardTitle from 'react-toolbox/lib/card/CardTitle';

export default function VkFullname({ fullname, avatarUrl }) {
  return (
    <CardTitle className = 'CardTitle' title = {fullname} avatar = {avatarUrl} />
  );
}