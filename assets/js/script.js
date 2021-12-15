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

function movieSelected(id){
    sessionStorage.setItem("movieId", id);
    window.location = "movie.html";
    return false;
}

function getMovie(){
    let movieId = sessionStorage.getItem("movieId");

    axios.get ("https://imdb-api.com/API/SearchTitle/k_u5eiz1tf/"+movieId)
 .then((response) => {
console.log(response);
let movie = response.data;

let output = `
<div class="row">
    <div class="col-md-4>
    <img src="${movie.image}" class="thumbnail">
    </div>
    <div class="col-md-8">
    <h2>${movie.title}</h2>
    <ul class="list-group">
        <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
    </ul>
    </div>
</div>    
`;

$("#movie").html(output);
 })
 .catch((err) => {
     console.log(err);
 });
}

