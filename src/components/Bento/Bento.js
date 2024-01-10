import "./Bento.css";

function Bento () {
    return (
        <div className="bento-container">
            <div className="bento-column-left">
                <div className="bento-box bento-vertical">
                    BENTO 1
                </div>
            </div>
            <div className="bento-column-center">
                <div className="bento-small-container">
                    <div className="bento-box bento-box-small">
                        BENTO 2 
                    </div>
                    <div className="bento-box bento-box-small">
                        BENTO 3
                    </div>
                </div>
                <div>
                    <div className="bento-box bento-horizontal">
                        BENTO 4
                    </div>
                </div>
            </div>
            <div className="bento-column-right">
                <div className="bento-box bento-box-big">
                    BENTO 5
                </div>
            </div>
        </div>
    )
}

export default Bento;