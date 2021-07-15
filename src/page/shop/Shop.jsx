import React from 'react';
import SHOP_DATA from './Shopdata';
import PreviewCollection from '../../component/preview-collection/PreviewCollection';
class Shop extends React.Component{

constructor(){
    super();
    this.state ={
    collection : SHOP_DATA

    }
}

render(){
const {collection} = this.state;

    return(
     <div className="shop-page">
{
    collection.map(({id,...otherCollection})=>{
        return(
            <PreviewCollection key={id}  {...otherCollection}  />
        )

    })
}
     </div>
      
        )
}
    
   

}


export default Shop;