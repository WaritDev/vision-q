import { SupermarketData } from './types';
import AnimateOnScroll from '../animations/AnimateOnScroll';

const supermarketData: SupermarketData[] = [
  {
    id: 1,
    name: "แม็คโคร รังสิต",
    durations: [20, 14, 20, 10, 14, 11, 12, 14, 9, 8]
  },
  {
    id: 2,
    name: "บิ๊ก รังสิต",
    durations: [10, 12, 12, 12, 7, 9, 11, 13, "-", "-"]
  },
  {
    id: 3,
    name: "บิ๊กซี รังสิต 2",
    durations: [9, 4, 14, 10, 4, 5, 7, 3, 9, 8]
  },
  {
    id: 4,
    name: "ท็อปส์ พลาซ่าเซอร์ รังสิต",
    durations: [15, 5, 6, 9, 9, 5, 8, 14, 15, 17]
  }
];

const Apis = () => {
  return (
    <section id="apis" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-4xl font-bold text-center mb-16">APIs Result</h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="scale" delay={0.2}>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between mb-4">
                <div className="text-xl font-semibold">VisionQueue</div>
                <div className="text-xl font-semibold">
                  Duration predict (minutes)
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-4 py-3">ลำดับที่</th>
                      <th className="px-4 py-3">ชื่อซุปเปอร์มาเก็ต</th>
                      {Array.from({ length: 10 }, (_, i) => (
                        <th key={i} className="px-4 py-3">
                          ช่วงที่ {i + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {supermarketData.map((market, index) => (
                      <AnimateOnScroll
                        key={market.id}
                        animation="slideRight"
                        delay={0.1 * (index + 1)}
                      >
                        <tr>
                          <td className="px-4 py-3">{market.id}.</td>
                          <td className="px-4 py-3">{market.name}</td>
                          {market.durations.map((duration, index) => (
                            <td key={index} className="px-4 py-3">
                              {duration}
                            </td>
                          ))}
                        </tr>
                      </AnimateOnScroll>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Apis;