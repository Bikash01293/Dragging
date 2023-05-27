import { useCallback, useState } from 'react'
import './App.scss';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [files, setFiles] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(files => files.concat(...acceptedFiles));
  }, []);
  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
    toast.success('file has been deleted sucessfully !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }

  return (

    <div className="App">
      <div className="title">Upload file</div>
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} onDrop={onDrop} accept={"image/*,audio/*,video/*,.pdf"} />
      <FileList files={files} removeFile={removeFile} />
      <ToastContainer />
    </div>




  );
}

export default App;
