import React from 'react';

class ItemIndex extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="item-index">
        <div id="pushme" onClick={this.props.getItems}>Push Me</div>
      </div>
    )
  }
}

export default ItemIndex;
