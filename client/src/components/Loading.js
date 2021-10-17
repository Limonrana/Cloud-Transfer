/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
import React from 'react';
import Classes from '../styles/Loading.module.css';

const Loading = ({ progressScore, max }) => (
    <div className="loading">
        <div id={Classes.wrapper} className={Classes.center}>
            <svg
                className={[Classes.progress, Classes.blue, Classes.noselect].join(' ')}
                data-progress="65"
                x="0px"
                y="0px"
                viewBox="0 0 80 80"
            >
                <path className={Classes.track} d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <path
                    className={Classes.fill}
                    d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                    style={{ strokeDashoffset: `${max}` }}
                />
                <text className={Classes.value} x="50%" y="55%">
                    {progressScore}%
                </text>
                <text className={Classes.text} x="50%" y="120%">
                    Uploading...
                </text>
            </svg>
        </div>
    </div>
);

export default Loading;
