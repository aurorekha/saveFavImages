import axios from 'axios';

module.exports = {
  getImages: function (input) {
      const requestUrl = `/flickr/${input}`;
      return axios.get(requestUrl).then((res) => {
        console.log(requestUrl, 'fff');
      if(res.status !== 200) {
        throw new Error(res.data.message);
      } else  {
        return res.data.items;
      }
     });
  }
}
