import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';
import './body.css';

export default function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Main />
      </div>
      <div className="body">
        <Footer />
      </div>
    </div>
    
  );
}
