
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === "images/2016-land-rover-evoque-6-970x646-c.jpg")
    {
        myImage.setAttribute('src', "images/2012-Range-Rover-Evoque-City-1440x2560.jpg");
    }
    else{
        myImage.setAttribute('src', "images/2016-land-rover-evoque-6-970x646-c.jpg");
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName(){
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function(){
    setUserName();
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else{
    var storeName = localStorage.getItem('name');
    myHeading.textContent = myHeading.innerHTML = 'Mozilla is cool, ' + storeName;
}
