/*jshint esversion: 6*/

//technologies tool tips
$(() => {
    $('[data-toggle="tooltip"]').tooltip()
})

// emailjs
 window.onload = function () {
       document.getElementById('contact-form').addEventListener('submit', function (event) {
           event.preventDefault();
           // generate the contact number value
           this.contact_number.value = Math.random() * 100000 | 0;
           emailjs.sendForm('contact_service', 'contact_template', this);
       });
   }

var template_params = {
    "reply_to": "reply_to_value",
    "from_name": "from_name_value",
    "Sandy": "Sandy_value",
    "message_html": "message_html_value"
}

var service_id = "default_service";
var template_id = "template_5tbT5JWJ";
emailjs.send(service_id, template_id, template_params);