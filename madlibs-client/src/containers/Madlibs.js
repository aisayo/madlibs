//containers

import React, { Component } from 'react';
import { connect} from 'react-redux';
import MadlibSentence from '../components/MadlibSentence';
import MadlibForm from './MadlibForm'
import { getMadlibs } from '../actions/madlibs';

class Madlibs extends Component {

  componentDidMount() {
    this.props.getMadlibs()
  }

  render() {
    return(
      <div>
        <h3>Madlibs Container</h3>
        <div>
          {this.props.madlibs.map((madlib, index, array) => {
            if (array.length-1 === index) {
              return <MadlibSentence key={madlib.id} madlib={madlib} />
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({madlibs: state.madlibs})
}

export default connect(mapStateToProps, {
  getMadlibs
})(Madlibs);
