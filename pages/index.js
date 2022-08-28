import Head from 'next/head';
import { useToasts } from 'react-toast-notifications';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { addToast } = useToasts();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <button onClick={() => addToast('erro', { appearance: 'error' })}>
        Erro
      </button>
      <button onClick={() => addToast('sucesso', { appearance: 'success' })}>
        Sucesso
      </button>
      <button onClick={() => addToast('Aviso', { appearance: 'warning' })}>
        Aviso
      </button>
      <button onClick={() => addToast('informação', { appearance: 'info' })}>
        Informação
      </button>
    </div>
  );
}
