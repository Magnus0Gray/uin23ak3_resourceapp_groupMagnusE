import logo from './logo.svg';
//import './App.css';
import './css/main.css';
import genNav from './ressurser';

function App() {
	return (
        <body>
        <div class="container">
            <header>
                <a href="index.html">
                    <h1>Ressursarkiv</h1>
                 </a>
            </header>
                <nav id="navBar" >
                    <genNav></genNav>
            </nav>
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
