class TextEditor {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }

    append(x) {
        this.undoStack.push(x);
        this.redoStack = []; // clear redo history
    }

    undo() {
        if (this.undoStack.length > 0) {
            let ch = this.undoStack.pop();
            this.redoStack.push(ch);
        }
    }

    redo() {
        if (this.redoStack.length > 0) {
            let ch = this.redoStack.pop();
            this.undoStack.push(ch);
        }
    }

    read() {
        return this.undoStack.join('');
    }
}


let editor = new TextEditor();

editor.append('A');
editor.append('B');
editor.append('C');
editor.undo();
console.log(editor.read()); // "AB"
editor.redo();
console.log(editor.read()); // "ABC"
