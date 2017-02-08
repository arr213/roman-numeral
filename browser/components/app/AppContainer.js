import { connect } from 'react-redux';
import { loadPuppies } from '../../redux/action-creators';
import App from './App';

const mapStateToProps = function (state) {
  return {
    inputType: state.inputType
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = componentCreator(App);
export default AppContainer;
