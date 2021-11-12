var script = document.createElement('script');
script.setAttribute('src', 'https://npmcdn.com/sweetalert2@4.0.15/dist/sweetalert2.min.js');
script.setAttribute('type', 'text/javascript');
document.getElementsByTagName('head')[0].appendChild(script);

var thingy = prompt("What do you want to do? \n 1 = pass lesson | 2 = start minute farming | 3 = end minute farming");
var thing = parseInt(thingy);
if (thing === 1) {
  alert('1');
  
} else if (thing === 2) {
  alert('2');
  
  
} else if (thing === 3) {
  alert('3');
  
  
} else return alert('Your choice must be 1, 2, or 3!');
