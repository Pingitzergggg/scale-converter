degree = [1,2,3,4,5,6,7];
steps = [1,1,0,1,1,1,0];
notes_asc = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H","C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"];
notes_desc = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "B", "H"];
let scale_tonic = "C"; /*prompt("Scale Tonic");*/
//let prog = prompt("Chord Progression");
progArray = ['C', 'D', 'E', 'F']; /*prog.split("-");*/
original_scale = [];
progression = [];

for(i = 0; i<notes_asc.length; i++) {
    console.log(i);
    if(notes_asc[i] == scale_tonic) {
        original_scale.push(notes_asc[i]);
        for(j = 0; j<steps.length-1; j++) {
            if(steps[j] == 1) {
                original_scale.push(notes_asc[notes_asc.indexOf(original_scale[original_scale.length-1])+2]);
            } else if(steps[j] == 0) {
                original_scale.push(notes_asc[notes_asc.indexOf(original_scale[original_scale.length-1])+1]);
            }
        }
        break;
    }
}

console.log(progArray);
console.log(original_scale);
console.log(original_scale[original_scale.length-1]);