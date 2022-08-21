export default date => {    //exportacion de una funcion anonima
    const dateElement = document.createElement('li');
    dateElement.classList.add('date');
    dateElement.innerHTML = date;
    return dateElement
}