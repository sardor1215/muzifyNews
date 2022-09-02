import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Main from "./Routes/Main";
import NewsSpot from "./Routes/NewsSpot";
import Singer from "./Routes/Singer";
import Singers from "./Routes/Singers";
import TopCharts from "./Routes/TopCharts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news/:id" element={<NewsSpot />} />
        <Route path="/singer/:name" element={<Singer />} />
        <Route path="/singers" element={<Singers />} />
        <Route path="/topcharts" element={<TopCharts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
