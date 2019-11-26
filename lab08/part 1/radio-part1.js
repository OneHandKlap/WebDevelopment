function request() {
    var xmlhttp = new XMLHttpRequest()

    xhttp.open("GET", 'http://199.195.194.92:2199/rpc/meyima03/streaminfo.get?x=1', true)
    xhttp.send();
}