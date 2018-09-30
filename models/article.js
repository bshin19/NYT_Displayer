const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: { type: String},
  author: { type: String},
  id: { type: String, unique: true},
  pub_date: {type: String},
  section_name: {type: String},
  snippet: {type: String},
  date: { type: Date, default: Date.now },
  web_url: {type: String}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;