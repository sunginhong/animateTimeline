import React from 'react';

interface ListLabelsLineProps {
    color?: string;
    thickness?: number;
}

const ListLabelsLine: React.FC<ListLabelsLineProps> = ({ color , thickness  }) => {
    return (
        <div
            style={{
                position: "relative",
                height: '100%',
                width: `${thickness}px`,
                backgroundColor: color,
                alignSelf: "stretch",
                flexShrink: "0",
                whiteSpace:"nowrap"
            }}
        />
    );
};

export default ListLabelsLine;