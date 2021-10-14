import React from 'react';

const ImageHelper = ({product}) => {
    const imageurl = product ? product.sytem_name:`https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg`
    return(
        <div className = "rounded border border-success p-2">
            <img src = {imageurl}
             style = {{maxHeight:"100%", maxWidth:"100%"}} 
             className="mb-3 rounded" 
             alt = "no Image" />
        </div>
    )
}

export default ImageHelper;