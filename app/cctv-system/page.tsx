"use client";
import React, { useState } from 'react';
import { detectPerson, generateCaption } from '@/utils/api';
import Header from '@/components/Header';
import FooterNavigation from '@/components/FooterNavigation';

const CCTVPage = () => {
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [detectionResult1, setDetectionResult1] = useState<any>(null);
  const [detectionResult2, setDetectionResult2] = useState<any>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const [image1Preview, setImage1Preview] = useState<string | null>(null);
  const [image2Preview, setImage2Preview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [alertType, setAlertType] = useState<'none' | 'movement' | 'keyword' | 'both'>('none');

  const createAlertData = (caption: string, alertType: 'none' | 'movement' | 'keyword' | 'both') => {
    let title = "การแจ้งเตือน";
    let priority = "normal";
    let bgColor = "bg-blue-100";
    let borderColor = "border-blue-500";
    let textColor = "text-blue-800";
  
    switch (alertType) {
      case 'movement':
        title = "ตรวจพบการเคลื่อนไหวผิดปกติ";
        priority = "high";
        bgColor = "bg-yellow-100";
        borderColor = "border-yellow-500";
        textColor = "text-yellow-800";
        break;
      case 'keyword':
        title = "ตรวจพบท่าทางที่อาจเป็นอันตราย";
        priority = "medium";
        bgColor = "bg-green-100";
        borderColor = "border-green-500";
        textColor = "text-green-800";
        break;
      case 'both':
        title = "ตรวจพบการหกล้มหรือท่าทางผิดปกติ";
        priority = "emergency";
        bgColor = "bg-red-100";
        borderColor = "border-red-500";
        textColor = "text-red-800";
        break;
    }
  
    return {
      id: Date.now(),
      title,
      description: caption || "กรุณาตรวจสอบสถานการณ์",
      priority,
      time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }) + " น.",
      bgColor,
      borderColor,
      textColor
    };
  };


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setImage: (file: File | null) => void, setPreview: (url: string | null) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const checkKeywords = (text: string): boolean => {
    const keywords = ['นอน', 'นั่ง', 'ล้ม'];
    return keywords.some(keyword => text.includes(keyword));
  };

  const handleDetection = async () => {
    if (!image1 || !image2) return;
    
    setIsProcessing(true);
    setAlertMessage(null);
    setCaption(null);
    setAlertType('none');

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
        const hasSignificantMovement = movement > fallThreshold;

        const captionResult = await generateCaption(image2);
        setCaption(captionResult.caption);

        const hasKeywords = checkKeywords(captionResult.caption);
        
        // Determine alert type based on conditions
        let newAlertType: 'none' | 'movement' | 'keyword' | 'both' = 'none';
        let alertMessageText = 'ไม่พบความผิดปกติ';

        if (hasSignificantMovement && hasKeywords) {
          newAlertType = 'both';
          alertMessageText = 'ตรวจพบการเคลื่อนไหวผิดปกติและท่าทางที่อาจเป็นอันตราย! กรุณาตรวจสอบโดยด่วน';
        } else if (hasSignificantMovement) {
          newAlertType = 'movement';
          alertMessageText = 'ตรวจพบการเคลื่อนไหวผิดปกติ! โปรดตรวจสอบ';
        } else if (hasKeywords) {
          newAlertType = 'keyword';
          alertMessageText = 'ตรวจพบท่าทางที่อาจเป็นอันตราย! โปรดตรวจสอบ';
        }

        setAlertType(newAlertType);
        setAlertMessage(alertMessageText);

        if (newAlertType !== 'none') {
          const alertData = createAlertData(captionResult.caption, newAlertType);
          const existingAlerts = JSON.parse(localStorage.getItem('fallAlerts') || '[]');
          existingAlerts.unshift(alertData);
          localStorage.setItem('fallAlerts', JSON.stringify(existingAlerts));
        }
      }
    } catch (error) {
      console.error('Error detecting person or generating caption:', error);
      setAlertMessage('เกิดข้อผิดพลาดในการประมวลผล');
      setAlertType('none');
    } finally {
      setIsProcessing(false);
    }
  };

  const getAlertStyles = (type: 'none' | 'movement' | 'keyword' | 'both') => {
    switch (type) {
      case 'movement':
        return 'bg-yellow-100 text-yellow-800';
      case 'keyword':
        return 'bg-green-100 text-green-800';
      case 'both':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F1]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      <main className="flex-1 mt-[64px] mb-[60px] p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold mb-6 text-[#6B4423]">ระบบตรวจจับการหกล้ม</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ภาพที่ 1 (ก่อนหกล้ม)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  {image1Preview ? (
                    <img src={image1Preview} alt="Preview 1" className="mx-auto max-h-48 object-contain" />
                  ) : (
                    <div className="py-8">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, setImage1, setImage1Preview)}
                        className="hidden"
                        id="image1-upload"
                      />
                      <label
                        htmlFor="image1-upload"
                        className="cursor-pointer bg-[#6B4423] text-white px-4 py-2 rounded hover:bg-[#8B6243]"
                      >
                        เลือกรูปภาพ
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ภาพที่ 2 (หลังหกล้ม)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  {image2Preview ? (
                    <img src={image2Preview} alt="Preview 2" className="mx-auto max-h-48 object-contain" />
                  ) : (
                    <div className="py-8">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, setImage2, setImage2Preview)}
                        className="hidden"
                        id="image2-upload"
                      />
                      <label
                        htmlFor="image2-upload"
                        className="cursor-pointer bg-[#6B4423] text-white px-4 py-2 rounded hover:bg-[#8B6243]"
                      >
                        เลือกรูปภาพ
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleDetection}
                disabled={!image1 || !image2 || isProcessing}
                className={`w-full md:w-auto px-6 py-2 rounded ${
                  !image1 || !image2 || isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#6B4423] hover:bg-[#8B6243]'
                } text-white transition-colors duration-200`}
              >
                {isProcessing ? 'กำลังประมวลผล...' : 'ตรวจจับการหกล้ม'}
              </button>
            </div>
          </div>

          {(alertMessage || caption) && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-[#6B4423]">ผลการตรวจจับ</h2>
              {alertMessage && (
                <div className={`p-4 rounded-lg mb-4 ${getAlertStyles(alertType)}`}>
                  {alertMessage}
                </div>
              )}
              {caption && (
                <div className="p-4 bg-blue-50 text-blue-800 rounded-lg">
                  <strong>รายละเอียด:</strong> {caption}
                </div>
              )}
            </div>
          )}

          {detectionResult1 && detectionResult2 && (
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-bold mb-4 text-[#6B4423]">ผลการตรวจจับละเอียด</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">ภาพที่ 1</h3>
                  <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
                    {JSON.stringify(detectionResult1.json_data, null, 2)}
                  </pre>
                  {detectionResult1.human_img && (
                    <img src={detectionResult1.human_img} alt="Detected Person 1" className="mt-2 max-w-full h-auto" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">ภาพที่ 2</h3>
                  <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
                    {JSON.stringify(detectionResult2.json_data, null, 2)}
                  </pre>
                  {detectionResult2.human_img && (
                    <img src={detectionResult2.human_img} alt="Detected Person 2" className="mt-2 max-w-full h-auto" />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <FooterNavigation />
      </div>
    </div>
  );
};

export default CCTVPage;