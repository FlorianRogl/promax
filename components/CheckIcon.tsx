import React from 'react';

const CheckIcon: React.FC = () => {
    const style: React.CSSProperties = {
        width: '20px',
        height: '20px',
        background: 'linear-gradient(135deg, #d97539 0%, #e8864a 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: '0.7rem',
        fontWeight: 700,
        flexShrink: 0,
    };

    return <div style={style}>✓</div>;
};

export default CheckIcon;
