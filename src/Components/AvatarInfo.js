import React from 'react'

import './AvatarInfo.css'

import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { resume } from './../assets/imageRender'
import Button from './Button'

function Avatar() {

    // const useStyles = makeStyles({
    //     root: {
    //         width: 100,
    //     },
    // });
    // const classes = useStyles();

    const MyTooltip = withStyles(theme => ({
        tooltip: {
            //   backgroundColor: '#f5f5f9',
            //   color: 'rgba(0, 0, 0, 0.87)',
            fontSize: 15,
            fontFamily: "Rambla",
            maxWidth: 200
        },
    }))(Tooltip);
    return (

        <div className='avatar-info'>
            <h2 className='name-chinese'> 罗千皓 </h2>
            <h2 className='name'> <span>B</span>rian <span>L</span>uo </h2>
            {/* <p>  </p> */}
            <p id='driver-test'> <strong className="white">@</strong> Engineering Master Student</p>
            <p> <span><strong className="white">@</strong> University of Illinois at Urbana-Champaign</span></p>
            <p> <strong className="white">@</strong> Expectation Graduation: Dec 2020</p>
            <br />
            <p> ww6652890 <strong className="white">[at]</strong> gmail <strong className="white">[dot]</strong> com</p>


            <div className="link-group">
                <MyTooltip title="To My GitHub: github.com/law-chain-hot" arrow placement="bottom-end">
                    <a href="https://github.com/law-chain-hot" className="link-icon">
                        <i className="fab fa-github"></i>
                    </a>
                </MyTooltip>
                <MyTooltip title="To My LinkedIn: linkedin.com/in/qianhao-luo" arrow placement="bottom-end">
                    <a href="https://www.linkedin.com/in/qianhao-luo-472974177" className="link-icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </MyTooltip>
                {/* <MyTooltip title="(￣▽￣)╯  Resume_QianhaoLuo" arrow placement="bottom-end">
                    <a href={resume} className="link-icon">
                        <i className="fas fa-user-astronaut"></i>
                    </a>
                </MyTooltip> */}
            </div>

            {/* <a href="https://github.com/law-chain-hot" className="link-icon">
                    <i class="fab fa-weixin"></i>
                </a> */}
        </div>

    )
}

export default Avatar;
