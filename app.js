const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-vid video');

const movieList = [
    'videos/hero-1.mp4',
    'videos/hero-2.mp4',
    'videos/hero-3.mp4',
    'videos/hero-4.mp4' // ✅ Fixed extra space
];

let index = 0; // ✅ Start from 0 (first video)

nextButton.addEventListener('click', function () {
    console.log("Current index: " + index); 

    video.setAttribute('src', movieList[index]); // ✅ Set video source before updating index
    video.load();  // ✅ Ensure browser reloads new video
    video.play();  // ✅ Play the new video

    index++; // ✅ Move to the next video AFTER updating

    if (index >= movieList.length) {
        index = 0; // ✅ Reset index to loop back to first video
    }
});
