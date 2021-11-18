var thingy = prompt("What do you want to do? \n 1 = pass lesson | 2 = start minute farming | 3 = end minute farming");
var thing = parseInt(thingy);
var minutesFarming;
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
	if (!minuteFarming) {
 if (!!window["html5Iframe"]) {
			// gets lesson data
			var csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];
			var minutes = 45; // change the 45 to the amount of time you want. This is only neccessary for the alternate hack.

			// sets cookies in case something breaks
			document.cookie = `csid=${csid}; expires=Thu, 18 Dec 2999 12:00:00 UTC"`;
			document.cookie = `minutes=${minutes}; expires=Thu, 18 Dec 2999 12:00:00 UTC"`;

			alert("Neccessary data to farm minutes have now been collected. To begin farming minutes, go to the iReady menu by closing this lesson/quiz. Then, press this button again.");
		} else if (!getCookie("csid")) {
			// lesson isn't open and cookie isnt set
			alert("You do not have a lesson currently open. You must open a lesson to begin the proccess.")
		} else {
			// lesson isn't open and cookie is set
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

			// sets variable to know minutes are being farmed
			minuteFarming = true;

			alert("The minute farming process has now begun. Do not close this page. Do not turn off your computer. After you press \"ok,\" every minute that passes will be added to your account. When you want to stop the timer and add the farmed minutes to your account, press the button labeled \"Stop farming minutes\". Press \"ok\" to begin.");
		}
	} else alert('you are already minute farming.')
  
  
} else if (thing === 3) {
	if (minutesFarming) {
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

		// resets some variables
		document.cookie = `csid=; expires=Thu, 18 Dec 1970 12:00:00 UTC"`;
		minuteFarming = false;

		alert("The minutes should now be in your account."); 
	} else alert('you need to start minute farming first.')
  
  
} else {
alert('your choice must be 1, 2, or 3!')
}

function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
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
