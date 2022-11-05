import Link from "next/link";
import MainLayout from "../src/components/Layout/MainLayout";
import styles from '../src/components/Layout/MainLayout.module.css'

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
        <h1 className={styles.title}>
         Ir a <Link href="/">home!</Link>
        </h1>
    </MainLayout>
  );
}
