import React from 'react';
import Loader from 'react-loader-spinner';

const LOADING_HEIGH = 100;
const LOADING_WIDTH = 100;
const LOADING_TIMEOUT = 3000;

export const Loading = () => (
  <Loader
    type="Oval"
    color="#000000"
    height={LOADING_HEIGH}
    width={LOADING_WIDTH}
    timeout={LOADING_TIMEOUT}
  />
);
