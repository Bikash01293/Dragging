import React from 'react'
import { useDropzone } from "react-dropzone"
import axios from 'axios'
import './FileUpload.scss'

const FileUpload = ({ files, setFiles, removeFile, onDrop, accept }) => {
    const { getRootProps, getInputProps, isDragActive } =
        useDropzone({
            accept,
            onDrop,
        });
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        console.log(formData, "adbbd")
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
    }

    return (
        <>
            <div className="file-card">
                <div   {...getRootProps({ className: "file-card" })}>
                    <div className="file-inputs">
                        <input type="file" onChange={uploadHandler} {...getInputProps()} directory="" webkitdirectory="" />
                        {isDragActive ? (
                            <p className="main">
                                Release to drop the files here
                            </p>
                        ) : (
                            <p className="main" >
                                Drag’ n’ drop files anywhere on the screen or click to select files
                            </p>
                        )}
                    </div>
                    <p className="main">Suppprted</p>
                    <p className="info">Image, Audio, Video, File, Directory</p>
                </div>
            </div>
        </>
    )
}

export default FileUpload
