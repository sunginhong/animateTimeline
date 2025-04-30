import React, { MouseEvent, useState, createElement, useRef, useEffect, createRef} from 'react';
import TableItem from './elems/tableItem';
import './guide-templates.css'

const guide_templates = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleCreateChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        const dataType = event.currentTarget.getAttribute('data-type');
        handleSwitchChange(dataType);
      };


    const handleSwitchChange = (dataType: string | null) => {
      if (!dataType) return;

      const messageTypeMap: Record<string, string> = {
        formFrame: 'create-templates-form',
        titleFrame: 'create-templates-title',
        listFrame: 'create-templates-list',
        curveFrame: 'create-templates-curve',
        hapticsFrame: 'create-templates-haptic',
        hapticFrame: 'create-templates-haptic',
      };

      const messageType = messageTypeMap[dataType];
      if (messageType) {
        parent.postMessage({
          pluginMessage: {
            type: messageType,
            isDarkMode: isDarkMode,
          }
        }, '*');
      }
    };

    useEffect(() => {
      // return console.log(isDarkMode)2
    }, [isDarkMode]);

return (
      <>
      <div>
          {['다크모드', '라이트모드'].map((label, index) => (
            <label key={label}>
                <input
              type="radio"
              name="displayMode"
              value={index === 0 ? "formFrame" : "titleFrame"}
              defaultChecked={index === 0}
              onChange={() => setIsDarkMode(index === 0)}
                />
                {label}
            </label>
          ))}
      </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button data-type={"formFrame"} style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>가이드폼</button>
            <button data-type={"titleFrame"} style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>표지</button>
            <button data-type={"listFrame"} style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>리스트</button>
            <button data-type={"curveFrame"} style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>curve</button>
            <button data-type={"hapticFrame"} style={{padding: "20px", backgroundColor: "#fff"}} onClick={handleCreateChange}>haptic</button>
        </div>
      </>
    );
}

export default guide_templates;
