import React from 'react';

import classes from './Layout.module.scss';

const layout = (props) => (
  <div className={classes.Layout}>
    {props.children}
  </div>
);

export default layout;