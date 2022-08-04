import * as React from 'react';
import Spinner from '../Suspense/Spinner';
import SuspenseTest from '../Suspense/SuspenseTest';

export default function Main() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <SuspenseTest />
    </React.Suspense>
  );
}
