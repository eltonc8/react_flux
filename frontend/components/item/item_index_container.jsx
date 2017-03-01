import { connect } from 'react-redux';
import ItemIndex from './item_index';
import * as ACTIONS from '../../actions/item_action';

const mapStateToProp = (state) => ({
  items: state.items
})

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(ACTIONS.getItems())
})

export default connect(mapStateToProp, mapDispatchToProps)(ItemIndex);
