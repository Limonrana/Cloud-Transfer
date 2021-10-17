import React from 'react';
import { useHistory } from 'react-router-dom';
import DownloadIcon from '../assets/cloud-computing.png';
import Classes from '../styles/Download.module.css';

const Download = ({ title, message, files, downloadFiles }) => {
    const { push } = useHistory();
    return (
        <div className="Download">
            <div className={Classes.downloadArea}>
                <div className="downloadIcon">
                    <img src={DownloadIcon} width="70px" alt="DownloadIcon" />
                </div>
                {files.length > 0 ? (
                    <>
                        <div className="downloadText">
                            <h3 className={Classes.mainTitle}>Ready when you are</h3>
                            <p className={Classes.expires}>Transfer expires in 24 hours</p>
                        </div>
                        <div className="dowloadDetails">
                            <h4 className={Classes.title}>{title}</h4>
                            <p className={Classes.description}>{message}</p>
                        </div>
                        <div className="uploadList">
                            <ul className={Classes.downloadList}>
                                {files.map((file) => (
                                    <li className={Classes.singleDownload} key={file._id}>
                                        <div className="fileSystemDetail d-flex justify-content-between">
                                            <div className="fileTitle">
                                                <h6 className="fileSystemTitle">
                                                    {file.name.length > 40
                                                        ? `${file.name.slice(0, 39)}...${
                                                              file.name.split('.')[1]
                                                          }`
                                                        : file.name}
                                                </h6>
                                            </div>
                                            <div className="fileSystemMeta">
                                                <span className="fileSystemSize">
                                                    {(file.size / 1e6).toFixed(2)} MB
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="d-flex justify-content-center mt-3">
                                <button type="button" className="submitBtn" onClick={downloadFiles}>
                                    DOWNLOAD NOW
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="downloadText">
                            <h3 className={Classes.mainTitle}>
                                OOPS! There wasn&#39;t file for download.
                            </h3>
                            <p className={Classes.expires}>
                                You can transfer your file from click on bellow button
                            </p>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button type="button" className="submitBtn" onClick={() => push('/')}>
                                TRANSFER FILE
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Download;
