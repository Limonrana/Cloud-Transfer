import React from 'react';

const Form = ({ info }) => {
    const { setSenderEmail, setReciverEmail, setTitle, setMessage, isType } = info;
    return (
        <div className="uploadForm">
            {isType === '1' ? (
                <>
                    <div className="marginButtom3">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="formControl"
                            placeholder="Email to"
                            onChange={(e) => setReciverEmail(e.target.value)}
                        />
                    </div>
                    <div className="marginButtom3">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="formControl"
                            placeholder="Your email"
                            onChange={(e) => setSenderEmail(e.target.value)}
                        />
                    </div>
                </>
            ) : null}
            <div className="marginButtom3">
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="formControl"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="marginButtom3">
                <textarea
                    name="message"
                    id="message"
                    rows="3"
                    className="formControl"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Form;
