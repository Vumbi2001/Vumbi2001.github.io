function myfunction(event){
    event.preventDefault();
    var fullname = document.getElementById("fname").value;
    var Address = document.getElementById("address").value;
    var Email = document.getElementById("email").value;
    var Comments = document.getElementById("Comments").value;
    localStorage.setItem('ls_fname', fullname);
    localStorage.setItem('ls_address', Address);
    localStorage.setItem('ls_email', Email);
    localStorage.setItem('ls_Comments', Comments);
    window.location.href = 'thankyou.html';
}