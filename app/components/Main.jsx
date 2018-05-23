import React from 'react';
import createReactClass from 'create-react-class';
import Nav from 'Nav';
import Favorites from 'Favorites';
import ImagesDisplay from 'ImagesDisplay';
require('../src/scss/main.scss');

const Main = createReactClass({
  render: function () {
    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    );
  }
});

export default Main;
