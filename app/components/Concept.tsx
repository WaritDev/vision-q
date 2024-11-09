import Image from 'next/image';
import AnimateOnScroll from '../animations/AnimateOnScroll';

const Concept = () => {
  return (
    <section id="concept" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-4xl font-bold text-center mb-16">
            Problems & Concept
          </h2>
        </AnimateOnScroll>
        
        <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden">
          <AnimateOnScroll animation="slideRight" className="relative h-[300px] lg:w-1/2">
            <figure className="h-full">
              <Image
                src="/restaurant-image.jpg"
                alt="Restaurant Concept"
                fill
                className="object-cover"
              />
            </figure>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeIn" delay={0.3} className="card-body">
            <p>
              การจัดการคิวในร้านอาหารให้มีประสิทธิภาพ เป็นความท้าทายที่สำคัญ
              โดยเฉพาะในช่วงเวลาเร่งด่วน เราจึงพัฒนาระบบที่ช่วยจัดการปัญหานี้
              ด้วยการใช้ AI วิเคราะห์และจัดการคิวอย่างชาญฉลาด
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Concept;