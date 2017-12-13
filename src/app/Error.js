import React from 'react';
import { ErrorDiv } from '../styles/style';

export default ({ error }) => {
  if(!error) return null;

  return (
    <ErrorDiv>
      {Array.isArray(error) 
        ? <ul>error.map(err => <li>err</li>)</ul>
        : error.error ? error.error : error
      }
    </ErrorDiv>
  );
};