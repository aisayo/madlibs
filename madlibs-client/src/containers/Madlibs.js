//containers

import React from 'react';
import { connect} from 'react-redux';
import './Madlibs.css';
import { getMadlibs } from '../actions/madlibs';
import MadlibSentence from '../components/MadlibSentence';

const Madlibs = ({madlibs}) =>
  <div>
    {madlibs.map((madlib, index, array) => {
      if (array.length-1 === index) {
        if (madlib.noun && madlib.adj && madlib.verb){
          return <div className="sentence">
            <MadlibSentence key={madlib.id} madlib={madlib} />
          </div>
        } else {
          return "Hey, you forgot something!"
        }
      }
    })}
  </div>

// in mapStateToProps() we specify exactly which slice of the state
// we want to provide to our component.
const mapStateToProps = (state) => {
  return ({madlibs: state.madlibs})
}

// Use connect to give component ability to get data from the store's internal state
// and re-render and get new data when that state changes
export default connect(mapStateToProps, {
  getMadlibs //equivalent to mapDispatchToProps, except return statement is in actions.
})(Madlibs);
