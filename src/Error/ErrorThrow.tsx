import * as React from 'react';

const ErrorThrow = function () {
  const a = {};

  throw new Error();

  return <div></div>;
};

export default ErrorThrow;
