import React, { MouseEvent, useState, createElement, useRef, useEffect, createRef} from 'react';
interface TableItemProps {
    title: string;
}

const tableItem: React.FC<TableItemProps> = ({ title }) => {
    const tableItemStyle: React.CSSProperties = {
        border: '1px solid black', 
        padding: '10px'
    };
    return (
      <>
        <div style={tableItemStyle}>{title}</div>
      </>
    );
}

export default tableItem;
