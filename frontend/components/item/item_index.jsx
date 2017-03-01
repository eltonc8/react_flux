import React from 'react';

class ItemIndex extends React.Component {
  constructor(props){
    super(props)
    this.getItems = this.props.getItems;
    this.items = this.props.items
  }

  render(){
    return(
      <div id="item-index">
        <div id="pushme" onClick={this.getItems}>Push Me</div> 
      </div>
    )
  }
}

export default ItemIndex;
