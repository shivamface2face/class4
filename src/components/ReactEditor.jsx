import React, { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ReactEditor = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
      setEditorState(editorState);
    };





  return (
      <div>
        
          <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
         editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
          />
          
    </div>
  )
}

export default ReactEditor;