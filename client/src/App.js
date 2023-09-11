import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
// import RegisterFormPage from "./pages/authentication/RegisterFormPage";
// import instructionDirection from "./assets/direction.png";
// import PasswordConfirmationPage from "./pages/notifcation/PasswordConfirmationPage";
// import ClientHistoryPage from "./pages/dashboard/ClientHistoryPage";
// import ClientProfilePage from "./pages/dashboard/ClientProfilePage";
// import ClientHomePage from "./pages/dashboard/ClientHomePage";
// import ResetPasswordByEmailPage from "./pages/authentication/ResetPasswordByEmailPage";
// import ResetPasswordFromProfilePage from "./pages/authentication/ResetPasswordFromProfilePage";
// import PrivateOutlet from "./routes/PrivateOutlet";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Profile from "./Profile";
import Error from "./Error";



function App() {
  return (
    <>
      <Router>
        <Routes>


          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        
       

          <Route path="/*" >
            <Route
              path="home"
              element={
                <HomePage />
                  }
                />


            <Route path="client-profile" element={<Profile />} />
            <Route path="*" element={<Error />} />

          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
