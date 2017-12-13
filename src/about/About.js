import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class About extends PureComponent {
  render() {
    return (
      <main className="about">
        <h2>About component</h2>
        <p>Working memory (WM) is a cognitive process.  WM is thought to be "trainable", relating to how much a person can think about at one time.  
        It is thought that WM and IQ correlate, perhaps using the same neural networks.  Therefore, the hope is that, by improving WM, IQ will also be improved.</p>
        <p>There are many "mind" games on the market, from Sudoku to crossword puzzles, to memory-matching games.  Studies have shown that none of these have demonstrated 
        any marked improvement in memory...until the emergence of the Dual-N-Back memory game which calls upon the user to recall multiple things instead of just one.</p>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(About);