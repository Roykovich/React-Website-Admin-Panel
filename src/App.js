import './App.css';
import Toolbar from './components/Toolbar'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


function Home() {
  return (
    <div className="container">
      <Toolbar />
      <Header />
      <Content />
      {/* <Footer />   */}
    </div>
  )
}


function App() {
  return <Home />
}

export default App;
