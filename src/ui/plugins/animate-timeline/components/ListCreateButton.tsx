import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const styles = {
    listCreateButton: {
        height: '100%',
        flexShrink: 0,
        padding: 0,
    },
    listCreateButtonContainer: {
        display: 'inline-flex',
        height: '100%',
        padding: '0px 8px',
        alignItems: 'center',
        gap: '4px',
        flexShrink: 0,
        borderRadius: '4px',
        background: 'var(--Color-Accent-Green-600, #03C75A)',
    },
    listCreateButtonLabel: {
        color: 'var(--Color-Neutral-Gray-0, #FFF)',
        textAlign: 'center' as 'center',
        fontFeatureSettings: "'liga' off, 'clig' off",
        fontFamily: '"Pretendard Variable"',
        fontSize: '10px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '16px', /* 160% */
    },
};

const ListCreateButton: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    return (
        <button className="list-create-button" onClick={onClick} disabled={disabled} style={styles.listCreateButton}>
            <div className='list-create-button-container' style={styles.listCreateButtonContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M0 4H8" stroke="white"/>
                    <path d="M4 0L4 8" stroke="white"/>
                </svg>
                <label className='list-create-button__label' style={styles.listCreateButtonLabel}>{label}</label>
            </div>
        </button>
    );
};

export default ListCreateButton;