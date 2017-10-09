function clearInput() {

    document.getElementById("url").value = "";
}
window.onload = clearInput();

function bit_url(url) {
    var username = "28sree38";
    var key = "R_49e43c14f1eb44549fd4ff628d577005";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://api.bit.ly/v3/shorten", false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("longUrl=" + url + "&apiKey=" + key + "&login=" + username);
    document.getElementById("ShowHideDiv").style.display = "block";
    var respObj = JSON.parse(xhttp.responseText);
    var a = document.getElementById('ShortUrl');
    a.href = "" + respObj.data.url;
    a.innerHTML = "" + respObj.data.url;


}

function shortenLink() {
    var url = document.getElementById("url").value;

    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var urltest = urlRegex.test(url);
    if (urltest) {
        bit_url(url);
    } else {
        alert("Enter a valid URL");
    }
};
