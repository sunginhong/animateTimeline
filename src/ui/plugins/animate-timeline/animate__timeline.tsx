import React, { MouseEvent, useState, createElement, useRef, useEffect, createRef} from 'react';
import './animate__timeline.css'
import UiMenu from './UiMenu';
import UIList from './UiList'; 
import { set } from 'mongoose';
import { h } from 'vue';

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

    const [adWidth, setAdWidth] = useState(100);
    const [delayChecked, setDelayChecked] = useState(false);
    const [styleChecked, setStyleChecked] = useState(false);
    const [addItemChecked, setAddItemChecked] = useState(false);
    const [resetItemChecked, setResetItemChecked] = useState(false);
    const [itemNChecked, setItemNChecked] = useState(0);
    const [specSelectIndex, setSpecSelectIndex] = useState(0);
    const [easingSelectIndex, setEasingSelectIndex] = useState(0);
    const [deleteSelectIndex, setDeleteSelectIndex] = useState(null);

    const [specsLabelChecked, setSpecsLabelChecked] = useState<any[][]>([]);
    const [easingLabelChecked, setEasingLabelChecked] = useState('None');
    const [settingPropsChecked, setSettingPropsChecked] = useState<any[][]>([]);

    const handleAdWidthChange = (newWidth: number) => {
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

    const handleItemNChange = (newChecked: number) => {
      setItemNChecked(newChecked) 
    };

    const handleSpecSelIndexChange = (newChecked: number) => {
        setSpecSelectIndex(newChecked);
    };
    
    const handleEasingSelIndexChange = (newChecked: number) => {
      setEasingSelectIndex(newChecked);
    };

    const handleDeleteSelIndexChange = (newChecked: number) => {
      setDeleteSelectIndex(null)
      setDeleteSelectIndex(newChecked);
    };

    const handleCreateChange = (newChecked: any[][]) => {
      // console.log(newChecked, adWidth, delayChecked, styleChecked)
      parent.postMessage({
        pluginMessage: {
          type: 'create-animate-timeline-v2',
          newChecked, adWidth, delayChecked, styleChecked
        }
      }, '*');
    };

    const handleSpecsLabelChange = (newChecked: any[][]) => {
      setSpecsLabelChecked(preData => {
        let newData = [newChecked]
          return newData;
      });
    };

    const handleEasingLabelChange = (newChecked: string) => {
      setEasingLabelChecked(newChecked);
    };

    const handleSetPropsChange = (newChecked: any[][]) => {
      // console.log(newChecked)
    };

    useEffect(() => {  
    }, [settingPropsChecked]);

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

              totalN={itemNChecked}
              onAdWidthChange={handleAdWidthChange}
              onDelayCheckedChange={handleDelayCheckedChange}
              onStyleCheckedChange={handleStyleCheckedChange}
              onAddItemCheckedChange={handleAddItemCheckedChange} 
              onResetItemCheckedChange = {handleResetItemCheckedChange}

              onItemNChange={handleItemNChange}
              specSelectIndex={specSelectIndex}
              easingSelectIndex={easingSelectIndex}
              deleteSelectIndex={deleteSelectIndex}

              specsLabelChecked={specsLabelChecked}
              easingLabelChecked={easingLabelChecked}
              settingPropsChecked={settingPropsChecked}

              onSetPropsChange={handleSetPropsChange}
              onSpecsLabelChange={handleSpecsLabelChange}
              onEasingLabelChange={handleEasingLabelChange}
          />
          <UIList 
              addItemChecked={addItemChecked} 
              resetItemChecked={resetItemChecked} 
              itemNChecked={itemNChecked}

              specSelectIndex={specSelectIndex}
              easingSelectIndex={easingSelectIndex}

              onSpecSelectIndexChange={handleSpecSelIndexChange}
              onEasingSelectIndexChange={handleEasingSelIndexChange}
              onDeleteIndexChange={handleDeleteSelIndexChange}
              onCreateChange={handleCreateChange}

              specsLabelChecked={specsLabelChecked}
              easingLabelChecked={easingLabelChecked}
          />
        </div>
      </>
    );
}

export default animate_timeline;
