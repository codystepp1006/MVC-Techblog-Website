var today = new Date();
var myInfo = "<p>Today is {{date}}<p>";

var template = Handlebars.compile(myInfo);

var data = template({date: today});
            
document.getElementById('handleData').innerHTML += data;

