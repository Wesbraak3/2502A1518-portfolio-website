'use client'

import { Button } from '../atoms/Button'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Button content={<FiSun/>} className='rounded-full'/>
  )

  if (resolvedTheme === 'dark') {
    return <Button content={<FiSun/>} action={() => setTheme('light')} className='rounded-full'/>
  }
  
  if (resolvedTheme === 'light') {
    return <Button content={<FiMoon/>} action={() => setTheme('dark')} className='rounded-full'/>
  }
}