import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Layout!</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}