import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './displayTasks.js';

export const addTask = event => {
    event.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    const date = calendar.value;
    const value = input.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    const timeFormat = moment(date).format('LT')

    if (value === '' || date === '') return

    input.value = '';
    calendar.value = '';

    //el orden de las variables si que importan
    const complete = false;

    const taskObj = {       //formato en el que se guarda los datos
        value,            //SessionStorage solo persiste si la pestaña sigue abierta, se elimina al cerrar la pestaña
        dateFormat,
        timeFormat,
        complete,
        id: uuid.v4()
    };

    list.innerHTML = '';
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];   //lleva los datos por primera ves sera undefined y por eso pasa a ser un array vacio con el uso de short circuit evaluation, evitando errores por si no existen datos

    taskList.push(taskObj);   //{value,dateFormat}, otra forma
    //sessionStorage.setItem('tasks', JSON.stringify(taskObj));
    localStorage.setItem('tasks', JSON.stringify(taskList));    //guardamos los datos en el localStorage

    displayTasks();
    /*const task = createTask(taskObj);
    list.appendChild(task) */
}

//const evita que cambienmos el tipo de dato no que lo modifiquemos

export const createTask = ({ value, dateFormat, timeFormat, complete, id }) => {     //pasa las key del objeto
    const task = document.createElement('li');
    task.classList.add('card');
    const taskContent = document.createElement('div');
    const check = checkComplete(id);
    if (complete) {
        check.classList.toggle('fas');      //aplican sobre el elemento generado en checkCOmplete
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    const timeElement = document.createElement('span');
    timeElement.textContent = timeFormat;

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);

    task.appendChild(timeElement);
    
    task.appendChild(deleteIcon(id));
    return task
};