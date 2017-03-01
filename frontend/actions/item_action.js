export const getItems = () => ({
  type: "GET_ITEMS"
})

export const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS",
  items: items
})
