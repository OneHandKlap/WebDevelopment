let title = "";

function getNames(nodes) {
    let names = []
    nodes.forEach(n => {
        names.push(n.nodeName)
    })
    console.log(names);
    return names
}

//supports deep insert
function insert(obj, key, value) {
    let keys = key.split(".").reverse();
    let ref = obj;
    let k;

    while (keys.length > 0) {
        k = keys.pop();
        if (!ref[k])
            ref[k] = {};
        ref = ref[k];
    }

    ref[k] = value;
}

function transformXMLtoJSON(xmlDoc) {
    let json = {};
    let flat = {};
    let stack = [...xmlDoc.childNodes]
    let names = [xmlDoc.nodeName]
    while (stack.length > 0) {
        let child = stack.pop();
        if (child.childNodes.length != 0) {
            stack.push(...child.childNodes);
            let n = [];
            for (let i = 0; i < child.childNodes.length; i++) n.push(`${names[names.length - 1]}.${child.nodeName}`);
            names.push(...n);
        } else {
            let n = names.pop();
            flat[n]=child.nodeValue;
            insert(json, n, child.nodeValue);
        }
    }
    return [json, flat];
}

function sendReq() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let doc = this.responseXML;
            let [json, flat] = transformXMLtoJSON(doc);
            console.log(flat);
            document.querySelector('.player').innerHTML = `<audio autoplay controls src="${flat['#document.response.data.item.tuneinurl']}"></audio>`;
            document.querySelector('.code').innerHTML = `<h1>JSON CODE</h1><textarea>${JSON.stringify(json, undefined, 4)}</textarea>`;

            document.querySelector('.radio-title').innerHTML = `<h3 class="radio-title">You're listening to ${flat['#document.response.data.item.track.title']}</h3>`

            let date = new Date(flat['#document.response.data.item.date'] + " " + flat['#document.response.data.item.time']);
            date.setHours(date.getHours() + 5)
            date = date.toLocaleString("en-US", { timeZone: "America/Toronto", hour: "numeric", minute: "numeric", weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

            let body = `
            <h2>Now playing:</h2>
            <h1 class="text-center">${flat['#document.response.data.item.track.title']} from ${flat['#document.response.data.item.track.album']}</h1>
            <p class="text-center">${date}</p>
            <img class="album-art" src="${flat['#document.response.data.item.track.imageurl']}">
        `
            document.querySelector('.content').innerHTML = body;
        }
    }
    console.log("Refreshing!");
    xhttp.open("GET", 'https://cors-anywhere.herokuapp.com/http://199.195.194.92:2199/rpc/meyima03/streaminfo.get?x=1', true)
    xhttp.send();
}

sendReq();