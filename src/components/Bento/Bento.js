import React, { useLayoutEffect, useState } from 'react';

import "./Bento.css";

function useWindowDimensions() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
  
    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  
    React.useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    return {
      width,
      height,
    }
  }
  

function Bento () {
    const { width, height } = useWindowDimensions();

    const bento_element = [
        {   
            id: 1,
            content: <h2>Flask starter</h2>,
            column: "1",
            row: "1",
            column_responsive: "",
            row_responsive: "",
        },
        {
            id: 2,
            content: <h2>Nat</h2>,
            column:"2 / span 2",
            row: "1", 
            column_responsive: "2",
            row_responsive: "1",
        },
        {
            id: 3,
            content: <h2>PLACEHOLDER</h2>,
            column: "1 / span 2",
            row: "2 / span 2",
            column_responsive: "1 / span 2",
            row_responsive: "2 / span 2",
        },
        {
            id: 4,
            content: <h2>Cardgames</h2>,
            column: "3",
            row: "2 / span 2",
            column_responsive: "1 / span 2",
            row_responsive: "",
        }
    ]
    
    return (
        <div className="bento-container">
            {
                bento_element.map((item) => 
                    <div key={item.id} className="bento-box" style= {width > 800 ? {gridColumn:item.column, gridRow:item.row} : {gridColumn:item.column_responsive, gridRow:item.row_responsive}}>
                        <a>
                            {item.content}
                        </a>    
                    </div>
                )
            }    
        </div>
    )
}

export default Bento;