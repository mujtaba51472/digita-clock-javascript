setInterval(()=>{
let time=document.querySelector('.time');
let date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let timeZone="AM";
if(timeZone>12){
       timeZone="PM";
       hours=hours-12;
       
}
if(seconds<10){
       seconds="0" +seconds;
}
if(minutes<10){
       minutes="0"+ minutes;
}
if(hours<10){
       hours="0"+ hours;
}
time.textContent=hours +":"+ minutes + ":" + seconds +":" + timeZone
})