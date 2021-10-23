let parent = document.getElementById("parent")

async function ok () {
    try{
        let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=92e277f3d43843a85558cb25e1aa78d2`)
        
        let data = await res.json()

        console.log(data.results);
        appendmovie(data.results)
    }
    catch(err){
        alert(err)
    }
}

ok()

function appendmovie(arr){
    arr.forEach(({original_language,original_title,name,media_type,poster_path,release_date,vote_average}) => {
        let poster = document.createElement("img")
        poster.src="https://image.tmdb.org/t/p/original"+poster_path

        let type = document.createElement("h3")
        type.innerText="Type :  "+media_type

        let title = document.createElement("h1")
        title.setAttribute("class", "title")
        if(original_title === undefined){
            title.innerText=name
        }else{
            title.innerText=original_title
        }

        let language = document.createElement("h3")
        language.innerText="Language :  "+original_language

        let date = document.createElement("h3")
        date.innerText= "Release Date :  "+release_date

        let div = document.createElement("div")
        div.setAttribute("class", "box")

        div.append(poster,title,type,language,date)

        parent.append(div)

        console.log(poster);

    });
}