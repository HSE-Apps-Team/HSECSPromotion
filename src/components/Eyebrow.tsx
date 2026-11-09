import type { ReactNode } from 'react';

export default function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{children}</div>;
}
