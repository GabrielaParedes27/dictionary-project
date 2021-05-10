import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function SearchEngine(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.getUri(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="SearchEngine">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
                <Results results={results} />
            </form>
        </div>
    );
}