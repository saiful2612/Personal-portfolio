import React from 'react';
import { Link } from 'react-router-dom';
import './ViewCard.css';

const ViewCard = (props) => {

    const { name, img_one, img_two, img_three, description, features_one, features_two, features_three, features_four } = props.selectiveProduct || {};
    return (
        <div className="container row">

            <div className="col-lg-6">
                <div className="mt-5 projectImg">
                    <div>
                        <img className="img-fluid p-2 img-style" src={img_one} alt="" />
                    </div>
                    <div>
                        <img className="img-fluid w-50 p-2 img-style" src={img_two} alt="" />
                        <img className="img-fluid w-50 p-2 img-style" src={img_three} alt="" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className="col-lg-6 ">

                <div className="info-style">
                    <div className="mt-5">
                        <h2 className="ms-5">{name}</h2>
                        <p>{description}</p>
                        <ol className="ms-5">
                            <li>{features_one}</li>
                            <li>{features_two}</li>
                            <li>{features_three}</li>
                            <li>{features_four}</li>
                        </ol>
                    </div>

                    <div className="ms-5 project-link">
                        <a target="_blank" href="https://laptop-shop-authentication.web.app/" rel="noreferrer">Live Site link</a><a className="info-link" href="https://github.com/saiful2612/laptop-shop-client-side" target="_blank" rel="noreferrer">Client Side Link</a><a className="info-link" href="https://github.com/saiful2612/laptop-shop-server-side" target="_blank" rel="noreferrer">Sever Side Link</a>
                    </div>

                </div>


                <Link to="/"><button className="back-button ">Back to Home</button></Link>
            </div>


        </div>
    );
};

export default ViewCard;