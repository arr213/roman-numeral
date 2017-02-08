import { connect } from 'react-redux';

import ToDecimal from './ToDecimal';
import { updateRoman, switchInputType } from '../../redux/action-creators';

const mapStateToProps = function (state) {
  const { roman, convertedDecimal } = state;
  return { roman, convertedDecimal };
};

const mapDispatchToProps = function (dispatch) {
  return {
    updateRoman (str) {
      dispatch(updateRoman(str));
    },
    switchInputType () {
      dispatch(switchInputType());
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const ToDecimalContainer = componentCreator(ToDecimal);
export default ToDecimalContainer;
