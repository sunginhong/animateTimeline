import React, { MouseEvent, useEffect, useState, useRef, createElement, createRef} from 'react';
import './UiList.css';
import ListCreateButton from './components/ListCreateButton';
import ListItemElements from './functionCreateList/ListItemElements';
import ListLabels from './components/ListLabels';
import ListLabelsLine from './components/ListLabelsLine'
import { spec } from 'node:test/reporters';
import UiMenu from './UiMenu';

interface UiListProps {
    addItemChecked: boolean;
    resetItemChecked: boolean;
    itemNChecked: number;
    specSelectIndex: number;
    easingSelectIndex: number;
    specsLabelChecked: any[][];
    easingLabelChecked: string;

    onSpecSelectIndexChange: (newChecked: number) => void;
    onEasingSelectIndexChange: (newChecked: number) => void;
    onDeleteIndexChange: (newChecked: number) => void;
    onCreateChange: (newChecked: any[][]) => void;
}

const UiList: React.FC<UiListProps> = ({ addItemChecked, resetItemChecked, itemNChecked,  onSpecSelectIndexChange, onEasingSelectIndexChange, onDeleteIndexChange, onCreateChange, specsLabelChecked, easingLabelChecked}) => {
    const newItemsRef = useRef(null);
    const itemLabelRef = useRef(null);

    const [specSelectIndex, setspecSelectIndex] = useState(null);
    const [easingSelectIndex, setEasingSelectIndex] = useState(null);
    const [deleteSelectIndex, setDelSelectIndex] = useState(null);
    const [itemIndex, setItemIndex] = useState(null);
    
    let listWidthArray: number[] = [74, 220, 98, 72, 74, 40];
    let list: ListItemElements = new ListItemElements();

    function fnAddBtn(): void {
        list.create(newItemsRef.current, "ui-list-row-new-item list-new-item-" + itemIndex, itemIndex, listWidthArray, handleLabelClick, handleSpecClick, handleEasingClick, handleDurationClick, handleDelayClick, handleDeleteClick);
    } 

    function fnCreareBtn(): void {
        // onCreateChange([[]])
        console.log(list.getListProps());
    }

    function fnResetBtn(): void {
    }

    useEffect(() => {
        setItemIndex(itemNChecked);
    }, [itemNChecked]);

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
            let i = 0;
            const itemTotalLength = document.querySelectorAll(`.item-total-length`) as NodeListOf<HTMLElement>;
            const itemTotalLengthTextContents = Array.from(itemTotalLength).map(item => item.textContent);
          
            setDelSelectIndex(list.delIndexUpdate());
            onDeleteIndexChange(list.delIndexUpdate());

            const listElement = document.querySelectorAll('.ui-list-row-new-item') as NodeListOf<HTMLElement>;
            listElement.forEach((item, i) => { 
                list.resetUpdate();
            });
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

    useEffect(() => {
        if (easingLabelChecked) {
            
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
        let timer0: number | undefined;
        let timer1: number | undefined;
        let timer2: number | undefined;

        const itemTotalLength = document.querySelectorAll(`.item-total-length`) as NodeListOf<HTMLElement>;
        const itemTotalLengthTextContents = Array.from(itemTotalLength).map(item => item.textContent);
       
        const itemElement = document.querySelector(`.ui-list-row-new-item.list-new-item-${itemIndex}`);
    
        const uiMenuEasingSub = document.querySelectorAll(`.ui-menu-easing-sub`);
        uiMenuEasingSub.forEach(item => {
            (item as HTMLElement).style.transform = 'translateX(100%)';
        });

        const uiMenuSpecSub = document.querySelectorAll(`.ui-menu-spec-sub`);
        uiMenuSpecSub.forEach(item => {
            (item as HTMLElement).style.transform = 'translateX(100%)';
        });
        timer0 = window.setTimeout(() => {
            setDelSelectIndex(list.delIndexUpdate());
            list.listDelete(list.delIndexUpdate(), Number(itemTotalLengthTextContents[0])-1);
            onDeleteIndexChange(list.delIndexUpdate());
            window.clearTimeout(timer0);
        }, 0);
       
        timer1 = window.setTimeout(() => {
            window.clearTimeout(timer1);
        }, 350);
       
        // timer1 = window.setTimeout(() => {
        //     itemNChecked -= 1;
        //     window.clearTimeout(timer1);
        // }, 100);
        // if (itemN > 0) {
        //     timer1 = window.setTimeout(() => {
        //         listArray.forEach((item, i) => {
        //             if (this.id === i.toString()) {
        //                 item.remove();
        //                 delbtnArray[i].remove();
        //                 listArray.splice(i, 1);
        //                 delbtnArray.splice(i, 1);
        //                 specArrayF = [...Array(i)];
        //                 specsArray.splice(i, 1);
        //                 specArrayF.splice(i, 1);
        //                 specs.splice(i, 1);
        //                 specUniqueArrF.splice(i, 1);
        //                 specsSelectorArr[i].remove();
        //                 specsSelectorArr.splice(i, 1);
        //             }
        //         });
        //         window.clearTimeout(timer1);
        //     }, 100);
        //     itemN -= 1;
        // }
    
        timer2 = window.setTimeout(() => {
            
            // listArray.forEach((item, i) => {
            //     item.id = i.toString();
            //     delbtnArray[i].id = i.toString();
            //     item.querySelectorAll('option').forEach((option) => {
            //         option.id = i.toString();
            //     });
            // });
            window.clearTimeout(timer2);
        }, 350);
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

            const uiMenuEasingSub = document.querySelectorAll(`.ui-menu-easing-sub`);
            if(itemId != -1){
                const uiMenuSpecSub = document.querySelectorAll(`.ui-menu-spec-sub`);
                uiMenuSpecSub.forEach((item, i) => { 
                    if(i === itemId){
                        (item as HTMLElement).style.transform = 'translateX(0%)';
                    } else { 
                        (item as HTMLElement).style.transform = 'translateX(100%)';
                    }
                })
            }
            uiMenuEasingSub.forEach(item => {
                (item as HTMLElement).style.transform = 'translateX(100%)';
            });
          }, 0);
          return () => clearTimeout(timer);
    };

    const handleEasingClick = (itemId: number) => {
        const timer = setTimeout(() => {
            setspecSelectIndex(-1);
            setEasingSelectIndex(-1);
            setEasingSelectIndex(itemId)   

            const uiMenuSpecSub = document.querySelectorAll(`.ui-menu-spec-sub`);
            if(itemId != -1){
                const uiMenuEasingSub = document.querySelectorAll(`.ui-menu-easing-sub`);
                uiMenuEasingSub.forEach((item, i) => { 
                    if(i === itemId){
                        (item as HTMLElement).style.transform = 'translateX(0%)';
                    } else { 
                        (item as HTMLElement).style.transform = 'translateX(100%)';
                    }
                })
            }
            uiMenuSpecSub.forEach(item => {
                (item as HTMLElement).style.transform = 'translateX(100%)';
            });
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