import { useState } from "react";

const UploadCard = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult(null);
  };

const handleGenerate = async () => {
  if (!file) return alert("Please upload an image");

  console.log("UPLOAD BUTTON CLICKED"); 
  setLoading(true);

  const formData = new FormData();
  formData.append("photo", file);

  try {
    console.log("SENDING POST TO BACKEND");

    const response = await fetch("http://localhost:8080/api/generate", {
      method: "POST",
      body: formData,
    });

    const imageUrl = await response.text();
    console.log("RESPONSE FROM BACKEND:", imageUrl);

    setResult(imageUrl);
  } catch (err) {
    console.error("UPLOAD FAILED", err);
    alert("Backend error");
  }

  setLoading(false);
};


  return (
    <div className="card">
      <label className="upload-box">
        <input type="file" accept="image/*" onChange={handleFileChange} hidden />
        {preview ? (
          <img src={preview} alt="Preview" />
        ) : (
          <span>Click or drag image here</span>
        )}
      </label>

      <button
        className="generate-btn"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Illustration"}
      </button>

      {result && (
        <div className="result">
          <h3>Personalized Illustration</h3>
          <img src={result} alt="Result" />
        </div>
      )}
    </div>
  );
};

export default UploadCard;
