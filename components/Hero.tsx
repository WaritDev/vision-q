import AnimateOnScroll from '../app/animations/AnimateOnScroll';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[#F5F5F1]"> {/* Light cream background */}
      <div className="hero-content text-center">
        <div className="max-w-md">
          <AnimateOnScroll animation="slideUp">
            <h1 className="text-5xl font-bold">
              <span className="text-[#8B7355]">Elder</span> {/* Warm brown */}
              <span className="text-[#A67B5B]">Vision</span> {/* Lighter brown */}
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeIn" delay={0.2}>
            <h2 className="text-2xl font-semibold mt-2 text-[#6B4423]">AI APIs on Shelf</h2> {/* Deep brown */}
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeIn" delay={0.4}>
            <p className="py-6 text-[#5C4033]"> {/* Rich brown for text */}
              เพื่อค้นหาการเรียงคิวของลูกค้าที่ดีที่สุด
              ในรูปแบบที่เป็นมิตรต่อผู้ใช้ ตั้งแต่การวางแผนที่นั่ง ไปจนถึง AI
              ตัวช่วยการจัดการคิวและการแจ้งเตือนอัตโนมัติ
              ที่จะช่วยให้การบริหารจัดการร้านค้าเป็นไปอย่างมีประสิทธิภาพสูงสุด
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slideUp" delay={0.6}>
            <div className="flex justify-center gap-4">
              <button className="btn bg-[#8B7355] hover:bg-[#6B4423] text-white border-none">
                เริ่มต้นใช้
              </button>
              <button className="btn btn-outline border-[#A67B5B] text-[#A67B5B] hover:bg-[#A67B5B] hover:text-white">
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