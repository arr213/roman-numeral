import { connect } from 'react-redux';

import toRoman from './toRoman';
import { updateDecimal, switchInputType } from '../../redux/action-creators';

const mapStateToProps = function (state) {
  const { Decimal, convertedRoman } = state;
  return { Decimal, convertedRoman };
};

const mapDispatchToProps = function (dispatch) {
  return {
    updateDecimal (str) {
      dispatch(updateDecimal(str));
    },
    switchInputType () {
      dispatch(switchInputType());
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const toRomanContainer = componentCreator(toRoman);
export default toRomanContainer;
