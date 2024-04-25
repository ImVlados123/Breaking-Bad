let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/hank1.jpg') {
    myImage.setAttribute ('src','images/hank2.jpg');
  } else {
    myImage.setAttribute ('src','images/hank1.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Say my name');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

const heisenbergHeader = document.querySelector('h1:contains("Breaking bad")');

if (heisenbergHeader) {
  const elementsToShow = document.querySelectorAll('[data-show-on-heisenberg]');

  elementsToShow.forEach(element => {
    element.style.display = 'block';
  });
}
