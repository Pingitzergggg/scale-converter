function setFullscreen() {
    const element = document.getElementsByTagName('body')[0];
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        element.requestFullscreen();
    }
}

function setDarkMode(theme) {
    const backgroundColor = document.querySelector(':root');
    if (theme == 'dark') {
        document.getElementById('favicon_moon').style = 'display: none;';
        document.getElementById('favicon_sun').style = 'display: inline-block;';
        backgroundColor.style.setProperty('--color', '#2e2e34');
        backgroundColor.style.setProperty('--nav-color', 'black');
        backgroundColor.style.setProperty('--input-color', 'whitesmoke');
        backgroundColor.style.setProperty('--disabled-input-color', '#c7cacc');
    } else {
        document.getElementById('favicon_sun').style = 'display: none;';
        document.getElementById('favicon_moon').style = 'display: inline-block;';
        backgroundColor.style.setProperty('--color', 'whitesmoke');
        backgroundColor.style.setProperty('--nav-color', '#2b3035');
        backgroundColor.style.setProperty('--input-color', 'white');
        backgroundColor.style.setProperty('--disabled-input-color', '#e9ecef');
    }
}

// localStorage.setItem('theme', null);
function changeDarkMode() {
    let theme = localStorage.getItem('theme'); console.log(theme)
    if (theme == 'dark') {
        localStorage.setItem('theme', 'white');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    theme = localStorage.getItem('theme');
    setDarkMode(theme); console.log("Changed theme to: "+theme);
}

// window.setTimeout(function () { 
//     document.getElementById('progs').focus(); 
// }, 0); 