import { useState } from "react";

export default function CustomDetails(props) {
    const [detailsFlag, setDetailsFlag] = useState(props.open ? true : false);

    const detailsClick = (event) => {
        let currentDiv, childDiv;
        if (event.target.classList.contains('icon')) {
            currentDiv = event.target.parentNode.parentNode.parentNode;
        } else {
            currentDiv = event.target.parentNode.parentNode;
        }

        if (currentDiv.getAttribute('open') != null) {
            currentDiv.removeAttribute('open')
        } else {
            currentDiv.setAttribute('open', '')
        }
        
        setDetailsFlag(!detailsFlag);
        childDiv = currentDiv.querySelector('.typeset');
        childDiv.classList.remove('hello');
        if (!detailsFlag) {
            childDiv.classList.add('hello');
            childDiv.style.opacity="1.0";
        } else {
            childDiv.style.opacity="0.0";
        }
    }

    return (
        <div
            className="section2-details"
            open={props.open}
        >
            <summary onClick={detailsClick}>
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
        </div>
    );
}