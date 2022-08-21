const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', event => completeTask(event,id));
  return i;   //devuelve un elemento
};
// Immediately invoked function expression IIFE
const completeTask = (event,id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  const tasks = JSON.parse(localStorage.getItem('tasks'));  //array con objetos
  const index = tasks.findIndex(item => item.id === id);   //si la propiedad de un objeto contiene al id, mostrame el indice dentro del array
  tasks[index]['complete'] = !tasks[index]['complete'];   //al darle click pasa a ser true
  localStorage.setItem('tasks',JSON.stringify(tasks));
};

export default checkComplete;
