
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

// passport used to authenticate github requests
// var passport = require("passport");

// var GitHubStrategy = require('passport-github').Strategy;

// passport.use(new GitHubStrategy({
//     clientID: "edab14df29f6b5fb640d",
//     clientSecret: "d4420717b18915b338aea3284108aca060b36a7",
//     callbackURL: "http://127.0.0.1:3000/auth/github/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ githubId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));
