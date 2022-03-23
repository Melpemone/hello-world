var sbmt = document.getElementById("newc");
sbmt.onclick = function myForm() {
let email = document.getElementById("emal").value;
if (email === "") {
    alert("Enter an Email Address!")
}
let password = document.getElementById("passwr").value;
if (password.length < 6) {
    alert("Password must be six character!")
}
}

function myColor() {
  const elemen = document.createElement("h3");
  const cumle = document.createTextNode("For more information, e mail us");
 elemen.appendChild(cumle);
 document.body.appendChild(elemen);

 elemen.onmouseout = function() {
     document.body.removeChild(this);
 }
    
    



}
var i = 0;
var text = " Welcome to Fashion World!";
var speed = 90;
function myFunc() {
    if (i < text.length) {
   document.querySelector("h2").innerHTML += text.charAt(i);

   i++;
   setTimeout(myFunc, speed);

   document.querySelector("h2").onmouseout = function() {
       document.querySelector("h2");
   }
   
    }
}


function darkMode() {
    var darrk = document.body;
    darrk.classList.toggle("dark-mode");
}
    
function openForm() {
    document.getElementById("myChat").style.display= "block";
}

function closeForm() {
    document.getElementById("myChat").style.display= "none";   
}


function longestString1(arr) {
	var longest = ''; // Step 0
	for (var i = 0; i < arr.length; i++) { // Step 1
		if (arr[i].length > longest.length) { // Step 2 & 3
			longest = arr[i]; // Step 4
		}
	}
	return longest; // Step 5
}

//ES 6 Syntax Possible Solution:
