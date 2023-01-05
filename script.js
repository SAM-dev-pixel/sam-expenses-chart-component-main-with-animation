const amounts = document.querySelectorAll(".amount");
const days = document.querySelectorAll(".day-txt");
const statisticBoxes = document.querySelectorAll(".statistic-box");

//GET DATA FROM JSON
fetch("data.json")
.then(response => response.json())
.then(results => {

    results.forEach((result, i) => {
        amounts[i].textContent = `$${result.amount}`;
        days[i].textContent = result.day;
    });

});

// ANIMATION OF STATISCTIC BOXES > when the page on load
const boxHeightArr = [24, 48, 72, 43, 32, 59, 35]; //get the height of box

statisticBoxes.forEach( box => { box.style.height = "0" }); // set the boxes to no height

function animate() { // this function will run when the page on load

    statisticBoxes.forEach((box, i) => {

        box.style.transition = "2s 0.25s";
        box.style.height = `${boxHeightArr[i]}%`; // get the height from boxHeightArr

    });

}
//STATISTIC BOXES ON CLICKED > show the amount rates
document.body.addEventListener("click", e => {

    if(e.target.classList.contains("statistic-box")) {

        e.target.children[0].classList.toggle("active-amount"); // when the box clicked -> show its amount

    } else {

        document.querySelectorAll(".amount").forEach(amount => amount.classList.remove("active-amount")); // other than the box clicked will remove the amounts

    }

});