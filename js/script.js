let mail = document.querySelector('.inp3');
let errormail = document.querySelector('.errormail')
let mailval = mail.value
let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
if (regex.test(String(mailval))== false) {
    errormail.newContent = "Veuillez entrer un mail valide"
    
}
