import { ReactNode } from 'react';
import { Header, Footer } from '@/pages/Index';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout = ({ children, showHeader = true, showFooter = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {showHeader && <Header />}
      <main className={showHeader ? 'pt-24' : ''}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;