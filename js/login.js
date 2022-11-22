function userlogin(){
    var userName = document.getElementById("user");
    var userPassword = document.getElementById("password");
    if (userName.value == 15938788961 && userPassword.value == 971011) {
        window.location.href="./user/main.html"; //当前页面跳转
        // window.open("../html/user/timer.html");      //子页面跳转
        return false;
    } 
    return false;
}