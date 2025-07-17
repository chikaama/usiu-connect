import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
  const confirmed = window.confirm('Are you sure you want to logout?');
  if (confirmed) {
    setUser(null);
    alert('Logged out!');
  }
};

  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="text-xl font-bold mb-2 sm:mb-0">
          USIU CampusConnect
        </div>
        <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : 'hover:underline'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/archive"
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : 'hover:underline'
            }
          >
            Archive
          </NavLink>
          <NavLink
            to="/submit-event"
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : 'hover:underline'
            }
          >
            Submit Event
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : 'hover:underline'
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : 'hover:underline'
            }
          >
            Admin
          </NavLink>

          {user ? (
            <>
              <span className="ml-2">👤 {user.email}</span>
              <button
                onClick={handleLogout}
                className="underline ml-2 hover:text-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'underline font-semibold' : 'hover:underline'
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
