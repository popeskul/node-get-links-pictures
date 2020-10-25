const findImages = require('./findImages');

findImages()
  .then((i) => console.log(i))
  .catch((error) => console.log(error));
