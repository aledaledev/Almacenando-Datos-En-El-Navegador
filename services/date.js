export const uniqueDates = tasks => {
    const unique = [];
    tasks.forEach(task => {
        if (!unique.includes(task.dateFormat)){    //si no existe agregalo
            unique.push(task.dateFormat);
        }
    })
    return unique
}

export const orderDates = dates =>{
    return dates.sort((a,b) => {
        const firstDate = moment(a,"DD/MM/YYYY");
        const secondDate = moment(b,"DD/MM/YYYY");
        //console.log(firstDate - secondDate);
        return firstDate - secondDate
    })
}