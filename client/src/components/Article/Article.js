import React from "react";

const Article = props => {
    { console.log(props) }
    <li className='list-group-item articleHeadline'>

        {/* Article Name Section */}
        {/* Side Numbers */}
        <span className='label label-primary'>
            {/* //     number */}
        </span>

        {/* Headline Title */}
        <strong>
            {props.headline && props.headline.main ? props.headline.main : ""}
        </strong>

        {/* Byline Section */}
        {props.byline ? "<h5>" + props.byline.original + "</h5>" : ""}

        {/* Article Section */}
        {props.section_name ? "<h5>Section: " + props.section_name + "</h5>" : ""}

        {/* Pubdate Section */}
        {props.pub_date ? "<h5>" + props.pub_date + "</h5>": ""}

        {/* URL Section */}
        <a href={props.web_url}>props.web_url</a>
    </li>
};

export default Article;