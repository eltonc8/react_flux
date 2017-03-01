const getItems = () => ({
  type: "GET_ITEMS"
})

const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS",
  items: items
})
