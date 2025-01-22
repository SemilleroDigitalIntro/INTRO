
function sendEmail(){
let parms = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    subject : document.getElementById('subject').value,
    message : document.getElementById('message').value,
}

    emailjs.sendForm('service_2rlzwzg', 'template_pcbxg9r', {
        to_name: document.getElementById('email').value,
    });
}
