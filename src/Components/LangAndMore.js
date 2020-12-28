import {makeStyles} from "@material-ui/styles";
import SelectLang from "./SelectLang";


const useStyles = makeStyles({
    rightBar: {
        position: 'fixed',
        top: 0,
        right: 0,
    },
    langL: {
        display: 'flex',
        flexDirection: 'column',
        listStyleType: "none",
        alignItems: 'flex-end',

    }

})


let LangAndMore = props => {


    return (
        <div className={useStyles().rightBar}>
            <SelectLang langL={useStyles().langL} language={props.language} setLang={props.setLang}/>
        </div>

    )

}
export default LangAndMore;
