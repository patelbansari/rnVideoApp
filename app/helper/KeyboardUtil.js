import { Keyboard } from 'react-native';

export const addKeyboardListener = (_keyboardDidShow, _keyboardDidHide) => {
        keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            _keyboardDidShow,
        );
        keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            _keyboardDidHide,
        );
  

}

export const removeKeyBoardListener = () => {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
}

