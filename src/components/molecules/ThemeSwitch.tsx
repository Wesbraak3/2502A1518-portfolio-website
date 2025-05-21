'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Button } from '../atoms/Button';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) {
    return <Button label={<FiSun/>} className='rounded-full'/>
  }
  
  const isDark = resolvedTheme === 'dark';
  const icon = isDark ? <FiSun /> : <FiMoon />;
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')
  
  return (
    <Button
      label={icon}
      onClick={toggleTheme}
      className="rounded-full"
    />
  );
}