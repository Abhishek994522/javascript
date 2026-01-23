# Projects related to DOM

## project Link 
[Click]()

### Project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.background = 'yellow';
        break;
      default:
        console.log('choose color');
        break;
    }
  });
});



```

### Project 2 - BMI Calculator

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0) {
    results.innerHTML = `please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results

    results.innerHTML = `<span>${bmi}</span>`;
  }
});



```

### Project 3 - Digital Clock

```javascript

const clock = document.getElementById('clock');
// document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```
### Project 4 - Guess The Number 

```javascript


```