function playlist(totalUsers) {
    let curPlaylist = new Map();
    //Map() is used for playlist creation because we need to add and delete in an order

    let setRecentlyPlayed = (user, song) => {
        if (curPlaylist.size > totalUsers) {
            const firstUser = curPlaylist.keys().next().value;
            curPlaylist.delete(firstUser);
        }
        if (curPlaylist.has(user)) {
            const curUser = curPlaylist.get(user);
            curUser.unshift(song);
        } else {
            curPlaylist.set(user, [song]);
        }
    }

    let printPlaylist = (user) =>{
        console.log(`Recently Played list of ${user}:`);
        const curUser = curPlaylist.get(user);
        console.log(curUser.songs.join(", "))
    }

    let printFullPlaylist = () => {
        console.log(`Recently Played list of ${user}:`);
        curPlaylist.forEach((songs, user) => {
        console.log(`${user}: ${songs.join(", ")}`);
        });
    }

    let getRecentlyPlayed = (user) => {
        return curPlaylist.get(user) || [];
    }
}