import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border : '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    return (
        <div className="container" style={{color : props.mode==='dark'?'white' : 'black'}}>
            <h1>About us</h1>
            <p>This Web App is created by Irfan Ali Ansari</p>
        </div>
    );
}
