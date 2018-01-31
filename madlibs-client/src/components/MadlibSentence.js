//components

import React from 'react';

const MadlibSentence = ({ madlib }) => {
  let phrases =
    [
      <div key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> enjoys when I <strong>{madlib.verb}</strong>.</div>,
      <div key={madlib.id}>Everyone would <strong>{madlib.verb}</strong> a <strong>{madlib.adj} {madlib.noun}</strong>.</div>,
      <div key={madlib.id}>Sometimes I wish <strong>{madlib.noun}</strong> would be <strong>{madlib.adj}</strong> when it is time to <strong>{madlib.verb}</strong>.</div>,
      <div key={madlib.id}>Heavy is the <strong>{madlib.noun}</strong> that needs to <strong>{madlib.verb}</strong> during <strong>{madlib.adj}</strong> hour.</div>,
      <div key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> always wanted to learn how to <strong>{madlib.verb}</strong>.</div>
    ];

    const phrase = phrases[Math.floor(Math.random()*phrases.length)];
    return phrase
}

export default MadlibSentence;
