import PageStructure from "../../components/PageStructure/PageStructure";
import Bento from "../../components/Bento/Bento.js";

import "./Home.css";

function Home() {
    return (
        <PageStructure>
            <div className="name-container">
                <h1 className="henry-cook">Henry Cook</h1>
            </div>
            {/*<Bento />*/}
        </PageStructure>
    )
}

export default Home;