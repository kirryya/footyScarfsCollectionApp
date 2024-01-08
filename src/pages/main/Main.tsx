import { SetStateAction, useEffect, useState } from 'react';

import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import s from './main.module.scss';

import { routes } from '@/const';
import { db } from '@/firebase';
import { endSession, getSession, isLoggedIn } from '@/storage/session';
import { ReturnComponentType } from '@/types';

export const Main = (): ReturnComponentType => {
  const navigate = useNavigate();
  const [scarf, setScarf] = useState<string>('');
  const [scarfs, setScarfs] = useState([]);
  const [email, setEmail] = useState<string>('');
  const [flag, setFlag] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate(routes.LOGIN);
    }

    setEmail(getSession().email);

    fetchPost();
  }, [navigate, flag, email]);

  const addTodo = async (e): Promise<void> => {
    e.preventDefault();

    try {
      await addDoc(collection(db, `${email}_footyScarfs`), {
        footyScarfs: scarf,
        created: serverTimestamp(),
      });

      setScarf('');
    } catch (e) {
      console.error('Error adding document: ', e);
    } finally {
      setFlag(prev => !prev);
    }
  };

  const fetchPost = async (): Promise<void> => {
    await getDocs(query(collection(db, `${email}_footyScarfs`), orderBy('footyScarfs', 'desc'))).then(querySnapshot => {
      const newData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setScarfs(newData as SetStateAction<never[]>);
    });
  };

  const onChangeNewFootyInput = (e): void => {
    setScarf(e.target.value);
  };

  const onLogOutButtonClick = (): void => {
    endSession();
    navigate(routes.LOGIN);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '98%', marginTop: '1%' }}>
        <span style={{ fontSize: 'large', fontWeight: 'bolder', backgroundColor: 'green' }}>Аккаунт: {email}</span>
        <button type="button" onClick={onLogOutButtonClick}>
          Log Out
        </button>
      </div>

      <div className={s.data}>
        <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '1%', gap: '1%' }}>
          <div>
            <input
              type="text"
              placeholder="Введите название нового шарфа"
              value={scarf}
              onChange={onChangeNewFootyInput}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Добавить
            </button>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Название шарфа</th>
              <th>Дата появления</th>
            </tr>
            {scarfs?.map(({ footyScarfs, id }) => (
              <tr key={id} style={{ textAlign: 'start' }}>
                <td>{footyScarfs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
