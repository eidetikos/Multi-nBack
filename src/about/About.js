import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class About extends PureComponent {
  render() {
    return (
      <main className="about">
        <h2>About component</h2>
        <p>It has been thought that working memory (WM), a cognitive process, and IQ correlate, perhaps using the same neural networks.  WM is a "trainable" process.</p>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(About);