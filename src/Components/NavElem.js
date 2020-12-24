import {motion} from "framer-motion";

const elVariants = {
    start: {y: -1000, opacity: 0.5},
    end: {y: 0, transition: {duration: 0.8}}

}

function NavElem(props) {

    return (
        <motion.a whileHover={{x: 10, opacity: 2, cursor: 'pointer'}} variants={elVariants}>{props.text}</motion.a>
    )
}

export default NavElem;
