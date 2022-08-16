import React from 'react';
import { Stack } from '@mui/material';
import { Rings } from 'react-loader-spinner';

const Loader = () => (
  <div className="flex justify-center items-center ">
    <Rings color="#00BFFF" height={80} width={80} />
  </div>
);


export default Loader;
