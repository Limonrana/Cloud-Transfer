/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const FileUpload = ({ inputFileRef, openInputFile, handleFiles }) => (
    <>
        <div
            className="uploadAreaButton d-flex align-items-center mt-3 mb-3"
            onClick={openInputFile}
        >
            <div className="uploadIcon">
                <i className="fas fa-plus" />
            </div>
            <div className="uploadButton">
                <button type="button" className="btnUpload">
                    Add more files
                </button>
                <p className="btnNote">Max 100 MB allowed for guest</p>
            </div>
        </div>
        <input
            type="file"
            ref={inputFileRef}
            id="fileInput"
            className="dropZoonFileInput"
            onChange={(e) => handleFiles(e)}
            multiple
        />
    </>
);

export default FileUpload;
