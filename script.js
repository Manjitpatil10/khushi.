const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

const openBtn = document.getElementById("openBtn");
const gift = document.getElementById("gift");

const musicBtn = document.getElementById("musicBtn");
const birthdaySong = document.getElementById("birthdaySong");

const wishBtn = document.getElementById("wishBtn");
const wishPopup = document.getElementById("wishPopup");
const closePopup = document.getElementById("closePopup");

const heartsContainer = document.getElementById("hearts-container");

let musicPlaying = false;


/* -------------------------
   OPEN SURPRISE
------------------------- */

function openSurprise() {

    intro.classList.add("hide");

    setTimeout(() => {
        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

    playMusic();

    startHeartAnimation();
}


/* Button */

openBtn.addEventListener("click", openSurprise);


/* Gift click */

gift.addEventListener("click", openSurprise);


/* -------------------------
   MUSIC
------------------------- */

function playMusic() {

    birthdaySong.play()
        .then(() => {

            musicPlaying = true;

            musicBtn.textContent = "🎶";

        })
        .catch(() => {

            console.log("Music needs user interaction.");

        });
}


musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        birthdaySong.pause();

        musicPlaying = false;

        musicBtn.textContent = "🎵";

    } else {

        playMusic();

    }

});


/* -------------------------
   FLOATING HEARTS
------------------------- */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞",
        "🌸",
        "✨"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    const duration =
        5 + Math.random() * 6;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);
}


function startHeartAnimation() {

    setInterval(() => {

        createHeart();

    }, 500);

}


/* -------------------------
   WISH BUTTON
------------------------- */

wishBtn.addEventListener("click", () => {

    wishPopup.classList.remove("hidden");

    createConfetti();

});


/* -------------------------
   CLOSE POPUP
------------------------- */

closePopup.addEventListener("click", () => {

    wishPopup.classList.add("hidden");

});


/* Click outside popup */

wishPopup.addEventListener("click", (event) => {

    if (event.target === wishPopup) {

        wishPopup.classList.add("hidden");

    }

});


/* -------------------------
   CONFETTI
------------------------- */

function createConfetti() {

    const symbols = [
        "🎉",
        "✨",
        "❤️",
        "💕",
        "🎊",
        "🌸"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 25) + "px";

        confetti.style.zIndex = "3000";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            2 + Math.random() * 3;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {

            confetti.remove();

        }, duration * 1000);

    }

}


/* -------------------------
   PAGE LOAD
------------------------- */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
/* -------------------------
   SURPRISE VIDEO
------------------------- */

const videoBtn = document.getElementById("videoBtn");
const videoPopup = document.getElementById("videoPopup");
const closeVideo = document.getElementById("closeVideo");
const surpriseVideo = document.getElementById("surpriseVideo");


videoBtn.addEventListener("click", () => {

    videoPopup.classList.remove("hidden");

    surpriseVideo.currentTime = 0;

    surpriseVideo.play();

    createConfetti();

});


closeVideo.addEventListener("click", () => {

    surpriseVideo.pause();

    surpriseVideo.currentTime = 0;

    videoPopup.classList.add("hidden");

});


videoPopup.addEventListener("click", (event) => {

    if (event.target === videoPopup) {

        surpriseVideo.pause();

        surpriseVideo.currentTime = 0;

        videoPopup.classList.add("hidden");

    }

});
