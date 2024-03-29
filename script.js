let tasks = [{
    pic: "https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg",
    taskName: "School: Mon-Fri 7:30-4pm",
    description: "Kids go to Kindergarten",
    importance: 0
}, {
    pic: "https://cdn.pixabay.com/photo/2018/05/28/13/14/dumbell-3435990_1280.jpg",
    taskName: "Gym: Mon-Fri 4pm",
    description: "Workin' Out",
    importance: 0
}, {
    pic: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    taskName: "Dinner: Mon-Sat 530pm",
    description: "Cooking With Family",
    importance: 0
}, {
    pic: "https://cdn.pixabay.com/photo/2019/12/27/14/29/vinyl-4722544_1280.jpg",
    taskName: "Music: Free Time",
    description: "DJing Fun",
    importance: 0
}, {
    pic: "https://cdn.pixabay.com/photo/2016/01/19/01/42/library-1147815_1280.jpg",
    taskName: "Reading: Free Time",
    description: "Liesurely Reading",
    importance: 0
}, {
    pic: "https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg",
    taskName: "Movies: Free Time",
    description: "Movie Time!",
    importance: 0
}, {
    pic: "https://cdn.pixabay.com/photo/2017/06/27/11/48/team-spirit-2447163_1280.jpg",
    taskName: "Family: Weekends",
    description: "Family Outing",
    importance: 0
}, {
    pic: "https://cdn.pixabay.com/photo/2017/09/29/15/38/cleanliness-2799459_1280.jpg",
    taskName: "Cleaning: Weekends",
    description: "Organize the House",
    importance: 0
}, {
    pic: "https://cdn.pixabay.com/photo/2019/12/22/17/13/french-bulldog-4713013_1280.jpg",
    taskName: "Sleep: Every Day",
    description: "Rest & Recover",
    importance: 0
}];

for (let val of tasks) {
    document.getElementById("result").innerHTML += `
    <div>
    <div class="card" id="result">
        <img src="${val.pic}" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${val.taskName}</h5>
    </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${val.description}</li>
        <p class="btn btn-success likeBtn">${val.importance}</p>
        <button class="btn btn-dark done-btn" id="done-btn">Done</button>
</div>
</div>
</div>
    `;
}

let btns = document.getElementsByClassName("likeBtn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        tasks[i].importance++;
        document.getElementsByClassName("likeBtn")[i].innerHTML = tasks[i].importance;
        if (tasks[i].importance < 2) {
            console.log("Green"); //if the importance button is less than 2 turns green
            document.getElementsByClassName("likeBtn")[i].classList.remove("btn-warning");
            document.getElementsByClassName("likeBtn")[i].classList.remove("btn-danger");
            document.getElementsByClassName("likeBtn")[i].classList.add("btn-success");
        } else if (tasks[i].importance < 4) { //if the importance button is less than 4 turns yellow
            console.log("yellow");
            document.getElementsByClassName("likeBtn")[i].classList.remove("btn-success");
            document.getElementsByClassName("likeBtn")[i].classList.remove("btn-danger");
            document.getElementsByClassName("likeBtn")[i].classList.add("btn-warning");
        } else if (tasks[i].importance < 6) { //if the importance button is less than 6 turns red
            console.log("red");
            document.getElementsByClassName("likeBtn")[i].classList.remove("btn-success");
            document.getElementsByClassName("likeBtn")[i].classList.remove("btn-warning");
            document.getElementsByClassName("likeBtn")[i].classList.add("btn-danger");
            document.getElementsByClassName("card")[i].style.color = "red";
            document.getElementsByClassName("card")[i].style.backgroundColor = "yellow";
        } else if (tasks[i].importance >= 6) { //if the importance button is 6 or bigger makes the whole card red
            console.log("warrning");
            document.getElementsByClassName("card")[i].style.backgroundColor = "red";
            document.getElementsByClassName("card")[i].style.color = "black";
        }

        console.log(tasks[i].importance);
        document.getElementsByClassName("like")[i].innerHTML = tasks[i].importance;
    })



}
let doneBtn = document.getElementsByClassName("done-btn");
for (let i = 0; i < doneBtn.length; i++) {
    doneBtn[i].addEventListener("click", function() {
        let card = document.getElementsByClassName("card")[i];
        card.style.display = "none";
    });
}