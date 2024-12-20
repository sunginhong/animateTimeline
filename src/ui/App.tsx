import React, { MouseEvent, useState } from 'react';
import { Link, Route, Routes,BrowserRouter as Router } from "react-router-dom"
import TabItem from './components/TabItem';

// import Page00 from './pages/page00';
import Page00 from './plugins/animate-timeline/animate__timeline';
// import Page00 from './plugins/animate-timeline/animate-timeline_ver1';
import Page01 from './pages/page01';
import Page02 from './pages/page02';

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  let tabContents = [
    { id: 0, Title: "Document", page: <Page00/> },
    { id: 1, Title: "Library", page: <Page01/> },
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

  return <>
    {/* <div className='top' style={{position:"absolute", width:"100%", height: "55px", backgroundColor: "#fff", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
      <div className='top_menu_tab' style={{position:"absolute", width:"100%", height: "50px", justifyContent: "center", alignItems: "center"}}>
        {
          tabContents.map((item, index) => (
              <TabItem onClick={() => handleButtonClick(index)}>{item.Title}</TabItem>
          ))
        }
      </div>
      <div style={{position: "absolute", width:"200px", height: "5px", zIndex: "5", bottom: "0", backgroundColor: "#523fdf", transform: "translateX(" + selectedIndex * 200 + "px)", transition: "transform 0.4s cubic-bezier(0.15, 0, 0.15, 1)" }}></div>
    </div> */}
    {/* <div className='bottom' style={{position:"absolute", width:"100%", height: "calc(500px - 55px)", top: "55px" ,backgroundColor: "#efefef" }}>
      {tabContents[selectedIndex].page}
    </div> */}
        <div className='bottom' style={{position:"absolute", width:"779px", height: "312px", top: "0px" ,overflow: 'hidden' }}>
      {tabContents[selectedIndex].page}
    </div>
  </>;
}


export default App;

