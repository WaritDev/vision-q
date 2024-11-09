import AnimateOnScroll from '../app/animations/AnimateOnScroll';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <AnimateOnScroll animation="slideUp">
            <h1 className="text-5xl font-bold">
              <span className="text-primary">Elder</span>
              <span className="text-secondary">Vision</span>
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeIn" delay={0.2}>
            <h2 className="text-2xl font-semibold mt-2">AI APIs on Shelf</h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeIn" delay={0.4}>
            <p className="py-6">
              เพื่อค้นหาการเรียงคิวของลูกค้าที่ดีที่สุด
              ในรูปแบบที่เป็นมิตรต่อผู้ใช้ ตั้งแต่การวางแผนที่นั่ง ไปจนถึง AI
              ตัวช่วยการจัดการคิวและการแจ้งเตือนอัตโนมัติ
              ที่จะช่วยให้การบริหารจัดการร้านค้าเป็นไปอย่างมีประสิทธิภาพสูงสุด
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slideUp" delay={0.6}>
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary">เริ่มต้นใช้</button>
              <button className="btn btn-outline btn-secondary">
                ทดลองเลย
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Hero;