import Navbar from './component/Navbar'
import Home from './component/Home'
import SocialLink from './component/SocialLink'
import Skill from './component/Skill.js'
import Contact from './component/Contact'
import About from './component/About'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <SocialLink />
      <Skill />
      <Contact />
    </div>
  )
}

export default App
