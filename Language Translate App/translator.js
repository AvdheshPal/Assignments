async function ok() {
    try {
        let lang1 = document.getElementById("select1").value
        let lang2 = document.getElementById("select2").value
        let input = document.getElementById("inp").value


        const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
                q: input,
                source: lang1,
                target: lang2
            }),
            headers: { "Content-Type": "application/json" }
        });
        let data = await res.json()

        showdata(data)
    }
    catch (err) {
        alert(err)
    }
}

function showdata({translatedText}) {
    if(translatedText !== undefined){
        let out = document.getElementById("output")
        out.innerText=null
        out.innerText=translatedText
    }
}
let timerid;
function main() {
    let inpu = document.getElementById("inp").value
    if(!inpu.length == 0){
        if(timerid){
            clearTimeout(timerid)
        }
        timerid = setTimeout(()=>{
            ok()
        },1000)
    }else{
        let outp = document.getElementById("output")
        outp.innerText=null
    }
   
}

