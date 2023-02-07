import './css/main.css';
import NavBar from './components/NavBar';

function App() {
	return (
        <body>
        <div class="container">
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
            
        <script src="components/ressurser.js"></script>
    </body>
	);
}

export default App;
