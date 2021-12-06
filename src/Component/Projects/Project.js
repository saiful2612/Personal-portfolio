import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';


import './Projects.css';

const Project = () => {

    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('./fakeInfo.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])

    return (
        <div className="container" id="project">
            <h1 className="text-center my-2 heading-style"> My Project</h1>

            <div className="row">

                <div className="row">
                    {
                        info.map(item => <ItemCard key={item.id} item={item}></ItemCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Project;