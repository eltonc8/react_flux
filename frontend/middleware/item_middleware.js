import * as ACTIONS from "../actions/item_action";
import * as UTILS from "../util/items_util";

const preprocessData = (data) => {
  let itemsObj = JSON.parse(data);
  let processedItems = {};
  itemsObj.products.forEach((item, idx) => {
    processedItems[idx+1] = {id: idx+1, name: item.name, price: item.defaultPriceInCents, image: "http://"+item.mainImage.ref.substring(2, item.mainImage.ref.length)};
  });
  return processedItems;
};

const ItemMiddleware = ({state, dispatch}) => next => action => {
  switch(action.type){
    case "GET_ITEMS":
      let success = (items) => {dispatch(ACTIONS.receiveItems(preprocessData(items)))}
      UTILS.fetchItems(success);
      return next(action);
    default:
      return next(action);
  }
}

export default ItemMiddleware;
