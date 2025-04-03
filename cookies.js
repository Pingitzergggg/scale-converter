console.log("cookie enabled: "+navigator.cookieEnabled);
console.log("allcooksies: " + document.cookie);

function setCookie(name, value, days) { //type -1 for never expiring, and type -2 for disabling cookie
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    let expires;
    if (days == -1) {
        expires = "expires=Fri 01 Jan 2100 12:00:00 PM UTC";
    } else if (days == -2) {
        expires = "expires=Tue 23 Oct 1956 12:00:00 PM UTC";
    } else {
        expires = "expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + value + ", "+ expires +", path=/";
}

function getCookie(cname, index) { //type the index of the needed data of a cookie, type -1 for core value only, type -2 for full length data
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        let inner_c = c.split(",");
        if (index == -1) {
            let inner_c_valueOnly = inner_c[0].split("=");
            return inner_c_valueOnly[1];
        } else if (index == -2) {
            return c;
        } else if (index < 0 && index != -1) {
            return c;
        } else if (index > inner_c.length) {
            return c;
        } else {
            return inner_c[index];
        }
      }
    }
    return null;
}

function isCookieSet(cname) {
    return getCookie(cname, -1) != null? true : false;
}