import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={2}><Icon name="facebook"/></Grid.Column>
              <Grid.Column width={2}><p>SURF</p></Grid.Column>
              <Grid.Column width={2}><p>STORES</p></Grid.Column>
              <Grid.Column width={2}><p>INTL</p></Grid.Column>
              <Grid.Column width={2}><p>ABOUT</p></Grid.Column>
              <Grid.Column width={2}><Icon name="instagram"/></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
