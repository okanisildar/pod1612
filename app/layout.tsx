import type { PropsWithChildren } from 'react';

import { ThemeProvider } from '@/components/theme-provider';
import '@/components/theme-provider/styles.css';
import { getDefaultMetadata } from '@/lib/metadata';

export const metadata = getDefaultMetadata();

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
