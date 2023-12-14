import { SetStateAction, useEffect, useState } from 'react';

import { addDoc, collection, getDocs, serverTimestamp, orderBy, query } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

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
      const docRef = await addDoc(collection(db, `${email}_footyScarfs`), {
        footyScarfs: scarf,
        created: serverTimestamp(),
      });

      console.log('Document written with ID: ', docRef.id);
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
      console.log(scarfs, newData);
    });
  };

  const onLogOutButtonClick = (): void => {
    endSession();
    navigate(routes.HOME);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <span>{email}</span>
        <button type="button" onClick={onLogOutButtonClick}>
          Log Out
        </button>
      </div>
      <title>My Collection</title>
      <div>
        <div>
          <input type="text" placeholder="New footy team" onChange={e => setScarf(e.target.value)} />
        </div>

        <div className="btn-container">
          <button type="submit" className="btn" onClick={addTodo}>
            Submit
          </button>
        </div>
      </div>
      <div>
        {scarfs?.map(({ footyScarfs, id }) => (
          <p key={id} style={{ color: 'white' }}>
            {footyScarfs}
          </p>
        ))}
      </div>
    </div>
  );
};
