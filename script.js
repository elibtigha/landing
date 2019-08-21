const url='https://github.com/login/oauth/authorize?client_id=Iv1.73333a21c7762914';

// $("button").click(function(){
//     $.get(url, function(data, status){
//         console.log(`${data}`)
//     });
// });

$(document).ready(function() {
    const Url = 'https://jsonplaceholder.typicode.com/posts';
    $('button').click(function() {
        $.ajax({
            url: Url,
            type: "GET",
            success: function(result) {
                console.log(result)
            },
            error: function(error) {
                console.log(`Error ${error}`)
            }
        })
    })
})

const Http = new XMLHttpRequest();
Http.open("GET", url);
Http.send();
Http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(code)
    }
}
hello
