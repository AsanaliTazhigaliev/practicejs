var x = document.getElementById("form_sample");
var createform = document.createElement('form');
createform.setAttribute("action", "");
createform.setAttribute("method", "post");
x.appendChild(createform);
var heading = document.createElement('h2');
heading.innerHTML = "Registration";
createform.appendChild(heading);
var line = document.createElement('hr');
createform.appendChild(line);
var linebreak = document.createElement('br');
createform.appendChild(linebreak);
var namelabel = document.createElement('label');
namelabel.innerHTML = "Username : "; // Set Field Labels
createform.appendChild(namelabel);
var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);
var pswdlabel = document.createElement('label');
pswdlabel.innerHTML = "Password : "; // Set Field Labels
createform.appendChild(pswdlabel);
var inputelement = document.createElement('input');
inputelement.setAttribute("type", "password");
inputelement.setAttribute("name", "psswd");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);
var contactlabel = document.createElement('label');
contactlabel.innerHTML = "Confirm password : "; // Set Field Labels
createform.appendChild(contactlabel);
var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "contno");
createform.appendChild(inputelement);
var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);
var submitelement = document.createElement('input');
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Register");
createform.appendChild(submitelement);