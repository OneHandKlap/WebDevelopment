let title = "";
function sendReq() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let doc = this.responseXML;
            function select(tag) {
                try {
                    return doc.getElementsByTagName(tag)[0].childNodes[0].nodeValue
                } catch (err) {
                    console.log("ERROR!");
                    return null;
                }
            }

            if (title == "") {
                document.querySelector('.player').innerHTML = `<audio autoplay controls src="${select('tuneinurl')}"></audio>`;
            }

            if (select('song') != title) {
                title = select('song');

                document.querySelector('.radio-title').innerHTML = `<h3 class="radio-title">You're listening to ${select('title')}</h3>`

                let date = new Date(select('date') + " " + select('time'));
                date.setHours(date.getHours() + 5)
                date = date.toLocaleString("en-US", { timeZone: "America/Toronto", hour: "numeric", minute: "numeric", weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

                let body = `
                <h2>Now playing:</h2>
                <h1 class="text-center">${select('song')} from ${select('album')}</h1>
                <p class="text-center">${date}</p>
                <img class="album-art" src="${select('imageurl')}">
            `
                document.querySelector('.content').innerHTML = body;
            }
        }
    }
    console.log("Refreshing!");
    xhttp.open("GET", 'https://cors-anywhere.herokuapp.com/http://199.195.194.92:2199/rpc/meyima03/streaminfo.get?x=1', true)
    xhttp.send();
}


sendReq();
window.setInterval(function () {
    sendReq();
}, 10000);