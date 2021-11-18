var thingy = prompt("What do you want to do? \n 1 = pass lesson | 2 = start minute farming | 3 = end minute farming");
var thing = parseInt(thingy);
if (thing === 1) {
  
   
var csid;
var score = "{\"score\":100}";

	csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];

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
  
} else if (thing === 2) {
  alert('2');
  
  
} else if (thing === 3) {
  alert('3');
  
  
} else {
alert('your choice must be 1, 2, or 3!')
}
