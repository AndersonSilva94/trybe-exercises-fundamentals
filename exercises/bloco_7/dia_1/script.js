const button = document.getElementById('click-button');
const textCamp = document.querySelector('.count-click');
clickCount = 0;

button.addEventListener('click', () => {
  textCamp.innerText = '';
  clickCount += 1;
  textCamp.innerText = `A quantidade de cliques realizados é: ${clickCount}`
})