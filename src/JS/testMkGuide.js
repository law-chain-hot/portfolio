import Mask from 'mk-guide'
import 'mk-guide/style.css'


function mkGuide() {
    let mask = new Mask()

    // set the route of guide
    mask.guides = [
        {
            element: ".avatar-img",               // id or class or tag
            description: "this is box 1"    // the words of tip
        },
        {
            element: ".mr-auto",
            description: "222"
        },
        {
            element: ".projectHead",
            description: "333"
        },
    ]
    
    mask.start() // start the mask guide
}


export default mkGuide