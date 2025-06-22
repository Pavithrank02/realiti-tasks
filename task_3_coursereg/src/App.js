import { Route, Routes } from "react-router-dom";
import CourseList from "./view/CourseList";
import Header from "./components/Header";
import { CourseProvider } from './context/CourseContext'
import { ThemeProvider } from "./context/ThemeContext";
import MyCourses from "./view/MyCourses";

function App() {


  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-800">
        <CourseProvider >
          <Header />
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/registered" element={<MyCourses />} />
          </Routes>
        </CourseProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
