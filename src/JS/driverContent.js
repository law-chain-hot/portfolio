// Driver
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';


function driver() {
  console.log('driverContent called')
  const driver = new Driver({
    opacity: 0.5,
    stageBackground: '#404746',
    allowClose: false,
  });
  // Define the steps for introduction
  driver.defineSteps([
    {
      element: '.avatar-img',
      popover: {
        className: 'first-step-popover-class',
        title: 'Welcome, this is my img! <br/>(Fake one)',
        description: 
        'Is this your first time to be here? <br/>您是第一次来这里吗? 欢迎~ <br/>您是第一次來這裡嗎? 歡迎~ <br/>ここは初めてですか？ようこそ~<br/>여기가 처음입니까? 환영합니다~',
        position: 'bottom'
      }
    },
    {
      element: '.projectHead',
      popover: {
        title: 'Projects',
        description: 'Which could contain some details',
        position: 'top'
      }
    },

    {
      element: '.project-container h2',
      popover: {
        className: 'first-step-popover-class',
        title: 'Project name',
        // description: 'Nothing especial, move on to next one please~',
        position: 'bottom'
      }
    },
    {
      element: '.project-skill',
      popover: {
        title: 'The skills',
        description: '',
        position: 'bottom'
      }
    },

    // {
    //   element: '.project-description',
    //   popover: {
    //     title: 'Details',
    //     description: 'What it is for',
    //     position: 'bottom'
    //   }
    // },
    {
      element: '.project-container',
      popover: {
        title: "That's all",
        description: 'Thanks, have fun!',
        position: 'bottom'
      }
    },
  ]);
  // Start the introduction
  driver.start();
};

export default driver;