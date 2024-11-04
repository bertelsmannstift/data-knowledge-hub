// src/theme/Root.js

import React from 'react';
import CustomMDXProvider from '../providers/MDXProvider';

function Root({ children }) {
  return <CustomMDXProvider>{children}</CustomMDXProvider>;
}

export default Root;
