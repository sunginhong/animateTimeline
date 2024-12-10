import React, { useEffect, useRef } from 'react';

interface ListLabelsProps {
    className: string;
    label: string;
    width: number;
    ref: React.RefObject<HTMLDivElement>;
}

const ListLabels: React.FC<ListLabelsProps> = ({ className ,label, width, ref }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        // console.log('itemLabelRef width:', itemRef.current.offsetWidth);
    }, []);

    const StylesUiList = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width,
    }

    const StylesUiListLabels = {
        color: "#737373",
        textAlign: "center" as "center",
        fontFamily: "Pretendard Variable",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "16px"
    }

    return (
        <div className={className} style={StylesUiList} ref={itemRef}>
            <label className={className + '-title'} style={StylesUiListLabels}>{label}</label>
        </div>
    );
};
export default ListLabels;
