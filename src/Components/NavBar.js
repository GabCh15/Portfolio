import {makeStyles} from "@material-ui/core/styles";
import NavElem from "./NavElem";
import {motion} from "framer-motion";

const useStyles = makeStyles(
    {
        navContent: {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            minHeight: '100vh',
            justifyContent: 'space-evenly',
            paddingLeft: '10px',
            color: '#8fcb9b',
            maxWidth: '15vw',
            fontFamily: 'MontSerrat'
        }

    }
)
const naVariants = {
    start: {},
    end: {transition: {staggerChildren: 0.5}},
}


const linkNames = {
    spanish: {navElemsText: ['Resumen', 'Habilidades', 'Experiencia', 'Contacto', 'Certificados']},
    english: {navElemsText: ['Resume', 'Skills', 'Experience', 'Contact', 'Certificates']}


}

function NavBar(props) {
    let elems = [];
    for (var lang in linkNames) {
        (lang===props.language &&  linkNames[lang].navElemsText.forEach((value,index)=>elems.push(<NavElem key={`elem ${index}`} text={value}/>)))

    }
    return (<motion.div className={useStyles().navContent} variants={naVariants} initial='start'
                        animate='end'>{elems}</motion.div>)
}

export default NavBar;
