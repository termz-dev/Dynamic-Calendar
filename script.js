const currentDate = document.querySelector(".current-date");
const daySelect = document.querySelector(".days");
const iconSelect = document.querySelectorAll("icons, span");
let today = new Date(),
currYear = today.getFullYear();
currMonth = today.getMonth();

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () =>{
    let liTag ="";
    let isToday ="";
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    firstDayofNextMonth = new Date(currYear, currMonth + 1, 1).getDay();
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay()
 

    for (let i = firstDayofMonth; i > 0; i--) {
             liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
       isToday = i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "" ;
            liTag += `<li class="${isToday}">${i}</li>`;
    };

    for (let i = lastDayofMonth; i < 6; i++) {
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
        
    }


    currentDate.innerHTML = `${allMonths[currMonth]} ${currYear}`;
    daySelect.innerHTML = liTag;
}
renderCalendar();

iconSelect.forEach(icons => {
    icons.addEventListener("click", () => {
        currMonth = icons.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            today = new Date(currYear, currMonth);
            currYear = today.getFullYear();
            currMonth = today.getMonth();
        } else {
            today = new Date();
        }

        renderCalendar();
    })
});