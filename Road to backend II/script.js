async function addProduct() {

    let data = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
    }

    try {

        let response = await fetch(`http://localhost:5000/api/products`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    catch (err) {
        alert(err);
    }
}

async function fundelet() {
    let delid = document.getElementById("delId").value

    try {

        let res = await fetch(`http://localhost:5000/api/products/${delid}`, {
            method: "DELETE",
        });

    }
    catch (err) {
        alert(err)
    }
}

async function funput() {

    let putid = document.getElementById("putid").value
        let putdata = {
            id: putid,
            name: document.getElementById("putname").value,
            price: document.getElementById("putprice").value,
            active: document.getElementById("putactive").value,
        }

    try {
        let res = await fetch(`http://localhost:5000/api/products/${putid}`, {
            method:"PUT",
            body:JSON.stringify(putdata),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    catch (err) {
        alert(err)
    }
}