import React from 'react';
import createReactClass from 'create-react-class';

const Favorites = createReactClass({
  getInitialState: function() {
    return {
      imageUrl: "",
    }
  },
  componentDidMount: function () {
    var dataImages =  JSON.parse(localStorage.getItem('itemsArray'));
    this.setState({
      imagesArray: dataImages
    });

  },
  onClick: function (value) {
    var makeArr = JSON.parse(localStorage.getItem('itemsArray'));
    const newItemsArr = makeArr;
    const getImages = makeArr.map((value) => value.selectedImages);
    const imageSrc = value.currentTarget.src;
    const getIndex = getImages.indexOf(imageSrc);
    newItemsArr.splice(getIndex, 1);
    localStorage.setItem('itemsArray', JSON.stringify(newItemsArr));
    var image = document.getElementsByTagName("IMG");
    for(var i = 0; i < image.length; i++){
      image[i].addEventListener("click", function() {
        this.style.display = 'none';
      });
    }
  },
  removeItem: function () {
    localStorage.removeItem('itemsArray');
    const elems = document.getElementsByTagName('IMG');
    for(var i = 0; i < elems.length; i++)
    {
      elems[i].style.display = 'none';
    }
  },
  render: function () {
    const {imagesArray} = this.state;
    console.log(this.state);
    return (
      <div>
        <h2 className="favorites--header"> Your Saved Favorites</h2>
        <button className="favorites--button" onClick={this.removeItem}>Clear them all</button>
        <div className="favorites--images" id="images" >
        {
            this.state.imagesArray ? this.state.imagesArray.map(image => {
                return <img src={image.selectedImages} onClick={this.onClick}/>
            }) : null
        }
        </div>
      </div>
    );
  }
});

export default Favorites;
