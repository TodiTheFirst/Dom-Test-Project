// const h1 = document.getElementById('main-title');        //cmd / 

// h1.textContent = 'Some new title';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' (Changed!) ';

// const body = document.body;


// const listItemElements = document.querySelectorAll('li');
// const listItemElements = document.getElementsByTagName('li');

// for (const listItEl of listItemElements) {
//     console.dir(listItEl);
// }
const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

section.className = 'red-bg';

button.addEventListener('click', () => {
//     if (section.className === 'red-bg visible') {
//         section.className = 'red-bg invisible';
//     } else {
//     section.className = 'red-bg visible';
//     }
// });

section.classList.toggle('visible');
section.classList.toggle('invisible');
});
// function solve() {
//     document.querySelector('ul').innerHTML = '<li>Learn JavaScript</li><li>Master JavaScript</li>';
// }                     
        // создание элементов для Html первый способ
// const secondGoal = document.createElement('li');
// secondGoal.textContent = 'Master JavaScript';
// document.querySelector('ul').appendChild(secondGoal);
       // создание элементов для html  второй способ
const list = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
list.prepend(newLi); 
 //в отличии от .appendeChilde добавляет новый элемент не в начале а в конце
 list.lastElementChild.before(newLi) 
  //befor также как after перемещает элемент html соотвественно туда куда написано
list.firstElementChild.replaceWith(newLi)
//replaceWith заменяет элемент вместо того чтобы его просто перемещать
const newLi2 = newLi.cloneNode(true)
// клонирует элемент  если true то копирует все childe элементы если false то только сам элемент
list.append(newLi, newLi2)
// const listse =  document.querySelector('ul');
// listse.remove();
 // позволяет убрать элемент из запаршенной страницы в html

