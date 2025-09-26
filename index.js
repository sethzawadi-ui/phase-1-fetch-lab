function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then(data => {
      renderBooks(data);
      return data; // so the tests can await/chain
    });
}

// This function will take the books and put them into the DOM
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const p = document.createElement('p');
    p.textContent = book.name;
    main.appendChild(p);
  });
}

// If your test runner is Node-based and expects exports
if (typeof module !== "undefined") {
  module.exports = {
    fetchBooks,
    renderBooks
  };
}
