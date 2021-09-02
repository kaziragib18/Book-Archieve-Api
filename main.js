const errorDiv = document.getElementById('error-message');
errorDiv.style.display = 'none';

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    errorDiv.style.display = 'none';
    // console.log(url);
    if (searchText === '') {
        errorDiv.innerText = 'Search field can not be empty'
    }
    else {
        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs));
        // .catch(error => displayError(error));
    }
}
const displayError = error => {
   errorDiv.style.display = 'block';
}

const displaySearchResult = docs => {
    // console.log(docs);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (docs.length == 0) {
        //no result
    }
    docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        //image api link concat
        const imageUrl = "https://covers.openlibrary.org/b/id/" + book.cover_i + '-M.jpg'
        console.log(imageUrl);

        div.innerHTML = `
        <div class="card h-100">
            <img src="${imageUrl}" class="card-img-top img-fluid w-100 " alt="...">
            <div class="card-body">
                <h5 class="card-title fst-italic fs-5 pt-2">${book.title}</h5>
                <h4 class="card-title font-monospace fw-bold fs-6 pt-2">Author: ${book.author_name}</h4>
                <h5 class="card-text font-monospace fs-6 pt-2">Publisher: ${book.publisher} </5>
                <h5 class="card-title font-monospace fs-6 pt-2">Publish: ${book.first_publish_year}</h5>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}