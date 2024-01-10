import "./PageStructure.css";

import Header from "../Header/Header.js";
import SocialIcons from "../SocialIcons/SocialIcons.js";

function PageStructure (props) {
    return (
        <div className="content-wrapper">
            <div className="content-left">
                <SocialIcons />
            </div>
            <div className="content-body">
                <Header />
                {props.children}
            </div>
            <div className="content-right"></div>
        </div>
    )
}

export default PageStructure;