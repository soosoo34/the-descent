/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

 let  mountain = [];

// game loop
while (true) {
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
        let moutainToPush = { mountainIndex : i , mountainHeight : mountainH}
        let moutainToFound = mountain.find(element => element.mountainIndex === i);
        console.error(' Moutain to found : ' + moutainToFound)
        if ( !moutainToFound ) {
        mountain.push(moutainToPush)
    }
    if ( moutainToFound ) {
        mountain[moutainToFound.mountainIndex].mountainIndex = i; 
        mountain[moutainToFound.mountainIndex].mountainHeight = mountainH;
    }


}
 

    mountain.sort((a , b ) =>b.mountainHeight - a.mountainHeight)
    console.error(mountain)
    
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
 
        console.log(mountain[0].mountainIndex); 
        // The index of the mountain to fire on.
  
}
