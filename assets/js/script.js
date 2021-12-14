function movieTitleSearch() {
const title=document.getElementById("title").value;
console.log(`https://imdb-api.com/API/SearchTitle/k_u5eiz1tf/${title}`);
console.log("here");
fetch(`https://imdb-api.com/API/SearchTitle/k_u5eiz1tf/${title}`, { method: "get", headers: {"Content-Type": "application/json"}}).then(async function(response){
    const jsonresponse=await response.json();
console.log(jsonresponse);
}).catch(function(err) {
    console.log(err);
});


} 