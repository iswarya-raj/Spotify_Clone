document.addEventListener("DOMContentLoaded", async () => {
    const songList = document.getElementById("songList");
    const audioPlayer = document.getElementById("audioPlayer");

    // Fetch songs from backend
    const res = await fetch("http://localhost:5000/api/songs");
    const songs = await res.json();

    songs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.addEventListener("click", () => {
            audioPlayer.src = song.url;
            audioPlayer.play();
        });
        songList.appendChild(li);
    });
});
