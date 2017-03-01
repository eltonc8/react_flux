import { combineReducers } from 'redux';
import ItemsReducer from './item_reducer';

const RootReducer = combineReducers({items: ItemsReducer});

export default RootReducer
