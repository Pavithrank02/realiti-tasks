import CourseList from "./components/CourseList";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { CourseProvider } from './context/CourseContext'

function App() {
  return (
    <div className="">
      <CourseProvider >
        <Header />
        <CourseList />
        <Pagination />
      </CourseProvider>

    </div>
  );
}

export default App;
