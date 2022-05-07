import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../src/Index.scss";

import draftToHtml from "draftjs-to-html";

const Draft = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const createMarkup = (html) => {
    // console.log(convertedContent);
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  const textareaHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">Rich Text Editor Example</header>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div> */}
      <textarea
        // disabled
        onChange={textareaHandler}
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
};
export default Draft;
