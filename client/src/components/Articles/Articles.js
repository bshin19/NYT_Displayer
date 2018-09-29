import React from "react";

const Articles = props => (
    <div className="row">
        <div className="col-sm-12">

            <div className="card">

                <div className="card-header">
                    <strong>
                        <i className="fa fa-table"></i> Top Articles
                    </strong>
                </div>

                <div className="card-body row" id="article-section">
                    <div className="col-12">
                        <ul className="list-group">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Articles;