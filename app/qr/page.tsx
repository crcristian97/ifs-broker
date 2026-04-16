"use client";

import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

const TARGET_URL = "https://www.broker-ifs.com/";

export default function QRPage() {
  return (
    <div className="min-h-screen bg-[#e6f3fa] flex items-center justify-center p-6 font-sans">
      {/* Print button - hidden on print */}
      <button
        onClick={() => window.print()}
        className="fixed top-6 right-6 bg-[#032363] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:bg-[#021a4a] transition-colors print:hidden"
      >
        Imprimir
      </button>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 w-full max-w-sm print:shadow-none print:rounded-none print:p-6">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#032363] rounded-t-3xl print:block" />

        {/* Logo */}
        <Image
          src="/ifs-logo.svg"
          alt="IFS Broker"
          width={140}
          height={48}
          priority
        />

        <div className="w-10 h-0.5 bg-[#032363] rounded-full" />

        <p className="text-sm text-center text-[#032363] font-medium leading-snug">
          Escaneá el código para<br />conocer todos nuestros servicios
        </p>

        {/* QR Code */}
        <div className="border-2 border-[#e6f3fa] rounded-2xl p-4 shadow-inner">
          <QRCodeSVG
            value={TARGET_URL}
            size={200}
            fgColor="#032363"
            bgColor="#ffffff"
            level="H"
          />
        </div>

        {/* URL label */}
        <span className="bg-[#e6f3fa] text-[#032363] text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
          www.broker-ifs.com
        </span>
      </div>

      <style>{`
        @media print {
          body { background: white; }
          button { display: none !important; }
        }
      `}</style>
    </div>
  );
}
