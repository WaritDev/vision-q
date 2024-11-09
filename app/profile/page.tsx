"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import FooterNavigation from '@/components/FooterNavigation';

interface PersonalInfo {
  name: string;
  age: string;
  gender: string;
  bloodType: string;
}

interface MedicalInfo {
  condition: string;
  allergies: string;
}

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

const ProfilePage: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    age: '',
    gender: '',
    bloodType: '',
  });

  const [medicalInfo, setMedicalInfo] = useState<MedicalInfo>({
    condition: '',
    allergies: '',
  });

  const [medications, setMedications] = useState<Medication[]>([]);
  const [newMedication, setNewMedication] = useState<Medication>({ name: '', dosage: '', frequency: '' });

  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingMedical, setIsEditingMedical] = useState(false);

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleMedicalInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMedicalInfo({ ...medicalInfo, [e.target.name]: e.target.value });
  };

  const handleNewMedicationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMedication({ ...newMedication, [e.target.name]: e.target.value });
  };

  const addMedication = () => {
    if (newMedication.name && newMedication.dosage && newMedication.frequency) {
      setMedications([...medications, newMedication]);
      setNewMedication({ name: '', dosage: '', frequency: '' });
    }
  };

  const removeMedication = (index: number) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F1]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Header />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 mt-16 mb-20 overflow-y-auto">
        <h1 className="text-3xl font-bold text-[#6B4423] mb-6">ข้อมูลผู้สูงอายุ</h1>
        
        {/* ข้อมูลส่วนตัว */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-[#6B4423] mb-4">ข้อมูลส่วนตัว</h2>
          {isEditingPersonal ? (
            <div className="space-y-4">
              <input type="text" placeholder="ชื่อ-นามสกุล" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} className="input input-bordered w-full" />
              <input type="text" placeholder="อายุ" name="age" value={personalInfo.age} onChange={handlePersonalInfoChange} className="input input-bordered w-full" />
              <input type="text" placeholder="เพศ" name="gender" value={personalInfo.gender} onChange={handlePersonalInfoChange} className="input input-bordered w-full" />
              <input type="text" placeholder="กรุ๊ปเลือด" name="bloodType" value={personalInfo.bloodType} onChange={handlePersonalInfoChange} className="input input-bordered w-full" />
              <button onClick={() => setIsEditingPersonal(false)} className="btn btn-primary">บันทึก</button>
            </div>
          ) : (
            <div>
              <p><strong>ชื่อ-นามสกุล:</strong> {personalInfo.name || 'ไม่ระบุ'}</p>
              <p><strong>อายุ:</strong> {personalInfo.age || 'ไม่ระบุ'}</p>
              <p><strong>เพศ:</strong> {personalInfo.gender || 'ไม่ระบุ'}</p>
              <p><strong>กรุ๊ปเลือด:</strong> {personalInfo.bloodType || 'ไม่ระบุ'}</p>
              <button onClick={() => setIsEditingPersonal(true)} className="btn btn-light mt-4">แก้ไข</button>
            </div>
          )}
        </div>

        {/* ข้อมูลทางการแพทย์ */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-[#6B4423] mb-4">ข้อมูลทางการแพทย์</h2>
          {isEditingMedical ? (
            <div className="space-y-4">
              <textarea placeholder="โรคประจำตัว" name="condition" value={medicalInfo.condition} onChange={handleMedicalInfoChange} className="textarea textarea-bordered w-full" />
              <textarea placeholder="การแพ้ยา" name="allergies" value={medicalInfo.allergies} onChange={handleMedicalInfoChange} className="textarea textarea-bordered w-full" />
              <button onClick={() => setIsEditingMedical(false)} className="btn btn-primary">บันทึก</button>
            </div>
          ) : (
            <div>
              <p><strong>โรคประจำตัว:</strong> {medicalInfo.condition || 'ไม่ระบุ'}</p>
              <p><strong>การแพ้ยา:</strong> {medicalInfo.allergies || 'ไม่ระบุ'}</p>
              <button onClick={() => setIsEditingMedical(true)} className="btn btn-light mt-4">แก้ไข</button>
            </div>
          )}
        </div>

        {/* ข้อมูลยา */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6B4423] mb-4">ข้อมูลยา</h2>
          <div className="space-y-4 mb-4">
            <input type="text" placeholder="ชื่อยา" name="name" value={newMedication.name} onChange={handleNewMedicationChange} className="input input-bordered w-full" />
            <input type="text" placeholder="ขนาดยา" name="dosage" value={newMedication.dosage} onChange={handleNewMedicationChange} className="input input-bordered w-full" />
            <input type="text" placeholder="ความถี่ในการใช้ยา" name="frequency" value={newMedication.frequency} onChange={handleNewMedicationChange} className="input input-bordered w-full" />
            <button onClick={addMedication} className="btn btn-light">เพิ่มยา</button>
          </div>
          <div className="space-y-2">
            {medications.map((med, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                <span>{med.name} - {med.dosage} - {med.frequency}</span>
                <button onClick={() => removeMedication(index)} className="btn btn-error btn-sm">ลบ</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fixed Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md">
        <FooterNavigation />
      </div>
    </div>
  );
};

export default ProfilePage;