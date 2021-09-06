const ul = document.querySelector("#countdown");

const makeChild = (parent, diff, todo,id) => {
    
    const li = document.createElement("li");
    const span =document.createElement("span");
    const span2 =document.createElement("span");
    const button = document.createElement("i");
    
    
    // if(diff<0){
    //     span.innerText("")
    // }
    console.log(typeof diff);
    console.log(diff);
    console.log(diff instanceof String);

    if(diff === -0){
        span.innerText = "D-day"
    }else if(diff <0){
        span.innerText = "Event Finished"

    }else if(typeof diff === "string"){
        span.innerText = diff;
    }else{
        span.innerText = "D-"+diff;

    }
    li.id = id;
    li.className="card";
    li.appendChild(span);
    span2.innerText = todo;
    li.appendChild(span2);
    button.innerText="삭제";
    button.addEventListener("click",
        (e)=>{
            // console.log("working! button");
            const delete_li = e.target.parentElement;
            // console.log(typeof delete_li.id);
            DB=DB.filter( (item) => {
                // console.log(typeof item.id);
                return item.id !== parseInt(delete_li.id)
            } );
            // console.log(DB);
            ul.removeChild(delete_li);
            saveToDB();
        }
    );
    li.appendChild(button);
    parent.appendChild(li);
    // console.log(span.innerText);
    return span.innerText;
}

const countDownTimer = (todo, date, id) => {
    let _date = new Date(date);
    let _second = 1000; 
    let _minute = _second * 60; 
    let _hour = _minute * 60; 
    let _day = _hour * 24;
    let timer;

    function showRemaining(){
        let now = new Date();
        let diff = _date - now;
        // if(diff <0){
            //     // clearInterval(timer);
            //     return;
            // }
            
        let days = Math.ceil(diff/_day);
        console.log(days);
            
        return makeChild(ul,days,todo,id);

    }

    // timer =setTimeout(showRemaining,1000);
    return showRemaining();
};


// countDownTimer('sampleID','12/01/2021');


const today = new Date();
//month 0~11 //day 는 요일(0~6) //date는 일   
console.log(today);
console.log(today.getMonth(), today.getDate() ,  today.getDay());
console.log(today.getHours() , today.getMinutes()  );
console.log(Date.now() );