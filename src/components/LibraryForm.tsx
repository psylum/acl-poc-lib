import { RuxButton } from '@astrouxds/react';
import styles from './LibraryForm.module.css';

export default function LibraryForm({stringArg}: {stringArg: string}) {
  return (
    <RuxButton icon="account-box" className={styles.someStyle} onClick={() => console.log('i was lib clicked.')} >
      {stringArg}
    </RuxButton>
  );
}
