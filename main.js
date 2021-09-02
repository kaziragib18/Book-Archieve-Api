const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const bookContainer = document.getElementById('book-container');
const errorDiv = document.getElementById('error');


searchBtn.addEventListener('click', function () {
    const searchText = searchInput.value;

    if (searchText === '') {
        errorDiv.innerText = 'Search field can not be empty!'
    }
    //clear when new search/dom
    bookContainer.innerHTML = '';
    searchInput.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    console.log(searchText);

    
    fetch(url)
        .then((res) => res.json())
        .then((data) => showData(data.docs));
    // .finally(() => {
    //   searchInput.value === '';
    // });
});

function showData(bookArray) {
    //clear error messege / error handling
    //network response tab status/messege check
    if (bookArray.num_found === 0) {
        errorDiv.innerText = 'No Result Found!';
    }
    else {
        errorDiv.innerText = '';
    }

    bookArray.forEach((book) => {
        console.log(book);
        const div = document.createElement("div");
        div.classList.add("col-md-3");

        const imageUrl = "https://covers.openlibrary.org/b/id/" + book.cover_i + '-M.jpg'
        console.log(imageUrl);

        div.innerHTML = `
      <!-- Image -->
        <div class="rounded overflow-hidden border border-1 p-2">
            <img src="${imageUrl}" class="w-100 img-fluid" alt=""/>
            <!-- Body -->
            <div class="py-2 d-flex justify-content-between align-items-center d-md-block">
                <h5 class="card-title text-success fst-italic fs-5 pt-2">${book.title}</h5>
                <h4 class="card-title text-danger font-monospace fw-bold fs-6 pt-2">Author: ${book.author_name}</h4>
                
                <h5 class="card-title font-monospace fs-6 fw-bold pt-2">Published: ${book.publish_year}</h5>
            </div>
        </div>
      `;
        bookContainer.appendChild(div);
    });
}

