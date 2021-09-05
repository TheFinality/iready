function surgeee() {
  // gets lesson data
var csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];
var scoree = document.getElementById('scoree').value;
var score = csid.includes("10_") ? null : `{"score":${scoree}}`; // you can replace the "100" with any score you want if this is pasted on a quiz.

// tricks server into thinking specific lesson was completed
fetch("https://login.i-ready.com/student/lesson/componentCompleted", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1"
  },
  "referrer": "https://login.i-ready.com/student/dashboard/home",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{\"componentStatusId\":\"${csid}\",\"instructionLessonOutcome\":${score}}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
alert('lesson passed :D')
}
function surgeeee() {
  var csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];
var minutes = 45; // change the 45 to the amount of time you want. This is only neccessary for the alternate hack.

// sets cookies in case something breaks
document.cookie = `csid=${csid}; expires=Thu, 18 Dec 2999 12:00:00 UTC"`;
document.cookie = `minutes=${minutes}; expires=Thu, 18 Dec 2999 12:00:00 UTC"`;

csid = getCookie("csid");

// sends fetch request to start timer
fetch(`https://login.i-ready.com/student/v1/web/lesson_component/${csid}?action=resume`, {
	"headers": {
		"accept": "application/json, text/plain, */*",
		"accept-language": "en-US,en;q=0.9",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	},
	"referrer": "https://login.i-ready.com/student/dashboard/home",
	"referrerPolicy": "strict-origin-when-cross-origin",
	"body": null,
	"method": "GET",
	"mode": "cors",
	"credentials": "include"
});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
alert('Close the lesson, but stay on this page. make sure to not do lessons or close this tab, but u can do anything else, even turn off ur computer. just make sure to end the minute farm when u want.')
}
function endsurge() {
  csid = getCookie("csid");

// sends fetch request to stop timer and update time
fetch(`https://login.i-ready.com/student/v1/web/lesson_component/${csid}?action=pause`, {
	"headers": {
		"accept": "application/json, text/plain, */*",
		"accept-language": "en-US,en;q=0.9",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	},
	"referrer": "https://login.i-ready.com/student/dashboard/home",
	"referrerPolicy": "strict-origin-when-cross-origin",
	"body": null,
	"method": "GET",
	"mode": "cors",
	"credentials": "include"
});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
alert('refresh your page to see the added minutes.')
}
function diasurge() {

var duration = 1000;

// hijacks XMLHttpRequest.send() to modify requests
XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(body) {
	// modifies inputted request
	newBody = JSON.parse(body);
	if (newBody.correct == false) newBody.correct = true;
	if (newBody.durationSeconds != undefined) newBody.durationSeconds = duration;

  // sends modified request
	this.realSend(JSON.stringify(newBody));
}

alert("All answers inputed will be correct. Your teacher can see this, make sure to turn the hack off when you want to get a problem wrong, also don't answer questions too fast, or you will be marked as rushed.");
}
function diasurgeend() {
  XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.realSend;
XMLHttpRequest.prototype.realSend = undefined;
alert("Hack was disabled. Your answers might not be corerct anymore.")
}
function backgroundsurge() {
  let backsurge = document.getElementById('backgroundurl').value
  function changesurge() {
    document.getElementById('background-image').src = backsurge
    localStorage.setItem('background', backsurge)
  }
  setInterval(changesurge, 1)
}

function namesurge() {
  let namesurge = document.getElementById('changename').value
  function changenamesurge() {
    let name = document.getElementsByClassName('css-1ii68kw e15psnz1')[0].innerHTML = namesurge
    localStorage.setItem('name', namesurge)
  }
  setInterval(changenamesurge, 1)
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function surgepassinfo() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}

var modal1 = document.getElementById("myModal1");
var span1 = document.getElementsByClassName("close1")[0];
function surgeminstartinfo() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}

var modal2 = document.getElementById("myModal2");
var span2 = document.getElementsByClassName("close2")[0];
function surgeminendinfo() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

var modal3 = document.getElementById("myModal3");
var span3 = document.getElementsByClassName("close3")[0];
function surgediastartinfo() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}


var modal4 = document.getElementById("myModal4");
var span4 = document.getElementsByClassName("close4")[0];
function surgediaendinfo() {
  modal4.style.display = "block";
}
span4.onclick = function() {
  modal4.style.display = "none";
}

var modal6 = document.getElementById("myModal6");
var span6 = document.getElementsByClassName("close6")[0];
function surgeTOS() {
  modal6.style.display = "block";
}
span6.onclick = function() {
  modal6.style.display = "none";
}

var modal7 = document.getElementById("myModal7");
var span7 = document.getElementsByClassName("close7")[0];
function backgroundsurgeinfo() {
  modal7.style.display = "block";
}
span7.onclick = function() {
  modal7.style.display = "none";
}

var modal8 = document.getElementById("myModal8");
var span8 = document.getElementsByClassName("close8")[0];
function namesurgeinfo() {
  modal8.style.display = "block";
}
span8.onclick = function() {
  modal8.style.display = "none";
}

function hidesurge() {
  var x = document.getElementById("main");
  var y = document.getElementById('surgehidebtn')
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = 'Hide'
  } else {
    x.style.display = "none";
    y.innerHTML = 'Show'
  }
}

function alert(text) {
	Swal.fire(text)
}


function closee() {
  document.getElementById('reall').remove()
  alert('Hacked closed. Refresh the page and add it back if you want.')
}


var autoname = localStorage.getItem('name')
if (!autoname) autoname = "Phenomenon"
document.getElementById('changename').value = autoname
var background = localStorage.getItem('background')
if (!background) background = "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-preview-1.jpg"
document.getElementById('backgroundurl').value = background
