import React from 'react';
import { Menu, Container, Header } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: '#707B7C', fontSize: '22px' };
    return (
        <Menu className="topmenu">
          <Container fluid className="bordered">
            <Menu.Item><Header as="h2">T&C Hawaii</Header></Menu.Item>
            <Menu.Item position="right" style={itemStyle}>Surf</Menu.Item>
            <Menu.Item style={itemStyle}>Stores</Menu.Item>
            <Menu.Item style={itemStyle}>Intl</Menu.Item>
            <Menu.Item style={itemStyle}>About</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
