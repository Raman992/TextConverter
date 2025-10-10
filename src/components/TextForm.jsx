import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [style, setStyle] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
  });

  const ToUpperClick = () => setText(text.toUpperCase());
  const ToLowerClick = () => setText(text.toLowerCase());
  const ToBoldClick = () =>
    setStyle((prev) => ({
      ...prev,
      fontWeight: prev.fontWeight === "bold" ? "normal" : "bold",
    }));
  const ToItalicClick = () =>
    setStyle((prev) => ({
      ...prev,
      fontStyle: prev.fontStyle === "italic" ? "normal" : "italic",
    }));
  const ToClearClick = () => {
    setText("");
    setStyle({ fontWeight: "normal", fontStyle: "normal" });
  };

  const HandleOnChange = (e) => setText(e.target.value);

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <div
          className="card-header text-center text-white"
          style={{
            background: "linear-gradient(90deg, #525252ff, #411010ff)",
          }}
        >
          <h2 className="mb-0" >{props.heading}</h2>
        </div>

        <div className="card-body bg-light">
          <div className="mb-3">
            <label
              htmlFor="myBox"
              className="form-label fw-semibold text-secondary"
            >
              Enter your text below:
            </label>
            <textarea
              className="form-control shadow-sm"
              id="myBox"
              rows="8"
              value={text}
              style={{
                ...style,
                fontSize: "1rem",
                border: "2px solid #dee2e6",
                borderRadius: "8px",
              }}
              onChange={HandleOnChange}
              placeholder="Start typing here..."
            ></textarea>
          </div>

          <div className="d-flex flex-wrap gap-2 justify-content-center">
            <button className="btn btn-primary" onClick={ToUpperClick}>
              Uppercase
            </button>
            <button className="btn btn-info text-white" onClick={ToLowerClick}>
              Lowercase
            </button>
            <button
              className={`btn ${
                style.fontWeight === "bold" ? "btn-warning" : "btn-success"
              }`}
              onClick={ToBoldClick}
            >
              {style.fontWeight === "bold" ? "Unbold" : "Bold"}
            </button>
            <button
              className={`btn ${
                style.fontStyle === "italic" ? "btn-warning" : "btn-secondary"
              }`}
              onClick={ToItalicClick}
            >
              {style.fontStyle === "italic" ? "Unitalic" : "Italic"}
            </button>
            <button className="btn btn-danger" onClick={ToClearClick}>
              Clear
            </button>
          </div>
        </div>

        <div className="card-footer bg-white">
          <h4 className="text-center text-secondary mb-3">Preview</h4>
          <div
            className="p-3 border rounded bg-white shadow-sm text-center"
            style={{ minHeight: "80px" }}
          >
            <p style={style} className="fs-5 text-dark">
              {text || "Enter text above to preview it here..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
