import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = (props) => {
    console.log(props.item)
    const { id, img_one, name, features_one, features_two, features_three, features_four, live_site, client_side, server_side } = props.item;
    return (
        <div className=" row container">

            <div className="col-lg-5 text-center my-5 projectImg">
                <img className="img-fluid w-75" src={img_one} alt="" />
                <Link to={`ItemDetail/${id}`}>
                    <button className="btn btn-dark mt-2 project-btn">Project Details</button>
                </Link>

            </div>

            <div className="col-lg-7 my-5 info-style">
                <h3 className="ms-5">{name}</h3>
                <ol className="ms-5">
                    <li>{features_one}</li>
                    <li>{features_two}</li>
                    <li>{features_three}</li>
                    <li>{features_four}</li>
                </ol>
                <div className="ms-5 project-link">
                    <a target="_blank" href={live_site} rel="noreferrer">Live Site link</a><a className="info-link" href={client_side} target="_blank" rel="noreferrer">Client Side Link</a><a className="info-link" href={server_side} target="_blank" rel="noreferrer">Sever Side Link</a>
                </div>

            </div>
        </div>


    );
};

export default ItemCard;