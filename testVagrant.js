function playlist(totalUsers, totalPlaylistCap) {
    curPlaylist = new Map(); //Map() is used for playlist creation because we need to add and delete in an order.

    //setting playlist
    this.setRecentlyPlayed = function (user, song) {
        
        if (curPlaylist.has(user)) {
            const curUser = curPlaylist.get(user);
            if(curUser.length >= totalPlaylistCap){
                curUser.splice(0,1);
                curUser.push(song);
            }
            else curUser.push(song);
        } else {
            curPlaylist.set(user, [song]);
        }
        if (curPlaylist.size > totalUsers) {
            const firstUser = curPlaylist.keys().next().value;
            curPlaylist.delete(firstUser);
        }
    }

    //for getting individual playlists
    this.getRecentlyPlayed = function (user) {
        console.log(`Recently Played list of ${user}: ${curPlaylist.get(user) || []}`);
    }

    //printing the whole playlist
    this.printFullPlaylist = function () {
        console.log(`Recently Played list :`);
        curPlaylist.forEach((songs, user) => {
            console.log(`${user}: ${songs.join(", ")}`);
        });
    }
}
const newPlaylist = new playlist(3, 3); // playlist is a constructor function.


//creating new playlists
newPlaylist.setRecentlyPlayed("Tom", "S1");
newPlaylist.setRecentlyPlayed("Tom", "S2");
newPlaylist.setRecentlyPlayed("Tom", "S3");
newPlaylist.setRecentlyPlayed("Teena", "S1");
newPlaylist.setRecentlyPlayed("Teena", "S2");
newPlaylist.setRecentlyPlayed("Teena", "S3");
newPlaylist.setRecentlyPlayed("Charlie", "S1");
newPlaylist.setRecentlyPlayed("Charlie", "S2");
newPlaylist.setRecentlyPlayed("Charlie", "S3");
newPlaylist.printFullPlaylist();

//for printing individual users playlist
newPlaylist.getRecentlyPlayed("Tom");
newPlaylist.getRecentlyPlayed("Teena");
newPlaylist.getRecentlyPlayed("Charlie");
//usecase when unknown user is called
newPlaylist.getRecentlyPlayed("Dave"); 

//condition when a new song is added after the song capacity is reached
newPlaylist.setRecentlyPlayed("Tom", "S3");
newPlaylist.setRecentlyPlayed("Teena", "S4");
newPlaylist.setRecentlyPlayed("Charlie", "S5");
newPlaylist.printFullPlaylist();

//condition when a new user is added after the user capacity is reached
newPlaylist.setRecentlyPlayed("Racheal", "S6")
newPlaylist.printFullPlaylist();

