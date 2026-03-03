'use client'

import * as React from 'react'

type ThemeProviderProps = {
  children: React.ReactNode
}

// Simplified theme provider: if you don't need dark/light theme toggling,
// we just render children without relying on `next-themes`.
export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>
}
