import React from 'react';
import createReactClass from 'create-react-class';
import ImagesInput from 'ImagesInput';
import ImagesDisplay from 'ImagesDisplay';
import Favorites from 'Favorites';
import getApi from 'getApi';

const Images = createReactClass({
  getInitialState: function() {
    return {
      isLoading: false,
    }
  },
  handleSearch: function(input) {
    console.log(input, 'input');
    var that = this;
    this.setState({
      isLoading: true
    });
    console.log(getApi);
    getApi.getImages(input).then(
      function(images){
        that.setState({
          isLoading: false,
          images: images,
        });
      }, function (errorMessage) {
        that.setState({
          isLoading: false
        });
        alert(errorMessage);
      }
    )
  },
  render: function() {
    const {isLoading, image, input} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching images... </h3>;
      } else if (image && input) {
          return <ImagesDisplay image={image} input={input}/>;
        }
    }
    return(
      <div>
        <ImagesInput onSearch={this.handleSearch}/>
        <div  className="images--container">
          {renderMessage()}
          {
              this.state.images ? this.state.images.map(image => {
                  return <ImagesDisplay image={image} input={input} />
              }) : null
          }
        </div>
      </div>
    );
  }
});

export default Images;
