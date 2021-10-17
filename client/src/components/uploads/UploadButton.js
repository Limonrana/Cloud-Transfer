/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Email from '../../assets/email.png';
import Share from '../../assets/share.png';

const UploadButton = ({ isType, setIsType, isMode, setIsMode, btnSubmit, handlerSubmit }) => {
    const handleRadio = (e) => {
        setIsType(e.target.value);
        setIsMode(!isMode);
    };
    return (
        <div className="uploadFooter">
            {isMode ? (
                <div className="popup">
                    <div className="plans">
                        <div className="title">Choose an option for file send</div>
                        <label className="plan basic-plan" htmlFor="basic">
                            <input
                                checked
                                type="radio"
                                name="plan"
                                id="basic"
                                value="1"
                                checked={isType === '1'}
                                onChange={handleRadio}
                            />
                            <div className="plan-content">
                                <img loading="lazy" src={Email} alt="Send email transfer" />
                                <div className="plan-details">
                                    <span>Send email transfer</span>
                                </div>
                            </div>
                        </label>

                        <label className="plan complete-plan" htmlFor="complete">
                            <input
                                type="radio"
                                id="complete"
                                name="plan"
                                value="2"
                                checked={isType === '2'}
                                onChange={handleRadio}
                            />
                            <div className="plan-content">
                                <img loading="lazy" src={Share} alt="Get transfer link" />
                                <div className="plan-details">
                                    <span>Get transfer link</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            ) : null}
            <div className="d-flex justify-content-between">
                <button type="button" className="moreBtn" onClick={() => setIsMode(!isMode)}>
                    <i className="fas fa-ellipsis-h" />
                </button>
                {btnSubmit ? (
                    <button type="button" className="submitBtn" onClick={handlerSubmit}>
                        TRANSFER
                    </button>
                ) : (
                    <button type="button" className="submitBtn disable" disabled>
                        TRANSFER
                    </button>
                )}
            </div>
        </div>
    );
};

export default UploadButton;
