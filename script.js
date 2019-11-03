class keyboard {
    config = [
        [['BackQuote', 'ё', 'Ё','`','~'], ['Digit1','1','!','1','!'], ['Digit2','2','"','2','@'], ['Digit3','3','№','3','#'], ['Digit4','4',';','4','$'], ['Digit5','5','%','5','%'], ['Digit6','6',':','6','^'], ['Digit7','7','?','7','&'], ['Digit8','8','*','8','*'], ['Digit9','9','(','9','('], ['Digit0','0',')','0',')'], ['Minus','-','_','-','_'], ['Equal','=','+','=','+'], ['Backspace','Backspace','Backspace','Backspace','Backspace', 90]],
        [['Tab', 'Tab', 'Tab','Tab','Tab'], ['KeyQ','й','Й','q','Q'], ['KeyW','ц','Ц','w','W'], ['KeyE','у','У','e','E'], ['KeyR','к','К','r','R'], ['KeyT','е','Е','t','T'], ['KeyY','н','Н','y','Y'], ['KeyU','г','Г','u','U'], ['KeyI','ш','Ш','i','I'], ['KeyO','щ','Щ','o','O'], ['KeyP','з','З','p','P'], ['BracketLeft','х','Х','[','{'], ['BracketRight','ъ','Ъ',']','}'], ['Backslash', '\\', '/', '\\', '|'], ['Delete', 'Delete', 'Delete', 'Delete', 'Delete']],
        [['CapsLock', 'CapsLock', 'CapsLock','CapsLock','CapsLock', 70], ['KeyA','й','Й','a','A'], ['KeyS','ц','Ц','s','S'], ['KeyD','у','У','d','D'], ['KeyF','к','К','f','F'], ['KeyG','е','Е','g','G'], ['KeyH','н','Н','h','H'], ['KeyJ','г','Г','j','J'], ['KeyK','ш','Ш','k','K'], ['KeyL','щ','Щ','l','L'], ['Semicolon','ж','Ж',';',':'], ['Quote','э','Э','\'','"'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 110]],
        [['ShiftLeft', 'ShiftLeft', 'ShiftLeft','ShiftLeft','ShiftLeft', 90], ['KeyZ','я','Я','z','Z'], ['KeyX','ч','Ч','x','X'], ['KeyC','с','С','c','C'], ['KeyV','м','М','v','V'], ['KeyB','и','И','b','B'], ['KeyN','т','Т','n','N'], ['KeyM','ь','Ь','m','M'], ['Comma','б','Б',',','<'], ['Period','ю','Ю','.','>'], ['Slash','.',',','/','?'], ['RowTop','RowTop','RowTop','RowTop','RowTop'], ['ShiftRight', 'ShiftRight', 'ShiftRight', 'ShiftRight', 'ShiftRight', 90]],
        [['ControlLeft', 'ControlLeft', 'ControlLeft','ControlLeft','ControlLeft', 65], ['Win','Win','Win','Win','Win'], ['AltLeft','AltLeft','AltLeft','AltLeft','AltLeft'], ['Space','Space','Space','Space','Space', 315], , ['AltRight','AltRight','AltRight','AltRight','AltRight'], ['RowLeft','RowLeft','RowLeft','RowLeft','RowLeft'], ['RowDown','RowDown','RowDown','RowDown','RowDown'], ['RowRight','RowRight','RowRight','RowRight','RowRight'], ['ControlRight','ControlRight','ControlRight','ControlRight','ControlRight']]
    ];

    constructor(elementKeyboard) {
        this.config.forEach((rowConfig) => {
            const row = document.createElement('div');
            elementKeyboard.append(row);
            row.className = 'row';

            rowConfig.forEach((buttonConfig) => {
                const button = document.createElement('div');
                row.append(button);
                button.innerHTML = buttonConfig[2];
                button.className = 'button';

                if(buttonConfig[5]) {
                    button.style.width = buttonConfig[5] + 'px';
                }
            })
        })
        console.log(elementKeyboard);
    }
}

new keyboard(document.getElementById("keyboard"));


















class button {
    constructor(buttonConfig) {
        console.log(buttonConfig);
    }
}



