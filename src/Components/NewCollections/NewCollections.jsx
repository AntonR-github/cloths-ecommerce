import React from 'react';
import './NewCollections.css';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collections.map((collection, index) => {
                    return <Item key={index}
                        id={collection.id}
                        name={collection.name}
                        image={collection.image}
                        new_price={collection.new_price}
                        old_price={collection.old_price}
                    />
                })}
            </div>
        </div>
    )
}

export default NewCollections
