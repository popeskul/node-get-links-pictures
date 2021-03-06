const request = require('request');

const URL = 'https://dou.ua/';
const startRedomendedBlock = '<div class="b-footer-slider m-hide">';
const endRedomendedBlock = '<footer class="b-footer">';
const startUrl = '<img class="img" loading="lazy" src="';
const endUrl = '" srcset=';

request(URL, (error, res, body) => {
  if (!error && res.statusCode === 200) {
    const findstartIndex = body.indexOf(startRedomendedBlock);
    const findEndIndex = body.indexOf(endRedomendedBlock);
    const recomendedBody = body.slice(findstartIndex, findEndIndex);

    const removeChars = recomendedBody
      .replace(/^\s*\n/gm, '')
      .replace(/\t/g, '')
      .replace(/\n/g, '');

    const findStartImage = removeChars.split(startUrl);
    const removeWelcomeText = findStartImage.splice(1);

    const result = removeWelcomeText.map((text) => {
      const endIndex = text.indexOf(endUrl);

      if (endIndex) {
        const imgUrl = text.slice(0, endIndex);
        return imgUrl;
      }
      return null;
    });

    console.log(result);
  }
});
