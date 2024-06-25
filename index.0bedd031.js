var $b6c5268c81e07e00$exports = {};
// const soundPlayer = new Audio('./C4.mp3');
// soundPlayer.play();
let $b6c5268c81e07e00$var$currentPlayedNote = "C4";
const $b6c5268c81e07e00$var$sounds = [
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4"
];
const $b6c5268c81e07e00$var$playRandomSound = ()=>{
    let whichSoundToPlayNext = Math.floor(Math.random() * $b6c5268c81e07e00$var$sounds.length);
    let currentSound = $b6c5268c81e07e00$var$sounds[whichSoundToPlayNext];
    const soundPlayer = new Audio(`./${currentSound}.mp3`);
    soundPlayer.play();
    $b6c5268c81e07e00$var$currentPlayedNote = currentSound;
    setTimeout(()=>soundPlayer.pause(), 2000);
};
for (let sound of $b6c5268c81e07e00$var$sounds){
    let element = document.getElementById(sound);
    element?.addEventListener("click", ()=>{
        if ($b6c5268c81e07e00$var$currentPlayedNote === sound) {
            element.setAttribute("class", "correct");
            setTimeout(()=>element.setAttribute("class", ""), 500);
        } else {
            let correctElement = document.getElementById($b6c5268c81e07e00$var$currentPlayedNote);
            correctElement?.setAttribute("class", "error");
            setTimeout(()=>correctElement?.setAttribute("class", ""), 500);
        }
        $b6c5268c81e07e00$var$playRandomSound();
    });
}


//# sourceMappingURL=index.0bedd031.js.map
