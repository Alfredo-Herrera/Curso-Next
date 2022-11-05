import Link from 'next/link'
import MainLayout from '../src/components/Layout/MainLayout'
import styles from '../src/components/Layout/MainLayout.module.css'

export default function Home() {
  return (
    <MainLayout >
        <h1>Home Page</h1>
          <h1 className={styles.title}>
            Ir a <Link href="/about">About!</Link>
        </h1>
    </MainLayout>
  )
}
