import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default class SocialMediaMenu extends React.Component {
  render() {
    return (
        <Grid>
          <Grid.Row centered className="bordered">
            <Icon name="instagram icon" />
            <Icon name="facebook icon" />
          </Grid.Row>
        </Grid>
    );
  }
}
