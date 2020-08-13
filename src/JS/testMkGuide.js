import Mask from 'mk-guide'
import 'mk-guide/style.css'


function mkGuide() {
    let mask = new Mask({
        // buttonColor: "gold", // optional   
        skipButtonColor: "firebrick", // optional
        mouseHover: "true", // optional  default:false
        // mode: "dark", // default: light
        isKeyboard: true,
        isFocus: false,
    })

    // set the route of guide
    mask.guides = [

        {
            // element: '.avatar-info',
            // element: '.avatar-img',
            element: '.link-words',
            description:
                'Is this your first time to be here? <br/>您是第一次来这里吗? 欢迎~ <br/>您是第一次來這裡嗎? 歡迎~ <br/>ここは初めてですか？ようこそ~<br/>여기가 처음입니까? 환영합니다~',
        },
        {
            // element: '.avatar-info',
            // element: '.avatar-img',
            element: '#nav-bar',
            header: 'Nav-bar',
            description:
                'This can highlight the nav bar without modifying the position properity, and you can scroll it to see what happen',
        },
        {
            element:'#driver-test',
            header: 'No bug with MK-Guide',
            description: 'Driver.js cannot highlight the element which is in the element of postion:fixed',
          },
        {
            // element: '.avatar-info',
            element: '.avatar-img',
            description:
                'Is this your first time to be here? <br/>您是第一次来这里吗? 欢迎~ <br/>您是第一次來這裡嗎? 歡迎~ <br/>ここは初めてですか？ようこそ~<br/>여기가 처음입니까? 환영합니다~',
        },
        {
            element: '.projectHead',
            description: 'Which could contain some details',
        },

        {
            element: '.project-container h2',
            description: 'Nothing especial, move on to next one please~',
        },
        {
            element: '.project-skill',
            header: 'Project of skill',
            description: 'Thanks, have fun',
        },

        // {
        //   element: '.project-description',
        //   popover: {
        //     title: 'Details',
        //     description: 'What it is for',
        //     position: 'bottom'
        //   }
        // },
    ]


    mask.start() // start the mask guide
}


export default mkGuide