
import NavBar from './NavBar'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'

function App() {
	
	return (
		<div className="app-container">
			<NavBar />
			<Intro />

			<About />

			<br></br>

			<br></br>
			
			<Experience />

			<Projects />
		</div>
	);
}

export default App
