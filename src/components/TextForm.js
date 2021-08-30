import React, { useState } from 'react'
import _ from "lodash";

export default function TextForm(props) {

    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleScClick = () => {
        let newText = _.startCase(text);
        setText(newText);
        props.showAlert("Converted to Capitalize!","success");
        
    }

    const handleClear = () => {
         setText("");
        props.showAlert("Text cleared","success");

         }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed", "success");
    }


    return (
        <>
            <div className="container" style={{color : props.mode==='dark'?'white' : 'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor : props.mode==='dark'?'grey' : 'white',color : props.mode==='dark'?'white' : 'black'}} id="myBox" rows="7"></textarea>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleScClick}> Capitalize</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleClear}> Clear</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                </div>
            </div>
            <div className="container" style={{color : props.mode==='dark'?'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read </p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : "Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    )
}
