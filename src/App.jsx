import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import Progress from "./pages/progress";

/* Protected Route */

function ProtectedRoute({ children }) {

  const user = localStorage.getItem("user");

  return user ? children : <Navigate to="/" />;

}

/* Login Route */

function LoginRoute() {

  const user = localStorage.getItem("user");

  return user ? <Navigate to="/home" /> : <Login />;

}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route
          path="/"
          element={<LoginRoute />}
        />

        {/* Protected Pages */}

        <Route

          path="/home"

          element={

            <ProtectedRoute>

              <Home />

            </ProtectedRoute>

          }

        />

        <Route

          path="/quiz/:language"

          element={

            <ProtectedRoute>

              <Quiz />

            </ProtectedRoute>

          }

        />

        <Route

          path="/result"

          element={

            <ProtectedRoute>

              <Result />

            </ProtectedRoute>

          }

        />

        <Route

          path="/progress"

          element={

            <ProtectedRoute>

              <Progress />

            </ProtectedRoute>

          }

        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;