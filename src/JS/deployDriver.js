import React from 'react';
import driver from './driverContent'
import CheckCookie from './checkCookie'

// import Mask from './MaskClass'

// export function Test(){
//     let check = new CheckCookie();
//     console.log('Your cookie will be stored for 1 day')
//     // console.log('here, the check:', check)
//     // console.log('check.checkCookie():', check.checkCookie())
//     if (check.checkCookie()){
//         console.log('driver, called')
//         driver();
//         check.setCookie("gznotes-visited", "true", 1)
//     }
    
//     return (
//         <div/>
//     )

// }


window.onload = function () {
    // let mask = new Mask()
    // mask.guides = [
    //   {
    //     element: ".avatar",
    //     description: "1111"
    //   }
    // ]
    // mask.start()
    
    console.log('============')
    let check = new CheckCookie();
    console.log('Your cookie will be stored for 1 day')
    // console.log('here, the check:', check)
    // console.log('check.checkCookie():', check.checkCookie())
    if (check.checkCookie()){
        console.log('driver, called')
        driver();
        check.setCookie("gznotes-visited", "true", 1)
    }
}



// export function deployDriver() {
//     let check = new CheckCookie();
//     console.log('here')
//     if (check.checkCookie()) {
//         driver();
//         check.setCookie("gznotes-visited", "true", 1)
//     }
// }