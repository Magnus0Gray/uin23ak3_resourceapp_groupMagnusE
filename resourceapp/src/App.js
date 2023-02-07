import './css/main.css';
import NavBar from './components/NavBar';

function App() {
	return (
        <div className="container">
            <header>
                <a href="index.html">
                    <h1>Ressursarkiv</h1>
                 </a>
            </header>
                <NavBar/>
            <main>
                <article id="mainArticles">
    
                </article>
            </main>
        </div>
            
        //<script src="components/ressurser.js"></script>
	);
}

export default App;
