import React from 'react'
import Item from '../Item/Item'





function Items(props) {

  const itemsels =  props.items.map((item,key)=>{
    return (
      <>
      
        <Item item={item} />  
      </>
    
    )
  })
  



  return (
    <div>
<div className="w-dyn-list">
    <div className="collection-list w-dyn-items">



   
    {/* <Item /> */}
    {itemsels}


    </div>
</div>
</div>
  )
}

export default Items