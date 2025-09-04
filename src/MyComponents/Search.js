import React, { useState } from "react";

export default function Search({onSearch}) {
    const [query, setQuery] = useState("");

    function submit(e) {
        e.preventDefault();
        onSearch(query);
    }

    return (
        <form className="search" onSubmit={submit}>
            <input 
                id="title"
                type="search"
                placeholder="Search by title e.g: The Hobbit"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
            />
            <button type="submit">Search</button>
        </form>
    );

}