import axios from 'axios';

// Define a type for the Person Detection response
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

// Define a type for the Longan tokenization response
interface LonganTokenizationResponse {
  tokens: string[];
  sentences?: string[];
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

// Function to call Caption Generation API
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

// Function to call Longan Tokenization API
export const tokenizeThai = async (text: string, options?: {
  wordseg?: boolean;
  sentseg?: boolean;
  sep?: string;
}): Promise<LonganTokenizationResponse> => {
  const apiUrl = 'https://api.aiforthai.in.th/longan/tokenize';
  const apiKey = 'R6ywJHgqJSmnpcOezDrFUj21QlP2BIjf';

  const params = {
    text,
    wordseg: options?.wordseg ?? true,
    sentseg: options?.sentseg ?? true,
    sep: options?.sep ?? '|'
  };

  try {
    const response = await axios.get(apiUrl, {
      params,
      headers: {
        'Apikey': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Longan API request error:", error);
    throw error;
  }
};
// utils/api.ts
export interface AudioCaptionResponse {
  filename: string;
  content_type: string;
  prompt: string;
  content: string[];
  execute_time: string;
  OK?: boolean;
  errmsg?: string;
}

export const generateAudioCaption = async (
  audioFile: File,
  instruction: string = 'ถอดเสียงข้อความ'
): Promise<AudioCaptionResponse> => {
  const formData = new FormData();
  formData.append('file', audioFile);
  formData.append('instruction', instruction);

  const response = await fetch('http://localhost:8000/generate-audio-caption', {
    method: 'POST',
    body: formData,
  });

  const data: AudioCaptionResponse = await response.json();

  if (!response.ok || data.OK === false) {
    throw new Error(data.errmsg || 'Failed to generate audio caption');
  }

  return data;
};

