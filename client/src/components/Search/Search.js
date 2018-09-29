import React from "react";
import { Input, FormBtn } from "../Form";

const Search = props => (
    <form className="row mt-2">
        <Input
            value={props.topic}
            onChange={props.handleInputChange}
            name="topic"
            placeholder="Search Term (required)"
        />
        {/* <Input
                    value={this.state.records}
                    onChange={this.handleInputChange}
                    name="records"
                    
                /> */}
        <Input
            value={props.start}
            onChange={props.handleInputChange}
            name="start"
            placeholder="Start Date (optional)"
        />
        <Input
            value={props.end}
            onChange={props.handleInputChange}
            name="end"
            placeholder="End Date (optional)"
        />
        <FormBtn
            disabled={!(props.topic)}
            onClick={props.handleFormSubmit}
        >
            Search
        </FormBtn>
    </form>
);

export default Search;