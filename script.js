document.getElementById("prog_degrees").style = "display: none;";
document.getElementById("original_tonic").value = "";
document.getElementById("original_scale").value = "";
document.getElementById("new_tonic").value = "";
document.getElementById("new_scale").value = "";
document.getElementById("prog_degrees").value = "";
document.getElementById("prog_notes").value = "";
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
let runnable = false;

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

function degTrans(degree) {
    let roman_nums = ["I", "II", "III", "IV", "V", "VI", "VII"];
    let current_list = [];
    for(let i = 0; i < degree.length; i++) {
        current_list.push(roman_nums[Number(degree[i]) - 1]);
    }
    return current_list;
}

function progFinder(scale, prog) { //Finds the progression of the given degrees in the given scale 'scale' and fills it into 'prog'
    for(i = 0; i < degree.length; i++) {
        prog.push(scale[degree[i]-1]);
    }
}

function convert() {
    degree = [];
    original_scale = [];
    original_prog = [];
    modified_scale = [];
    modified_prog = [];
    original_scale_tonic = String(document.getElementById("original_tonic").value).toUpperCase();
    modified_scale_tonic = String(document.getElementById("new_tonic").value).toUpperCase();
    scaleFinder(original_scale_tonic, original_scale); console.log("original_scale = "+original_scale);
    document.getElementById("original_scale").value = original_scale.join("-");
    scaleFinder(modified_scale_tonic, modified_scale); console.log("modified_scale = "+modified_scale);
    document.getElementById("new_scale").value = modified_scale.join("-");
    if(!checkbox) {
        original_prog = document.getElementById("prog_notes").value.split("-"); console.log("original_prog = "+original_prog);
        for(let i = 0; i < original_prog.length; i++) {
            original_prog[i] = original_prog[i].toUpperCase();
        }
        degFinder(original_prog); console.log("degree = "+degree);
        document.getElementById("p_degrees").innerHTML = degTrans(degree).join("-");
        progFinder(modified_scale, modified_prog); console.log("modified_prog = "+modified_prog);
        document.getElementById("p_original_prog").innerHTML = original_prog.join("-");
        document.getElementById("p_modified_prog").innerHTML = modified_prog.join("-");
    } else {
        degree = document.getElementById("prog_degrees").value.split("-"); console.log("degree = "+degree);
        document.getElementById("p_degrees").innerHTML = degTrans(degree);
        progFinder(original_scale, original_prog); console.log("original_prog = "+original_prog);
        progFinder(modified_scale, modified_prog); console.log("modified_prog = "+modified_prog);
        document.getElementById("p_original_prog").innerHTML = original_prog;
        document.getElementById("p_modified_progression").innerHTML = modified_prog;
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

function syntaxChecker(input_id) {
    let current;
    let current_list;
    if (input_id == "original_tonic" || input_id == "new_tonic") {
        current = String(document.getElementById(input_id).value).toUpperCase();
        current_list = current.split("");
        console.log(current_list);
        if (current_list.length < 3 && current_list.length != 0) {
            console.log("smaller then 3")
            let list_item = [];
            if (current_list.length == 1) {
                list_item = current_list[0];
            } else if (current_list.length == 2) {
                for(let i = 0; i < current_list.length; i++) {
                    list_item += current_list[i];
                }
            }
            console.log(list_item);
            if (!notes_asc.includes(list_item)) {
                alert("parameter not valid");
                runnable = false;
            } else {
                runnable = true;
            }
        } else {
            alert("parameter lenght not suitable");
            runnable = false;
        }
        scaleFinder(String(document.getElementById(input_id).value).toUpperCase(), original_scale);
    }
    if (input_id == "prog_notes") {
        current = document.getElementById(input_id).value;
        current_list = current.split("-");
        for(let i = 0; i < current_list.length; i++) {
            current_list[i] = current_list[i].toUpperCase();
        }
        for(let i = 0; i < current_list.length; i++) {
            if (!(current_list[i].split("").length > 2) || !(current_list[i].split("")[1] != "#")) {
                if (!original_scale.includes(current_list[i])) {
                    console.log(current_list[i])
                    alert("one or more parameters are not valid");
                    runnable = false;
                } else {
                    runnable = true;
                }
            } else {
                runnable = false;
                alert("separate parameters with '-' symbol!");
            }
        }
    }
    console.log(runnable);
}