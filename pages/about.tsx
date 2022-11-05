import Link from "next/link";
import { DarkLayout } from "../src/components/Layout/DarkLayout";
import MainLayout from "../src/components/Layout/MainLayout";
import styles from '../src/components/Layout/MainLayout.module.css'

export default function About() {
  return (
    <>
      <h1>About Page</h1>
        <h1 className={styles.title}>
         Ir a <Link href="/">home!</Link>
        </h1>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element | JSX.Element[]) {
  return (
    <MainLayout>
      <DarkLayout>
          {page}
      </DarkLayout>
    </MainLayout>
  )
}