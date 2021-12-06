import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ViewCard from '../ViewCard/ViewCard';

const ItemDetail = () => {

    const { ItemDetailId } = useParams();

    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('/fakeInfo.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    const selectiveProduct = card.find(element => element.id === +ItemDetailId);
    return (
        <div>
            <ViewCard selectiveProduct={selectiveProduct}></ViewCard>
        </div>
    );
};

export default ItemDetail;