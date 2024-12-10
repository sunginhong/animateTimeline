import React, { useEffect } from 'react';
import './MenuCheckBoxButton.css';

interface MenuCheckBoxButtonProps {
    label: string;
    isDelayChecked: boolean;
    onChange: () => void;
}

const MenuCheckBoxButton: React.FC<MenuCheckBoxButtonProps> = ({ label, isDelayChecked, onChange }) => {
    
    useEffect(() => {
    }, [isDelayChecked])

    return (
        <div className="menu-checkbox-button">
            <label className='menu-checkbox-label'>{label}</label>
            <div className='menu-checkbox-container'>
                <input type="checkbox" id="menu-checkbox-input" className="menu-checkbox-input" onChange={onChange}/>
                <div id="checkbox_shape" className={"menu-checkbox-shape " + (isDelayChecked ? "checked" : "")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.3005 3.1328C10.4665 3.29878 10.4665 3.56787 10.3005 3.73384L5.23387 8.80051C5.06789 8.96648 4.7988 8.96648 4.63282 8.80051L1.69949 5.86718C1.53352 5.7012 1.53352 5.43211 1.69949 5.26613C1.86546 5.10016 2.13456 5.10016 2.30053 5.26613L4.93335 7.89895L9.69949 3.1328C9.86546 2.96683 10.1346 2.96683 10.3005 3.1328Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default MenuCheckBoxButton;
