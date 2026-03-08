'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFoundClient({
  tTitle,
  tDescription,
  tButton,
}: {
  tTitle: string;
  tDescription: string;
  tButton: string;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a1628] px-4 py-16">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#006FC4] blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[40%] -right-[10%] h-[600px] w-[600px] rounded-full bg-[#033163] blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-[20%] left-[20%] h-[400px] w-[400px] rounded-full bg-white blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        {/* SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 w-full max-w-xl lg:max-w-2xl"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/404.svg"
              alt="404 Not Found"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(0,111,196,0.3)]"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent text-7xl font-bold md:text-9xl drop-shadow-sm" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
              404
            </h1>
            <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#006FC4] to-transparent opacity-70" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-semibold text-white md:text-4xl"
            style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
          >
            {tTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mx-auto max-w-md text-lg text-white/70 md:text-xl font-light"
            style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
          >
            {tDescription}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#006FC4] px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_40px_-10px_rgba(0,111,196,0.8)] transition-all hover:scale-105 hover:bg-[#0059a3] hover:shadow-[0_0_60px_-15px_rgba(0,111,196,1)]"
              style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
            >
              <span className="absolute inset-0 -mt-1 h-full w-full rounded-full bg-gradient-to-b from-transparent via-transparent to-black opacity-20" />
              <Home className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              <span className="relative">{tButton}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
