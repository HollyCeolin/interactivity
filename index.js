document.querySelector("form").addEventListener("submit", addMovie);
const message =document.querySelector("#message")
function addMovie(event) {
    event.preventDefault()
  const inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent=inputField.value;
  movieTitle.addEventListener("click", crossOffMovie)
  movie.appendChild(movieTitle);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Just Kidding, I want a different movie";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);
  document.querySelector("ul").appendChild(movie);
  document.inputfield.value("");
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted";
    
}

function crossOffMovie(event){
    event.target.classList.toggle("checked");
    if (event.target.classList.contains("checked")=== true) {
        message.textContent = "Already seen it!"
    }else {
        message.textContent = "We put it back for you to watch later!"
    }
}