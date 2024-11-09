export async function detectPerson(imageFile: File) {
    const formData = new FormData();
    formData.append('src_img', imageFile);
    formData.append('json_export', 'true');
    formData.append('img_export', 'true');
  
    try {
      const response = await fetch('https://api.aiforthai.in.th/person/human_detect/', {
        method: 'POST',
        headers: {
          'Apikey': 'R6ywJHgqJSmnpcOezDrFUj21QlP2BIjf',
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }