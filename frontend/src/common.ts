const getLS = () => {
    if (localStorage.getItem('Tasks')){
        return JSON.parse(localStorage.getItem("Tasks") || '{}');
    }
    else return null;
}

export default getLS;