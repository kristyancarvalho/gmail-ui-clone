import { NavigationBar } from '../components/NavigationBar';
import { LeftSidebar } from '../components/LeftSidebar';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className={styles.main}>
        <LeftSidebar />
      </main>
    </>
  )
}
