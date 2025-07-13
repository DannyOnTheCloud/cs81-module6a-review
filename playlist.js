//This constructor function creates a Playlist object
//with methods to add songs, play the first song, skip to the next song,
//and list all songs in the playlist.
function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}
// Adding methods to the Playlist prototype
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};
// This method plays the first song in the playlist
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    // Simulating playing the song
    console.log("Now playing:", this.currentSong);
  }
};
// This method skips to the next song in the playlist
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift(); //This removes the first song from the playlist
    this.currentSong = this.songs[0]; // Now the current song is the new first song
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};
// This method lists all songs in the playlist
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};


let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
// Adding more songs to the playlist
myMix.addSong("Morning Vibes"); // Listing all songs in the playlist
myMix.addSong("Chillhop Beats");// Listing all songs in the playlist
myMix.addSong("Evening Jazz");// Listing all songs in the playlist
myMix.playFirst(); // Playing the first song in the playlist
myMix.skipSong(); // This will skip the first song and play the next one
myMix.listSongs(); // Listing all songs in the playlist