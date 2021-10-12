

async function searchmovie(movie) {

    try {
        let res = await fetch(`http://www.omdbapi.com/?s=${movie}&apikey=d517421`);

        var data = await res.json()

        return data

    }

    catch (e) {
        console.log(e);
    }

}

let parent = document.getElementById("movies")


var timeerid;
async function main() {
    let name = document.getElementById("movie").value

    let res = await searchmovie(name)

    let movies_data = res.Search

    showthemovie(movies_data)

    console.log(res);
}

function debounce(func, time) {

    if (timeerid) {
        clearTimeout(timeerid)
    }
    timeerid = setTimeout(function () {
        func()
    }, time)
}

function showthemovie(res) {
    if (res === undefined) {
        return false
    }
    parent.innerText = null
    res.forEach(function (e) {

        let div = document.createElement("p")
        div.innerText = e.Title

        let a = document.createElement("a")
        a.innerText = div.innerText

        a.setAttribute("class", "a")
        a.onclick = function () {
            showposter(e)
        }
        parent.append(a)
    });
}
var poste = document.getElementById("poster")
var detail = document.getElementById("details")
function showposter(e) {
    poste.innerText = null
    detail.innerText = null

    let image = document.createElement("img")
    image.src = e.Poster

    let name = document.createElement("h1")
    name.innerText = e.Title

    let type = document.createElement("h2")
    type.innerText = e.Type

    let year = document.createElement("h2")
    year.innerText = e.Year

    let id = document.createElement("h3")
    id.innerText = "imdbID : " + e.imdbID

    poste.append(image)
    detail.append(name, type, year, id)
}
