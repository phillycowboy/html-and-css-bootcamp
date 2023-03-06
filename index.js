console.log('connected');
const h1 = document.querySelector('h1');

const btn = document.querySelector('.btn').addEventListener('click', () => {
  if(h1.style.color === 'purple'){
    h1.style.color = 'red'
  } else {
    h1.style.color = 'purple'
    return false;
  }
})