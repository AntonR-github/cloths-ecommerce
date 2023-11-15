import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionBox'>
            <div className="descriptionBox-navigator">
                <div className="descriptionBox-nav-box">Description</div>
                <div className="descriptionBox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionBox-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Laboriosam aliquam ratione aut libero placeat, odit itaque commodi atque magni officia eligendi, 
                    quas quod recusandae ullam iusto adipisci nam repellat eveniet?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laudantium ullam illum aliquam! Debitis, neque inventore non, 
                    incidunt odio modi odit totam doloremque ex illo provident. 
                    Ullam voluptatibus natus ipsum consequuntur.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
