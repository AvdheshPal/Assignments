let key = "AIzaSyBOTsoCrg9f49gUZEqgoB3akJuwmlzh_CI"

var parent = document.getElementById("show")



async function trending() {

    try {
        let re = await fetch(` https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=AIzaSyBOTsoCrg9f49gUZEqgoB3akJuwmlzh_CI&maxResults=50`)

        let dat = await re.json()

        //console.log(dat);

        showtrending(dat.items)

    }
    catch (err) {
        console.log(err);
    }
}

trending()

function showtrending(dat) {
    console.log(dat);
    dat.forEach((e) => {
        let title = e.snippet.title

        let box1 = document.createElement("div")

        let add = e.id
        let vdo = document.createElement("div")
        vdo.innerHTML = `<iframe width="320" height="215" src='https://www.youtube.com/embed/${add}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        let tit = document.createElement("p")
        tit.innerText = title

        box1.append(vdo, tit)



        parent.append(box1)

    });
}



async function ok() {
    try {

        let input = document.getElementById("inp").value


        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&order=viewCount&q=${input}&regionCode=IN&key=AIzaSyBOTsoCrg9f49gUZEqgoB3akJuwmlzh_CI&maxResults=20`)

        let data = await res.json()

        console.log(data);

        showvideo(data.items)
    }
    catch (e) {
        console.log(e);
    }
}



function showvideo(data) {
    parent.innerHTML = null
    data.forEach((e) => {



        let box = document.createElement("div")
        box.setAttribute("class", "box")
        let div = document.createElement("div")

        let videoId = e.id.videoId

        div.innerHTML = `<iframe width="320" height="215" src='https://www.youtube.com/embed/${videoId}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        div.style.marginTop = "10px"

        let dis = document.createElement("div")

        let title = document.createElement("p")
        title.textContent = e.snippet.title
        dis.append(title)
        box.append(div, dis)
        parent.append(box)
    });
}