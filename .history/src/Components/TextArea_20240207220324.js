import { useState } from "react"
import React from 'react'

export default function TextArea() {
  
    const textOnChange=(event)=>{
        setText(event.target.value);
    }

    const textUpper=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const textLower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const textClear=()=>{
        let newText=' ';
        setText(newText);
    }

    const prefixText=()=>{
        let newText='New Text ' +text;
        setText(newText);
    }

    const suffixText=()=>{
        let newText= text + ' New Text ';
        setText(newText);
    }

    const [text,setText]=useState(' ');

    return (
   <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Write Here</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  <button className="btn1  mx-2 my-2" onClick={textUpper}  >Convert to Uppercase</button>
  <button className="btn2 mx-2 my-2" onClick={textLower}  >Convert to Lowercase</button>
  <button className="btn3 mx-2 " onClick={textClear}  >Clear Text</button>
  <button className="btn4 mx-2 " onClick={prefixText}  >Add Prefix</button>
  <button className="btn5 mx-2 " onClick={suffixText}  >Add Suffix</button>

  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2 >Text Summary</h2>
    <p>{text.split(' ').length} words and {text.length} characters</p>
    <p>{0.008*text.split(' ').length} Minutes read.</p>
    <h2>Preview</h2>
    <p><b>{text}</b></p>
  </div>
  </>
  )
}