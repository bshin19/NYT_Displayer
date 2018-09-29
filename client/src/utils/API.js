import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

export default {
  // Gets all Saved Articles
  getArticles: function() {
    return axios.get("/api/articles/saved");
  },
  // Gets the Saved Article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(ArticleData) {
    return axios.post("/api/articles", ArticleData);
  },
  searchArticles: function(query) {
    let apiURL = `${query.URL}${query.q}${query.start}${query.end}${query.api}`
    return axios.get(apiURL)
  }
};