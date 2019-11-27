/*jshint esversion: 6*/

//technologies tool tips
$(() => {
    $('[data-toggle="tooltip"]').tooltip()
})

// emailjs
// window.onload = () => {
//     document.querySelector('#contact-form').addEventListener('submit', (event) => {
//         event.preventDefault()
//         emailjs.send("smtp_server", "template_sONPlQTz", {})
//             .then((res) => {
//                 console.log("SUCCESS. status=%d, text=%s", res.status, res.text)
//             }, (err) => {
//                 console.log("FAILED. error=", err)
//             })
//     })
// }

var template_params = {
    "reply_to": "reply_to_value",
    "from_name": "from_name_value",
    "Sandy": "Sandy_value",
    "message_html": "message_html_value"
}

var service_id = "default_service";
var template_id = "template_5tbT5JWJ";
emailjs.send(service_id, template_id, template_params);