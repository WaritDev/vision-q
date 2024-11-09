'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import AnimateOnScroll from '../app/animations/AnimateOnScroll';

const Apis = () => {
  const durationData = [
    { id: 1, name: "เซ็นทรัล ลาดพร้าว", durations: [2, 7, 3, 5, 5, 6, 10, 12, 15, 16] },
    { id: 2, name: "บิ๊ก ซี", durations: [15, 22, 18, 12, 7, 9, 11, 13, null, null] },
    { id: 3, name: "โลตัส ลาดพร้าว", durations: [8, 6, 14, 10, 5, 8, 7, 3, 9, 8] },
    { id: 4, name: "Food Land ลาดพร้าว", durations: [15, 18, 12, 8, 9, 7, 14, 16, 10, 12] }
  ];

  return (
    <section id="apis" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-center mb-16">
            APIs Result
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale" delay={0.2}>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>ลำดับ</th>
                      <th>ซูเปอร์มาร์เก็ต</th>
                      {[...Array(10)].map((_, i) => (
                        <th key={i}>ช่อง {i + 1}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {durationData.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        {row.durations.map((duration, index) => (
                          <td key={index}>
                            {duration !== null ? duration : '-'}
                          </td>
                        ))}
                      </tr>
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