import logo from './logo.svg';
import './App.css';
function Header() {
  let title="this is a heading text";
  return(
    <h1>{title}</h1>
  );
  
}

function App() {
 return <Header />
}
export default App;