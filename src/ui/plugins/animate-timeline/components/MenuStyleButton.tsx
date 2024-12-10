import React from 'react';
import './MenuStyleButton.css';

interface MenuStyleButtonProps {
    type: string;
    styleChecked: boolean;
    onClick: () => void;
    style?: React.CSSProperties;
}

const MenuStyleButton: React.FC<MenuStyleButtonProps> = ({ type, styleChecked, onClick, style }) => {
    return (
        <div className={`menu-style-button ${type} ${styleChecked ? 'checked' : ''}`} onClick={onClick} style={style}>
            <label className='menu-style-button__label'>{type}</label>
            {type === 'Face' && <div className='menu-style-button__shape face'></div>}
            {type === 'Line' && 
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="6" viewBox="0 0 50 6" fill="none">
                    <path d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM49.8868 3L47 0.113252L44.1132 3L47 5.88676L49.8868 3ZM3 3.5L47 3.5L47 2.5L3 2.5L3 3.5Z" fill="#03A94D"/>
                </svg>
            }
        </div>
    );
};

export default MenuStyleButton;