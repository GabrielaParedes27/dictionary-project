import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelApiKey="563492ad6f91700001000001bbfa4a9783274920bad753fd2b471c59";
        let pexelUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelApiKey}`};
        axios.get(pexelUrl, { headers: headers}).then(handlePexelResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {

    return (
        <div className="SearchEngine">
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} placeholder="Search for a word (try: wine, plant, yoga)" />
                <Results results={results} />
                <Photos photos={photos} />
            </form>
        </div>
    );
    } else {
        load();
        return "loading";
    }
}