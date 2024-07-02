function toggleNav() {
    const sidenav = document.getElementById("sidenav");
    const main = document.getElementById("main");
    const openbtn = document.querySelector(".openbtn");

    if (sidenav.style.left === "0px") {
        sidenav.style.left = "-250px";
        main.style.marginLeft = "0";
        openbtn.style.left = "0";
    } else {
        sidenav.style.left = "0";
        main.style.marginLeft = "250px";
        openbtn.style.left = "250px";
    }
}

window.onresize = function () {
    const sidenav = document.getElementById("sidenav");
    const main = document.getElementById("main");
    const openbtn = document.querySelector(".openbtn");

    if (window.innerWidth > 768) {
        sidenav.style.left = "0";
        main.style.marginLeft = "250px";
        openbtn.style.left = "250px";
    } else {
        sidenav.style.left = "-250px";
        main.style.marginLeft = "0";
        openbtn.style.left = "0";
    }
};

window.onload = function () {
    window.onresize();
};

document.addEventListener('DOMContentLoaded', function () {
    let currentImageUrl = '';

    async function updateDiscordStatus() {
        try {
            const response = await fetch('https://api.lanyard.rest/v1/users/1171593004725850112');
            const data = await response.json();

            if (response.ok) {
                const status = data.data.discord_status;
                const statusCircle = document.querySelector('.status-circle');

                let circleColor;
                let addRgbAnimation = false;
                switch (status) {
                    case 'online':
                        circleColor = '#4f8832'; // green
                        break;
                    case 'idle':
                        circleColor = '#f79c18'; // yellow
                        break;
                    case 'dnd':
                        circleColor = '#812e25'; // red
                        break;
                    case 'offline':
                        circleColor = '#66b3ff'; // gray
                        break;
                    case 'invisible':
                        addRgbAnimation = true; // trigger RGB animation for invisible status
                        break;
                    default:
                        circleColor = '#000000'; // black
                }

                if (addRgbAnimation) {
                    statusCircle.classList.add('rgb-animated');
                    statusCircle.style.backgroundColor = ''; // remove any static background color
                } else {
                    statusCircle.classList.remove('rgb-animated');
                    statusCircle.style.backgroundColor = circleColor;
                }

                if (data.data.listening_to_spotify) {
                    const spotifyTrack = data.data.spotify;
                    if (spotifyTrack && spotifyTrack.album_art_url) {
                        if (currentImageUrl !== spotifyTrack.album_art_url) {
                            currentImageUrl = spotifyTrack.album_art_url;
                            // Additional logic for handling Spotify album art
                        }
                    }
                } else {
                    if (currentImageUrl !== '') {
                        currentImageUrl = '';
                        // Additional logic for resetting Spotify album art
                    }
                }
            } else {
                console.error('Error fetching Discord status:', data);
            }
        } catch (error) {
            console.error('Error fetching Discord status:', error);
        }
    }

    updateDiscordStatus();
    setInterval(updateDiscordStatus, 1000);
});
