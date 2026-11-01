import React from 'react';
import PictureViewer from './stageCommon/PictureViewer.js'
import Bullets from './stageCommon/Bullets.js'
import './stageStylz/LayoutB.css';

const LayoutB = (props) => {
  return (
    <div>
      <div className="stage-top">
        <h2 className="animateTitleLong" key={props.slide.id} >{props.slide.title}</h2>
        <PictureViewer {...props} />
      </div>
      <div className="stage-bottom">
        <Bullets {...props} />
      </div>
    </div>
  );
}

export default LayoutB;
