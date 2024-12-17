const originalText = document.getElementById('technic-font');
const translatedText = document.getElementById('normal-font');
const btn = document.querySelector('button');
const clear = document.getElementById('clear-input');
const delta = 61440;

btn.addEventListener('click', () => {
  let result = '';
  for (let i = 0; i < originalText.value.length; i++) {
    result += String.fromCharCode(originalText.value.charCodeAt(i) - delta);
    console.log(result);
  }

  translatedText.textContent = result;
  // console.log(originalText.value.charCodeAt(0), originalText.value.charCodeAt(1));
  // translatedText.textContent = String.fromCharCode(originalText.value.charCodeAt(0) - delta);
})

clear.addEventListener('click', () => originalText.value = '');

