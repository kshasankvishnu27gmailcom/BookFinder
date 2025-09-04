import React from 'react'

export default function Header(props) {
  return (
    <div className="header">
        <div className="header-text">
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
    </div>
    )
}

Header.defaultProps = {
  title: "Book Finder",
  paragraph: "Search titles using the Open Library API"
}