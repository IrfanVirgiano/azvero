onload = () =>{
        document.body.classList.remove("container");
};

document.getElementById('playButton').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default button click behavior
    var audio = document.getElementById('song');
    audio.currentTime = 90;  // Set the time to 1 minute and 30 seconds (90 seconds)
    audio.play().then(() => {
        console.log("Audio is playing from 1:30");
        // Redirect to the new page after the song starts playing
        setTimeout(function() {
            window.location.href = "flower.html";  // Redirect to flower.html
        }, 500);  // Adjust the delay as needed
    }).catch(error => {
        console.log("Playback failed:", error);
    });
});