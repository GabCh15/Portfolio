import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import es from "../img/espana.png";
import eu from "../img/estados-unidos.png";


const langLst = {
    flags: [
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMCwyNTZjMCwzMS4zMTQsNS42MzMsNjEuMzEsMTUuOTIzLDg5LjA0M0wyNTYsMzY3LjMwNGwyNDAuMDc3LTIyLjI2MQ0KCUM1MDYuMzY3LDMxNy4zMSw1MTIsMjg3LjMxNCw1MTIsMjU2cy01LjYzMy02MS4zMS0xNS45MjMtODkuMDQzTDI1NiwxNDQuNjk2TDE1LjkyMywxNjYuOTU3QzUuNjMzLDE5NC42OSwwLDIyNC42ODYsMCwyNTZ6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTQ5Ni4wNzcsMTY2Ljk1N0M0NTkuOTA2LDY5LjQ3MywzNjYuMDcxLDAsMjU2LDBTNTIuMDk0LDY5LjQ3MywxNS45MjMsMTY2Ljk1N0g0OTYuMDc3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMTUuOTIzLDM0NS4wNDNDNTIuMDk0LDQ0Mi41MjcsMTQ1LjkyOSw1MTIsMjU2LDUxMnMyMDMuOTA2LTY5LjQ3MywyNDAuMDc3LTE2Ni45NTdIMTUuOTIzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo',
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0yNDQuODcsMjU2SDUxMmMwLTIzLjEwNi0zLjA4LTQ1LjQ5LTguODE5LTY2Ljc4M0gyNDQuODdWMjU2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMjQ0Ljg3LDEyMi40MzVoMjI5LjU1NmMtMTUuNjcxLTI1LjU3Mi0zNS43MDgtNDguMTc1LTU5LjA3LTY2Ljc4M0gyNDQuODdWMTIyLjQzNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTI1Niw1MTJjNjAuMjQ5LDAsMTE1LjYyNi0yMC44MjQsMTU5LjM1Ni01NS42NTJIOTYuNjQ0QzE0MC4zNzQsNDkxLjE3NiwxOTUuNzUxLDUxMiwyNTYsNTEyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMzcuNTc0LDM4OS41NjVoNDM2Ljg1MmMxMi41ODEtMjAuNTI5LDIyLjMzOC00Mi45NjksMjguNzU1LTY2Ljc4M0g4LjgxOQ0KCQlDMTUuMjM2LDM0Ni41OTYsMjQuOTkzLDM2OS4wMzYsMzcuNTc0LDM4OS41NjV6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTExOC41ODQsMzkuOTc4aDIzLjMyOWwtMjEuNywxNS43NjVsOC4yODksMjUuNTA5bC0yMS42OTktMTUuNzY1TDg1LjEwNCw4MS4yNTJsNy4xNi0yMi4wMzcNCglDNzMuMTU4LDc1LjEzLDU2LjQxMiw5My43NzYsNDIuNjEyLDExNC41NTJoNy40NzVsLTEzLjgxMywxMC4wMzVjLTIuMTUyLDMuNTktNC4yMTYsNy4yMzctNi4xOTQsMTAuOTM4bDYuNTk2LDIwLjMwMWwtMTIuMzA2LTguOTQxDQoJYy0zLjA1OSw2LjQ4MS01Ljg1NywxMy4xMDgtOC4zNzIsMTkuODczbDcuMjY3LDIyLjM2OGgyNi44MjJsLTIxLjcsMTUuNzY1bDguMjg5LDI1LjUwOWwtMjEuNjk5LTE1Ljc2NWwtMTIuOTk4LDkuNDQ0DQoJQzAuNjc4LDIzNC41MzcsMCwyNDUuMTg5LDAsMjU2aDI1NmMwLTE0MS4zODQsMC0xNTguMDUyLDAtMjU2QzIwNS40MjgsMCwxNTguMjg1LDE0LjY3LDExOC41ODQsMzkuOTc4eiBNMTI4LjUwMiwyMzAuNA0KCWwtMjEuNjk5LTE1Ljc2NUw4NS4xMDQsMjMwLjRsOC4yODktMjUuNTA5bC0yMS43LTE1Ljc2NWgyNi44MjJsOC4yODgtMjUuNTA5bDguMjg4LDI1LjUwOWgyNi44MjJsLTIxLjcsMTUuNzY1TDEyOC41MDIsMjMwLjR6DQoJIE0xMjAuMjEzLDEzMC4zMTdsOC4yODksMjUuNTA5bC0yMS42OTktMTUuNzY1bC0yMS42OTksMTUuNzY1bDguMjg5LTI1LjUwOWwtMjEuNy0xNS43NjVoMjYuODIybDguMjg4LTI1LjUwOWw4LjI4OCwyNS41MDloMjYuODIyDQoJTDEyMC4yMTMsMTMwLjMxN3ogTTIyMC4zMjgsMjMwLjRsLTIxLjY5OS0xNS43NjVMMTc2LjkzLDIzMC40bDguMjg5LTI1LjUwOWwtMjEuNy0xNS43NjVoMjYuODIybDguMjg4LTI1LjUwOWw4LjI4OCwyNS41MDloMjYuODIyDQoJbC0yMS43LDE1Ljc2NUwyMjAuMzI4LDIzMC40eiBNMjEyLjAzOSwxMzAuMzE3bDguMjg5LDI1LjUwOWwtMjEuNjk5LTE1Ljc2NWwtMjEuNjk5LDE1Ljc2NWw4LjI4OS0yNS41MDlsLTIxLjctMTUuNzY1aDI2LjgyMg0KCWw4LjI4OC0yNS41MDlsOC4yODgsMjUuNTA5aDI2LjgyMkwyMTIuMDM5LDEzMC4zMTd6IE0yMTIuMDM5LDU1Ljc0M2w4LjI4OSwyNS41MDlsLTIxLjY5OS0xNS43NjVMMTc2LjkzLDgxLjI1Mmw4LjI4OS0yNS41MDkNCglsLTIxLjctMTUuNzY1aDI2LjgyMmw4LjI4OC0yNS41MDlsOC4yODgsMjUuNTA5aDI2LjgyMkwyMTIuMDM5LDU1Ljc0M3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'
    ]

}
const availableLangs = ['spanish', 'english']

let SelectLang = props => {
    const [listHovered, setListHovered] = useState(false)
    let langs = [];
    let selected = null;


    langLst.flags.forEach((flag, index) => {
        let val = availableLangs[index]
        if (props.language === val) selected = <li style={{display: 'flex', justifyContent: 'center'}}
                                                   key={availableLangs[index]} value={val}>
            <FontAwesomeIcon style={{marginRight: '0.2vh', minWidth: '4vh', minHeight: '4vh'}} icon={faAngleDown}/>
            <img
            alt='lang' style={{minWidth: '4vh', minHeight: '4vh'}}
            src={langLst["flags"][index]}/>
        </li>
        else
            langs.push(<li
                key={availableLangs[index]} value={val}
                onClick={() => props.setLang(val)}>
                <img alt='lang' style={{minWidth: '4vh', minHeight: '4vh'}}
                                                        src={langLst["flags"][index]}/></li>)


    })

    return (<ul className={props.langL} onMouseEnter={() => setListHovered(true)}
                onMouseLeave={() => setListHovered(false)}>
        {selected}
        <ul style={{
            listStyleType: 'inherit',
            position: 'absolute',
            marginTop: '4vh'
        }}>{listHovered && langs}</ul>

    </ul>)

}
export default SelectLang;
