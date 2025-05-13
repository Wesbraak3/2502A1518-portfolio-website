'use client'

import { HeaderButton } from '../atoms/Button'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <HeaderButton content={<FiSun/>} className='rounded-full'/>
  )

  if (resolvedTheme === 'dark') {
    return <HeaderButton content={<FiSun/>} action={() => setTheme('light')} className='rounded-full'/>
  }
  
  if (resolvedTheme === 'light') {
    return <HeaderButton content={<FiMoon/>} action={() => setTheme('dark')} className='rounded-full'/>
  }
}