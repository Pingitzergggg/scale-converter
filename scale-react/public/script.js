steps = [1,1,0,1,1,1,0];
chords = ["", "m", "m", "", "", "m", "dim"];
sus_chords = ["sus4", "sus4", "sus2", "sus2", "sus4", "sus4", "dim"];
modes = ["ionian", "dorian", "phrygian", "lydian", "mixylodian", "aeolian", "locrian"];
notes_asc = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H","C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"];
notes_desc = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "B", "H"];
degree = [];
original_scale = [];
original_prog = [];
modified_scale = [];
modified_prog = [];
let original_scale_tonic;
let modified_scale_tonic;
let showsus = false;
let checkbox = false;
let runnable = false;

function getChordFinder(mode) { // [0] index for chord list, [1] index for sus chord list
    let current;
    let final_list = [];
    let current_list = [];
    let current_suslist = [];
    for(let i = 0; i < modes.length; i++) {
        if (mode == "ionian") {
            current_suslist = sus_chords;
            current_list = chords;
            final_list.push(current_list);
            final_list.push(current_suslist);
            return final_list;
        } else {
            if (modes[i] == mode) {
                current = i;
                console.log(current);
                origin = current;
                break;
            }
        }
    }
    for(let i = 0; i < chords.length+1; i++) {
        if (i < chords.length) {
            if (i = current) {
                console.log(chords[i]);
                current_list.push(chords[i])
                current_suslist.push(sus_chords[i]);
            }
            current++;
        } else {
            current = 0;
            for(let j = 0; j < chords.length; j++) {
                if (j != origin) {
                    current_list.push(chords[j]);
                    current_suslist.push(sus_chords[j]);
                    current++;
                } else {
                    break;
                }
            }
        }
    }
    console.log(current_list);
    final_list.push(current_list);
    final_list.push(current_suslist);
    return final_list;
}

function getModeFinder(mode) {
    let origin;
    let current;
    let current_list = [];
    for(let i = 0; i < modes.length; i++) {
        if (mode == "ionian") {
            current_list = steps;
            return current_list;
        } else {
            if (modes[i] == mode) {
                current = i;
                console.log("current: "+current);
                origin = current;
                break;
            }
        }
    }
    for(let i = 0; i < steps.length+1; i++) {
        if (i < steps.length) {
            if (i = current) {
                current_list.push(steps[i]);
            }
            current++;
        } else {
            current = 0;
            for(let j = 0; j < steps.length; j++) {
                if (j != origin) {
                    current_list.push(steps[j]);
                    current++;
                } else {
                    break;
                }
            }
        }
    }
    console.log(current_list);
    return current_list;
}

function progChordify(prog, chords) {
    let current_list = [];
    for(let i = 0; i < degree.length; i++) {
        current_list.push(prog[i]+chords[(Number(degree[i])-1)]);
    }
    return current_list;
}

function progSussify(prog, sus_chords) {
    let current_list = [];
    for(let i = 0; i < degree.length; i++) {
        current_list.push(prog[i]+sus_chords[(Number(degree[i])-1)]);
    }
    return current_list;
}

