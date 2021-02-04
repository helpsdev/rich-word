import './Toolbar.css';

function Toolbar(){
    return(
        <div className="toolbar">
            <select onChange={changeFontFamily}>
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Tahoma">Tahoma</option>
            </select>
            <select onChange={changeFontSize}>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="20">20</option>
                <option value="22">22</option>
            </select>
            <button type="button">Bold</button>
            <button type="button">Italics</button>
            <button type="button">Underline</button>
        </div>
    );
}

function changeFontSize(event) {
    const targetFontSize = event.target.selectedOptions[0].value;
    transformSelection("font-size", `${targetFontSize}px`);
}
function changeFontFamily(event){
    const targetFontFamily = event.target.selectedOptions[0].value;
    transformSelection("font-family", targetFontFamily);

}

function transformSelection(property, newValue) {
    const { baseNode, baseOffset, extentNode, extentOffset} = global.getSelection();
    baseNode.parentElement.style[property] = newValue;
}

export default Toolbar;