
module.exports = function(eleventyConfig) {


  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('svg');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('fonts');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('filters');



  eleventyConfig.addCollection('daily', function(collection) {
    var postCollection = collection.getAll()[0].data.legend;

    let seasonLostStart = new Date(Date.UTC(2021, 7, 24, 17, 0, 0));
    let seasonLostEnd = new Date(Date.UTC(2022, 1, 22, 18, 0, 0));

    let now = Date.now();
    let currentDayOfSeason = now - seasonLostStart;

    function toDays(x) {
      x = x / 1000 / 60 / 60 / 24;
      x = Math.floor(x + 1);
      return x;
    }

    // currentDayOfSeason = toDays(currentDayOfSeason);
    currentDayOfSeason = Math.floor((currentDayOfSeason / 1000 / 60 / 60 / 24) + 1)

    let todayDrop;
    let todaySector;


    const getTodayId = function(x) {
      // cycle through the list of drops/lost sectors until you get to today's day
      // example: 
      // today is day 11 of the season
      // cycle to the 11th lost sector and the 11th drop

      let arrayId = 0;
      for (i = 1; i <= currentDayOfSeason; i++) {
        if (i != arrayId) {
          if (arrayId < x.length) {
            arrayId += 1;
          } else {
            arrayId = 1;
          }
        }
      }
      // arrayId -= 1; // get zero-index
      return arrayId;
    }

    todaySector = getTodayId(postCollection);

    postCollection = postCollection.slice((todaySector - 1), todaySector);
    return postCollection;
  });



  return {
    passthroughFileCopy: true
  }  

}

