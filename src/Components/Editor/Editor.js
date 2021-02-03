import "./Editor.css";

function Editor(){
    return(
        <div className="container">
            <div className="editor" contentEditable data-editor>
                <div>Welcome to Rich-Word</div>
            </div>
            <button type="button" onClick={clear}>Clear</button>
        </div>
        
    )
}

function getEditor(){
    return document.querySelector("[data-editor]");
}

function clear(){
    const editor = getEditor();
    editor.innerHTML = "";
}

export default Editor;