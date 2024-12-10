import React, { useEffect, useState, useRef } from 'react';
import './UiMenu.css';
import MenuButton from './components/MenuButton';
import MenuInputButton from './components/MenuInputButton';
import MenuCheckBoxButton from './components/MenuCheckBoxButton';
import MenuBorderLine from './components/MenuBorderLine';
import MenuStyleButton from './components/MenuStyleButton';
import MenuSpecs from './functionCreateMenuSub/MenuSpecs';
import MenuEasing from './functionCreateMenuSub/MenuEasing';
export const specSelectIndex = -1;
export const easingSelectIndex = -1;

interface UiMenuProps {
    adWidth: string;
    delayChecked: boolean;
    styleChecked: boolean;
    addItemChecked: boolean;
    resetItemChecked: boolean;
    itemNChecked: number;
    specSelectIndex: number;

    easingSelectIndex: number;

    specsLabelChecked: string[];
    easingLabelChecked: string;

    onAdWidthChange: (newWidth: string) => void;
    onDelayCheckedChange: (newChecked: boolean) => void;
    onStyleCheckedChange: (newChecked: boolean) => void;
    onAddItemCheckedChange: (newChecked: boolean) => void;
    onResetItemCheckedChange: (newChecked: boolean) => void;
    onItemNChange: (newChecked: number) => void;

    onSpecsLabelChange: (newChecked: string[]) => void;
    onEasingLabelChange: (newChecked: string) => void;
}

const UiMenu: React.FC<UiMenuProps> = ({ adWidth, delayChecked, styleChecked, addItemChecked, resetItemChecked, onAdWidthChange, onDelayCheckedChange, onStyleCheckedChange, onAddItemCheckedChange, onResetItemCheckedChange, onItemNChange, specSelectIndex, specsLabelChecked, onSpecsLabelChange, easingSelectIndex, easingLabelChecked, onEasingLabelChange }) => {
    const uiMenuRef = useRef(null);
    const [isAdWidth, setIsAdWidth] = useState(adWidth);
    const [isDelayChecked, setIsDelayChecked] = useState(delayChecked);
    const [isStyleChecked, setIsStyleChecked] = useState(styleChecked);
    const [isAddClicked, setIsAddClicked] = useState(addItemChecked);
    const [isResetClicked, setIsResetClicked] = useState(resetItemChecked);
    const [itemN, setItemN] = useState(0);
    
    const [selSpecIndex, setSelSpecIndex] = useState(specSelectIndex);
    const [selEasingIndex, setSelEasingIndex] = useState(easingSelectIndex);

    const [isSpecsLabel, setIsSpecsLabel] = useState<string[]>(specsLabelChecked);
    const [isEasingLabel, setIsEasingLabel] = useState(easingLabelChecked);
    
    let menuSpecs: MenuSpecs = new MenuSpecs();
    let menuEasings: MenuEasing = new MenuEasing();

    const handleAddClick = () => {
        setIsAddClicked(true);
        setItemN(prevItemN => prevItemN + 1);
        menuSpecs.create(uiMenuRef.current, "ui-menu-spec-sub " + itemN, itemN, specsSelectClick, specsLabelCheck);
        menuEasings.create(uiMenuRef.current, "ui-menu-easing-sub " + itemN, itemN, easingSelectClick, easingLabelCheck);
        setTimeout(() => setIsAddClicked(false), 100);
    };
    const handleResetClick = () => {
        setIsResetClicked(true);
        setTimeout(() => setIsResetClicked(false), 100);
    };

    useEffect(() => {
        onAddItemCheckedChange(isAddClicked);
    }, [isAddClicked]);

    useEffect(() => {
        onItemNChange(itemN);
    }, [isAddClicked]);

    useEffect(() => {
        onResetItemCheckedChange(isResetClicked);
    }, [isResetClicked]);

    useEffect(() => {
        onAdWidthChange(isAdWidth);
    }, [isAdWidth]);

    useEffect(() => {
        onDelayCheckedChange(isDelayChecked);
    }, [isDelayChecked]);

    useEffect(() => {
        onStyleCheckedChange(isStyleChecked);
    }, [isStyleChecked]);

    useEffect(() => {
        setSelSpecIndex(specSelectIndex);
    }, [specSelectIndex]);

    useEffect(() => {
        setSelEasingIndex(easingSelectIndex);
    }, [easingSelectIndex]);

    useEffect(() => {
        onSpecsLabelChange(isSpecsLabel);
    }, [isSpecsLabel]);

    useEffect(() => {
        onEasingLabelChange(isEasingLabel);
    }, [isEasingLabel]);

    useEffect(() => {
        menuSpecs.update(selSpecIndex, "ui-menu-spec-sub");
    }, [selSpecIndex]);

    useEffect(() => {
        menuEasings.update(selEasingIndex, "ui-menu-easing-sub");
    }, [selEasingIndex]);
    
    const specsSelectClick = (index: number) => {
        setSelSpecIndex(index);
    };

    const easingSelectClick = (index: number) => {
        setSelEasingIndex(index);
    };

    const easingLabelCheck = (easingLabel: string) => {
        setIsEasingLabel(easingLabel);
    };

    const specsLabelCheck = (specsLabelCheck: string[]) => {
        setIsSpecsLabel(specsLabelCheck);
    };


    // useEffect(() => {
    //     setSelSpecIndex(prevIndex => {
    //         if (prevIndex === specSelectIndex) {
    //             return specSelectIndex + 1; // Force re-render by changing the state
    //         }
    //         return specSelectIndex;
    //     });
    // }, [specSelectIndex]);

    return (
        <div className='ui-menu' ref={uiMenuRef}>
            <div className='ui-menu-contain'>
                <span className='ui-menu-title-main'>Table Setting</span>
                <div className='ui-menu-row-btn-contain'>
                    <div className='ui-menu-column'>                
                        <div className='ui-menu-btn-contain'>
                            <p className='ui-menu-btn-label'>Row</p>
                            <div className='ui-menu-btn-rect'>
                                <MenuButton label='Add' className='ui-menu-button add-btn' onClick={handleAddClick}/>
                                <MenuButton label='Reset' className='ui-menu-button reset-btn' onClick={handleResetClick}/>
                            </div>
                        </div>
                        <MenuBorderLine color='#737373' thickness={1} />
                        <MenuInputButton label='AdjustWidth' onClick={() => {console.log('AdjustWidth ' + isAdWidth)}} inputValue={isAdWidth} onInputChange={(value) => {setIsAdWidth(value)}} />
                        <MenuCheckBoxButton 
                            label='Visible delay time' 
                            isDelayChecked={isDelayChecked} 
                            onChange={() => setIsDelayChecked(!isDelayChecked)} 
                        />
                        <MenuBorderLine color='#737373' thickness={1} />
                        <div className='ui-menu-btn-contain'>
                            <p className='ui-menu-btn-label'>Style</p>
                            <div className='ui-menu-btn-rect vertical'>
                                <MenuStyleButton type='Face' styleChecked={!isStyleChecked ? true : false} onClick={() => {isStyleChecked && setIsStyleChecked(false)}} />
                                <MenuStyleButton type='Line' styleChecked={!isStyleChecked ? false : true} onClick={() => {!isStyleChecked && setIsStyleChecked(true)}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UiMenu;


