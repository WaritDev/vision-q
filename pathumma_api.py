# pathumma_api.py
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from aift.multimodal import vqa
from aift import setting
import io
from PIL import Image
import os

app = FastAPI()

# ตั้งค่า CORS เพื่อให้ Next.js สามารถเข้าถึง API นี้ได้
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ปรับเป็นโดเมนของคุณใน production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ตั้งค่า API Key สำหรับ Pathumma LLM
API_KEY = "YOUR_API_KEY"  # แทนที่ด้วย API Key จริงของคุณ
setting.set_api_key(API_KEY)

@app.post("/generate-caption/")
async def generate_caption(file: UploadFile = File(...), instruction: str = Form(...)):
    try:
        # อ่านข้อมูลไฟล์จากรูปภาพ
        contents = await file.read()
        
        # Save to a BytesIO object
        image_bytes = io.BytesIO(contents)
        
        # Save bytes to a temporary file path
        image = Image.open(image_bytes)
        temp_image_path = "temp_image.png"
        image.save(temp_image_path)
        
        # เรียกใช้ Vision LLM ของ Pathumma
        response = vqa.generate(temp_image_path, instruction)
        
        # ลบไฟล์ชั่วคราว
        os.remove(temp_image_path)
        
        return response
    except Exception as e:
        return {"OK": False, "errmsg": str(e)}
