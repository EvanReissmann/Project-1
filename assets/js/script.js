$(document).ready(( )=> {
    $("#searchForm").on("submit", (e) => {
        let searchText = $("#searchText").val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
 axios.get ("https://imdb-api.com/API/SearchTitle/k_u5eiz1tf/"+searchText)
 .then((response) => {
console.log(response);
let movies = response.data.results;
let output = "";
$.each(movies, (index, movie) => {
 output += `
 <div class="col-md-3">
    <div class="well text-center">
    <img src="${movie.image}">
    <h5>${movie.title}</h5>
    <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
    </div>
 </div>
 `;
});

$('#movies').html(output);
 })
 .catch((err) => {
     console.log(err);
 });

}

