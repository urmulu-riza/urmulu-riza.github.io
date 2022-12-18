import React from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes,
} from '@merc/react-timeline';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

//Css file
import './project.css';

//Skills
import L_HTML5 from '../../assets/img/skills/html-5.svg';
import L_CSS3 from '../../assets/img/skills/css3.svg';
import L_BOOTSTRAP from '../../assets/img/skills/bootstrap-4.svg';
import L_REACT from '../../assets/img/skills/react.svg';
import L_MATERIALUI from '../../assets/img/skills/material-ui-1.svg';
import L_REACT_BOOTSTRAP from '../../assets/img/skills/react-bootstrap.svg';
import L_JAVASCRIPT from '../../assets/img/skills/javascript.svg';
import L_FIREBASE from '../../assets/img/skills/firebase-icon.svg';

// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: '#ec4b4f',
  },
  marker: {
    borderColor: '#070d59',
  },
  timelineTrack: {
    backgroundColor: '#ec4b4f',
  },
});

const ProjectTimeline = () => {
  return <div id="projects"></div>;
};

export default ProjectTimeline;
