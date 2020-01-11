import {Link} from 'react-router-dom';
import React from 'react';

const LinkView = ({to,name}) => (
  <Link to={to}>
    {name}
  </Link>
);
export default LinkView;
