
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const url='https://github.com/login/oauth/authorize?client_id=Iv1.73333a21c7762914';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(Http.responseText)
    }
}

// app.use(cors())