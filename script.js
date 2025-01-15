degree = [];
steps = [1,1,0,1,1,1,0];
notes_asc = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H","C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"];
notes_desc = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "B", "H"];
let scale_tonic = String(document.getElementById("original_scale").value);
//let prog = prompt("Chord Progression");
progArray = ['C', 'D', 'E', 'F']; /*prog.split("-");*/
original_scale = [];
modified_scale = [];
modified_prog = [];
progression = [];

scaleFinder(scale_tonic, original_scale);
function scaleFinder(x, y) {
    for(i = 0; i<notes_asc.length; i++) {
        if(notes_asc[i] == x) {
            y.push(notes_asc[i]);
            for(j = 0; j<steps.length-1; j++) {
                if(steps[j] == 1) {
                    y.push(notes_asc[notes_asc.indexOf(y[y.length-1])+2]);
                } else if(steps[j] == 0) {
                    y.push(notes_asc[notes_asc.indexOf(y[y.length-1])+1]);
                }
            }
            break;
        }
    }
}

degFinder();
function degFinder() {
    for(i = 0; i < progArray.length; i++) {
        for(j = 0; j < original_scale.length; j++) {
            if(progArray[i] == original_scale[j]) {
                degree.push(j+1);
            }
        }
    }
}

function progFinder() {
    for(i = 0; i < degree.length; i++) {
        modified_prog.push(modified_scale[degree[i]-1]);
    }
}



function convert() {
    let new_scale = String(document.getElementById("new_scale").value);
    scaleFinder(new_scale, modified_scale);
    progFinder();
    console.log(modified_scale);
    console.log(modified_prog);
}

console.log(progArray);
console.log(original_scale);
console.log(degree);
console.log(original_scale[original_scale.length-1]);