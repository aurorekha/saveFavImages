import React from 'react';
import createReactClass from 'create-react-class';
import ImagesInput from 'ImagesInput';
import { Link } from 'react-router-dom';

const Nav = createReactClass({
  render: function () {
    return (
      <div className="nav-links">
        <ul className="links">
          <Link className="links--header" to="/"><li><h3>Home</h3></li></Link>
          <Link className="links--heart" to="/favorites"><li>&#10084;<span id="favCount"></span><br/><span>View Favorites</span></li></Link>
        </ul>
      </div>
    );
  }
});

export default Nav;
