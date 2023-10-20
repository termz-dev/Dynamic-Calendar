const currentDate = document.querySelector(".current-date");

let today = new Date(),
currYear = today.getFullYear();
currMonth = today.getMonth();

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () =>{
    currentDate.innerHTML = `${allMonths[currMonth]} ${currYear}`;
}
renderCalendar();