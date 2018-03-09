import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

export default class Description extends React.Component {
  render() {
    const headerStyle = { paddingTop: '50px' };
    const bodyStyle = { paddingTop: '10px', paddingBottom: '10px' };
    return (
        <Grid centered>
          <Grid.Row style={headerStyle}><Header as="h2">T&C Surf Hawaii</Header></Grid.Row>
          <Grid.Row style={bodyStyle}>
            <p>T&C Surf has been serving Hawaii the best selection of
              surf, skate, & bodyboard apparel, accessories, and hard goods since 1971.</p>
          </Grid.Row>
          <Grid.Row><Image src="https://www.tcsurf.com/img/TClogo.png?width=90" /></Grid.Row>
        </Grid>
    );
  }
}
