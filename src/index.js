import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import './styles/style.css';

ReactDOM.render(<Router />, document.getElementById('root'));

let verticalDragging = false;
let leftWidth = window.innerWidth / 2;
let rightWidth = window.innerWidth - leftWidth - 1;
let editorWidthRatio = leftWidth / window.innerWidth;
window.errorMarks = [];

if (document.getElementById('editorSkeleton')) {

    let root = document.getElementById('root');
    let runButton = document.getElementById('run-button');
    let verticalSplitter = document.getElementById('verticalSplitter');
    let editorSkeleton = document.getElementById('editorSkeleton');
    let errorLog = document.getElementById("errorLog");
    let editorBoxLeft = document.getElementById('editorBoxLeft');
    let editorBoxRight = document.getElementById('editorBoxRight');
    let canvas = document.getElementById("canvas");
    let sampleButton = document.getElementById('samples');
    let hamburgerButton = document.getElementById('hamburger');
    let sampleDropdown = document.getElementById("dropdown");
    let sampleDropdownMobile = document.getElementById("dropdown-mobile");
    var modal = document.getElementById("modal");
    let batchesButton = document.getElementById('batches');
    let overdrawButton = document.getElementById('overdraw');
    let ppaaButton = document.getElementById('ppaa');
    let collapseXamlButton = document.getElementById('collapseXaml');

    resizeEditor();
    resetCursor();

    sampleButton.onclick = () => {
        sampleDropdown.classList.toggle("show");
    }

    hamburgerButton.onclick = () => {
        sampleDropdownMobile.classList.toggle("show");
    }

    batchesButton.onclick = () => {
        if (!batchesButton.classList.contains('button-active')) {
            batchesButton.classList.add('button-active');
            overdrawButton.classList.remove('button-active');
        }else{
            batchesButton.classList.remove('button-active');
        } 
        updateViewFlags();
    }

    overdrawButton.onclick = () => {
        if (!overdrawButton.classList.contains('button-active')) {
            overdrawButton.classList.add('button-active');
            batchesButton.classList.remove('button-active');
        }else{
            overdrawButton.classList.remove('button-active');
        } 
        updateViewFlags();
    }

    ppaaButton.onclick = () => {
        if (!ppaaButton.classList.contains('button-active')) {
            ppaaButton.classList.add('button-active');
        }else{
            ppaaButton.classList.remove('button-active');
        } 
        updateViewFlags();
    }

    collapseXamlButton.onclick = () => {
        if (!collapseXamlButton.classList.contains('collapsed')) {
            collapseXamlButton.classList.add('collapsed');
            editorBoxLeft.style.height= '32px';
            editorBoxRight.style.height= '100%';
            window.dispatchEvent(new Event('resize'));
            runButton.style.display = 'none';
        }else{
            collapseXamlButton.classList.remove('collapsed');
            editorBoxLeft.style.height= '';
            editorBoxRight.style.height= '50%';
            window.dispatchEvent(new Event('resize'));
            runButton.style.display = 'block';
        } 
    }

    window.addEventListener('resize', () => {
        leftWidth = Math.round(window.innerWidth * editorWidthRatio);
        rightWidth = window.innerWidth - leftWidth - 1;
        editorWidthRatio = Math.min(0.8, leftWidth / window.innerWidth);
        resizeEditor();
        if(window.innerWidth > 600){
            collapseXamlButton.classList.remove('collapsed');
            editorBoxLeft.style.height= '';
            editorBoxRight.style.height= '';
        }
    });

    document.addEventListener('mousedown', function (e) {
        verticalDragging = e.target === verticalSplitter;
    });

    document.addEventListener('mousemove', function (e) {
        e.preventDefault();
        if (verticalDragging) handleVerticalResize(e);
        resetCursor();
    });

    document.addEventListener('mouseup', function (e) {
        verticalDragging = false;
        resetCursor();
    });

    document.addEventListener('mouseout', function (e) {
        resetCursor();
    });

    function updateViewFlags(){
        let flags = 0 |
            (batchesButton.classList.contains('button-active') ? 2 : 0) |
            (overdrawButton.classList.contains('button-active') ? 4 : 0) |
            (ppaaButton.classList.contains('button-active') ? 16 : 0);
        window.Module.ccall('SetViewFlags', null, ['number'], [flags]);
    }

    function resetCursor() {
        editorSkeleton.style.pointerEvents = 'auto';
        root.style.cursor = 'auto';
    }

    function handleVerticalResize(e) {
        leftWidth = Math.round(e.clientX);
        rightWidth = window.innerWidth - leftWidth - 1;
        editorWidthRatio = Math.min(0.8, leftWidth / window.innerWidth);
        window.dispatchEvent(new Event('resize'));
    }

    function resizeEditor() {
        editorSkeleton.style.pointerEvents = 'none';
        root.style.cursor = 'ew-resize';
        editorBoxLeft.style.width = leftWidth + 'px';
        editorBoxRight.style.width = rightWidth + 'px';
        if (rightWidth < 450) {
            document.querySelector('#rightFooter .right').style.display = 'none';
            document.querySelector('#rightFooter .center').style.cssText = 'position: relative;float: right;transform: none;top: 0;left: 0;';
        } else {
            if (window.screen.width > 1000) {
                document.querySelector('#rightFooter .right').style.display = 'flex';
                document.querySelector('#rightFooter .center').style.cssText = '';
            }
        }
        resizeCanvas();
    }

    function resizeCanvas() {
        if(canvas){
            canvas.width = editorBoxRight.clientWidth;
            canvas.height = editorBoxRight.clientHeight - 32;
        }
    }

    function generateErrorMessage(log, lineNumber) {
        let node = document.createElement("div");
        let errorText = "";
        if (lineNumber && window.codemirror.getLine(lineNumber-1)) errorText = "Line " + lineNumber + log.substring(log.indexOf(")") + 1);
        else errorText = log.substring(log.indexOf("]") + 1);
        let errorMessage = document.createTextNode(errorText);
        let iconBg = document.createElement("div");
        iconBg.className = "errorIconBg";
        let icon = document.createElement("i");
        root.style.userSelect = 'auto';
        icon.className = "fas fa-times-circle";
        node.appendChild(iconBg);
        node.appendChild(icon);
        node.appendChild(errorMessage);
        node.classList.add('error');
        node.style.cursor = 'pointer';
        if (lineNumber) node.onclick = () => {
            window.codemirror.focus();
            window.codemirror.setCursor({
                line: lineNumber - 1,
                ch: window.codemirror.getLine(lineNumber - 1).length
            });
            var coord = window.codemirror.charCoords({ line: lineNumber - 1, ch: 0 }, "local");
            var middleHeight = window.codemirror.getScrollerElement().offsetHeight / 2;
            window.codemirror.scrollTo(coord.left, coord.top - middleHeight);
        }
        errorLog.appendChild(node);
    }

    function hightlightLine(lineNumber) {
        try {
            if (window.codemirror.getLine(lineNumber)) {
                window.errorMarks.push(
                    window.codemirror.markText(
                        { line: lineNumber, ch: 0 },
                        { line: lineNumber, ch: 10000 },
                        {
                            className: 'highlighted',
                            inclusiveLeft: true,
                            inclusiveRight: true
                        })
                )
            }
        } catch (err) { console.err(err) }
    }

    let _privateError = console.error;
    console.error = function () {
        _privateError.apply(console, arguments);
        var logs = Array.prototype.slice.call(arguments);
        logs.forEach(log => {
            if (log.includes("[NOESIS/E]")) {
                let lineNumber = log.substring(log.indexOf("(") + 1, log.indexOf(")"));
                generateErrorMessage(log, lineNumber);
                hightlightLine(lineNumber - 1);
            }
        });
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        if (!event.target.matches('.dropbtn')) {
            if (sampleDropdown.classList.contains('show')) {
                sampleDropdown.classList.remove('show');
            }
        }
        if (!event.target.matches('.dropbtn-mobile')) {
            if (sampleDropdownMobile.classList.contains('show')) {
                sampleDropdownMobile.classList.remove('show');
            }
        }
    }
}

