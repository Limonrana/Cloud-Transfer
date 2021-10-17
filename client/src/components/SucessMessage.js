import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Classes from '../styles/SucessMessage.module.css';
import Alert from './shared/Alert';

const SucessMessage = ({ downloadUrl, makeTransfer }) => {
    const [copied, setCopied] = useState(false);
    return (
        <div className={Classes.SucessMessage}>
            <div className={Classes.wrapperAlert}>
                <div className={Classes.contentAlert}>
                    <div className={Classes.topHalf}>
                        <p>
                            <svg viewBox="0 0 512 512" width="100" title="check-circle">
                                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                            </svg>
                        </p>
                        <h1>Congratulations</h1>

                        <ul className={Classes.bg__bubbles}>
                            <li className={Classes.li_bubble_1} />
                            <li className={Classes.li_bubble_2} />
                            <li className={Classes.li_bubble_3} />
                            <li className={Classes.li_bubble_4} />
                            <li className={Classes.li_bubble_5} />
                            <li className={Classes.li_bubble_6} />
                            <li className={Classes.li_bubble_7} />
                            <li className={Classes.li_bubble_8} />
                            <li className={Classes.li_bubble_9} />
                            <li className={Classes.li_bubble_10} />
                        </ul>
                    </div>

                    <div className={Classes.bottomHalf}>
                        <p>Well Done! Transfer was successful.</p>
                        {downloadUrl ? (
                            <CopyToClipboard text={downloadUrl} onCopy={() => setCopied(true)}>
                                <div className={Classes.input_copy_wrapper}>
                                    <div className={Classes.input_copy}>
                                        <input
                                            type="text"
                                            className={Classes.form_control}
                                            value={downloadUrl}
                                            readOnly
                                        />
                                        <span className={[Classes.icon, Classes.right].join(' ')}>
                                            <img
                                                src="http://clipground.com/images/copy-4.png"
                                                title="Click to Copy"
                                                alt="click-to-copy"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </CopyToClipboard>
                        ) : null}
                        {copied ? <Alert setCopied={setCopied} /> : null}
                        <button className={Classes.sucessBtn} type="button" onClick={makeTransfer}>
                            Another transfer?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SucessMessage;
