import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const CheackEditor = () => {
    return (
        <div>
            <h1>Ck Editor</h1>
            <CKEditor editor={ClassicEditor} />
        </div>
    )
};

export default CheackEditor