/** @format */

import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <title>My Website</title>
      </Head>
      <header className='bg-gray-800 py-4'>
        <nav className='container mx-auto flex items-center justify-between'>
          <div className='text-white font-bold text-xl'>My Website</div>
          <div>
            <a
              className='inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
              href='/login'>
              Log In
            </a>
          </div>
        </nav>
      </header>
      <main className='container mx-auto flex-1 p-4'>{children}</main>
      <footer className='bg-gray-800 py-4'>
        <div className='container mx-auto text-white text-center'>
          &copy; 2021 My Website
        </div>
      </footer>
    </div>
  );
};

export default Layout;
