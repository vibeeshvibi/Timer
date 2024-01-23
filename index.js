// const btt=document.getElementById("sub")
const op=document.getElementById("id")


 const tit=document.getElementById("title")
 const dis=document.getElementById("dis")
 const dur=document.getElementById("dur")
 const one=document.getElementById("one")
 const two=document.getElementById("two")
 const three=document.getElementById("three")
 let timing =document.getElementById("timing")
 
function valid(){
    if(tit.value==''||dis.value==''){
        alert("Enter the task and description")
        return false
    }
   return true

}
function vibi(){

    // let cc=dur.value
   
    let aa=tit.value
    let bb=dis.value
    
     newRow=`<tr><td>${aa}</td><td>${bb}</td><td>${hrcurr}:${mincurr}:${current}</td></tr>`;
     document.getElementById('myTable').innerHTML += newRow;
     tit.value="";
     dis.value="";
     dur.value="";
    
 }


 let times;
 let sec = 0;
 let min;
 let mins=0;
 let hr;
 let hrs=0;
 let isTimerRunning = false;
 let current=0;
 let mincurr=0;
 let hrcurr=0;
 
 document.getElementById('toggle').addEventListener('click', toggleTimer);
 
 function toggleTimer() {
    if (isTimerRunning) {
                clearTimer()                    
                vibi()
                clearInterval(times);
                clearInterval(min);
                isTimerRunning = false;
                document.getElementById('toggle').innerText = 'Start';
      } 
            else {
                var uu = valid()
                if(uu==true)
                {
                hr = setInterval(function() {
                hrs++;
                document.getElementById('hr').innerText = hrs;
                }, 360000);
                min = setInterval(function() {
                mins++;
                document.getElementById('min').innerText = mins%60;
                }, 60000);

                times = setInterval(function() {
                sec++;
                document.getElementById('count').innerText = sec%60;
                }, 1000);
                isTimerRunning = true;
                document.getElementById('toggle').innerText = 'Stop';
                document.getElementById('toggle').style.backgroundColor="red";
                }

    }
 }
 
   function clearTimer() {
     clearInterval(times);
     clearInterval(min);
     clearInterval(hr);
     isTimerRunning = false;
     current=sec%60;
     sec = 0;
     mincurr=mins%60;
     mins=0
     hrcurr=hrs;
     hrs=0
     document.getElementById('count').innerText = sec;
     document.getElementById('min').innerText = mins;
     document.getElementById('hr').innerText = hrs;
     document.getElementById('toggle').innerText = 'Start';
     document.getElementById('toggle').style.backgroundColor="#04aa6d";
   }
 
   

 
