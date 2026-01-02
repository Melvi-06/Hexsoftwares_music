
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


  const playBtn = document.getElementById("playBtn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const repeatBtn = document.getElementById("repeatBtn");
  const themeBtn = document.getElementById("themeBtn");
  const progress = document.getElementById("progress");
  const current = document.getElementById("current");
  const duration = document.getElementById("duration");
  const volume = document.getElementById("volume");
  const playlist = document.getElementById("playlist");

  /* LOAD SONG */
  function loadSong(index) {
    const song = songs[index];
    audio.src = song.file;

    const coverImg = document.getElementById("cover");
    if (coverImg) coverImg.src = song.cover;

    const titleEl = document.getElementById("title");
    if (titleEl) titleEl.textContent = song.title;

    const artistEl = document.getElementById("artist");
    if (artistEl) artistEl.textContent = song.artist;

    updatePlaylist();
  }

  /* PLAY / PAUSE */
  function playPause() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  }

  /* NEXT / PREV */
  function nextSong() {
    if (isShuffle) {
      currentSong = Math.floor(Math.random() * songs.length);
    } else {
      currentSong = (currentSong + 1) % songs.length;
      if (!isRepeat && currentSong === 0) audio.pause(); // stop if repeat off
    }
    loadSong(currentSong);
    audio.play();
    playBtn.textContent = "⏸";
  }

  function prevSong() {
    if (isShuffle) {
      currentSong = Math.floor(Math.random() * songs.length);
    } else {
      currentSong = (currentSong - 1 + songs.length) % songs.length;
    }
    loadSong(currentSong);
    audio.play();
    playBtn.textContent = "⏸";
  }

  /* TIME UPDATE */
  audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
      progress.value = (audio.currentTime / audio.duration) * 100;
      current.textContent = formatTime(audio.currentTime);
    }
  });

  progress.addEventListener("input", e => {
    audio.currentTime = (e.target.value / 100) * audio.duration;
  });

  /* AUTOPLAY BY DEFAULT */
  audio.addEventListener("ended", () => {
    nextSong();
  });

  /* VOLUME */
  volume.addEventListener("input", e => {
    audio.volume = e.target.value;
  });

  /* PLAYLIST */
  function updatePlaylist() {
    playlist.innerHTML = "";
    songs.forEach((song, i) => {
      const div = document.createElement("div");
      div.className = "song" + (i === currentSong ? " active" : "");
      div.innerHTML = `
        <img src="${song.cover}">
        <span>${song.title}</span>
      `;
      div.onclick = () => {
        currentSong = i;
        loadSong(i);
        audio.play();
        playBtn.textContent = "⏸";
      };
      playlist.appendChild(div);
    });
  }

  /* FORMAT TIME */
  function formatTime(t) {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  /* SHUFFLE / REPEAT */
  shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    shuffleBtn.style.backgroundColor = isShuffle ? "#1db954" : "";
  });

  repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat;
    repeatBtn.style.backgroundColor = isRepeat ? "#1db954" : "";
  });

  /* DARK / LIGHT THEME */
  themeBtn.addEventListener("click", () => {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  });

  /* BUTTONS EVENT */
  playBtn.addEventListener("click", playPause);

  const nextButton = document.getElementById("nextBtn");
  const prevButton = document.getElementById("prevBtn");
  nextButton?.addEventListener("click", nextSong);
  prevButton?.addEventListener("click", prevSong);

  /* INITIAL LOAD */
  loadSong(0);
  audio.play();
  playBtn.textContent = "⏸";
});
