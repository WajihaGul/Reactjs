import React, { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState('');

    const textOnChange = (event) => {
        setText(event.target.value);
    }

    const textUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const textLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const textClear = () => {
        let newText = '';
        setText(newText);
    }

    const prefixText = () => {
        let newText = 'New Text ' + text;
        setText(newText);
    }

    const suffixText = () => {
        let newText = text + ' New Text ';
        setText(newText);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Write Here</h1>
                <textarea className="form-control" value={text} onChange={textOnChange} style={{ backgroundColor: props.mode === 'black' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                <button className="btn1 mx-2 my-2" onClick={textUpper}>Convert to Uppercase</button>
                <button className="btn2 mx-2 my-2" onClick={textLower}>Convert to Lowercase</button>
                <button className="btn3 mx-2 " onClick={textClear}>Clear Text</button>
                <button className="btn4 mx-2 " onClick={prefixText}>Add Prefix</button>
                <button className="btn5 mx-2 " onClick={suffixText}>Add Suffix</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{(0.008 * text.split(' ').length)} Minutes read.</p>
                <h2>Preview</h2>
                <p><b>{text}</b></p>
            </div>
        </>
    );
}
