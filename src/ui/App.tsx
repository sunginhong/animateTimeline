import React, { MouseEvent, useState } from 'react';
import { Link, Route, Routes,BrowserRouter as Router } from "react-router-dom"
import TabItem from './components/TabItem';

import AnimateTimeline from './plugins/AnimateTimeline';
import GuideTemplates from './plugins/GuideTemplates';
import Page02 from './pages/page02';

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  let tabContents = [
    { id: 0, Title: "Animate Timeline", page: <AnimateTimeline/> },
    { id: 1, Title: "Guide Templates", page: <GuideTemplates/> },
    { id: 2, Title: "Etc", page: <Page02/> },
  ];

  function buttonClick(e: React.MouseEvent) { 
    parent.postMessage({ pluginMessage: { type: 'create-timeline' } }, '*');
  }

  const ClickMe = () => {
    parent.postMessage({ pluginMessage: { type: 'create-timeline' } }, '*');
  };
  
  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  const topStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "55px",
    backgroundColor: "#fff",
    borderBottom: "1px solid rgba(0,0,0,0.15)",
  }

  const topMenuTabStyle: React.CSSProperties = {
    position:"absolute", 
    width:"100%",
    height: "50px", 
    justifyContent: "center", 
    alignItems: "center"
  }

  const dotStyle: React.CSSProperties = {
    position: "absolute", 
    width:"200px", 
    height: "5px", 
    zIndex: "5", 
    bottom: "0", 
    backgroundColor: "#03C75A", 
    transition: "transform 0.4s cubic-bezier(0.15, 0, 0.15, 1)"
  }

  const bottomStyle: React.CSSProperties = {
    position:"absolute", 
    width: "100%", 
    height: "100%", 
    top: "55px",
    backgroundColor: "#efefef"
  }

  return <>
    <div className='top' style={topStyle}>
      <div className='top_menu_tab' style={topMenuTabStyle}>
        {
          tabContents.map((item, index) => (
              <TabItem onClick={() => handleButtonClick(index)}>{item.Title}</TabItem>
          ))
        }
      </div>
      <div style={{...dotStyle, transform: "translateX(" + selectedIndex * 200 + "px)" }}></div>
    </div>
    <div className='bottom' style={bottomStyle}>{tabContents[selectedIndex].page}</div>
  </>;
}


export default App;

