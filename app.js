(async function () {
    const response = await fetch("./data.json");
    const data = await response.json();

    const genre = document.getElementById('forGenre')
    const year = document.getElementById('forYear')
    const language = document.getElementById('forLanguage')
    const searchbtn = document.querySelector('.searchBtn')
    const DataDiv = document.querySelector(".Data")

    searchbtn.addEventListener("click", Search);
    function Search() {
        console.log("working")
        const genreQuery = genre.value;
        const yearQuery = year.value;
        const languageQuery = language.value;


        const result = data.filter(function (item) {

            return (item.genres.includes(genreQuery)) || (item.release_date.includes(yearQuery)) || (item.original_language.includes(languageQuery)) ;
        })
        console.log(result)
        displayResults(result);
        function displayResults(result){
            DataDiv.innerHTML = "";
            result.forEach(function (movie) {
                const spanRank = document.createElement("span")
                spanRank.classList.add("linerank")
                let textRank;
    
                textRank = document.createTextNode(movie.vote_average)
    
                const div = document.createElement('div')
                DataDiv.appendChild(div)
                spanRank.appendChild(textRank)
                div.appendChild(spanRank)


                const spanMovie = document.createElement("span")
                spanMovie.classList.add("linemovie")
                const movieTitle = document.createTextNode(movie.title)
                spanMovie.appendChild(movieTitle)
                div.appendChild(spanMovie)

                const spanYear = document.createElement("span")
                spanYear.classList.add("yearline")
                const year = document.createTextNode(movie.release_date.slice(0, 4));
                spanYear.appendChild(year);
                div.appendChild(spanYear)


                const line = document.createElement("hr")
                DataDiv.appendChild(line)
            });
        }
    }
})();