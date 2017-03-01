import * as ACTIONS from '../actions/storefront_actions';
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

