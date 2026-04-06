'use client';

import { ThemeProvider, useTheme } from './ThemeProvider';
import Navbar from './Navbar';
import Footer from './Footer';

function ShellInner({ children }) {
  const { theme, toggleTheme, mounted } = useTheme();

  const childrenWithProps = typeof children === 'function'
    ? children({ theme, toggleTheme, mounted })
    : children;

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
      {childrenWithProps}
      <Footer theme={theme} />
    </>
  );
}

export default function PageShell({ children }) {
  return (
    <ThemeProvider>
      <ShellInner>{children}</ShellInner>
    </ThemeProvider>
  );
}
