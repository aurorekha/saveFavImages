import React from 'react';
import createReactClass from 'create-react-class';

const ImagesDisplay = createReactClass({
  getInitialState: function() {
    return {
      className: ''
    }
  },
  onClick: function() {
      var intialItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
      var addItems = {
         'selectedImages': this.imgRef.src,
        };
        intialItems.push(addItems);
        localStorage.setItem('itemsArray', JSON.stringify(intialItems));
        var getImages = document.getElementsByTagName("IMG");
        for(var i = 0; i < getImages.length; i++){
          getImages[i].addEventListener("click", function() {
            this.style.border = '8px solid white';
            this.style.opacity = '1';
          });
        }
        const getCount = JSON.parse(localStorage.getItem("itemsArray")).length;
        document.getElementById('favCount').innerHTML = getCount;
  },
  render: function() {
    const {image} = this.props;
    return(
      <div className="images">
        <img src={image.media.m} name="image" tabIndex="0" ref={ref => {this.imgRef = ref}} onClick={this.onClick} crossOrigin="anonymous"/>
      </div>
    );
  }
});

export default ImagesDisplay;
