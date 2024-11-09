import React from 'react';
import Image from 'next/image';

interface QueueTimeProps {
  counter: number;
  time: number;
}

const QueueTime: React.FC<QueueTimeProps> = ({ counter, time }) => {
  const getTimeColor = (time: number) => {
    if (time <= 5) return 'bg-cyan-300';
    if (time <= 10) return 'bg-yellow-300';
    return 'bg-red-300';
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-8 h-8 rounded-full bg-cyan-300 flex items-center justify-center">
        {counter}
      </div>
      <div className={`w-8 h-8 rounded-full ${getTimeColor(time)} flex items-center justify-center`}>
        {time}
      </div>
    </div>
  );
}

const Display = () => {
  const queueTimes = [
    { counter: 1, time: 2 },
    { counter: 2, time: 2 },
    { counter: 3, time: 3 },
    { counter: 4, time: 4 },
    { counter: 5, time: 5 },
    { counter: 6, time: 6 },
    { counter: 7, time: 10 },
    { counter: 8, time: 12 },
    { counter: 9, time: 15 },
    { counter: 10, time: 16 },
  ];

  return (
    <section id="display" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-4">
              {queueTimes.map(({ counter, time }, index) => (
                <QueueTime key={index} counter={counter} time={time} />
              ))}
            </div>
            
            <div className="relative w-full h-64">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <Image
                  src="/images/avatar.png"
                  alt="Virtual Assistant"
                  width={150}
                  height={150}
                />
                <div className="bg-gray-100 rounded-lg p-4 mt-4 text-center">
                  <p>ขอแนะนำให้ท่านไปที่ช่อง</p>
                  <p>ชำระเงินที่ 1</p>
                  <p className="font-semibold">Recommend</p>
                  <p>payment channel 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;