import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import Nav from "../Nav";
import Search from "../Search";
import Footer from "../Footer";
import Articles from "../Articles";

class Home extends Component {
    state = {
        articles: [],
        saved: [],
        topic: "",
        start: "",
        records: "",
        end: ""
    };

    // Upon successful component mounting, calls the loadarticles function
    componentDidMount() {
        this.loadArticles();
    };

    // Calls the API route to get articles from Mongo.
    loadArticles = () => {
        API.searchArticles(this.buildQuery(this.state.term))
            .then(res =>
                this.setState({
                    books: res.data,
                    title: "",
                    author: "",
                    synopsis: ""
                })
            )
            .catch(err => console.log(err));
    };

    // Calls the API route to delete articles from Mongo, then updates the page.
    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    // Query NYT API
    buildQuery = term => {
        let query = {
            "URL": "https://api.nytimes.com/svc/search/v2/articlesearch.json?",
            "api": "&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
            "q": "q =" + term,
            "start": this.testYear("&begin_date=", this.state.start),
            "end": this.testYear("&end_date=", this.state.end)
        };
        return query;
    };

    testYear = (string, yearInput) => {
        if (typeof Number(yearInput) == 'number' && yearInput.length == 4) {
            return string + yearInput + "0101"
        } else { return "" }
    };

    // Generic handler for input updating
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // Handles the search for NYT Articles
    handleFormSubmit = event => {
        console.log("handleFormSubmit");
        console.log(this.state)
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveArticle({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadArticles())
                .catch(err => console.log(err));
        };
    };

    render() {
        return (
            <div className="container">

                {/* Navbar Component */}
                <Nav></Nav>

                <Search
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    topic={this.state.topic}
                    start={this.state.start}
                    end={this.state.end}
                />

                <Articles
                    header="Search Results"
                    articles={this.state.articles}
                />

                <Articles
                    header="Saved News Stories"
                    articles={this.state.saved}
                />
                <Footer />
            </div>
        )
    };
};

export default Home;