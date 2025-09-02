//Creating constants or Getting References to the button and Paragraphs from HTML to Javascript
const myPara = document.getElementById('myPara');
const myButton = document.getElementById('myButton');

//I need "click" functionality for button.
//I will add event listener to the button which performs that action

//every datatype has a default value.

myButton.addEventListener('click', function () {
  myButton.classList.toggle('clicked');
  myPara.textContent = 'Button was Clicked and Changed my Color';
  myPara.style.color = '#FFFFFF';
  myPara.style.backgroundColor = 'blue';
});

myPara.addEventListener('click', () => {
  myPara.classList.toggle('clicked');
  myPara.textContent = 'MyPara was Clicked!!';
  myPara.style.backgroundColor = 'black';
  myPara.style.color = '#008000';
});
