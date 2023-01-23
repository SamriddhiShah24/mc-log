var studentName = localStorage.getItem("studentName");
var studentEmail = localStorage.getItem("studentEmail");
var studentGrade = localStorage.getItem("studentGrade");
var date = new Date();


var dates_array= [];
dates_array= localStorage.getItem("dates");


var month=(parseInt(date.getMonth())) + 1;
var input_date=date.getFullYear()	+"-"+ month	+ "-"+ date.getDate()

var symptom = "";

console.log(studentGrade, studentEmail, studentName);





function finish_form() {
  

   symptom= document.getElementById('symptom').value;
   document.getElementById('h2').innerHTML= input_date	;

   console.log(symptom);

    localStorage.setItem("symptom", symptom);
localStorage.setItem("date", date )
window.location.href="tracker.html";

}


// localStorage.setItem('names_length', names.length);
// localStorage.setItem('names_0', names[0]);
// localStorage.setItem('names_1', names[1]);
// localStorage.setItem('names_' + n, names[n]);