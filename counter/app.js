const number = document.querySelector('#number'),
      decrease = document.querySelector('#decrease'),
      increase = document.querySelector('#increase');

// let num = number.innerText;
// num = Number(num);

// function handleDecrease() {
//   num--;
//   number.innerText = num;
// }

// function handleIncrease() {
//   num++;
//   number.innerText = num;
// }

// decrease.addEventListener('click', handleDecrease);
// increase.addEventListener('click', handleIncrease);

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};