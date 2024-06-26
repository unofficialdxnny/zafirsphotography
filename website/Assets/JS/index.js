document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    var navLinks = document.querySelectorAll('.nav-link[data-section]');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var sectionId = link.getAttribute('data-section');
            document.querySelectorAll('.content-section').forEach(function (section) {
                section.classList.remove('active-section');
            });
            document.getElementById(sectionId).classList.add('active-section');
        });
    });
});



// contact form

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';

    const data = {
        username: "Contact Form Bot",
        embeds: [{
            title: "New Message from Contact Form",
            fields: [
                {
                    name: "Username",
                    value: username,
                    inline: true
                },
                {
                    name: "Message",
                    value: message,
                    inline: false
                }
            ],
            color: 0x00ff00
        }]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Error sending message.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
});
