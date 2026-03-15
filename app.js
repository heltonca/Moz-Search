function login(){

document.getElementById("loginScreen").classList.add("hidden");
document.getElementById("homeScreen").classList.remove("hidden");

}

function showRegister(){

document.getElementById("loginScreen").classList.add("hidden");
document.getElementById("registerScreen").classList.remove("hidden");

}

function showLogin(){

document.getElementById("registerScreen").classList.add("hidden");
document.getElementById("loginScreen").classList.remove("hidden");

}

function goHome(){

hideAll();
document.getElementById("homeScreen").classList.remove("hidden");

}

function openWallet(){

hideAll();
document.getElementById("walletScreen").classList.remove("hidden");

}

function openServices(){

hideAll();
document.getElementById("servicesScreen").classList.remove("hidden");

}

function openNews(){

hideAll();
document.getElementById("newsScreen").classList.remove("hidden");

}

function hideAll(){

document.querySelectorAll(".screen").forEach(screen=>{
screen.classList.add("hidden");
});

}

function sendSOS(){

alert("🚨 SOS enviado! Localização partilhada.");

}

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function(position){

document.getElementById("location").innerHTML =
"Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude;

});

}

}