
import PrivateRoute from './components/PrivateRoute';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { RSVPProvider } from './context/RSVPContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EventDetail from './pages/EventDetail';
import SubmitEvent from './pages/SubmitEvent';
import AdminDashboard from './pages/AdminDashboard';
import Archive from './pages/Archive';
import NotFound from './pages/NotFound';
import EditEvent from './pages/EditEvent';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
      <RSVPProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/submit-event" element={<SubmitEvent />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin/edit/:id" element={<EditEvent />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />



          </Routes>
        </Layout>
      </RSVPProvider>
    </BrowserRouter>
  );
}

export default App;
