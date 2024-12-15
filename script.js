let title = window.document.getElementById("title")
let year = window.document.getElementById("year")
let type = window.document.getElementById("type")
let append = window.document.getElementById("append")
let imgdiv = window.document.getElementById("imgdiv")
let number = window.document.getElementById("noOfMovies")
let movies = [];
let noOfMovies = 0;
let yearcheck;
let img;



let butt = window.document.getElementById("butt")
butt.addEventListener("click",()=>{
    imgdiv.style.display = 'block'
    console.log(title.value)
    console.log(year.value)

    fetch(`https://omdbapi.com/?apikey=9e2b4991&s=${title.value}&y=${year.value}&type=${type.value}`)
    .then(async (res) => {
        const response = await res.json();
        movies = response.Search;
        noOfMovies = response.totalResults;
        console.log(movies)

        
        
        movies.forEach(element => {
            console.log(element.Title)
            console.log(element.Year)
            let create = document.createElement("section")
            create.innerHTML = `<p class="container pt-3 pb-3">
            ${element.Title}<br>
            ${element.Year}
           <img src="${element.Poster}" style="width: 300px" >
            </p>`
            append.appendChild(create)
            append.style.backgroundColor = '#B3080F'
        });
        number.innerHTML = `<p>Total results:<br>
        ${noOfMovies}</p>`
     })

    .catch((err) => {
        console.log('error')
        console.log(err)
    })
    .finally(() => 
    imgdiv.style.display = 'none'
)

    
})
