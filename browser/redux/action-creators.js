export const SWITCH_INPUT_TYPE = 'SWITCH_INPUT_TYPE';
export const UPDATE_DECIMAL = 'UPDATE_DECIMAL';
export const UPDATE_ROMAN = 'UPDATE_ROMAN';

export const switchInputType = function () {
  return {
    type: SWITCH_INPUT_TYPE
  };
};

export const updateDecimal = function (num) {
  return {
    type: UPDATE_DECIMAL,
    decimal: num
  }
};

export const updateRoman = function (str) {
  return {
    type: UPDATE_ROMAN,
    roman: str
  };
};
