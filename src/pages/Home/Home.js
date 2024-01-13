import PageStructure from "../../components/PageStructure/PageStructure";
import Bento from "../../components/Bento/Bento.js";
import SocialIcons from "../../components/SocialIcons/SocialIcons.js";

import "./Home.css";

function Home() {
    return (
        <PageStructure>
            <div className="name-container">
                <div>
                    <h1 className="henry-cook">Henry Cook</h1>
                    <p className="subtitle">Web developer</p>
                </div>
            </div>
            <div className="tablet-social-container">
                <hr className="tablet-social-line"/>
                <SocialIcons />
            </div>
            {/*<Bento />*/}
        </PageStructure>
    )
}

export default Home;