function scaleFinder(tonic, scale, mode) { //Finds the scale from the original tonic and fills it into scale
    for(i = 0; i<notes_asc.length; i++) {
        if(notes_asc[i] == tonic) {
            scale.push(notes_asc[i]);
            for(j = 0; j<mode.length-1; j++) {
                if(mode[j] == 1) {
                    scale.push(notes_asc[notes_asc.indexOf(scale[scale.length-1])+2]);
                } else if(mode[j] == 0) {
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
    if (runnable) {
        degree = [];
        original_scale = [];
        original_prog = [];
        modified_scale = [];
        modified_prog = [];
        original_scale_tonic = String(document.getElementById("original_tonic").value).toUpperCase();
        modified_scale_tonic = String(document.getElementById("new_tonic").value).toUpperCase();
        original_mode = getModeFinder(String(document.getElementById("original_mode").value));
        modified_mode = getModeFinder(String(document.getElementById("new_mode").value));
        original_chords = getChordFinder(String(document.getElementById("original_mode").value))[0];
        modified_chords = getChordFinder(String(document.getElementById("new_mode").value))[0];
        original_sus_chords = getChordFinder(String(document.getElementById("original_mode").value))[1];
        modified_sus_chords = getChordFinder(String(document.getElementById("new_mode").value))[1];
        scaleFinder(original_scale_tonic, original_scale, original_mode); console.log("original_scale = "+original_scale);
        document.getElementById("original_scale").value = original_scale.join("-");
        scaleFinder(modified_scale_tonic, modified_scale, modified_mode); console.log("modified_scale = "+modified_scale);
        document.getElementById("new_scale").value = modified_scale.join("-");
        if(!checkbox) {
            original_prog = document.getElementById("prog_notes").value.split("-"); console.log("original_prog = "+original_prog);
            for(let i = 0; i < original_prog.length; i++) {
                original_prog[i] = original_prog[i].toUpperCase();
            }
            degFinder(original_prog); console.log("degree = "+degree);
            document.getElementById("p_degrees").value = degTrans(degree).join("-");
            progFinder(modified_scale, modified_prog); console.log("modified_prog = "+modified_prog);
            document.getElementById("p_original_prog").value = progChordify(original_prog, original_chords).join("-");
            document.getElementById("p_modified_prog").value = progChordify(modified_prog, modified_chords).join("-");
            document.getElementById("p_original_prog_sus").value = progSussify(original_prog, original_sus_chords).join("-");
            document.getElementById("p_modified_prog_sus").value = progSussify(modified_prog, modified_sus_chords).join("-");
        } else {
            degree = document.getElementById("prog_degrees").value.split("-"); console.log("degree = "+degree);
            document.getElementById("p_degrees").value = degTrans(degree).join("-");
            progFinder(original_scale, original_prog); console.log("original_prog = "+original_prog);
            progFinder(modified_scale, modified_prog); console.log("modified_prog = "+modified_prog);
            document.getElementById("p_original_prog").value = progChordify(original_prog, original_chords).join("-");
            document.getElementById("p_modified_prog").value = progChordify(modified_prog, modified_chords).join("-");
            document.getElementById("p_original_prog_sus").value = progSussify(original_prog, original_sus_chords).join("-");
            document.getElementById("p_modified_prog_sus").value = progSussify(modified_prog, modified_sus_chords).join("-");
        }
    }
}

function clearItems() {
    document.getElementById('p_degrees').value = '';
    document.getElementById('p_original_prog').value = '';
    document.getElementById('p_modified_prog').value = '';
    document.getElementById('p_original_prog_sus').value = '';
    document.getElementById('p_modified_prog_sus').value = '';
    document.getElementById("prog_degrees").style = "display: none;";
    // document.getElementById("sus_div").style = "display: none;";
    document.getElementById("original_tonic").value = "";
    document.getElementById("original_scale").value = "";
    document.getElementById("new_tonic").value = "";
    document.getElementById("new_scale").value = "";
    document.getElementById("prog_degrees").value = "";
    document.getElementById("prog_notes").value = "";
    document.getElementById("original_mode").value = "ionian";
    document.getElementById("new_mode").value = "ionian";
    location.reload();
}

function changeCheckbox() {
    if(checkbox) {
        checkbox = false;
        document.getElementById("prog_degrees").style = "display: none;";
        document.getElementById("prog_notes").style = "display: inline;";
        document.getElementById("prog_degrees").value = checkboxNeedsTurn ? document.getElementById("prog_degrees").value : "";
        isInputEmpty("prog_degrees");
    } else {
        checkbox = true;
        document.getElementById("prog_degrees").style = "display: inline";
        document.getElementById("prog_notes").style = "display: none;";
        document.getElementById("prog_notes").value = "";
        isInputEmpty("prog_notes");
    }
}

function changeShowSus() {
    if(showsus) {
        showsus = false;
        document.getElementById("sus_div").style = "display: none;";
    } else {
        showsus = true;
        document.getElementById("sus_div").style = "display: inline;";
    }
}

function changeModes(x) {
    current = document.getElementById(x).value;
    let tonic;
    console.log(current)
    if (x == "original_mode") {
        original_scale = [];
        tonic = String(document.getElementById("original_tonic").value).toUpperCase();
        scaleFinder(tonic, original_scale, getModeFinder(String(current)));
        console.log(original_scale)
        document.getElementById("original_scale").value = original_scale.join("-");
    } else if (x == "new_mode") {
        modified_scale = [];
        tonic = String(document.getElementById("new_tonic").value).toUpperCase();
        scaleFinder(tonic, modified_scale, getModeFinder(String(current)));
        document.getElementById("new_scale").value = modified_scale.join("-");
    }
    if (checkbox == false && document.getElementById("prog_notes").value != "") {
        syntaxChecker("prog_notes");
    }
}

let checkboxNeedsTurn = false; //checks if prog_degrees throws error
function isInputEmpty(input_id) {
    const element = document.getElementById(input_id);
    if (element.value.length != 0) {
        console.log("element value is: '"+element.value+"'");
        checkboxNeedsTurn = input_id == "prog_degrees" ? true : false;
        syntaxChecker(input_id);
    } else {
        console.log("input is empty")
        document.getElementById(input_id+"_error").style = "display: none";
    }
}

function syntaxChecker(input_id) {
    let current;
    let current_list;
    let counter;
    if (input_id == "original_tonic" || input_id == "new_tonic") {
        runnable = true;
        document.getElementById(input_id+"_error").style = "display: none;";
        current = String(document.getElementById(input_id).value).toUpperCase();
        current_list = current.split("");
        console.log(current_list);
        if (current_list.length < 3 || current_list.length != 0) {
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
                document.getElementById(input_id+"_error").style = "display: block;";
                document.getElementById(input_id+"_error").innerHTML = "parameter not valid";
                runnable = false;
            }
        } else {
            document.getElementById(input_id+"_error").innerHTML = "parameter lenght not suitable";
            runnable = false;
        }
        scaleFinder(String(document.getElementById("original_tonic").value).toUpperCase(), original_scale, getModeFinder(String(document.getElementById("original_mode").value)));
    }
    if (input_id == "prog_notes") {
        runnable = true;
        document.getElementById(input_id+"_error").style = "display: none;";
        current = String(document.getElementById("prog_notes").value).toUpperCase();
        console.log(current)
        current_list = current.split("");
        console.log(current_list)
        counter = false;
        for(let i = 0; i < current_list.length; i++) {
            if (current_list[i] == "-") {
                counter = true;
                break;
            }
        }
        if (counter) {
            current_list = current.split("-");
            console.log(original_scale);
            for(let i = 0; i < current_list.length; i++) {
                if (!original_scale.includes(current_list[i])) {
                    runnable = false;
                    document.getElementById(input_id+"_error").style = "display: block;";
                    document.getElementById(input_id+"_error").innerHTML = "One or more parameters are not in given scale";
                }
            }
        } else {
            runnable = false;
            document.getElementById(input_id+"_error").style = "display: block;";
            document.getElementById(input_id+"_error").innerHTML = "Provide '-' character between all parameters!";
        }
        console.log(counter);
        console.log(Number(current.split("-").length) - 1)
    }
    if (input_id == "prog_degrees") {
        runnable = true;
        document.getElementById(input_id+"_error").style = "display: none;";
        current = String(document.getElementById("prog_degrees").value);
        console.log(current)
        current_list = current.split("");
        console.log(current_list)
        counter = false;
        for(let i = 0; i < current_list.length; i++) {
            if (current_list[i] == "-") {
                counter = true;
                break;
            }
        }
        if (counter) {
            current_list = current.split("-");
            console.log(original_scale);
            for(let i = 0; i < current_list.length; i++) {
                if (Number(current_list[i]) < 1 || Number(current_list[i]) > 7) {
                    runnable = false;
                    document.getElementById(input_id+"_error").style = "display: block;";
                    document.getElementById(input_id+"_error").innerHTML = "One or more parameters are not valid degrees";
                }
            }
        } else {
            runnable = false;
            document.getElementById(input_id+"_error").style = "display: block;";
            document.getElementById(input_id+"_error").innerHTML = "Provide '-' character between all parameters!";
        }
    }
    console.log(runnable);
}

function onloadSyntaxChecker() {
    const input_list = ['original_tonic', 'new_tonic', 'prog_degrees', 'prog_notes'];
    
    for(let i = 0; i < input_list.length; i++) {
        isInputEmpty(input_list[i]);
        if (checkboxNeedsTurn && checkbox == false) {
            changeCheckbox();
        }
    }
}