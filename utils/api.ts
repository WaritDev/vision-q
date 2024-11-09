// utils/api.ts
import axios from 'axios';

// Define a type for the response
interface PersonDetectionResponse {
  json_data: Array<{
    object: string;
    x0: number;
    y0: number;
    x1: number;
    y1: number;
  }>;
  human_img?: string;
}

// Function to call Person Detection API
export const detectPerson = async (imageFile: File): Promise<PersonDetectionResponse> => {
  const apiUrl = 'https://api.aiforthai.in.th/person/human_detect/';
  const apiKey = 'R6ywJHgqJSmnpcOezDrFUj21QlP2BIjf';

  const formData = new FormData();
  formData.append('src_img', imageFile);
  formData.append('json_export', 'true');
  formData.append('img_export', 'true');

  const response = await axios.post(apiUrl, formData, {
    headers: {
      'Apikey': apiKey,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};


// utils/api.ts
export const generateCaption = async (imageFile: File): Promise<{ caption: string; ok: boolean; errmsg?: string }> => {
  const apiUrl = 'https://api.aiforthai.in.th/capgen';
  const apiKey = 'R6ywJHgqJSmnpcOezDrFUj21QlP2BIjf';

  const formData = new FormData();
  formData.append('file', imageFile);

  try {
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Apikey': apiKey,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Capgen API request error:", error);
    throw error;
  }
};
