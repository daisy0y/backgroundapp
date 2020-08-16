function startTime() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    ap = (hr < 12) ? "<span>오전</span>" : "<span>오후</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
     
    hr = viewTime(hr);
    min = viewTime(min);
    sec = viewTime(sec);
    document.getElementById("clock").innerHTML =`${ap} ${hr} : ${min} : ${sec}`;
    
    let months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = months[today.getMonth()];
    let curYear = today.getFullYear();
    let date = `${curYear}년 ${curMonth} ${curDay}일 ${curWeekDay}`;
    document.getElementById("date").innerHTML = date;
    
    let time = setTimeout(function(){ startTime() }, 500);
}
startTime();

function viewTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}