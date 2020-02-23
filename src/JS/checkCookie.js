
class CheckCookie {
    constructor(){
        this.checkCookie = this.checkCookie.bind(this);
        this.isNewVisitor = this.isNewVisitor.bind(this);
        this.setCookie = this.setCookie.bind(this);
        this.getCookie = this.getCookie.bind(this);
        console.log('CheckCookie called')
    }

    checkCookie() {
        var newVisitor = this.isNewVisitor();// if you are new here
        if (newVisitor === true) {
            // alert('~~');

            // Marked：the cookie will be stored for 5 days
            // this.setCookie("gznotes-visited", "true", 5);
        }
        return newVisitor;
    }



    isNewVisitor() {
        // read if it is new visitisitor
        var flg = this.getCookie("gznotes-visited");
        if (flg === "") {
            return true;
        } else {
            return false;
        }
    }

    // wirte cookie
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
    }

    // read cookie
    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        // console.log(ca)
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
} 

export default CheckCookie;
