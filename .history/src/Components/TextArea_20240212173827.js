import { useState } from "react"
import React from 'react'

export default function TextArea(props) {
  
    const textOnChange=(event)=>{
        setText(event.target.value);
    }

    const textUpper=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase","success")
    }

    const textLower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to LowerCase","success")
    }

    const textClear=()=>{
        let newText=' ';
        setText(newText);
        props.showAlert("Cleared the Text Area","info");
    }

    const prefixText=()=>{
        let newText='New Text ' +text;
        setText(newText);
        props.showAlert(`Added Prefix to the Text`,"success")
    }

    const suffixText=()=>{
        let newText= text + ' New Text ';
        setText(newText);
        props.showAlert('Appended Suffix to the Text','success')
    }

    const [text,setText]=useState(' ');

    return (
   <>
    <div className='container'>
        <h1>Write Here</h1>
  <textarea className="form-control" value={text} onChange={textOnChange} id="floatingTextarea" rows={9}></textarea>
  <button className="btn1  mx-2 my-2" onClick={textUpper}  >Convert to Uppercase</button>
  <button className="btn2 mx-2 my-2" onClick={textLower}  >Convert to Lowercase</button>
  <button className="btn3 mx-2 " onClick={textClear}  >Clear Text</button>
  <button className="btn4 mx-2 " onClick={prefixText}  >Add Prefix</button>
  <button className="btn5 mx-2 " onClick={suffixText}  >Add Suffix</button>

  </div>
  <div className="container my-2">
    <h2 >Text Summary</h2>
    <p>{text.split(' ').length} words and {text.length} characters</p>
    <p>{0.008*text.split(' ').length} Minutes read.</p>
    <h2>Preview</h2>
    <p><b>{text}</b></p>
  </div>
  </>
  )
}