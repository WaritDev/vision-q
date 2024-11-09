import React from 'react';
import AnimateOnScroll from '../app/animations/AnimateOnScroll';
import ConceptCarousel from './ConceptCarouse';

const Concept = () => {
  const concepts = [
    {
      title: "AI-Powered Queue Management",
      description: "การจัดการคิวในร้านอาหารให้มีประสิทธิภาพ เป็นความท้าทายที่สำคัญ โดยเฉพาะในช่วงเวลาเร่งด่วน เราจึงพัฒนาระบบที่ช่วยจัดการปัญหานี้ ด้วยการใช้ AI วิเคราะห์และจัดการคิวอย่างชาญฉลาด",
      imageSrc: "/images/download.jpg"
    },
    {
      title: "Real-time Table Availability",
      description: "ระบบแสดงสถานะโต๊ะแบบเรียลไทม์ช่วยให้พนักงานและลูกค้าทราบถึงโต๊ะที่ว่างได้ทันที ลดเวลารอคอยและเพิ่มประสิทธิภาพในการจัดการที่นั่ง",
      imageSrc: "/images/download.jpg"
    },
    {
      title: "Customer Feedback Integration",
      description: "เราใช้ระบบรับฟังความคิดเห็นของลูกค้าแบบอัตโนมัติ วิเคราะห์ข้อมูลเพื่อปรับปรุงการบริการและคุณภาพอาหารอย่างต่อเนื่อง",
      imageSrc: "/images/download.jpg"
    }
  ];

  return (
    <section id="concept" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-4xl font-bold text-center mb-16">
            Problems & Concepts
          </h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fadeIn">
          <ConceptCarousel concepts={concepts} />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Concept;