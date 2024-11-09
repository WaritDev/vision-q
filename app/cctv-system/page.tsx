"use client";
import React, { useState } from 'react';
import axios from 'axios';

const PersonDetectionPage = () => {
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [detectionResult1, setDetectionResult1] = useState<any>(null);
  const [detectionResult2, setDetectionResult2] = useState<any>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleImageUpload1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage1(file);
    }
  };

  const handleImageUpload2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage2(file);
    }
  };

  const handleDetection = async () => {
    setAlertMessage(null);

    if (image1 && image2) {
      try {
        const result1 = await detectPerson(image1);
        const result2 = await detectPerson(image2);
        setDetectionResult1(result1);
        setDetectionResult2(result2);

        if (result1.json_data && result2.json_data) {
          const [person1] = result1.json_data;
          const [person2] = result2.json_data;

          const movement = Math.sqrt(
            Math.pow(person2.x0 - person1.x0, 2) +
            Math.pow(person2.y0 - person1.y0, 2) +
            Math.pow(person2.x1 - person1.x1, 2) +
            Math.pow(person2.y1 - person1.y1, 2)
          );

          const fallThreshold = 50;

          if (movement > fallThreshold) {
            setAlertMessage('Warning: Significant movement detected! Possible fall.');
          } else {
            setAlertMessage('No significant movement detected.');
          }
        }
      } catch (error) {
        console.error('Error detecting person:', error);
      }
    }
  };

  const detectPerson = async (image: File) => {
    const formData = new FormData();
    formData.append("src_img", image);
    formData.append("json_export", "true");
    formData.append("img_export", "true");

    try {
      const response = await axios.post("https://api.aiforthai.in.th/person/human_detect/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Apikey": "R6ywJHgqJSmnpcOezDrFUj21QlP2BIjf"
        }
      });
      return response.data;
    } catch (error) {
      console.error("API request error:", error);
      return null;
    }
  };

  return (
    <div>
      <h1>Person Detection</h1>
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload1} />
        <input type="file" accept="image/*" onChange={handleImageUpload2} />
        <button onClick={handleDetection} disabled={!image1 || !image2}>
          Detect Person
        </button>
      </div>
      {alertMessage && <div style={{ color: 'red' }}>{alertMessage}</div>}
      <div>
        {detectionResult1 && (
          <div>
            <h2>Detection Result 1</h2>
            <pre>{JSON.stringify(detectionResult1.json_data, null, 2)}</pre>
            {detectionResult1.human_img && (
              <img src={detectionResult1.human_img} alt="Detected Person 1" />
            )}
          </div>
        )}
        {detectionResult2 && (
          <div>
            <h2>Detection Result 2</h2>
            <pre>{JSON.stringify(detectionResult2.json_data, null, 2)}</pre>
            {detectionResult2.human_img && (
              <img src={detectionResult2.human_img} alt="Detected Person 2" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonDetectionPage;
