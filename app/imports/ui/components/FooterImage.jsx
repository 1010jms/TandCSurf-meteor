import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FooterImage extends React.Component {
  render() {
    return (
        <Image centered className="imagePadding"
               src="https://www.tcsurf.com/media/1369/footer-graphic-tight-crop.png" />
    );
  }
}
