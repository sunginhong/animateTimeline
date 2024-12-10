import React from 'react';

interface MenuBorderLineProps {
    color?: string;
    thickness?: number;
}

const MenuBorderLine: React.FC<MenuBorderLineProps> = ({ color , thickness  }) => {
    return (
        <div
            style={{
                width: '100%',
                height: `${thickness}px`,
                backgroundColor: color,
            }}
        />
    );
};

export default MenuBorderLine;