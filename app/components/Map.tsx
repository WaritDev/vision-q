const Map = () => {
  return (
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
  );
};

export default Map;