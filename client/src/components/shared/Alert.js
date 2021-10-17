import React from 'react';
import Classes from '../../styles/Alert.module.css';

const Alert = ({ setCopied }) => (
    <div className="Alert">
        <div
            className={[
                Classes.alert,
                Classes.alert_success,
                Classes.alert_white,
                Classes.rounded,
            ].join(' ')}
        >
            <button
                type="button"
                className={Classes.close}
                data-dismiss="alert"
                aria-hidden="true"
                onClick={() => setCopied(false)}
            >
                ×
            </button>
            <div className={Classes.icon}>
                <i className="fa fa-check" />
            </div>
            <strong>Copy was successfully!</strong>
        </div>
    </div>
);

export default Alert;
