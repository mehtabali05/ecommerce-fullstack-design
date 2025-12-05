export default function PromoBanner() {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Super discount on more than 100 USD</h3>
          <p className="text-blue-100">Have you ever finally just write dummy info</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition flex-shrink-0">
          Shop now
        </button>
      </div>
    );
  }
  