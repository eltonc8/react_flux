import * as ACTIONS from '../actions/item_action';
import merge from 'lodash/merge';

const defaultState = {}

const ItemReducer = (state = defaultState, action) => {
  switch(action.type){
    case "RECEIVE_ITEMS":
      let newState = merge(defaultState, action.items);
      return newState;
    default: 
      return state
  }
};

export default ItemReducer;

