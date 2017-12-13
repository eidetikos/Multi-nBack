import React from 'react';
import { LoadingStyled } from '../styles/style';

export default ({ loading }) => {
  if(!loading) return null;

  return (
    <LoadingStyled>
      Loading...
    </LoadingStyled>
  );
};