const currentDate = document.querySelector(".current-date");
const daySelect = document.querySelector(".days");
let today = new Date(),
currYear = today.getFullYear();
currMonth = today.getMonth();

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () =>{
    let liTag ="";
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    for (let i = 1; i <= lastDateofMonth; i++) {
            liTag += `<li>${i}</li>`
        console.log(i)
    }
    currentDate.innerHTML = `${allMonths[currMonth]} ${currYear}`;
    daySelect.innerHTML = liTag;
}
renderCalendar();