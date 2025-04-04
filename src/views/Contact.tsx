import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Skills() {
  return (
      <div className="bg-gray-950 w-auto h-auto mx-auto text-white py-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold mb-6 fontLato">Contact</h2>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <FaEnvelope size={24} />
              <a
                  href="mailto:fernando.santiago770@gmail.com"
                  className="text-xl underline hover:text-gray-400 transition fontLato"
              >
                fernando.santiago770@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp size={24} />
              <span className="text-xl fontLato">(31) 98741-3780</span>
            </div>
          </div>
        </div>
      </div>
  );
}
