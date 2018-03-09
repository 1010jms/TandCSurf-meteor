import React from 'react';
import { Image } from 'semantic-ui-react';

export default class TandCLogo extends React.Component {
  render() {
    const logoStyle = { paddingLeft: '5px' };
    return (
        <div>
          <Image className="topPadding"
               floated="left"
               src="https://www.tcsurf.com/img/TClogo.png?width=76"
               style={logoStyle}/>
        </div>
    );
  }
}
