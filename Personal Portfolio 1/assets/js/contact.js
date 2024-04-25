/* ============== EMAIL JS ============ */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (event) => {
    event.preventDefault();

    
    emailjs.sendForm(ServiceID - templateID - #form - publicKey)
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
