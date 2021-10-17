/* eslint-disable no-unused-vars */
import React from 'react';
import Loading from './Loading';
import SucessMessage from './SucessMessage';
import FileUpload from './uploads/FileUpload';
import Form from './uploads/Form';
import UploadButton from './uploads/UploadButton';
import UploadList from './uploads/UploadList';

const Upload = ({
    isLoading,
    max,
    progressScore,
    uploadSucess,
    downloadUrl,
    makeTransfer,
    info,
    btnSubmit,
    inputFileRef,
    openInputFile,
    files,
    handleFiles,
    removeFile,
    handlerSubmit,
}) => {
    let uploadView = null;
    if (isLoading) {
        uploadView = <Loading progressScore={progressScore} max={max} />;
    } else if (uploadSucess) {
        uploadView = <SucessMessage downloadUrl={downloadUrl} makeTransfer={makeTransfer} />;
    } else {
        uploadView = (
            <div id="dropZoon" className="uploadArea">
                <div className="uploadScroll">
                    <UploadList files={files} removeFile={removeFile} />
                    <FileUpload
                        inputFileRef={inputFileRef}
                        openInputFile={openInputFile}
                        handleFiles={handleFiles}
                    />
                    <Form info={info} />
                </div>
                <UploadButton
                    isType={info.isType}
                    setIsType={info.setIsType}
                    isMode={info.isMode}
                    setIsMode={info.setIsMode}
                    btnSubmit={btnSubmit}
                    handlerSubmit={handlerSubmit}
                />
            </div>
        );
    }
    return <div className="upload">{uploadView}</div>;
};

export default Upload;
