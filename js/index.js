const defaultSelect = () => {
  const element = document.querySelectorAll('.select-d');
  element.forEach((e, i) => {
    const choices = new Choices(e, {
      searchEnabled: false,
    });
  });
};

defaultSelect();

const cargoTriggers = document.querySelectorAll('.cargo__trigger');
const cargoItems = document.querySelectorAll('.cargo__item');

cargoTriggers.forEach((trigger, i) => {
  console.log(trigger);
  trigger.addEventListener('click', (element) => {
    cargoTriggers.forEach((e) => {
      e.classList.remove('active');
    });
    cargoItems.forEach((e) => {
      e.classList.remove('active');
    });
    cargoTriggers[i].classList.add('active');
    cargoItems[i].classList.add('active');
  });
});

// input number
const inputNumber = document.querySelector('.input__number');
const cargoTop = document.querySelector('.cargo__arrow-top');
const cargoBottom = document.querySelector('.cargo__arrow-bottom');

const cargoNumber = document.querySelectorAll('.cargo__number');

cargoNumber.forEach((num) => {
  num.addEventListener('click', (e) => {
    console.log(e.currentTarget.children[1]);
    console.log(e.target.className);
    if (e.target.className === 'a-t') {
      e.currentTarget.children[1].value = Number(e.currentTarget.children[1].value) + 1;
    }
    if (e.target.className === 'a-b') {
      if (Number(e.currentTarget.children[1].value) > 0) {
        e.currentTarget.children[1].value = Number(e.currentTarget.children[1].value) - 1;
      }
    }
  });
});

//choice

const choice = document.querySelectorAll('.choice');

choice.forEach((ch) => {
  ch.addEventListener('click', (e) => {
    let child = e.currentTarget.children;
    for (let key in child) {
      if (typeof child[key] === 'object') {
        child[key].classList.remove('active');
      }
    }
    e.target.classList.add('active');
  });
});

// cargoTop.addEventListener('click', (e) => {
//   inputNumber.value = Number(inputNumber.value) + 1;
// });

// cargoBottom.addEventListener('click', (e) => {
//   if (Number(inputNumber.value) > 0) {
//     inputNumber.value = Number(inputNumber.value) - 1;
//   }
// });
