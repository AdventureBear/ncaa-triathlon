console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';

//import ProgramPreview from './ProgramPreview';
//import programs from '../www/data/usat-ncaa-programs.js';
import Layout from './Layout.js'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Layout />,

    document.getElementById('mount')
  );
});





