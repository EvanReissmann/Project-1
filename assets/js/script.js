function movieTitleSearch() {
const title=document.getElementById("title");
console.log("here");
fetch(`https://imdb-api.com/API/SearchTitle/k_u5eiz1tf/${title}`, { method: "get", headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }).then(function(response){
    console.log(response);
}).catch(function(err) {
    console.log(err);
});


} 