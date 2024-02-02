import React from 'react';

import "./Bento.css";
import Toolkit from '../Toolkit/Toolkit';

import Henry from "./assets/Henry.png";

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
            content: 
                <div className='henry-img-container'>
                    <h2 className='about-presentation'>I'm <span className="about-name">Henry Cook</span></h2>
                    <div className='henry-right-container'>
                        <hr className='henry-line'/>
                        <img src={Henry} className='henry-img' alt="Henry Cook"/>
                    </div>    
                </div>,
            column: "1 /span 2",
            row: "1",
            column_medium: "1 /span 2",
            row_medium: "1",
            column_responsive: "1 / span 2",
            row_responsive: "1",
        },
        {
            id: 2,
            content: 
            <>  
                <p className='henry-description'>Short personal description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus tortor, et rutrum ligula tempus ut. Sed mauris mi, mollis eget enim nec, finibus semper mauris. Phasellus non elit consectetur, malesuada quam a, vehicula mi. Pellentesque pellentesque nibh eu turpis pellentesque vulputate.</p>
            </>,
            column: "3 / span 2",
            row: "1", 
            column_medium: "3 / span 2",
            row_medium: "1",
            column_responsive: "1 / span 2",
            row_responsive: "2",
        },
        {
            id: 3,
            content: 
                <div>
                    <Toolkit />
                </div>,
            column: "1 / span 3",
            row: "2 / span 2",
            column_medium: "1 / span 3",
            row_medium: "2 / span 2",
            column_responsive: "1 / span 2",
            row_responsive: "4 / span 2",
        },
        {
            id: 4,
            content: <>
                {/*<div>
                    <Toolkit />
                </div>*/}</>,
            column: "4",
            row: "2 / span 2",
            column_medium: "4",
            row_medium: "2 / span 2",
            column_responsive: "1 / span 2",
            row_responsive: "3",
        }
    ]
    
    return (
        <div className="bento-container">
            {
                bento_element.map((item) => 
                    <div key={item.id} className="bento-box" style= {width > 1200 ? {gridColumn:item.column, gridRow:item.row} : width > 900 ? {gridColumn:item.column_medium, gridRow:item.row_medium} : {gridColumn:item.column_responsive, gridRow:item.row_responsive}}>
                        {item.content}  
                    </div>
                )
            }    
        </div>
    )
}

export default Bento;