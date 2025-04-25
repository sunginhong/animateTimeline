import React, { MouseEvent, useState, createElement, useRef, useEffect, createRef} from 'react';
import TableItem from './elems/tableItem';
import './guide-templates.css'

const guide_templates = () => {

    const handleCreateChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        const dataType = event.currentTarget.getAttribute('data-type');
        handleSwitchChange(dataType);
      };


    const handleSwitchChange = (dataType) => {
        switch (dataType) {
            case "formFrame":
                parent.postMessage({
                    pluginMessage: {
                      type: 'create-guide-templates-form',
                    }
                  }, '*');
                break;
            case "titleFrame":
                parent.postMessage({
                    pluginMessage: {
                      type: 'create-guide-templates-title',
                    }
                  }, '*');
                break;
            case "listFrame":
                parent.postMessage({
                    pluginMessage: {
                      type: 'create-guide-templates-list',
                    }
                  }, '*');
                break;
            case "curveFrame":
                parent.postMessage({
                    pluginMessage: {
                      type: 'create-guide-templates-curve',
                    }
                  }, '*');
                break;
            case "hapticsFrame":
                parent.postMessage({
                    pluginMessage: {
                      type: 'create-guide-templates-haptics',
                    }
                  }, '*');
                break;
            default:
        }
        // parent.postMessage({
        //   pluginMessage: {
        //     type: 'create-guide-templates-title',
        //   }
        // }, '*');
      };
 
    return (
      <>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button data-type={"formFrame"} style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>가이드폼</button>
            <button data-type={"titleFrame"} style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>표지</button>
            <button data-type={"listFrame"} style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>리스트</button>
            <button data-type={"curveFrame"} style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>curve</button>
            {/* <TableItem title={"Title"}/>
            <TableItem title={"Easing"}/>
            <TableItem title={"Haptics"}/>
            <TableItem title={"Guide"}/> */}
        </div>
      </>
    );
}

export default guide_templates;
