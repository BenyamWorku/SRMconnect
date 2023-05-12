/** @format */

import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <header>
      <nav>{session && <button onClick={handleLogout}>Logout</button>}</nav>
    </header>
  );
}

export default Header;
