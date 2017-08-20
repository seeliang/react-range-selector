import {Link} from 'react-router-dom';
import React from 'react';

class Page extends React.Component {
  displayName: 'Cast';
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> Hello, i am the other page</h1>
        <Link to={`/`}>
          Go to home
        </Link>
      </div>
    );
  }
}

export default Page;
