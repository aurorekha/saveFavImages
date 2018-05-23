import React from 'react';
import createReactClass from 'create-react-class';

const ImagesInput = createReactClass({
  onFormSubmit: function (e) {
     e.preventDefault();
    const name = this.refs.name.value;
    console.log(name);
    if(name.length > 0) {
      this.refs.name.value = '';
      this.props.onSearch(name);
    }
  },
  onChange: function (ev) {
     const inputValue = ev.currentTarget.value;
     console.log(inputValue, 'inputvalue');
  },
  render: function() {
    return(
      <div className="images--input-container">
        <h3 className="images--header">Search images and favorite them too! Yeah!</h3>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" className="images--input" onChange={this.onChange}/>
          <button className="images--button">Images</button>
        </form>
      </div>
    )
  }
});

export default ImagesInput;
