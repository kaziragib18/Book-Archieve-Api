// document.getElementById('error-message').style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);
   
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
        // .catch(error => displayError(error));
}

// const displayError = error => {
//     document.getElementById('error-message').style.display = 'block';
// }
const displaySearchResult = docs => {
    // console.log(docs);
    const searchResult = document.getElementById('search-result');
    docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        const imageUrl = "https://covers.openlibrary.org/b/id/" + book.cover_i + '-M.jpg'
        console.log(imageUrl);

        // const authorDetail = "https://openlibrary.org/authors/"+ book.authhorKey + '.json'
        // console.log(authorDetail);

        div.innerHTML = `
        <div onclick="loadAuthorDetail(${book.author_key[0]})" class="card h-100">
            <img src="${imageUrl}" class="card-img-top img-fluid w-100 " alt="...">
            <div class="card-body">
                <h5 class="card-title font-monospace fs-5 pt-2">${book.title}</h5>
                <h5 class="card-title font-monospace fs-6 pt-2">Author: ${book.author_name}</h5>
                <h5 class="card-title font-monospace fs-6 pt-2">Published: ${book.publish_date[0]}</h5>
                <p class="card-text"> </p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}
const loadAuthorDetail = authorkey => {    
    console.log(authorkey);

}

// const displayError = error => {
//     document.getElementById('error-message').style.display = 'block';
// }

// const displaySearchResult = meals => {
//     const searchResult = document.getElementById('search-result');
//     searchResult.textContent = '';
//     if (meals.length == 0) {
//         // show no result found;
//     }
//     meals.forEach(meal => {
//         // console.log(meal);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//         <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
//             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${meal.strMeal}</h5>
//                 <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
//             </div>
//         </div>
//         `;
//         searchResult.appendChild(div);
//     })
// }

// const loadMealDetail = mealId => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMealDetail(data.meals[0]));
// }

// const displayMealDetail = meal => {
//     console.log(meal);
//     const mealDetails = document.getElementById('meal-details');
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//     <img src=${meal.strMealThumb} class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${meal.strMeal}</h5>
//         <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
//         <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
//     </div>
//     `;
//     mealDetails.appendChild(div);
// }