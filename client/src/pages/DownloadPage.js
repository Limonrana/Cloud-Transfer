/* eslint-disable no-unused-vars */
import Axios from 'axios';
import b64ToBlob from 'b64-to-blob';
import fileSaver from 'file-saver';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Download from '../components/Download';
import Header from '../components/Header';

const baseURL = 'https://cloud-transfer-share.herokuapp.com';

const DownloadPage = () => {
    const { params } = useRouteMatch();
    const [downloading, setDownloading] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [files, setFiles] = useState([]);

    const getDownloadFiles = useCallback(async () => {
        try {
            const { data } = await Axios.get(`${baseURL}/api/files/${params.uuid}`);
            if (data) {
                setFiles(data.files);
                setTitle(data.title);
                setMessage(data.message);
            }
        } catch (err) {
            console.log(err.message);
        }
    }, [params.uuid]);

    const downloadFiles = async () => {
        setDownloading(true);
        try {
            const { data } = await Axios.get(`${baseURL}/api/downloads/${params.uuid}`);
            if (data) {
                // Create blob link to download
                const getData = String(data);

                const blob = b64ToBlob(getData, 'application/zip');
                fileSaver.saveAs(blob, `${title}.zip`);
                setDownloading(false);
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getDownloadFiles();
    }, [getDownloadFiles]);

    return (
        <div className="container">
            <Header />
            {/* <!-- Content Section Start --> */}
            <main className="content">
                <div className="mainContent d-flex justify-content-center align-items-center">
                    <Download
                        title={title}
                        message={message}
                        files={files}
                        downloadFiles={downloadFiles}
                    />
                </div>
            </main>
        </div>
    );
};

export default DownloadPage;
