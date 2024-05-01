const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', () => {
const myItem = input.value;
input.value = '';
  
const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');
  
listItem.append(listText);
listText.textContent = myItem;
listItem.append(listBtn);
listBtn.textContent = 'X';
listBtn.style.color = 'red';
list.append(listItem);
  
listBtn.addEventListener('click', () => {
list.removeChild(listItem);
});
  
input.focus();
});