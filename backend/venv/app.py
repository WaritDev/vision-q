# backend/app.py
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from aift.multimodal import audioqa
from aift import setting
import os
import uuid

app = FastAPI()

# ตั้งค่า API Key สำหรับ AIFT
setting.set_api_key('R6ywJHgqJSmnpcOezDrFUj21QlP2BIjf')  # แทนที่ 'YOUR_API_KEY' ด้วยคีย์จริง

# สร้างโฟลเดอร์สำหรับเก็บไฟล์ชั่วคราว
TEMP_DIR = "temp_audio"
os.makedirs(TEMP_DIR, exist_ok=True)

@app.post("/generate-audio-caption")
async def generate_audio_caption(
    file: UploadFile = File(...),
    instruction: str = Form("ถอดเสียงข้อความ")
):
    try:
        # สร้างชื่อไฟล์ชั่วคราวที่ไม่ซ้ำกัน
        unique_id = uuid.uuid4().hex
        file_extension = os.path.splitext(file.filename)[1]
        temp_file_path = os.path.join(TEMP_DIR, f"{unique_id}{file_extension}")

        # บันทึกไฟล์ที่อัพโหลดลงในโฟลเดอร์ชั่วคราว
        with open(temp_file_path, "wb") as buffer:
            buffer.write(await file.read())

        # เรียกใช้ฟังก์ชัน generate ของ AIFT
        result = audioqa.generate(temp_file_path, instruction)

        # ลบไฟล์ชั่วคราวหลังจากใช้งาน
        os.remove(temp_file_path)

        return result

    except Exception as e:
        return {"OK": False, "errmsg": str(e)}
    
    
    
origins = [
    "http://localhost:3000",  # URL ของ Next.js
    # เพิ่ม URL อื่นๆ ถ้าจำเป็น
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)