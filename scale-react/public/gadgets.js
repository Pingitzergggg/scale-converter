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
        backgroundColor.style.setProperty('--color', 'grey')
        // document.getElementsByTagName('body')[0].style = 'background-color: grey;';
        document.getElementsByClassName('btn').style = 'background-color: grey;';
    } else {
        document.getElementById('favicon_sun').style = 'display: none;';
        document.getElementById('favicon_moon').style = 'display: inline-block;';
        backgroundColor.style.setProperty('--color', 'whitesmoke');
        // document.getElementsByTagName('body')[0].style = 'background-color: whitesmoke;';
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