var studentName = "";
var studentEmail = "";
var studentGrade = "";

function login() {
    studentName = document.getElementById("studentName").value;
    studentEmail = document.getElementById("studentEmail").value;
    studentGrade = document.getElementById("studentGrade").value;

    localStorage.setItem("studentName", studentName);
    localStorage.setItem("studentEmail", studentEmail);
    localStorage.setItem("studentGrade", studentGrade);

    console.log("logged in " + studentName + " " + studentEmail + " " + studentGrade);
    window.location.href="home.html";


}

