import React from 'react';
import './menuitem.scss';
import {withRouter} from 'react-router-dom';

function MenuItem({title,imageUrl,size,history}) {
    return (
        <>
            <div className={`${size} menu-item`}>
<div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}  />


<div className="content">
<h1 className="title">{title.toUpperCase()}</h1>
<span className="subtitle">SHOP NOW</span>
</div>
</div>
        </>
    )
}

export default withRouter(MenuItem);
