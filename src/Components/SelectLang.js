import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import es from "../img/espana.png";
import eu from "../img/estados-unidos.png";


const langList = {
    spanish: {
        words: ['Español', 'Inglés'],
    },
    english: {words: ['Spanish', 'English']}

}
const langLst = {
    flags: [
        es,
        eu
    ]

}
const availableLangs = ['spanish', 'english']

let SelectLang = props => {
    const [listHovered, setListHovered] = useState(false)
    var langs = [];
    var selected = null;


    for (var lang in langList) {

        (lang === props.language && langList[lang].words.forEach((word, index) => {
            var val = availableLangs[index]
            if (props.language === val) selected = <li style={{display: 'flex', justifyContent: 'center'}}
                                                       key={availableLangs[index]} value={val}>
                <FontAwesomeIcon style={{marginRight: '2px'}} icon={faAngleDown}/><img alt='lang'
                                                                                       src={langLst["flags"][index]}/>
            </li>
            else
                langs.push(<li
                    key={availableLangs[index]} value={val}
                    onClick={() => props.setLang(val)}><img alt='lang' src={langLst["flags"][index]}/></li>)


        }))
    }
    return (<ul className={props.langL} onMouseEnter={() => setListHovered(true)}
                onMouseLeave={() => setListHovered(false)}>
        {selected}
        <ul style={{
            listStyleType: 'inherit',
            position: 'absolute',
            marginTop: '16px'
        }}>{listHovered && langs}</ul>

    </ul>)

}
export default SelectLang;
