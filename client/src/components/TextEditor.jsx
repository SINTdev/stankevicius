import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function TextEditor(props) {
  return (
    <div className="__TEXTEDITOR__ w-full">
      <CKEditor
        editor={ClassicEditor}
        className="min-h-[10rem]"
        data={props?.content}
        onReady={(editor) => {
          // console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          // props?.onChange({
          //   target: {
          //     name: "content",
          //     value: editor.getData(),
          //   },
          // });
        }}
        onBlur={(event, editor) => {
          // console.log("Blur.", editor);
          props?.onChange({
            target: {
              name: "content",
              value: editor.getData(),
            },
          });
        }}
        onFocus={(event, editor) => {
          // console.log("Focus.", editor);
        }}
      />
    </div>
  );
}
