import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NavBar from './NavBar/NavBar';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
