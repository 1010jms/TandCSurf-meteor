import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

export default class Images extends React.Component {
  render() {
    return (
        <Grid centered celled>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image size="500px" src="https://www.tcsurf.com/media/1530/3cp-surf17.jpg" />
              <Header as="h3" className="italics">T&C SURF</Header>
            </Grid.Column>
            <Grid.Column width={5}>
              <Image size="500px" src="https://www.tcsurf.com/media/1529/3cp-stores17-3.jpg" />
              <Header as="h3" className="italics">HAWAII STORES</Header>
            </Grid.Column>
            <Grid.Column width={5}>
              <Image size="500px" src="https://www.tcsurf.com/media/1481/3cp-boards_30.jpg" />
              <Header as="h3" className="italics">T&C BOARD MODELS</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Image src="https://www.tcsurf.com/media/1484/2cl_about_30.jpg" />
              <Header as="h3" className="italics">ABOUT T&C</Header>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image src="https://www.tcsurf.com/media/1579/2cl_intl-17.jpg" />
              <Header as="h3" className="italics">T&C INTERNATIONAL</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
