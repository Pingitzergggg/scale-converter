document.getElementById("prog_degrees").style = "display: none;";
steps = [1,1,0,1,1,1,0];
notes_asc = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H","C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"];
notes_desc = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "B", "H"];
degree = [];
original_scale = [];
original_prog = [];
modified_scale = [];
modified_prog = [];
let original_scale_tonic;
let modified_scale_tonic;
let checkbox = false;

function scaleFinder(tonic, scale) { //Finds the scale from the original tonic and fills it into scale
    for(i = 0; i<notes_asc.length; i++) {
        if(notes_asc[i] == tonic) {
            scale.push(notes_asc[i]);
            for(j = 0; j<steps.length-1; j++) {
                if(steps[j] == 1) {
                    scale.push(notes_asc[notes_asc.indexOf(scale[scale.length-1])+2]);
                } else if(steps[j] == 0) {
                    scale.push(notes_asc[notes_asc.indexOf(scale[scale.length-1])+1]);
                }
            }
            break;
        }
    }
}

function degFinder(prog) { //Finds the degrees of the given progression 'prog' and fills it into degree
    for(i = 0; i < prog.length; i++) {
        for(j = 0; j < original_scale.length; j++) {
            if(prog[i] == original_scale[j]) {
                degree.push(j+1);
            }
        }
    }
}

function progFinder(scale, prog) { //Finds the progression of the given degrees in the given scale 'scale' and fills it into 'prog'
    for(i = 0; i < degree.length; i++) {
        prog.push(scale[degree[i]-1]);
    }
}

function convert() {
    original_scale_tonic = String(document.getElementById("original_tonic").value);
    modified_scale_tonic = String(document.getElementById("new_tonic").value);
    scaleFinder(original_scale_tonic, original_scale); console.log("original_scale = "+original_scale);
    document.getElementById("original_scale").value = original_scale;
    scaleFinder(modified_scale_tonic, modified_scale); console.log("modified_scale = "+modified_scale);
    document.getElementById("new_scale").value = modified_scale;
    if(!checkbox) {
        original_prog = document.getElementById("prog_notes").value.split("-"); console.log("original_prog = "+original_prog);
        degFinder(original_prog); console.log("degree = "+degree);
        document.getElementById("p_degrees").value = degree;
        progFinder(modified_scale, modified_prog); console.log("modified_prog = "+modified_prog);
        document.getElementById("p_modified_prog").value = modified_prog;
    } else {
        degree = document.getElementById("prog_degrees").value.split("-"); console.log("degree = "+degree);
        document.getElementById("p_degrees").value = degree;
        progFinder(original_scale, original_prog); console.log("original_prog = "+original_prog);
        progFinder(modified_scale, modified_prog); console.log("modified_prog = "+modified_prog);
        document.getElementById("p_modified_progression").value = modified_prog;
    }
}

function changeCheckbox() {
    if(checkbox) {
        checkbox = false;
        document.getElementById("prog_degrees").style = "display: none;";
        document.getElementById("prog_notes").style = "display: inline;";
    } else {
        checkbox = true;
        document.getElementById("prog_degrees").style = "display: inline";
        document.getElementById("prog_notes").style = "display: none";
    }
}