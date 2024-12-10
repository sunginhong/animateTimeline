import React, { MouseEvent, useState, createElement, useRef, useEffect, createRef} from 'react';
import './animate__timeline.css'
import UiMenu from './UiMenu';
import UIList from './UiList'; 
import { set } from 'mongoose';

const animate_timeline = () => {
    const uiRef = useRef(null);
    let itemN: number = 0;
    let specArrayF: any[] = [...new Array(itemN)];
    let listArray: HTMLElement[] = [];
    let delbtnArray: HTMLElement[] = [];
    let specsArray: any[] = [];
    let specs: any[][] = [[]];
    let specsSelectorArr: HTMLElement[] = [];
    let specUniqueArrF: any[] = [];
    // let zoomBool: boolean = false;
    // let fitBool: boolean = false;
    // let designType00: boolean = true;
    // let designType01: boolean = false;

    const [adWidth, setAdWidth] = useState('100px');
    const [delayChecked, setDelayChecked] = useState(false);
    const [styleChecked, setStyleChecked] = useState(false);
    const [addItemChecked, setAddItemChecked] = useState(false);
    const [resetItemChecked, setResetItemChecked] = useState(false);
    const [itemNChecked, setItemNChecked] = useState(0);
    const [specSelectIndex, setSpecSelectIndex] = useState(0);
    const [easingSelectIndex, setEasingSelectIndex] = useState(0);

    const [specsLabelChecked, setSpecsLabelChecked] = useState<string[]>([]);
    const [easingLabelChecked, setEasingLabelChecked] = useState('None');

    const handleAdWidthChange = (newWidth: string) => {
      setAdWidth(newWidth);
    };

    const handleDelayCheckedChange = (newChecked: boolean) => {
        setDelayChecked(newChecked);
    };

    const handleStyleCheckedChange = (newChecked: boolean) => {
        setStyleChecked(newChecked);
    };
    
    const handleAddItemCheckedChange = (newChecked: boolean) => {
        setAddItemChecked(newChecked);
    };

    const handleResetItemCheckedChange = (newChecked: boolean) => {
        setResetItemChecked(newChecked);
    };

    const handleItemNChange = (newChecked: number) => {setItemNChecked(newChecked) };

    const handleSpecMenuSelIndexChange = (newChecked: number) => {
        setSpecSelectIndex(newChecked);
    };
    
    const handleEasingMenuSelIndexChange = (newChecked: number) => {
      setEasingSelectIndex(newChecked);
    };

    const handleSpecsLabelChange = (newChecked: string[]) => {
      setSpecsLabelChecked(newChecked);
    };

    const handleEasingLabelChange = (newChecked: string) => {
      setEasingLabelChecked(newChecked);
    };

    useEffect(() => {
      
    }, [])

    return (
      <>
        <div id="ui" ref={uiRef} >
          <UiMenu 
              adWidth={adWidth} 
              delayChecked={delayChecked} 
              styleChecked={styleChecked} 
              addItemChecked={addItemChecked} 
              resetItemChecked={resetItemChecked} 
              itemNChecked={itemNChecked}

              onAdWidthChange={handleAdWidthChange}
              onDelayCheckedChange={handleDelayCheckedChange}
              onStyleCheckedChange={handleStyleCheckedChange}
              onAddItemCheckedChange={handleAddItemCheckedChange} 
              onResetItemCheckedChange = {handleResetItemCheckedChange}

              onItemNChange={handleItemNChange}
              specSelectIndex={specSelectIndex}
              easingSelectIndex={easingSelectIndex}

              specsLabelChecked={specsLabelChecked}
              easingLabelChecked={easingLabelChecked}
              onSpecsLabelChange={handleSpecsLabelChange}
              onEasingLabelChange={handleEasingLabelChange}
          />
          <UIList 
              addItemChecked={addItemChecked} 
              resetItemChecked={resetItemChecked} 
              itemNChecked={itemNChecked}
              specSelectIndex={specSelectIndex}
              easingSelectIndex={easingSelectIndex}

              onSpecSelectIndexChange={handleSpecMenuSelIndexChange}
              onEasingSelectIndexChange={handleEasingMenuSelIndexChange}

              specsLabelChecked={specsLabelChecked}
              easingLabelChecked={easingLabelChecked}
          />
        </div>
      </>
    );
}

export default animate_timeline;