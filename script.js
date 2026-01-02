document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio();
  let currentSong = 0;
  let isShuffle = false;
  let isRepeat = false;

   const songs = [
  {
    title: "Euphoria",
    artist: "Peaceful Mix",
    file: "songs/Euphoria.mpeg",
    cover: "images/JKpic.jpg"
  },
  {
    title: "Unstoppable",
    artist: "Peaceful Mix",
    file: "songs/unstoppable.mpeg",
    cover: "images/unstoppable.jpg"
  },
  {
    title: "Darkside",
    artist: "Peaceful Mix",
    file: "songs/darkside.mpeg",
    cover: "images/darkside.jpg"
  },
  {
    title: "Calm Waves",
    artist: "SoundHelix",
    file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
  }, 
  {
     title: "Greedy", 
     artist: "Tate McRae", 
     file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", 
     cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800" 
    },
     {
         title: "Paint The Town Red", 
         artist: "Doja Cat", 
         file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", 
         cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" },
          { title: "Lovin On Me", 
            artist: "Jack Harlow", 
            file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", 
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800" },
     { 
        title: "Houdini", 
        artist: "Dua Lipa", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"
     },
    { 
        title: "Lose Control", 
        artist: "Teddy Swims", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", 
        cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800" 
    }, 
    { 
        title: "Fortnight", 
        artist: "Taylor Swift ft. Post Malone", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", 
        cover: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=800" 
    }, 
    { 
        title: "Espresso", 
        artist: "Sabrina Carpenter", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", 
        cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800" 
    }, 
 
    { 
        title: "Standing Next to You", 
        artist: "Jungkook", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", 
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800" 
    }, 
    { 
        title: "Super Shy", 
        artist: "NewJeans", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", 
        cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800" 
    }, 
    { 
        title: "Perfect Night", 
        artist: "LE SSERAFIM", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", 
        cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800" 
    }, 
    { 
        title: "Drama", 
        artist: "aespa", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3", 
        cover: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=800" 
    }, 
    { 
        title: "Love Lee", 
        artist: "AKMU", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3", 
        cover: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800" 
    }, 
    { 
        title: "Magnetic", 
        artist: "ILLIT", 
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3", 
        cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800" 
    }
];


  const cover = document.getElementById("cover");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const playBtn = document.getElementById("playBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const repeatBtn = document.getElementById("repeatBtn");
  const progress = document.getElementById("progress");
  const current = document.getElementById("current");
  const duration = document.getElementById("duration");
  const volume = document.getElementById("volume");
  const playlist = document.getElementById("playlist");

  function loadSong(index) {
    const song = songs[index];
    audio.src = song.file;
    cover.src = song.cover;
    title.textContent = song.title;
    artist.textContent = song.artist;
    updatePlaylist();
  }

  function playPause() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  }

  function nextSong() {
    currentSong = isShuffle
      ? Math.floor(Math.random() * songs.length)
      : (currentSong + 1) % songs.length;

    loadSong(currentSong);
    audio.play();
  }

  function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audio.play();
  }

  audio.addEventListener("ended", () => {
    if (isRepeat) audio.play();
    else nextSong();
  });

  audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    current.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
  });

  progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });

  volume.addEventListener("input", () => {
    audio.volume = volume.value;
  });

  function updatePlaylist() {
    playlist.innerHTML = "";
    songs.forEach((song, i) => {
      const div = document.createElement("div");
      div.className = "song" + (i === currentSong ? " active" : "");
      div.innerHTML = `<img src="${song.cover}"><span>${song.title}</span>`;
      div.onclick = () => {
        currentSong = i;
        loadSong(i);
        audio.play();
        playBtn.textContent = "⏸";
      };
      playlist.appendChild(div);
    });
  }

  function formatTime(t) {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  playBtn.onclick = playPause;
  nextBtn.onclick = nextSong;
  prevBtn.onclick = prevSong;
  shuffleBtn.onclick = () =>
    shuffleBtn.classList.toggle("active", (isShuffle = !isShuffle));
  repeatBtn.onclick = () =>
    repeatBtn.classList.toggle("active", (isRepeat = !isRepeat));

  
  loadSong(0);
  audio.muted = true;

  audio.play()
    .then(() => {
      audio.muted = false;
      playBtn.textContent = "⏸";
    })
    .catch(() => {
      playBtn.textContent = "▶";
    });
});
