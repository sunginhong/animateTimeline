import React, { MouseEvent, useEffect, useState, useRef, createElement, createRef} from 'react';
import './UiList.css';
import ListCreateButton from './components/ListCreateButton';
import ListItemElements from './functionCreateList/ListItemElements';
import ListLabels from './components/ListLabels';
import ListLabelsLine from './components/ListLabelsLine'
import { spec } from 'node:test/reporters';

interface UiListProps {
    addItemChecked: boolean;
    resetItemChecked: boolean;
    itemNChecked: number;
    specSelectIndex: number;
    easingSelectIndex: number;
    specsLabelChecked: string[];
    easingLabelChecked: string;

    onSpecSelectIndexChange: (newChecked: number) => void;
    onEasingSelectIndexChange: (newChecked: number) => void;
}

const UiList: React.FC<UiListProps> = ({ addItemChecked, resetItemChecked, itemNChecked , onSpecSelectIndexChange, onEasingSelectIndexChange, specsLabelChecked, easingLabelChecked}) => {
    const newItemsRef = useRef(null);
    const itemLabelRef = useRef(null);
    const [specSelectIndex, setspecSelectIndex] = useState(null);
    const [easingSelectIndex, setEasingSelectIndex] = useState(null);

    let listWidthArray: number[] = [74, 220, 98, 72, 74, 40];
    let list: ListItemElements = new ListItemElements();

    function fnAddBtn(): void {
        list.create(newItemsRef.current, "ui-list-row-new-item list-new-item " + (itemNChecked - 1), itemNChecked - 1, listWidthArray, handleLabelClick, handleSpecClick, handleEasingClick, handleDurationClick, handleDelayClick, handleDeleteClick);
    } 

    function fnCreareBtn(): void {
    }

    useEffect(() => {
        onSpecSelectIndexChange(specSelectIndex);
    }, [specSelectIndex]);

    useEffect(() => {
        onEasingSelectIndexChange(easingSelectIndex);
    }, [easingSelectIndex]);

    useEffect(() => {
        if (addItemChecked) {
            fnAddBtn();
        }
    }, [addItemChecked]);

    useEffect(() => {
        if (resetItemChecked) {
        }
    }, [resetItemChecked]);

    useEffect(() => {
        if (specsLabelChecked) {
            list.specsUpdate(specSelectIndex, specsLabelChecked);
        }
    }, [specsLabelChecked]);

    useEffect(() => {
        if (easingLabelChecked) {
            list.easingUpdate(easingSelectIndex, easingLabelChecked);
        }
    }, [easingLabelChecked]);


    const handleLabelClick = () => {
        handleMenuReset();
    };

    const handleDurationClick = () => {
        handleMenuReset();
    };

    const handleDelayClick = () => {
        handleMenuReset();
    };

    const handleDeleteClick = () => {
        handleMenuReset();
    };

    const handleMenuReset = () => {
        setEasingSelectIndex(-1);
        setspecSelectIndex(-1);
    }

    const handleSpecClick = (itemId: number) => {
        const timer = setTimeout(() => {
            setEasingSelectIndex(-1);
            setspecSelectIndex(-1);
            setspecSelectIndex(itemId)   
          }, 0);
          return () => clearTimeout(timer);
    };

    const handleEasingClick = (itemId: number) => {
        const timer = setTimeout(() => {
            setspecSelectIndex(-1);
            setEasingSelectIndex(-1);
            setEasingSelectIndex(itemId)   
          }, 0);
          return () => clearTimeout(timer);
    };

    return (
        <div className={'ui-list'}>
            <div className='ui-list-contain' >
                <div className='ui-list-top-contain'>
                    <div className='ui-list-title-rect'>
                        <span className='ui-list-title-rect-label'>Timeline</span>
                    </div>
                    <ListCreateButton label='Create timeline' onClick={fnCreareBtn} />
                </div>

                <div className='ui-list-frame'>
                    <div className="ui-list-row ui-list-title">
                        <div className='ui-list-group'>
                            <ListLabels className='ui-list-label' label='Label' width={listWidthArray[0]} ref={itemLabelRef}/>
                            <ListLabelsLine thickness={1} color='#F0F0F0' />
                            <ListLabels className='ui-list-label' label='spec' width={listWidthArray[1]} ref={itemLabelRef}/>
                            <ListLabelsLine thickness={1} color='#F0F0F0' />
                            <ListLabels className='ui-list-label' label='easing' width={listWidthArray[2]} ref={itemLabelRef}/>
                            <ListLabelsLine thickness={1} color='#F0F0F0' />
                            <ListLabels className='ui-list-label' label='duration' width={listWidthArray[3]} ref={itemLabelRef}/>
                            <ListLabelsLine thickness={1} color='#F0F0F0' />
                            <ListLabels className='ui-list-label' label='delay' width={listWidthArray[4]} ref={itemLabelRef}/>
                            <ListLabelsLine thickness={1} color='#F0F0F0' />
                            <ListLabels className='ui-list-label' label='delete' width={listWidthArray[5]} ref={itemLabelRef}/>
                        </div>
                    </div>
                    <div className='ui-list-new-item-container' ref={newItemsRef}></div>
                </div>
            </div>
        </div>
    );
}
export default UiList;