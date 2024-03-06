// This function is executed on the click of the submit button on the front end.
// when it is clicked, it will take the values entered into the email and password fields
// then we save the api post link to the variable url
//set both of those variables to the variable data
//in options we are telling it what it is, post in the case, also turning the body into json using stringify
// fetching both the url and the options, then, thenn, catch error. 
function createAccount(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let url = 'http://localhost:3000/api/account/createaccount';
    
var data = {
    email: email,
    password: password
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

      backToHome();
}

function backToHome(){
      window.location = '/'
};

