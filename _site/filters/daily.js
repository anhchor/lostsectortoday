module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection('daily', function(collection) {
    var postCollection = collection.getAll()[0].data.legend;

    

    postCollection = postCollection.slice(0, 1);
    return postCollection;
  });
}