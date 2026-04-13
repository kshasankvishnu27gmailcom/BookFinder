# 📚 Book Finder

Book Finder is a simple React app that allows users to search for books using the **Open Library API**.  
It displays book details like cover, title, authors, year of first publication, and subjects with direct links to the Open Library page.

---

## 🚀 Features
- 🔎 **Search Books** by title using Open Library’s free API.  
- 🖼️ **Book Cards** with cover, title, author(s), year, and subjects.  
- 📖 **Direct Links** to book details on Open Library.  
- ⚡ **Loading/Error States** for smooth user experience.  
- 🧩 **Reusable Components** for easy scalability.  

---

## 🧩 Project Structure
```
src/
│── App.js              # Main app component
│── App.css             # Global styles
│── index.js            # React entry point
│── MyComponents/       # Reusable components
│     ├── Header.js     # Header with title + subtitle
│     ├── Search.js     # Search bar for book titles
│     ├── Books.js      # Displays list of books
│     ├── Footer.js     # Footer with Open Library credit
```

---

## ⚙️ Installation & Setup
1. Clone this repository:
   ```bash
   git clone
   cd book-finder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open in your browser:
   ```
   http://localhost:3000
   ```

---


## 🛠️ Technologies Used
- **React.js** – Frontend framework  
- **Open Library API** – Free books database  
- **CSS3** – Styling  

---

## 🙌 Acknowledgements
- Data powered by [Open Library](https://openlibrary.org/)  
- React community for tooling and support  
