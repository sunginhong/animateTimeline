import React, { MouseEvent, useState, createElement, useRef, createRef} from 'react';

const styles = {
    menuButton: {
        display: 'inline-flex',
        padding: '2px 8px',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '4px',
        background: 'var(--Color-Neutral-Gray-1200, #424242)',
        flexShrink: 0,
        minWidth: 'auto',
        cursor: 'pointer',
        transition: 'background 0.2s var(--ease-standard)',
    },
    link: {
        color: 'var(--Color-Neutral-Gray-0, #FFF)',
        textAlign: 'center' as 'center',
        fontFeatureSettings: "'liga' off, 'clig' off",
        fontFamily: '"Pretendard Variable"',
        fontSize: '10px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '16px',
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    hover: {
        background: 'rgba(0, 0, 0, 1)',
    },
};

interface MenuButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ label, className, onClick }) => {

    return (
        <button className={className} style={styles.menuButton} onClick={onClick}><a style={styles.link}>{label}</a></button>
    );

};

export default MenuButton;

