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

// var axios = require("axios").default;

var options = {
  method: 'POST',
  url: ('https://yelp-graphql1.p.rapidapi.com/v3/graphql'),
  headers: {
    authorization: 'Bearer  wv8UFPtBvt4bjBpvlRAaloi5S1owaCvTY_k9t2yfWJujEKIzuexgv9Q8krD70-wofjvNFQ9hsM4Js3w1e4Go_ZzF7TAelCoun3in5WFIUXCjQeVF79-RUuGegTu5YXYx',
    'x-rapidapi-host': 'yelp-graphql1.p.rapidapi.com',
    'x-rapidapi-key': '07c51671f2mshff850560144c582p1006f5jsn1dbae7cf897d'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

} 