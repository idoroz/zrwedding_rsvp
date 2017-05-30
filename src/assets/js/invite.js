var check = window.location.pathname;

var Invitee = check.slice(1, -1);
var clean = decodeURI(Invitee)


// 

var inviteeField = document.querySelector('#invitee');
inviteeField.innerHTML = 'Dear '+clean+', together with their families'

var rsvpField = document.querySelector('#name')
rsvpField.value = clean;
