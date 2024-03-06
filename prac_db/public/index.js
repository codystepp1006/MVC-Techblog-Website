// This function is executed on the click of the submit button on the front end.
// when it is clicked, it will take the values entered into the email and password fields
// then we save the api post link to the variable url
//set both of those variables to the variable data
//in options we are telling it what it is, post in the case, also turning the body into json using stringify
// fetching both the url and the options, then, thenn, catch error. 
function createAccount(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


//var currentAccount = checkAccount(email, password);

var userObj = addAccount(email,password);
console.log(userObj);
// if(!currentAccount){
//    addAccount(email,password);

// } else {
//   setCookie('techblog'. us )
// }



      // backToHome();
}

function addAccount(email, password){

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
  let userObj = null;
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      userObj = json;
      console.log(json)})
    .catch(err => console.error('error:' + err));

    console.log
    return userObj;
}


function backToHome( email,password){
      window.location = '/'
};


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}


//checks to see if cookies are enabled.
console.log(navigator.cookieEnabled);

// function login();
