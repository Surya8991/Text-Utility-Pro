import React, { useState } from "react";
export default function TextForm(props) {
  //To convert the text to uppercase.
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  //To convert the text to lowercase.
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  //To clear the text.
  const handleclearText = () => {
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  //To extract the words from the text.
  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
  };
  //To extract the number from the text.
  const handleNumExtract = () => {
    const regex = /[0-9]/g;
    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
  };
  //To capitalize the first letter of each word.
  const capitalization = () => {
    let updatedText = "";
    let words = text.split(" ");
    words.forEach((word) => {
      let firstChar = word.charAt(0).toUpperCase();
      updatedText = updatedText + (firstChar + word.slice(1)) + " ";
    });
    setText(updatedText);
  };
  //To convert the text to piglatin.
  function base64Encode() {
    setText(btoa(text));
  }

  // to decode base64 to text

  function base64Decode() {
    setText(atob(text));
  }
  //To reverse the text.
  function handleRevClick() {
    setText(text.split(" ").reverse().join(" "));
  }
  //To remove extra spaces from the text.
  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };
  //To copy to clipboard.
  const handleCopy = () => {
    var text = document.getElementById("myForm");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Copied to clipboard");
  };
  //To add speak function to the text.
  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  // }
  const [text, setText] = useState("");
  return (
    <>
      <div className={`container text-${props.mode==="dark"?"light":"dark"}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor:props.mode==="dark"?"#343a40":"white",color:props.mode==="dark"?"white":"#343a40"}}
            value={text}
            onChange={handleChange}
            id="myForm"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-dark mx-2 my-2" onClick={handleUpperCase}>
          Converting to Upper Case
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleLowerCase}>
          Converting to Lower Case
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleclearText}>
          Clear Text
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handletextExtract}>
          Extract Text
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleNumExtract}>
          Extract Only Numbers
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={capitalization}>
          Capitalize each word
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={base64Encode}>
          Text to Base64
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={base64Decode}>
          Base64 to Text
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleRevClick}>
          Reverse Text
        </button>
        {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}
      </div>
      <div className={`container text-${props.mode==="dark"?"light":"dark"}`}>
        <h1>Text Summary</h1>
        <strong>
          <p>
            {""}
            You have {text.trim().split(" ").length} Words and {text.length}{" "}
            Characters. It takes {0.008 * text.split(" ").length} Minutes to
            read. You have {text.split(".").length} Sentence.
          </p>
        </strong>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Enter your Text to preview it here"}</p>
      </div>
    </>
  );
}
