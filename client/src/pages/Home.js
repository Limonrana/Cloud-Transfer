/* eslint-disable no-unused-vars */
import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Header from '../components/Header';
import Upload from '../components/Upload';

const baseURL = 'https://cloud-transfer-share.herokuapp.com';

const Home = () => {
    const inputFileRef = useRef();
    const [senderEmail, setSenderEmail] = useState('');
    const [reciverEmail, setReciverEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [files, setFiles] = useState([]);

    // Others States
    const [isType, setIsType] = useState('1');
    const [isLoading, setLoading] = useState(false);
    // Upload Related States
    const [max, setMax] = useState(-219.99078369140625);
    const [progressScore, setProgressScore] = useState(0);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [uploadSucess, setUploadSucess] = useState(false);
    const [isMode, setIsMode] = useState(false);
    const [btnSubmit, setBtnSubmit] = useState(false);

    const handleFiles = (event) => {
        const fileList = event.target.files;
        setFiles([...files, ...fileList]);
    };

    const openInputFile = () => {
        inputFileRef.current.click();
    };

    const removeFile = (index) => {
        const newFiles = files.filter((item, idx) => idx !== index);
        setFiles([...newFiles]);
    };

    const handlerSubmit = async () => {
        // Update the formData object
        const formData = new FormData();
        if (senderEmail !== '') {
            formData.append('senderEmail', senderEmail);
        }
        if (reciverEmail !== '') {
            formData.append('reciverEmail', reciverEmail);
        }
        formData.append('title', title);
        formData.append('message', message);
        for (let x = 0; x < files.length; x += 1) {
            formData.append('files', files[x]);
        }
        const config = {
            headers: {
                'Content-Type': 'Multipart/form-data',
            },
            onUploadProgress(progressEvent) {
                const percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                setProgressScore(percentCompleted);
                setMax(((100 - percentCompleted) / 100) * max);
            },
        };
        try {
            setLoading(true);
            const { data } = await Axios.post(`${baseURL}/api/files`, formData, config);
            if (data) {
                setLoading(false);
                if (data.isUrl) {
                    setDownloadUrl(data.url);
                }
                setUploadSucess(true);
                setSenderEmail('');
                setReciverEmail('');
                setTitle('');
                setMessage('');
                setFiles([]);
            }
        } catch (err) {
            console.log(err.message);
            setLoading(false);
        }
    };

    const makeTransfer = () => {
        setDownloadUrl(null);
        setUploadSucess(false);
        setMax(-219.99078369140625);
        setProgressScore(0);
    };

    const uploadData = {
        setSenderEmail,
        setReciverEmail,
        setTitle,
        setMessage,
        setIsMode,
        isMode,
        setIsType,
        isType,
    };

    useEffect(() => {
        if (isType === '1') {
            if (
                senderEmail !== '' &&
                reciverEmail !== '' &&
                title !== '' &&
                message !== '' &&
                files.length > 0
            ) {
                setBtnSubmit(true);
            } else {
                setBtnSubmit(false);
            }
        } else if (title !== '' && message !== '' && files.length > 0) {
            setBtnSubmit(true);
        } else {
            setBtnSubmit(false);
        }
    }, [senderEmail, reciverEmail, title, message, files.length, isType]);

    return (
        <div className="container">
            <Header />
            {/* <!-- Content Section Start --> */}
            <main className="content">
                <div className="mainContent d-flex justify-content-between">
                    <Upload
                        isLoading={isLoading}
                        max={max}
                        progressScore={progressScore}
                        uploadSucess={uploadSucess}
                        downloadUrl={downloadUrl}
                        makeTransfer={makeTransfer}
                        info={uploadData}
                        btnSubmit={btnSubmit}
                        inputFileRef={inputFileRef}
                        openInputFile={openInputFile}
                        files={files}
                        handleFiles={handleFiles}
                        removeFile={removeFile}
                        handlerSubmit={handlerSubmit}
                    />
                    <Card />
                    <Banner />
                </div>
            </main>
        </div>
    );
};

export default Home;
