import React from "react";
import Article from "../Article";

const Articles = props => (
    <div className="row">
        <div className="col-sm-12">

            <div className="card">

                <div className="card-header">
                    <strong>
                        <i className="fa fa-table"></i> {props.title}
                    </strong>
                </div>

                <div className="card-body row" id="article-section">
                    <div className="col-12">
                        <ul className="list-group">
                            {console.log(props)}
                            {props.articles.length > 1 ? 
                            props.articles.map(article => (
                                <Article
                                    headline={article.headline}
                                    id={article._id}
                                    key={article._id}
                                    byline={article.byline}
                                    section_name={article.section_name}
                                    pub_date={article.pub_date}
                                    web_url={article.web_url}
                                    saveArticle={props.saveArticle}
                                    loadSaved={props.loadSaved}
                                    btnText={props.btnText}
                                />
                            ))
                            :
                            <div/>
                        }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Articles;