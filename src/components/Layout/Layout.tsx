import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';
import { useState } from 'react';
import cn from 'classnames';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={cn(styles['wrapper'], styles[(isMenuOpen ? 'mobmenu--open' : 'mobmenu--closed')])}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className={styles.main}>{children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
