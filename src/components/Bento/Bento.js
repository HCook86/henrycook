import React from 'react';

import "./Bento.css";
import Toolkit from '../Toolkit/Toolkit';

function useWindowDimensions() {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
    };
  
    React.useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    return {
      width,
    }
  }
  

function Bento () {
    const { width } = useWindowDimensions();

    const bento_element = [
        {   
            id: 1,
            content: <h2 className='about-presentation'>I'm <span className="about-name">Henry Cook</span></h2>,
            column: "1",
            row: "1",
            column_responsive: "1 / span 2",
            row_responsive: "1",
        },
        {
            id: 2,
            content: <h2>Nat</h2>,
            column:"2 / span 2",
            row: "1", 
            column_responsive: "1 / span 2",
            row_responsive: "4",
        },
        {
            id: 3,
            content: 
                <>
                    <p>A student</p>
                </>
            ,
            column: "1 / span 2",
            row: "2 / span 2",
            column_responsive: "1 / span 2",
            row_responsive: "2 / span 2",
        },
        {
            id: 4,
            content: 
                <div>
                    <Toolkit />
                </div>,
            column: "3",
            row: "2 / span 2",
            column_responsive: "1 / span 2",
            row_responsive: "5",
        }
    ]
    
    return (
        <div className="bento-container">
            {
                bento_element.map((item) => 
                    <div key={item.id} className="bento-box" style= {width > 800 ? {gridColumn:item.column, gridRow:item.row} : {gridColumn:item.column_responsive, gridRow:item.row_responsive}}>
                        {item.content}  
                    </div>
                )
            }    
        </div>
    )
}

export default Bento;