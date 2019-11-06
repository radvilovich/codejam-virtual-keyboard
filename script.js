class Button {
    buttonConfig;
    callback;
    buttonElement = document.createElement('div');
    constructor(buttonConfig, callback) {
        this.buttonConfig = buttonConfig;
        this.callback = callback;
        this.setElementParams();        
        this.events();
    }

    setElementParams() {
        this.buttonElement.innerHTML = this.buttonConfig[1];
        this.buttonElement.className = 'button'; 
        
        if(this.buttonConfig[5]) {
            this.buttonElement.style.width = this.buttonConfig[5] + 'px';
        }
    }

    getButtonElement() {
        return this.buttonElement;
    }

    events() {
        this.buttonElement.addEventListener( "click" , () => {
            this.callback(this.buttonConfig);
        });

        document.addEventListener('keydown', (event) => {
            if (event.code === this.buttonConfig[0])  {
                console.log(this.buttonElement);
                this.buttonElement.className = 'button active';

                setTimeout(() => {
                    this.buttonElement.className = 'button';
                }, 200);
            }
          });
    }
}

class Keyboard {
    //config symbols for buttons of keyboard
    config = [
        [['BackQuote', 'ё', 'Ё','`','~'], ['Digit1','1','!','1','!'], ['Digit2','2','"','2','@'], ['Digit3','3','№','3','#'], ['Digit4','4',';','4','$'], ['Digit5','5','%','5','%'], ['Digit6','6',':','6','^'], ['Digit7','7','?','7','&'], ['Digit8','8','*','8','*'], ['Digit9','9','(','9','('], ['Digit0','0',')','0',')'], ['Minus','-','_','-','_'], ['Equal','=','+','=','+'], ['Backspace','Backspace','Backspace','Backspace','Backspace', 90]],
        [['Tab', 'Tab', 'Tab','Tab','Tab'], ['KeyQ','й','Й','q','Q'], ['KeyW','ц','Ц','w','W'], ['KeyE','у','У','e','E'], ['KeyR','к','К','r','R'], ['KeyT','е','Е','t','T'], ['KeyY','н','Н','y','Y'], ['KeyU','г','Г','u','U'], ['KeyI','ш','Ш','i','I'], ['KeyO','щ','Щ','o','O'], ['KeyP','з','З','p','P'], ['BracketLeft','х','Х','[','{'], ['BracketRight','ъ','Ъ',']','}'], ['Backslash', '\\', '/', '\\', '|'], ['Delete', 'Del', 'Del', 'Del', 'Del']],
        [['CapsLock', 'CapsLk', 'CapsLk','CapsLk','CapsLk', 80], ['KeyA','й','Й','a','A'], ['KeyS','ц','Ц','s','S'], ['KeyD','у','У','d','D'], ['KeyF','к','К','f','F'], ['KeyG','е','Е','g','G'], ['KeyH','н','Н','h','H'], ['KeyJ','г','Г','j','J'], ['KeyK','ш','Ш','k','K'], ['KeyL','щ','Щ','l','L'], ['Semicolon','ж','Ж',';',':'], ['Quote','э','Э','\'','"'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 100]],
        [['ShiftLeft', 'Shift', 'Shift','Shift','Shift', 90], ['KeyZ','я','Я','z','Z'], ['KeyX','ч','Ч','x','X'], ['KeyC','с','С','c','C'], ['KeyV','м','М','v','V'], ['KeyB','и','И','b','B'], ['KeyN','т','Т','n','N'], ['KeyM','ь','Ь','m','M'], ['Comma','б','Б',',','<'], ['Period','ю','Ю','.','>'], ['Slash','.',',','/','?'], ['RowTop','▲','▲','▲','▲'], ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift', 90]],
        [['ControlLeft', 'Ctrl', 'Ctrl','Ctrl','Ctrl', 65], ['Win','Win','Win','Win','Win'], ['AltLeft','Alt','Alt','Alt','Alt'], ['Space',' ',' ',' ',' ', 315], , ['AltRight','Alt','Alt','Alt','Alt'], ['RowLeft','◄','◄','◄','◄'], ['RowDown','▼','▼','▼','▼'], ['RowRight','►','►','►','►'], ['ControlRight','Ctrl','Ctrl','Ctrl','Ctrl']]
    ];

    elementTextarea; // DOM-Element #textarea
    constructor(elementKeyboard, elementTextarea) {
        this.elementTextarea = elementTextarea;
        console.log(this.elementTextarea);
        this.config.forEach((rowConfig) => {
            const row = document.createElement('div');
            elementKeyboard.append(row);
            row.className = 'row';

            rowConfig.forEach((buttonConfig) => {
                const button = new Button(buttonConfig, this.changeInputValue);
                row.append(button.getButtonElement());
            })
        })
        console.log(elementKeyboard);

    }

    changeInputValue = (buttonConfig) => {
        this.elementTextarea.value += buttonConfig[2];
        console.log(this.elementTextarea);
        
    }

    
}

// generation elements
class WorkArea {
    constructor(body) {
        const textareaWrapper = document.createElement('div');
        body.append(textareaWrapper);
        const textarea = document.createElement('textarea');
        body.append(textarea);
        textarea.className = 'textarea';

        const keyboardWrapper = document.createElement('div');
        body.append(keyboardWrapper);
        const keyboard = document.createElement('div');
        body.append(keyboard);
        keyboard.className = 'keyboard';

        new Keyboard(keyboard, textarea); //create instance of classes Keyboard

    }
} 

const body = document.getElementById("body"); // get DOM-Element #body
new WorkArea(body); //create instance of class WorkArea



