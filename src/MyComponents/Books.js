import React from "react";

function getCoverUrl(cover_i) {
  if (!cover_i) return null;
  return `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
}

export default function BookCard({ book }) {
  const cover = getCoverUrl(book.cover_i);
  const title = book.title || "Untitled";
  const authors = book.author_name
    ? book.author_name.join(", ")
    : "Unknown author";
  const year = book.first_publish_year || "—";
  const subjects = book.subject ? book.subject.slice(0, 6) : [];

  return (
    <article className="book-card">
      <div className="cover">
        {cover ? (
          <img src={cover} alt={`Cover for ${title}`} loading="lazy" />
        ) : (
          <div className="no-cover">No cover</div>
        )}
      </div>
      <div className="meta">
        <h3 className="title">{title}</h3>
        <p className="authors">{authors}</p>
        <p className="year">First published: {year}</p>
        {subjects.length > 0 && (
          <ul className="subjects" aria-label="Subjects">
            {subjects.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}
        <a
          className="openlib-link"
          href={`https://openlibrary.org${book.key}`}
          target="_blank"
          rel="noreferrer"
        >
          View on Open Library
        </a>
      </div>
    </article>
  );
}