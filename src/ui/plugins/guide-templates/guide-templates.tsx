import React, { MouseEvent, useState, createElement, useRef, useEffect, createRef} from 'react';
import TableItem from './elems/tableItem';
import './guide-templates.css'

const guide_templates = () => {

    const handleCreateChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        // console.log(event)
        parent.postMessage({
          pluginMessage: {
            type: 'create-guide-templates-title',
          }
        }, '*');
      };

    return (
      <>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>표지</button>
            <button style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>리스트</button>
            {/* <TableItem title={"Title"}/>
            <TableItem title={"Easing"}/>
            <TableItem title={"Haptics"}/>
            <TableItem title={"Guide"}/> */}
        </div>
      </>
    );
}

export default guide_templates;
