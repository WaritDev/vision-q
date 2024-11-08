import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-base-200 via-base-100 to-base-200">
      {/* Navigation Bar */}
      <div className="navbar bg-base-100 fixed top-0 z-50 shadow-sm">
        <div className="navbar-start">
          <a href="#" className="btn btn-ghost text-xl">
            KHAI-TOM
          </a>
        </div>
        <div className="navbar-end">
          <a href="#concept" className="btn btn-ghost">
            Concept
          </a>
          <a href="#map" className="btn btn-ghost">
            Map
          </a>
          <a href="#apis" className="btn btn-ghost">
            APIs
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              <span className="text-primary">Vision</span>
              <span className="text-secondary">Queue</span>
            </h1>
            <h2 className="text-2xl font-semibold mt-2">AI APIs on Shelf</h2>
            <p className="py-6">
              เพื่อค้นหาการเรียงคิวของลูกค้าที่ดีที่สุด
              ในรูปแบบที่เป็นมิตรต่อผู้ใช้ ตั้งแต่การวางแผนที่นั่ง ไปจนถึง AI
              ตัวช่วยการจัดการคิวและการแจ้งเตือนอัตโนมัติ
              ที่จะช่วยให้การบริหารจัดการร้านค้าเป็นไปอย่างมีประสิทธิภาพสูงสุด
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary">เริ่มต้นใช้</button>
              <button className="btn btn-outline btn-secondary">
                ทดลองเลย
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Section */}
      <section id="concept" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Problems & Concept
          </h2>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/restaurant-image.jpg"
                alt="Restaurant Concept"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <p>
                การจัดการคิวในร้านอาหารให้มีประสิทธิภาพ เป็นความท้าทายที่สำคัญ
                โดยเฉพาะในช่วงเวลาเร่งด่วน เราจึงพัฒนาระบบที่ช่วยจัดการปัญหานี้
                ด้วยการใช้ AI วิเคราะห์และจัดการคิวอย่างชาญฉลาด
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Supermarket Map
          </h2>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="aspect-square rounded-box overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APIs Section */}
      <section id="apis" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">APIs Result</h2>
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
                      <th className="px-4 py-3">ช่วงที่ 1</th>
                      <th className="px-4 py-3">ช่วงที่ 2</th>
                      <th className="px-4 py-3">ช่วงที่ 3</th>
                      <th className="px-4 py-3">ช่วงที่ 4</th>
                      <th className="px-4 py-3">ช่วงที่ 5</th>
                      <th className="px-4 py-3">ช่วงที่ 6</th>
                      <th className="px-4 py-3">ช่วงที่ 7</th>
                      <th className="px-4 py-3">ช่วงที่ 8</th>
                      <th className="px-4 py-3">ช่วงที่ 9</th>
                      <th className="px-4 py-3">ช่วงที่ 10</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3">1.</td>
                      <td className="px-4 py-3">แม็คโคร รังสิต</td>
                      <td className="px-4 py-3">20</td>
                      <td className="px-4 py-3">14</td>
                      <td className="px-4 py-3">20</td>
                      <td className="px-4 py-3">10</td>
                      <td className="px-4 py-3">14</td>
                      <td className="px-4 py-3">11</td>
                      <td className="px-4 py-3">12</td>
                      <td className="px-4 py-3">14</td>
                      <td className="px-4 py-3">9</td>
                      <td className="px-4 py-3">8</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">2.</td>
                      <td className="px-4 py-3">บิ๊ก รังสิต</td>
                      <td className="px-4 py-3">10</td>
                      <td className="px-4 py-3">12</td>
                      <td className="px-4 py-3">12</td>
                      <td className="px-4 py-3">12</td>
                      <td className="px-4 py-3">7</td>
                      <td className="px-4 py-3">9</td>
                      <td className="px-4 py-3">11</td>
                      <td className="px-4 py-3">13</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">3.</td>
                      <td className="px-4 py-3">บิ๊กซี รังสิต 2</td>
                      <td className="px-4 py-3">9</td>
                      <td className="px-4 py-3">4</td>
                      <td className="px-4 py-3">14</td>
                      <td className="px-4 py-3">10</td>
                      <td className="px-4 py-3">4</td>
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">7</td>
                      <td className="px-4 py-3">3</td>
                      <td className="px-4 py-3">9</td>
                      <td className="px-4 py-3">8</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">4.</td>
                      <td className="px-4 py-3">ท็อปส์ พลาซ่าเซอร์ รังสิต</td>
                      <td className="px-4 py-3">15</td>
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">6</td>
                      <td className="px-4 py-3">9</td>
                      <td className="px-4 py-3">9</td>
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">8</td>
                      <td className="px-4 py-3">14</td>
                      <td className="px-4 py-3">15</td>
                      <td className="px-4 py-3">17</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">About VisionQueue</span>
          <p className="max-w-xs">
            ระบบจัดการคิวอัจฉริยะที่ใช้ AI
            เพื่อเพิ่มประสิทธิภาพการทำงานของร้านค้า
          </p>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a href="#concept" className="link link-hover">
            Concept
          </a>
          <a href="#map" className="link link-hover">
            Map
          </a>
          <a href="#apis" className="link link-hover">
            APIs
          </a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">support@visionqueue.com</a>
          <a className="link link-hover">Tel: 02-xxx-xxxx</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>&copy; 2024 VisionQueue. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
