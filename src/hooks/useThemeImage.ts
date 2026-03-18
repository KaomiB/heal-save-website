import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

/** Avoid hydration flash: light src until mounted, then follow resolved theme. */
export function useThemeImage(lightSrc: string, darkSrc: string): string {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return lightSrc;
  return resolvedTheme === 'dark' ? darkSrc : lightSrc;
}
