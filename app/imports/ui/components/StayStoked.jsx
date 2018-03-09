import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default class StayStoked extends React.Component {
  render() {
    const itemStyle = { color: 'whitesmoke', fontSize: '14px' };
    return (
        <Menu className="stayStoked">
          <Container fluid>
            <Menu.Item fitted position="right" style={itemStyle}>stay Stoked &nbsp; &nbsp; &nbsp; &nbsp;</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
