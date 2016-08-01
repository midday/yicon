import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './Upload.scss';
import Footer from './Footer';
import Uploader from './Uploader';

export default class Upload extends Component {
  render() {
    return (
      <div className="yicon-upload-icon">
        <Uploader />
        <Footer />
      </div>
    );
  }
}
