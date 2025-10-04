<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
<script>
    emailjs.init("8K1Oc0q2D9CQMHEMg"); // Ide az EmailJS felhasználói azonosító

    const form = document.getElementById('contact-form');
    const status = document.getElementById('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const templateParams = {
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_k9l4enh', 'template_iy07hjj', templateParams)
            .then(() => {
                status.textContent = "Üzenet elküldve!";
                form.reset();
            }, (err) => {
                status.textContent = "Hiba történt: " + JSON.stringify(err);
            });
    });
</script>
