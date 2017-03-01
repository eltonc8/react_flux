import { combineReducers } from 'redux';
import ItemsReudcer from './items_reducer';
import FiltersReudcer from './filters_reducer';

const RootReducer = combineReducers({items: ItemsReducer, filters: FiltersReducer});

export default RootReducer
