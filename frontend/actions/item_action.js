const getItems = () => ({
  type: "GET_ITEMS"
})

const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS",
  items: items
})

const updateFilters = (filter) => ({
  type: "UPDATE_FILTERS",
  filter: filter 
})
