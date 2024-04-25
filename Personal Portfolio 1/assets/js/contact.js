/* ============== EMAIL JS ============ */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (event) => {
    event.preventDefault();

    //ServiceID - templateID - #form - publicKey
    emailjs.sendForm('service_ybiv1fk', 'template_a6d4lsc', '#contact-form', 'QMb1wqyr90zp9lLAn')
        .then(() => {
            //Show sent message
            contactMessage.textContent = 'Message sent succesfully!'
            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000)
            //Clear input fields
            contactForm.reset();
        }, () => {
            //Show error message
            contactMessage.textContent = 'Message not sent (service error)'
        })
}

contactForm.addEventListener('submit', sendEmail);