import React from 'react';
import './MenuInputButton.css';

interface MenuInputButtonProps {
    label: string;
    onClick: () => void;
    inputValue: string;
    onInputChange: (value: string) => void;
}

const MenuInputButton: React.FC<MenuInputButtonProps> = ({ label, onClick, inputValue, onInputChange }) => {
    return (
        <div className="menu-input-button">
            <label className='menu-input-button__label'>{label}</label>
            <input 
                className='menu-input-button__input'
                type="text" 
                value={inputValue} 
                onChange={(e) => onInputChange(e.target.value)} 
            />
        </div>
    );
};

export default MenuInputButton;