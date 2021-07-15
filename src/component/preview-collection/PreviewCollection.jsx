import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './preview.scss';

function PreviewCollection({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
{
    items.filter((element,index)=>index<4).map(({id , ...otherprops})=>{
        return(
            <CollectionItem key={id} {...otherprops} />    )
    })
}
            </div>
        </div>
    )
}

export default PreviewCollection
