import { connect } from 'react-redux';
import ToDecimal from './ToDecimal';
// import {  } from '../../action-creators';

const mapStateToProps = function (state) {
  return {};
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const ToDecimalContainer = componentCreator(ToDecimal);
export default ToDecimalContainer;
