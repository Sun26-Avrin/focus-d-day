const form = document.querySelector("#date-form");
const date = document.querySelector("#date-form #date"); 
const what_todo = document.querySelector("#what-todo");
// const ul = document.querySelector("#countdown");

let DB =[];
const DB_KEY = "D-dayList";
function saveToDB(){
    localStorage.setItem(DB_KEY, JSON.stringify(DB));
}
function paintDB(diff, todo, id){
    makeChild(ul,diff,todo,id);
}

const onSubmit = (e) => {
    e.preventDefault();

    // console.log(typeof date.value);
    // console.log(date.value); //yyyy/mm/dd
    // to mm/dd/yyyy
    let year = date.value.substring(0,4); // 0~3(4)
    let month = (date.value.substring(5,7)); // 5~6(2)
    let day = (date.value.substring(8)); // 8~
    let day_input = month+"/"+day+"/"+year;
    let id = Date.now();
    if(day_input==="//"){
        alert("날짜를 입력해주세요.");
        return;
    }
    let dday = countDownTimer(what_todo.value, day_input, id);
    
    const obj = {
        id ,
        text : what_todo.value,
        dDay : dday,
    };
    DB.push(obj);
    saveToDB();
};

const savedDB = localStorage.getItem(DB_KEY);
if(savedDB !== null){
    DB = JSON.parse(savedDB);
    DB.forEach( (item) => {
        paintDB(item.dDay,item.text,item.id);
    });
}

form.addEventListener("submit",onSubmit);

