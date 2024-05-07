const videoContainer = document.getElementById("video-container");

function play() {
    videoContainer.style.display = "block"; // Show the video container when play is clicked
    videoContainer.play(); // Start playing the video
}

function pause() {
    videoContainer.pause(); // Pause the video
    videoContainer.style.display = "none"; // Hide the video container when paused
}