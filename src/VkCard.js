import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardText  from 'react-toolbox/lib/card/CardText';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardActions  from 'react-toolbox/lib/card/CardActions';

import Button from 'react-toolbox/lib/button/Button';
import IconButton from 'react-toolbox/lib/button/IconButton';

export default ({ userData }) => (
  <Card style = {{width: '300px'}}>

    <CardTitle
      avatar={userData.avatarUrl}
      title = {`${userData.firstname} ${userData.surename}`}
    />

    <CardText>{userData.text}</CardText>

    <CardActions>
      <Button label = 'Написать сообщение' primary />
      <IconButton icon = 'favorite' flat floating mini primary />
    </CardActions>

  </Card>
);