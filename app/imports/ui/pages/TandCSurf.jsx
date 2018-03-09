import React from 'react';
import StayStoked from '../components/StayStoked';
import FullWidthImage from '../components/FullWidthImage';
import Description from '../components/Description';
import Images from '../components/Images';

export default class TandCSurf extends React.Component {
  render() {
    return (
        <div>
          <StayStoked/>
          <FullWidthImage/>
          <Description/>
          <Images/>
        </div>
    );
  }
}
