/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import CloseSvg from '../CloseSvg';

const UploadList = ({ files, removeFile }) => (
    <div className="uploadList">
        <ul className="fileList">
            {files.map((file, index) => (
                <li className="singleFile" key={index}>
                    <div className="fileSystemDetail d-flex justify-content-between">
                        <div className="fileTitle">
                            <h6 className="fileSystemTitle">
                                {file.name.length > 20
                                    ? `${file.name.slice(0, 19)}...${file.type.split('/')[1]}`
                                    : file.name}
                            </h6>
                            <div className="fileSystemMeta">
                                <span className="fileSystemSize">
                                    {(file.size / 1e6).toFixed(2)} MB
                                </span>
                                <span className="fileSystemType">
                                    <b> {file.type.split('/')[1]}</b>
                                </span>
                            </div>
                        </div>
                        <div className="fileSystemActions" onClick={() => removeFile(index)}>
                            <CloseSvg />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default UploadList;
