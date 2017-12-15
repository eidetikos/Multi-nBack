import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import './About.css';

class About extends PureComponent {
  render() {
    return (
      <main id="about" className="about">
        <section>
          <h2>History</h2>
          <p>Working memory (WM) is a cognitive process.  WM is thought to be "trainable", and describes the scope and permanence of what a person can hold in their mind over a short period of time.  
          Studies have found that WM and IQ correlate, perhaps through use of the same neural networks.  Therefore, the hope is that, by improving WM, IQ may also improve.</p>
          <p>There are many "mind" games on the market, from Sudoku to memory-matching games.  Studies have shown that none of these have demonstrated 
            any marked improvement in memory... until the emergence of the Dual-N-Back memory game.  This game calls upon the user to recall two independent variates, presented 
            simultaneously, instead of just one.
          </p>
          <p>Our game app borrows the premise of Dual-N-Back and additionally gives the user the option to choose up to five variates combinations (including color, shape, position, spoken number, and numeric digit) to recall in sequence.  
            The real challenge for the user is in trying to recall the exact combinations shown at <i>N</i> places back in the sequence.
          </p>
        </section>
        <section>
          <h2>How To Play</h2>
          <p>You will be presented with 2 parameters: the number of variates you wish to play with and the level of difficulty you will face.  
            Once your parameters are submitted, a sequence of randomly selected variates of the chosen quantity will be shown.  For example, if the user chooses 3 variates, 
            he may be shown colored shapes on a grid(position), or perhaps hear a spoken number and see a numeric digit on a colored field.  At the end of the sequence you will be asked to provide the combination shown <i>N</i> spaces
            back in the sequence. N can be any positive number, and an N of 1 refers to the last combination shown. Each time you answer correctly, your score will increase and the next round will increase in difficulty. Your goal is to get as high a score or N-back number as possible.
          </p>
        </section>
        <section className="about-team-section">
          <h2>The Team</h2>
          <p>Our team is called Eidetikos, greek for "form" and root of the word "eidetic". We have created this app for ourselves, to better ourselves, and we share it with you so that you might do the same. We are David, Kate, and Zach.</p>
        </section>
        {this.props.user &&
          <Link to="/game">
            <button>PLAY the GAME</button>
          </Link>
        }
      </main>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  null
)(About);