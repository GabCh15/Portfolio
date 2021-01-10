import {makeStyles} from "@material-ui/styles";
import SelectLang from "./SelectLang";
import Media from "./Media";

const useStyles = makeStyles({
    rightBar: {
        position: 'fixed',
        top: 0,
        right: 0,
        paddingRight: '3vh',
        paddingTop: '3vh',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: '2vw',
        maxWidth: '15vw',
    },
    langL: {
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        alignItems: 'flex-end',
        cursor: 'pointer'

    },


})


let LangAndMore = props => {


    return (
        <div className={useStyles().rightBar}>
            <SelectLang langL={useStyles().langL} language={props.language} setLang={props.setLang}/>
            <Media media={useStyles().media}/>
        </div>

    )

}
export default LangAndMore;
