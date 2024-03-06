var today = new Date();
var myInfo = "<p>Today is {{date}}<p>";
var template = Handlebars.compile(myInfo);
var data = template({date: today});
            
document.getElementById('handleData').innerHTML += data;

let button = document.getElementById('postBtn');
button.addEventListener("click", blogPost);

function blogPost(){
    let post = document.getElementById('postContent').value;
    console.log(post);

    let postedblog = document.getElementById('postedBlog')
    postedblog.innerHTML += `<div><p>Blog Posted ${today}:    ${post}</p></div>`;

    let url = 'http://localhost:3000/api/blogpost/savepost';

    var data = {
        post: post
    };

    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1'},
        body: JSON.stringify(data)
      };
      fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
}

