let btn = document.querySelector('.btn');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener('click', () => {
     let newTask = document.createElement('li');
     newTask.innerText = input.value;

     let delBtn = document.createElement('button');
     delBtn.innerText = 'Delete';
     delBtn.classList.add("delete");
     delBtn.classList.add("btn");
     delBtn.classList.add("btn-primary");

     newTask.appendChild(delBtn);
     delBtn.addEventListener('click', () => {
          newTask.remove();
     });
     ul.appendChild(newTask);
     input.value = ''
});