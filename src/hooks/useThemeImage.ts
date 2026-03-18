import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

/**
 * Returns the light image until hydration finishes, then swaps to the dark image
 * when the resolved theme is dark.
 */
export function useThemeImage(lightSrc: string, darkSrc: string): string {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return lightSrc;
  return resolvedTheme === 'dark' ? darkSrc : lightSrc;
}
