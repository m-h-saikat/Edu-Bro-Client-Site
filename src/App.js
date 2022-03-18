import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider.js/AuthProvider';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AdminBlogs from './Pages/AdminDashboard/AdminBlogs/AdminBlogs';
import AdminBooks from './Pages/AdminDashboard/AdminBooks/AdminBooks';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard/AdminDashboard';
import AdminNotes from './Pages/AdminDashboard/AdminNotes/AdminNotes';
import AdminWelcome from './Pages/AdminDashboard/AdminWelcome/AdminWelcome';
import AllBlogs from './Pages/AllBlogs/AllBlogs';
import BlogDetails from './Pages/AllBlogs/BlogDetails';
import AllBooks from './Pages/AllBooks/AllBooks';
import AllNotes from './Pages/AllNotes/AllNotes';
import AllQuestions from './Pages/AllQuestions/AllQuestions';
import Contact from './Pages/Contact/Contact';
import AddBlogsDashboard from './Pages/Dashboard/AddBlogsDashboard/AddBlogsDashboard';
import AddBooksDashboard from './Pages/Dashboard/AddBooksDashboard/AddBooksDashboard';
import AddNotesDashboard from './Pages/Dashboard/AddNotesDashboard/AddNotesDashboard';
import AddQuestionDashboard from './Pages/Dashboard/AddQuestionDashboard/AddQuestionDashboard';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardWelcome from './Pages/Dashboard/DashboardWelcome/DashboardWelcome';
import MakeAdmin from './Pages/AdminDashboard/MakeAdmin/MakeAdmin';
import ManageQuestion from './Pages/AdminDashboard/ManageQuestions/ManageQuestion';
import MyBlogs from './Pages/Dashboard/MyBlogs/MyBlogs';
import MyBooks from './Pages/Dashboard/MyBooks/MyBooks';
import MyNotes from './Pages/Dashboard/MyNotes/MyNotes';
import MyQuestions from './Pages/Dashboard/MyQuestions/MyQuestions';
import PendingQuestions from './Pages/Dashboard/PendingQuestions/PendingQuestions';
import EditProfile from './Pages/Dashboard/UserProfile/EditProfile';
import UserProfile from './Pages/Dashboard/UserProfile/UserProfile';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import FindQuestions from './Pages/FindQuestions/FindQuestions';
import Forum from './Pages/Forum/Forum';
import Home from './Pages/Home/Home/Home';
import QuestionDetailsSolve from './Pages/QuestionDetailsSolve/QuestionDetailsSolve';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AdminQuestion from './Pages/AdminDashboard/AdminQuestion/AdminQuestion';
import AddSyllabusDashboard from './Pages/Dashboard/AddSyllabusDashboard/AddSyllabusDashboard';
import AllSyllabus from './Pages/AllSyllabus/AllSyllabus';
import MySyllabus from './Pages/Dashboard/MySyllabus/MySyllabus';
import AdminSyllabus from './Pages/AdminDashboard/AdminSyllabus/AdminSyllabus';
import AdminRoute from './Login/AdminRoute/AdminRoute';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import MyLabs from './Pages/Dashboard/MyLabs/MyLabs';
import AddLabsDashboard from './Pages/Dashboard/AddLabsDashboard/AddLabsDashboard';
import AllLabs from './Pages/AllLabs/AllLabs';

import CustomerReview from './Pages/Dashboard/CustomerReview/CustomerReview';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allQuestions" element={<AllQuestions />} />
            <Route path="/allBooks" element={<AllBooks />} />
            <Route path="/allSyllabus" element={<AllSyllabus />} />
            <Route path="/allBlogs" element={<AllBlogs />} />
            <Route path="/allNotes" element={<AllNotes />} />
            <Route path="/allLabs" element={<AllLabs />} />
            <Route path='/find-questions' element={<FindQuestions />} />
            <Route path='/forum' element={<Forum />} />

            {/* Admin Dashboard  */}

            <Route path='/admin-dashboard' element={<AdminRoute><AdminDashboard /></AdminRoute>}>
              <Route path='/admin-dashboard' element={<AdminRoute><AdminWelcome /></AdminRoute>} />
              <Route path='/admin-dashboard/welcome' element={<AdminRoute><AdminWelcome /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-questions' element={<AdminRoute><AdminQuestion /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-blogs' element={<AdminRoute><AdminBlogs /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-notes' element={<AdminRoute><AdminNotes /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-books' element={<AdminRoute><AdminBooks /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-syllabus' element={<AdminRoute><AdminSyllabus /></AdminRoute>} />
              <Route path='/admin-dashboard/manage-questions' element={<AdminRoute><ManageQuestion /></AdminRoute>} />
              <Route path='/admin-dashboard/make-admin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            </Route>

            {/* User Dashboard  */}

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path='/dashboard' element={<DashboardWelcome />} />
              <Route path='/dashboard/welcome' element={<DashboardWelcome />} />
              <Route path='/dashboard/my-questions' element={<MyQuestions />} />
              <Route path='/dashboard/my-books' element={<MyBooks />} />
              <Route path='/dashboard/my-syllabus' element={<MySyllabus />} />
              <Route path='/dashboard/user-review' element={<CustomerReview />} />
              <Route path='/dashboard/my-blogs' element={<MyBlogs />} />
              <Route path='/dashboard/my-notes' element={<MyNotes />} />
              <Route path='/dashboard/my-labs' element={<MyLabs />} />





              <Route path='/dashboard/add-question' element={<AddQuestionDashboard />} />
              <Route path='/dashboard/add-books' element={<AddBooksDashboard />} />
              <Route path='/dashboard/add-syllabus' element={<AddSyllabusDashboard />} />
              <Route path='/dashboard/add-labs' element={<AddLabsDashboard />} />
              <Route path='/dashboard/add-notes' element={<AddNotesDashboard />} />
              <Route path='/dashboard/add-blogs' element={<AddBlogsDashboard />} />
              <Route path='/dashboard/user-profile' element={<UserProfile />} />
              <Route path='/dashboard/edit-profile' element={<EditProfile />} />
              <Route path='/dashboard/pending-questions' element={<PendingQuestions />} />
            </Route>

            <Route path='/question-details/:id' element={<QuestionDetailsSolve />} />

            <Route path='/blog-details/:id' element={<BlogDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;  