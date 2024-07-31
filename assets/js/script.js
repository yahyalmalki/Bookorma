function addBook() {
    const bookInput = document.getElementById('bookInput');
    const bookList = document.getElementById('bookList');

    if (bookInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = bookInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            bookList.removeChild(li);
        };

        li.appendChild(deleteButton);
        bookList.appendChild(li);
        bookInput.value = "";
    }
}

function searchBook() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();
    const bookList = document.getElementById('bookList');
    const books = bookList.getElementsByTagName('li');

    for (let i = 0; i < books.length; i++) {
        const bookText = books[i].textContent.toLowerCase();
        if (bookText.includes(filter)) {
            books[i].style.display = "";
        } else {
            books[i].style.display = "none";
        }
    }
}
