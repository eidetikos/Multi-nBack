import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class About extends PureComponent {
  render() {
    return (
      <main id="about" className="about">
        <h3>History</h3>
        <p>Working memory (WM) is a cognitive process.  WM is thought to be "trainable", relating to how much a person can think about at one time.  
        It is thought that WM and IQ correlate, perhaps using the same neural networks.  Therefore, the hope is that, by improving WM, IQ will also be improved.</p>
        <p>There are many "mind" games on the market, from Sudoku to memory-matching games.  Studies have shown that none of these have demonstrated 
          any marked improvement in memory...until the emergence of the Dual-N-Back memory game.  This game calls upon the user to recall two independent variates, presented 
          simultaneously, instead of just one.
        </p>
        <p>Our game app borrows the premise of Dual-N-Back and gives the user the option of up to five variates (numbers, colors, shapes, audio, and position) to recall in sequence.  
          The real challenge for the user is in trying to recall the exact variates shown at <i>n</i> places back in the sequence.
        </p>
        <h3>How To Play</h3>
        <p>The user will be presented with 2 parameters which he can specify; the number of variates (2-4) that he wishes to be used in the sequence and the level of difficulty he will face.  
          Once he submits his parameters, his sequence of randomly selected variates will be shown.  For example, if the user chooses 3 variates, 
          he may be shown colored shapes in random positions.  At the end of the sequence play, in this example, he will be asked to provide the color, shape and position at a randomly generated <i>n</i> spaces
          back in the sequence.  Each time he answers correctly, his next round will increase in difficulty.
        </p>
        <h3>The Team</h3>
        <p>Our team is called Eidetikos, the greek word for eidetic or photographic memory.  We are David, Kate, and Zach.</p>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(About);