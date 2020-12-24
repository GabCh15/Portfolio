import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    langSel: {
        position: 'fixed',
        top: 0,
        right: 0,
    }

})

const langList = {
    spanish: {words: ['Español', 'Inglés']},
    english: {words: ['Spanish', 'English']}

}
const availableLangs = ['spanish', 'english']
let LangAndMore = props => {
    var langs = [];

    for (var lang in langList) {
        (lang === props.language && langList[lang].words.forEach((word, index) => langs.push(<option
            key={availableLangs[index]} value={availableLangs[index]}>{word}</option>)))
    }

    return (
        <div><select className={useStyles().langSel} onChange={(ev) => props.setLang(ev.target.value)}>
            {langs}
        </select></div>

    )

}
export default LangAndMore;
