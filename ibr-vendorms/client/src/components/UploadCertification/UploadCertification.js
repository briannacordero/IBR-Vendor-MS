import React, { useState, useEffect } from "react";

function UploadCertification({ showUploadButton }) {
	const [inputFile, setInputFile] = useState(null);
  	const [fileUploaded, setFileUploaded] = useState(false);

	useEffect(() => {
	  setInputFile(document.getElementById("input-file"));
	}, []);

  const handleUpload = () => {
    inputFile?.click();
  };

  const handleFileChange = () => {
    setFileUploaded(true);
  };
  
  return (
    <>
      {showUploadButton && (
        <div className="m-3">
          <label className="mx-3">Choose file: </label>
          <input
            id="input-file"
            className="d-none"
            type="file"
            onChange={handleFileChange}
          />
          <button
            onClick={handleUpload}
            className="btn btn-outline-primary"
            disabled={fileUploaded} // Disable if a file was uploaded
          >
            {fileUploaded ? "File Uploaded" : "Upload"}
          </button>
        </div>
      )}
    </>
  );
}

export default UploadCertification;
