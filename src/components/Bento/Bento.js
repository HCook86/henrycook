import "./Bento.css";

import nataliapetracca from "./assets/nataliapetracca.png";

function Bento () {
    const bento_element = [
        {   
            id: 1,
            content: <h2>STUFF</h2>,
            column: "1",
            row: "1"
        },
        {
            id: 2,
            content: <h2>Nataliapetracca.com</h2>,
            column:"2 / span 2",
            row: "1", 
        },
        {
            id: 3,
            content: <h2>PLACEHOLDER</h2>,
            column: "1 / span 2",
            row: "2 / span 2",
        },
        {
            id: 4,
            content: <h2>PLACEHOLDER</h2>,
            column: "3",
            row: "2 / span 2",
        }
    ]
    return (
        <div className="bento-container">
            {bento_element.map((item) => 
                <div key={item.id} className="bento-box" style={{gridColumn:item.column, gridRow:item.row }}>
                    <a>
                        {item.content}
                    </a>    
                </div>
            )}
        </div>
    )
}

export default Bento;