var day1=0;
var day2=0;
var day3=0;
var day4=0;
var day5=0;


function mac1(){
    document.getElementById('day1').style.backgroundColor="green";
    day1=1;
}


function mac2(){
    if(day1==1){
        document.getElementById('day2').style.backgroundColor="green";
        day1=1;
    }
    else{
        document.getElementById('day1').style.backgroundColor="red";
        document.getElementById('day2').style.backgroundColor="green";
        day1=2;
        day2=1;

    }
}


function mac3(){
    if(day1==1 & day2==1){
        document.getElementById('day2').style.backgroundColor="green";
        day2=1;

    }
    else if(day2==0) {
        document.getElementById('day1').style.backgroundColor="red";
         
        document.getElementById('day2').style.backgroundColor="green";
        day2=1;

    }
}