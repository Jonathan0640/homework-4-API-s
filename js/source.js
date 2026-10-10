// *********************************************************************
// Homework 4 Public APIs
// *********************************************************************

function formatYearFromStr(dateString) {
  return dateString.split('-')[0];
}

function formatPercentage(value) {
  return `${(value * 100).toFixed(2)}%`;
}

localStorage.setItem("game_id", "228500");      //game id for Super Mario Bros. (1985)
localStorage.setItem("api_key", "7397ced6f301457395809b4e2cfa1849");  //my api key from signing up 



async function load(){
    
    // add as many more as needed
    let gameID = localStorage.getItem("game_id");
    let apiKey = localStorage.getItem("api_key");
    
    // **************** Write you code below **************** 

    //------------------------1. hero section-------------------------
    
    const gameResponse = await fetch(`https://api.gamebrain.co/v1/games/${gameID}?api-key=${apiKey}`)
    const gameObject = await gameResponse.json();

    //a. game title
    document.querySelector("#game-name").textContent = gameObject.name;
    
    //b. artwork/image
    document.querySelector(".game-image img").src = gameObject.image;

    //c. developer & d. release date
    const gameReleaseDate = formatYearFromStr(gameObject.release_date);
    document.querySelector(".game-meta").textContent = `${gameObject.developer} • ${gameReleaseDate}`;

    //e. genre
    document.querySelector(".game-genre").textContent = gameObject.genre;



}
load();


   