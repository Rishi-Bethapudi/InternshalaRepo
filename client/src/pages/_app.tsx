import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { store } from '@/store/store';
import { Provider, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '@/firebase/firebase';
import { login, logout } from '@/Features/UserSlice';
export default function App({ Component, pageProps }: AppProps) {
  function AuthListener() {
    const dispatch = useDispatch();
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch(
            login({
              uid: authUser.uid,
              name: authUser.displayName,
              photo: authUser.photoURL,
              email: authUser.email,
              phoneNumber: authUser.phoneNumber,
            })
          );
        } else {
          dispatch(logout());
        }
      });
    }, [dispatch]);
    return null;
  }

  return (
    <Provider store={store}>
      <>
        <AuthListener />
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </>
    </Provider>
  );
}
