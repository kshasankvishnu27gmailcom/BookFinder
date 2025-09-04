import './App.css';
import React, { useState } from "react";
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Search from './MyComponents/Search';
import Books from './MyComponents/Books';

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  async function handleSearch(query) {
    setError("");
    setBooks([]);

    if (!query || !query.trim()) {
      setError("Please enter a book title to search.");
      return;
    }

    try {
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
        query
      )}&limit=20`;
      const res = await fetch(url);

      if(!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      if (!data.docs || data.docs.length === 0) {
        setError("No results found. Try a different title.");
      } else {
        setBooks(data.docs);
      }
    }catch (err) {
      setError("Failed to fetch results. Please check your network.");
      console.error(err);
    }

  }

  return (
    <div className="app-container">
      <div className="content">
        <Header title="Book Finder" paragraph="Search titles using the Open Library API" />
        
      </div>

      <main>
        <Search onSearch={handleSearch}/>

        {error && (
          <div className="message error" role="alert">
            {error}
          </div>
        )}

        <section className="booksList">
          {books.map((b) =>(
            <Books key={`${b.key}-${b.cover_i || "nocover"}`} book={b} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
