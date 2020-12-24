import './App.css';
import NavBar from "./Components/NavBar";
import {useState} from "react";
import LangAndMore from "./Components/LangAndMore";

function App() {
    const [lang,setLang]=useState('spanish');
    return (
        <div>
            <NavBar language={lang}/>
            <div className="structure">

            </div>
            <LangAndMore language={lang} setLang={setLang}/>
        </div>

    );
}

export default App;
