const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomay bolte parini. kala kala sada sada';
const searchString = 'pakhi';
lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
// const doesExist = lyrics.includes('pakhi');
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sada') !== -1){
    console.log('exist inside the string');
}
else{
    console.log('cannot find it');
}

// startsWith
console.log(lyrics.startsWith('2mi'));

// endwith
const fileName = 'mybidata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf');