import './Component/header/header.css';
import './Component/main/main.css';
import MainFunction from './Component/main/main';
import HeaderFunction  from './Component/header/header';
function App() {
  return (
    <div className="parent_div">
    <HeaderFunction />
      <MainFunction />
    </div>
  );
}

export default App;
