// INTIALIZE VARABLES
const myYear = document.querySelector('#year'),
      button1 = document.querySelector('#btn1'),
      myAge = document.querySelector('#age'),
      button2 = document.querySelector('#btn2');

// EVENT LISTENERS
button1.addEventListener('click', taskYear);
button2.addEventListener('click', taskAge);

// YEAR FUNCTION
function taskYear(){
  if(myYear.value === ''){
    alert('Please enter your year of birth');
  }else{
    const year = myYear.value;
    const answer = 2020 - year;
    alert(`Hello dear, you are ${answer} years old.`);
    myYear.value = '';
  }
}

// AGE FUNCTION
function taskAge(){
  if(myAge.value === ''){
    alert('Please enter your age');
  }else{
    const yearOfBirth = 2020 - myAge.value;
    alert(`Your year of birth is ${yearOfBirth}`);
    myAge.value = '';
  }
}