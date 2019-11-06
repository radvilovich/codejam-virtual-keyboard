class Button {
    buttonConfig;
    callback;
    keyboard;
    buttonElement = document.createElement('div');
    constructor(buttonConfig, callback, keyboard) {
        this.buttonConfig = buttonConfig;
        this.callback = callback;
        this.keyboard = keyboard;
        this.setElementParams();        
        this.events();
    }

    setElementParams() {
        this.buttonElement.innerHTML = this.buttonConfig['ru'];
        this.buttonElement.className = 'button'; 
        
        if(this.buttonConfig['width']) {
            this.buttonElement.style.width = this.buttonConfig['width'] + 'px';
        }
    }

    getButtonElement() {
        return this.buttonElement;
    }

    events() {
        this.buttonElement.addEventListener( "click" , () => {
            this.callback(this.buttonConfig);
            this.buttonElement.className = 'button round';
            setTimeout(() => {
                this.buttonElement.className = 'button';
            }, 200);

            if (this.buttonConfig['key'] === 'CapsLock')  {
                this.keyboard.isCapsPressed = !this.keyboard.isCapsPressed;
                console.log(this.keyboard.isCapsPressed);
                let key;
                if(this.isCapsPressed) {
                    key = 'RU';
                } else {
                    key = 'ru';
                }
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.code === this.buttonConfig['key'])  {
                this.buttonElement.className = 'button active';

                setTimeout(() => {
                    this.buttonElement.className = 'button';
                }, 200);
            }

            setTimeout(() => {
                if (event.code === 'CapsLock')  {
                    let key;
                    if(this.keyboard.isCapsPressed) {
                        key = 'RU';
                    } else {
                        key = 'ru';
                    }
                    this.buttonElement.innerHTML = this.buttonConfig[key];
                }
            }, 0);
            
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

    buttonsWithoutValue = [
        'Tab', 
        'CapsLock', 
        'ShiftLeft', 
        'ControlLeft', 
        'Win', 
        'AltLeft',  
        'AltRight', 
        'ControlRight',
        'ShiftRight',
        'Enter',
        'Delete',
        'Backspace'
    ];

    isCapsPressed = false;

    elementTextarea; // DOM-Element #textarea
    constructor(elementKeyboard, elementTextarea) {
        this.elementTextarea = elementTextarea;
        console.log(this.elementTextarea);
        this.config.forEach((rowConfig) => {
            const row = document.createElement('div');
            elementKeyboard.append(row);
            row.className = 'row';

            rowConfig.forEach((buttonConfig) => {
                const newButtonConfig = this.changeButtonConfig(buttonConfig);

                const button = new Button(newButtonConfig, this.changeInputValue, this);
                row.append(button.getButtonElement());
            })
        })
        this.events();
    }

    events() {
        
        document.addEventListener('keydown', (event) => {
            if (event.code === 'CapsLock')  {
                this.isCapsPressed = !this.isCapsPressed;
            }
        });
    }

    changeButtonConfig(buttonConfig) {
        let newConfig = {
            key: buttonConfig[0],
            ru: buttonConfig[1],
            RU: buttonConfig[2],
            en: buttonConfig[3],
            EN: buttonConfig[4],
            width: buttonConfig[5]
        };

        if(this.buttonsWithoutValue.includes(buttonConfig[0])) {
            newConfig.text = buttonConfig[1];
        }

        return newConfig;
    }

    changeInputValue = (buttonConfig) => {
        if (!buttonConfig.text) {
            let key;
            if(this.isCapsPressed) {
                key = 'RU';
            } else {
                key = 'ru';
            }
            this.elementTextarea.value += buttonConfig[key];
        }
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



