const EMAIL_SERVICE = 'service_admarm6'
const EMAIL_TEMPLATE = 'template_gtadma0'

function sendMail() {
  let name = document.getElementById('InputName').value.trim();
  let email = document.getElementById('InputEmail').value.trim();
  let subject = document.getElementById('InputSubject').value.trim();
  let message = document.getElementById('InputMessage').value.trim();

  if (!name || !email || !subject || !message) {
    swal("Error", "Please fill out all fields before sending.", "error");
    return;
  }

  let tempparams = {
    from_name: name,
    from_email: email,
    from_subject: subject,
    from_message: message
  };
  emailjs.send(EMAIL_SERVICE, EMAIL_TEMPLATE, tempparams)
  .then(function(response){
    swal("Message Sent!", "I'll get back to you shortly!", "success")
    document.getElementById("contact-form").reset();
  })
  .catch(function(error) {
      swal("Oops!", "Something went wrong. Please try again later.", "error");
      console.error("EmailJS Error:", error.text || error);
    });
}
