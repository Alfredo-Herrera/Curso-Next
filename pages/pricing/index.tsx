import Link from "next/link";
import MainLayout from "../../src/components/Layout/MainLayout";
import styles from '../../src/components/Layout/MainLayout.module.css'

export default function Pricing() {
  return (
    <>
      <h1>Pricing Page</h1>
        <h1 className={styles.title}>
         Ir a <Link href="/">home!</Link>
        </h1>
    </>
  );
}

Pricing.getLayout = function getLayout(page: JSX.Element | JSX.Element[]) {
  return (
    <MainLayout>
          {page}
    </MainLayout>
  )
}