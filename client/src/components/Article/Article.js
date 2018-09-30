import React from "react";
import { FormBtn } from "../Form";

const Article = props => {
    return (
        <li className='list-group-item articleHeadline'>
            {console.log(props)}

            <div className="row">

                {/* Article Name Section */}
                {/* Side Numbers */}
                <span className='label label-primary'>
                    {/* //     number */}
                </span>

                {/* Headline Title */}
                <h3 className="col-10">
                    {props.headline && props.headline.main ? props.headline.main : ""}
                </h3>

                <FormBtn
                    id={props.id}
                    onClick={props.saveArticle}
                >
                    {props.btnText}
                </FormBtn>

            </div>

            <div className="row">

                {/* Byline Section */}
                <div className="col-4">
                    {props.byline ? props.byline.original : ""}
                </div>

                {/* Article Section */}
                <div className="col-4">
                    {props.section_name ? "Section: " + props.section_name : ""}
                </div>

                {/* Pubdate Section */}
                <div className="col-4">
                    {props.pub_date ? "published: " + props.pub_date.substring(0, 10) : ""}
                </div>

            </div>

            {/* URL Section */}
            <a href={props.web_url}>{props.web_url}</a>
        </li>);
};

export default Article;