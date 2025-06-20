import { Route, Routes } from "react-router-dom";
import CourseList from "./components/CourseList";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { CourseProvider } from './context/CourseContext'
import { ThemeProvider } from "./context/ThemeContext";
import MyCourses from "./components/MyCourses";

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
