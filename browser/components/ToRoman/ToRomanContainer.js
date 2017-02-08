import { connect } from 'react-redux';
import toRoman from './toRoman';
// import {  } from '../../action-creators';

const mapStateToProps = function (state) {
  return {};
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const toRomanContainer = componentCreator(toRoman);
export default toRomanContainer;
