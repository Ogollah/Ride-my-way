// Get the modal
var profile = document.getElementById("myProfile");

// Get the button that opens the form
var btn = document.getElementById("myBtn");

// Get the span element that closes the form
var span = document.getElementsByClassName("close")[0];

// Open form when click on the add a ride button 
btn.onclick = function () {
    profile.style.display = "block";
}

// closes on click of span (x)
span.onclick = function () {
    profile.style.display = "none";
}

// Closes on click any where
window.onclick = function (event) {
    if (event.target == profile) {
        profile.style.display = "none";
    }
}