import React from 'react';
import { Header } from 'semantic-ui-react';

export default class Est1971 extends React.Component {
  render() {
    const headerStyle = { fontSize: '15px' };
    return (
        <Header as="p" floated="left" textAlign="centered" style={headerStyle}>&nbsp; &nbsp; est 1971</Header>
    );
  }
}
