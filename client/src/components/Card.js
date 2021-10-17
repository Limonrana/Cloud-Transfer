import React from 'react';

const Card = () => (
    <div className="cardDetails">
        <div className="cardBody">
            <h1 className="cardTitle">You can upload up to 200GB files</h1>
            <p className="cardText">
                We generate the best scenarios for everyone
                <br />
                to make farming proccess easier and accessible.
            </p>
            <div className="cardButtons">
                <a href="#resgister" className="btn btnOutlineDark">
                    Become a member
                </a>
                <a href="#login" className="btn">
                    Login
                </a>
            </div>
        </div>
    </div>
);

export default Card;
