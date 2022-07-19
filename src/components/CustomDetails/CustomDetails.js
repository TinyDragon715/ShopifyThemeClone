import { useState } from "react";

export default function CustomDetails(props) {
    const [detailsFlag, setDetailsFlag] = useState(props.open ? true : false);

    const detailsClick = (event) => {
        // setDetailsFlag(!detailsFlag);
        // let childDiv = event.target.parentNode.parentNode.parentNode.querySelector('.typeset');
        // childDiv.classList.remove('hello');
        // if (!detailsFlag) {
        //     childDiv.classList.add('hello');
        //     childDiv.style.opacity="1.0";
        // } else {
        //     childDiv.style.opacity="0.0";
        // }
    }

    return (
        <details
            className="section2-details"
            onClick={detailsClick}
            open={props.open}
        >
            <summary>
                <span>
                <span className="icon icon-plus-alt"></span>
                {props.title}
                </span>
            </summary>
            <div
                className="rte typeset"
                style={props.open ? {opacity: 1} : {opacity: 0}}
            >
                {props.children}
            </div>
        </details>
    );
}