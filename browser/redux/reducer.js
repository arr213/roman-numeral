import { SWITCH_INPUT_TYPE, UPDATE_DECIMAL, UPDATE_ROMAN } from './action-creators';
import romanToDecimal from '../utilities/romanToDecimal';
import decimalToRoman from '../utilities/decimalToRoman';

const defaultState = {
  inputType: 'roman',
  decimal: '',
  roman: '',
  convertedDecimal: '',
  convertedRoman: ''
}

function reducer(state = defaultState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case SWITCH_INPUT_TYPE:
      newState.convertedRoman = '';
      newState.convertedDecimal = '';
      state.inputType === 'roman' ?
        newState.inputType = 'decimal'
        : newState.inputType = 'roman';
      break;

    case UPDATE_DECIMAL:
      newState.decimal = action.decimal;
      newState.convertedRoman = decimalToRoman(action.decimal);
      break;

    case UPDATE_ROMAN:
      newState.roman = action.roman;
      newState.convertedDecimal = romanToDecimal(action.roman);
      break;

    default:
      break;
  }

  return newState;
}


export default reducer;
