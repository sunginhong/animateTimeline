import React, { MouseEvent, useState, createElement, useRef, createRef} from 'react';
import './animate_timeline_ver1.css'

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
    let zoomBool: boolean = false;
    let fitBool: boolean = false;
    let designType00: boolean = true;
    let designType01: boolean = false;

    function createList(parent: HTMLElement, className: string, index: number): void {
        const list = document.createElement('div');
        list.className = "list";
        parent.appendChild(list);
        listArray.push(list);

        for (let i = 0; i < listArray.length; i++) {
            listArray[i].id = i.toString();
        }

        const listContain = document.createElement('div');
        listContain.className = "listContain";
        list.appendChild(listContain);

        CreateListLabel(listContain);
        createListSpec(parent, listContain, index);
        createListEasing(listContain, index);
        createListTimeSet(listContain);
        createListDelButton(listContain, index);
    }

    function CreateListLabel(parent): void {
        const label = document.createElement('p');
        label.className = "label";
        parent.appendChild(label);
    
        const labelInput = document.createElement('input');
        labelInput.className = "labelInput";
        labelInput.defaultValue = "a";
        labelInput.addEventListener('click', function(event: Event) {
          fnSpecSelectorClose();
        });
        label.appendChild(labelInput);
    }

    function createListSpec(parent: HTMLElement, parentChild: HTMLElement, index: number): void {
        // spec <p> element 생성
        const spec = document.createElement('p');
        spec.className = 'spec';
        parentChild.appendChild(spec);

        const specTitle = document.createElement('div');
        specTitle.className = 'specTitle';
        specTitle.innerHTML = 'Choose your Animation Specs';
        spec.appendChild(specTitle);
        
        const specSelector = document.createElement('div');
        specSelector.className = 'spec-select';
        specsSelectorArr.push(specSelector);
        parent.appendChild(specSelector);

        const specSelectorWrap = document.createElement('div');
        specSelectorWrap.className = 'spec-select-wrap';
        specSelector.appendChild(specSelectorWrap);
        
        const specSelectorTitleWrap = document.createElement('div');
        specSelectorTitleWrap.className = 'specSelectorTitleWrap';
        specSelectorWrap.appendChild(specSelectorTitleWrap);

        const specSelectorTitle = document.createElement('div');
        specSelectorTitle.className = 'specSelectorTitle';
        specSelectorTitle.innerHTML = 'Choose your Animation Specs';
        specSelectorTitleWrap.appendChild(specSelectorTitle);

        const specSelectorClose = document.createElement('div');
        specSelectorClose.className = 'specSelectorClose';
        
        const svgNS = "http://www.w3.org/2000/svg";
        const iconSvgElement = document.createElementNS(svgNS, "svg");
        iconSvgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        iconSvgElement.setAttribute("width", "24");
        iconSvgElement.setAttribute("height", "24");
        iconSvgElement.setAttribute("viewBox", "0 0 24 24");
        iconSvgElement.setAttribute("fill", "none");
        specSelectorClose.appendChild(iconSvgElement);
      
        const iconPath = document.createElementNS(svgNS, "path");
        iconPath.setAttribute(
          "d",
          "M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" 
        );
        iconPath.setAttribute("stroke-linecap", "round");
        iconPath.setAttribute("stroke-linejoin", "round");
        iconPath.setAttribute("fill", "#2E2E2E");
        iconSvgElement.appendChild(iconPath);
        
        specSelectorTitleWrap.appendChild(specSelectorClose);

        specSelectorClose.addEventListener('click', function(event) {
          fnSpecSelectorClose();
        });

        spec.addEventListener('click', function(event) { 
          fnSpecSelectorClose();

          if (!specSelector.classList.contains('spec-select')) return;
      
          const value = spec.textContent || '';
      
          if (!specSelector.classList.contains('active')) {
            if (value !== 'None') {
              specSelector.classList.add('active');
            } 
          } else {
            specSelector.classList.remove('active');
          }
        });

          // 옵션 리스트 생성
        const valOptSpec = [
          { title: "Scale Up", width: 52 },
          { title: "Scale Down", width: 73 },
          { title: "Height-Grow", width: 79 },
          { title: "Height-Shrink", width: 85 },
          { title: "Width-Grow", width: 79 },
          { title: "Width-Shrink", width: 85 },
          { title: "Fade In", width: 52 },
          { title: "Fade Out", width: 60 },
          { title: "Fade In & Out", width: 80 },
          { title: "Slide", width: 50 },
          { title: "Slide In", width: 50 },
          { title: "Slide Out", width: 61 },
          { title: "Rotate", width: 58 }
        ];

      // 이벤트 리스너 추가
      const specPropsArray: [string, number][] = [];
      let specUniqueArr: [string, number][] = [];
      let specThumbs: HTMLElement | null = null;
       // 옵션 리스트 추가
        valOptSpec.forEach((opt, i) => {
          const specSelectorOption = document.createElement('div');
          specSelectorOption.className = 'specSelectorOption';
          specSelectorOption.id = `opt-${index}-${i}`;
          specSelectorOption.setAttribute('data-width', opt.width.toString());
          specSelectorOption.textContent = opt.title;
          specSelectorWrap.appendChild(specSelectorOption);
          
          specSelectorOption.addEventListener('click', function(event) {
            
            const target = event.target as HTMLElement;
            if (!target.classList.contains('specSelectorOption')) return;

            const value = target.textContent || '';
            const valueWidth = parseInt(target.getAttribute('data-width') || '0');

            if (!target.classList.contains('active')) {
              if (value !== 'None') {
                target.classList.add('active');
                specPropsArray.push([value, valueWidth]);

              } else {
                Array.from(specSelectorOption.children).forEach(child => {
                  child.classList.remove('active');
                });
                
                specPropsArray.length = 0;
              }
            } else {
              target.classList.remove('active');
              const indexToRemove = specPropsArray.findIndex(item => item[0] === value);
              if (indexToRemove !== -1) {
                specPropsArray.splice(indexToRemove, 1);
              }
            }

            const set = new Set(specPropsArray.map(item => JSON.stringify(item)));
            specUniqueArr = Array.from(set).map(item => JSON.parse(item)) as [string, number][];
            specUniqueArr.sort();
            
            // specTitle.innerHTML = "";
       
            if(specPropsArray.length === 1) {
              if(specTitle.innerHTML === 'Choose your Animation Specs') {
                specTitle.innerHTML = '';
                specThumbs = document.createElement('div');
                specThumbs.id = 'specThumbs';
                specThumbs.className = 'specThumbs';
                specThumbs.innerHTML = value;
                spec.appendChild(specThumbs);
              }
            } 

            if(specPropsArray.length === 0) {
              if(specTitle.innerHTML === '') {
                specTitle.innerHTML = 'Choose your Animation Specs';
                spec.removeChild(specThumbs);
              }
            }
            // specs 배열을 업데이트하는 부분을 추가하세요
            // specs[index - 1] = specUniqueArr;
            return specs[index] = specUniqueArr
          });
        });

      }
    

    function createListEasing(parent, index): void {
        const easing = document.createElement('p');
        easing.className = "easing";
        parent.appendChild(easing);
      
        const formEasing = document.createElement('div');
        formEasing.className = "formEasing";
        easing.appendChild(formEasing);
      
        const formEasingSelect = document.createElement('select');
        formEasingSelect.id = "easingSelectMulti";
        formEasingSelect.className = "easingSelectMulti";
        formEasingSelect.name = "easingSelectMulti";
        formEasing.appendChild(formEasingSelect);
      
        const valOptEasing: string[] = [
          "Ease-Standard", 
          "EaseOut", 
          "EaseOut level 1", 
          "EaseIn", 
          "EaseInOut", 
          "Spring", 
          "Spring level 1", 
          "Spring level 2",
          "Linear", 
        ];
      
        for (let i = 0; i < valOptEasing.length; i++) {
          const formEasingSelectOpt = document.createElement('option');
          formEasingSelectOpt.className = "formSpecSelectOpt";
          formEasingSelectOpt.id = index.toString();
          formEasingSelectOpt.value = valOptEasing[i];
          formEasingSelectOpt.innerHTML = valOptEasing[i];
          formEasingSelect.appendChild(formEasingSelectOpt);
        }
      
        const specPropsArray: Array<[string, string]> = [];
        const set = new Set(specPropsArray.map(([value]) => value));
        const specUniqueArr = [set];
        formEasingSelect.addEventListener('click', function(event: Event) {
          fnSpecSelectorClose();
        });
        formEasingSelect.addEventListener('change', function(event: Event) {
          const target = event.target as HTMLSelectElement;
          const setEase = target.value;
      
        //   specPropsArray.push([target.id, setEase]);
        specPropsArray.push([index, setEase]);
        });
    }
     
    function createListTimeSet(parent: HTMLElement): void {
        createListDuration(parent);
        createListDelay(parent);
        createListDelayVisible(parent);
      }
      
      function createListDuration(parent: HTMLElement): void {
        const durationRect = document.createElement('div');
        durationRect.className = "durationRect";
        parent.appendChild(durationRect);
      
        const durationInput = document.createElement('input');
        durationInput.className = "durationInput";
        durationInput.type = "number";
        durationInput.defaultValue = (Math.floor(Math.random() * 6) + 3) + "00"; // Random duration
        durationInput.addEventListener('click', function(event: Event) {
          fnSpecSelectorClose();
        });
        durationRect.appendChild(durationInput);
      }
      
      function createListDelay(parent: HTMLElement): void {
        const delayRect = document.createElement('div');
        delayRect.className = "delayRect";
        parent.appendChild(delayRect);
      
        const delayInput = document.createElement('input');
        delayInput.className = "delayInput";
        delayInput.type = "number";
        delayInput.defaultValue = "0";
        delayRect.appendChild(delayInput);
        delayInput.addEventListener('click', function(event: Event) {
          fnSpecSelectorClose();
        });
      }
      
      function createListDelayVisible(parent: HTMLElement): void {
        const delayVisRect = document.createElement('div');
        delayVisRect.className = "delayVisibleRect";
        parent.appendChild(delayVisRect);
      
        const delayVisChk = document.createElement('input');
        delayVisChk.id = "delayVisChk";
        delayVisChk.className = "delayVisChk";
        delayVisChk.type = "checkbox";
        delayVisRect.appendChild(delayVisChk);
      
        const delayVisLabel0 = document.createElement('label');
        delayVisLabel0.className = "delayVisLabel0";
        delayVisLabel0.htmlFor = "delayVisChk";
        delayVisRect.appendChild(delayVisLabel0);
      
        const delayVisLabel1 = document.createElement('label');
        delayVisLabel1.className = "delayVisLabel1";
        delayVisLabel1.htmlFor = "delayVisChk";
        delayVisRect.appendChild(delayVisLabel1);
      
        const delayVisLabelSvg = document.createElement('div');
        delayVisLabelSvg.className = "delayVisLabelSvg";
        delayVisRect.appendChild(delayVisLabelSvg);
      
        const svgNS = "http://www.w3.org/2000/svg";
        const iconSvgElement = document.createElementNS(svgNS, "svg");
        iconSvgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        iconSvgElement.setAttribute("width", "12");
        iconSvgElement.setAttribute("height", "12");
        iconSvgElement.setAttribute("viewBox", "0 0 12 12");
        iconSvgElement.setAttribute("fill", "none");
        delayVisLabelSvg.appendChild(iconSvgElement);
      
        const iconPath = document.createElementNS(svgNS, "path");
        iconPath.setAttribute(
          "d",
          "M10.3005 3.13281C10.4665 3.29878 10.4665 3.56788 10.3005 3.73385L5.23387 8.80052C5.06789 8.96649 4.7988 8.96649 4.63282 8.80052L1.69949 5.86718C1.53352 5.70121 1.53352 5.43212 1.69949 5.26614C1.86546 5.10017 2.13456 5.10017 2.30053 5.26614L4.93335 7.89896L9.69949 3.13281C9.86546 2.96684 10.1346 2.96684 10.3005 3.13281Z"
        );
        iconPath.setAttribute("stroke-linecap", "round");
        iconPath.setAttribute("stroke-linejoin", "round");
        iconPath.setAttribute("fill", "white");
        iconSvgElement.appendChild(iconPath);

        delayVisRect.addEventListener('click', function(event: Event) {
          fnSpecSelectorClose();
        });
    }

    function createListDelButton(parent: HTMLElement, index: number): void {
        const delbtn = document.createElement('button');
        delbtn.className = "delBtn";
        parent.appendChild(delbtn);
        delbtnArray.push(delbtn);
      
        const delBtnContain = document.createElement('div');
        delBtnContain.className = "delBtnContain";
        delbtn.appendChild(delBtnContain);
      
        const delVisLabelSvg = document.createElement('div');
        delVisLabelSvg.className = "delayVisLabelSvg";
        delBtnContain.appendChild(delVisLabelSvg);
      
        const svgNS = "http://www.w3.org/2000/svg";
        const iconSvgElement = document.createElementNS(svgNS, "svg");
        // iconSvgElement.className = "delayVisLabelSvg";
        iconSvgElement.setAttribute("xmlns", svgNS);
        iconSvgElement.setAttribute("width", "14");
        iconSvgElement.setAttribute("height", "14");
        iconSvgElement.setAttribute("viewBox", "0 0 14 14");
        iconSvgElement.setAttribute("fill", "none");
        delVisLabelSvg.appendChild(iconSvgElement);
      
        const iconPath = document.createElementNS(svgNS, "path");
        iconPath.setAttribute(
          'd',
          'M4.08331 12.25C3.76248 12.25 3.48783 12.1358 3.25935 11.9073C3.03088 11.6788 2.91665 11.4042 2.91665 11.0833V3.5H2.33331V2.33333H5.24998V1.75H8.74998V2.33333H11.6666V3.5H11.0833V11.0833C11.0833 11.4042 10.9691 11.6788 10.7406 11.9073C10.5121 12.1358 10.2375 12.25 9.91665 12.25H4.08331ZM9.91665 3.5H4.08331V11.0833H9.91665V3.5ZM5.24998 9.91667H6.41665V4.66667H5.24998V9.91667ZM7.58331 9.91667H8.74998V4.66667H7.58331V9.91667Z'
        );
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('fill', '#737373');
        iconSvgElement.appendChild(iconPath);
      
        const delBtnTitle = document.createElement('span');
        delBtnTitle.className = "delBtnTitle";
        delBtnTitle.innerHTML = "delete";
        delBtnContain.appendChild(delBtnTitle);
      
        delbtnArray.forEach((btn, i) => {
          btn.id = i.toString();
        });
      
        delbtn.addEventListener('click', function() {
          fnSpecSelectorClose();
          let timer1: number | undefined;
          let timer2: number | undefined;
      
          if (itemN > 0) {
            timer1 = window.setTimeout(() => {
              listArray.forEach((item, i) => {
                if (this.id === i.toString()) {
                  item.remove();
                  delbtnArray[i].remove();
                  listArray.splice(i, 1);
                  delbtnArray.splice(i, 1);
                  specArrayF = [...Array(i)];
                  specsArray.splice(i, 1);
                  specArrayF.splice(i, 1);
                  specs.splice(i, 1);
                  specUniqueArrF.splice(i, 1);
                  // specsSelectorArr.splice(i, 1);
                  specsSelectorArr[i].remove();
                  specsSelectorArr.splice(i, 1);
                }
              });
              window.clearTimeout(timer1);
            }, 100);
      
            itemN -= 1;
          }
      
          timer2 = window.setTimeout(() => {
            listArray.forEach((item, i) => {
              item.id = i.toString();
              delbtnArray[i].id = i.toString();
              item.querySelectorAll('option').forEach((option) => {
                option.id = i.toString();
              });
            });
            window.clearTimeout(timer2);
          }, 350);
        });
    }

    class ItemElements {
        create(parent: HTMLElement, className: string, index: number): void {
            return createList(parent, className, index);
        }
    }

    let list: ItemElements = new ItemElements();
   
    function fnAddBtn(): void {
        itemN += 1;
        list.create(uiRef.current, "list", itemN-1);

        fnSpecSelectorClose();
    }

    function fnResetBtn(): void {
        itemN = 0;
      
        listArray.forEach((option, i) => {
          itemN = 0;
          specArrayF = [...new Array(itemN)];
          listArray[i].remove();
          delbtnArray[i].remove();
          specArrayF = [];
          specsSelectorArr[i].remove();
       
        });
      
        setTimeout(() => {
          listArray = [];
          delbtnArray = [];
          specsArray = [];
          specs = [[]];
          specUniqueArrF = [];
          specsSelectorArr = [];
        }, 50);
      
        setTimeout(() => {
          listArray.forEach((item, i) => {
            item.id = i.toString();
            delbtnArray[i].id = i.toString();
            item.querySelectorAll('option').forEach(option => {
              option.id = i.toString();
            });
          });
        }, 350);
      }
      
      function fnZoomBtn(): void {
        const zoomBtn = document.querySelector(".zoomCheckbox");
        if (!zoomBool) {
            zoomBtn.classList.add('on');
            setTimeout(() => {
                zoomBool = true;
            }, 100);
        } else {
            zoomBtn.classList.remove('on');
            setTimeout(() => {
                zoomBool = false;
            }, 100);
        }
      }
      
      function fnTlFitBtn(): void {
        const tlFitBtn = document.querySelector(".tlfitCheckbox");
        if (!fitBool) {
            tlFitBtn.classList.add('on');
            setTimeout(() => {
                fitBool = true;
            }, 100);
        } else {
            tlFitBtn.classList.remove('on');
            setTimeout(() => {
                fitBool = false;
            }, 100);
        }
    }


    function fnDesigin00Btn(): void {
      const designBtnType00 = document.querySelector(".tlDesignBtn_Checkbox.designType00");
      const designBtnType01 = document.querySelector(".tlDesignBtn_Checkbox.designType01");
      designBtnType00.classList.add('on');
      designBtnType01.classList.remove('on');
        setTimeout(() => {
          designType00 = true;
          designType01 = false;
        }, 100);
    }
    
    function fnDesigin01Btn(): void {
      const designBtnType00 = document.querySelector(".tlDesignBtn_Checkbox.designType00");
      const designBtnType01 = document.querySelector(".tlDesignBtn_Checkbox.designType01");
      designBtnType00.classList.remove('on');
      designBtnType01.classList.add('on');
        setTimeout(() => {
          designType00 = false;
          designType01 = true;
        }, 100);
    }

    function fnSpecSelectorClose(): void {
      for (let i = 0; i < specsSelectorArr.length; i++) {
        specsSelectorArr[i].classList.remove('active');
      }
    }

    function fnDesignType(designType00, designType01) {
      if(designType00 === true) {
        return "Face";
      }
      if(designType01 === true) {
        return "Line";
      }
    }

    function fnCreateBtn(): void {
        let specsBlank = false;
        let tlWidth = 0;
      
        const labels: string[] = [];
        const eases: string[] = [];
        const durations: number[] = [];
        const delays: number[] = [];
        const delayVis: boolean[] = [];
        let designType: string = fnDesignType(designType00, designType01);
        
        const adjWidthInput = document.getElementsByClassName('adjWidthInput') as HTMLCollectionOf<HTMLInputElement>;
        const labelInput = document.getElementsByClassName('labelInput') as HTMLCollectionOf<HTMLInputElement>;
        const easeInput = document.getElementsByClassName('easingSelectMulti') as HTMLCollectionOf<HTMLSelectElement>;
        const durationInput = document.getElementsByClassName('durationInput') as HTMLCollectionOf<HTMLInputElement>;
        const delayInput = document.getElementsByClassName('delayInput') as HTMLCollectionOf<HTMLInputElement>;
        const delayVisChk = document.getElementsByClassName('delayVisChk') as HTMLCollectionOf<HTMLInputElement>;
      
        if (adjWidthInput[0]) {
          tlWidth = parseInt(adjWidthInput[0].value, 10);
        }
      
        for (let i = 0; i < itemN; i++) {
          labels.push(labelInput[i]?.value || '');
          eases.push(easeInput[i]?.value || '');
          durations.push(parseInt(durationInput[i]?.value || '0', 10));
          delays.push(parseInt(delayInput[i]?.value || '0', 10));
          delayVis.push(delayVisChk[i]?.checked || false);
        }
      
        if (labels.length !== specs.length || specs[0]?.length === 0) {
          specsBlank = true;
          alert('Please enter all settings and restart plugin');
        }
      
        setTimeout(() => {
          if (!specsBlank) {
            parent.postMessage({
              pluginMessage: {
                type: 'create-animate-timeline',
                tlWidth,
                zoomBool,
                fitBool,
                labels,
                specs,
                eases,
                durations,
                delays,
                delayVis,
                designType
              }
            }, '*');
          }
        }, 100);
      }
    
    function isEmptyObject(param: any): boolean {
        return Object.keys(param).length === 0 && param.constructor === Object;
    }
    
    return (
      <>
      <div id="ui" ref={uiRef}>
        <div className="ui_top">
        <div className="top_title">Row Setting</div>
        <div className="btn_group">
            <div className="btn_group_left">
            <button id="addBtn" className="btn_rect gray" onClick={fnAddBtn}>
                <a className="label white">
                Add Btn
                </a>
            </button>
            <button id="resetBtn" className="btn_rect gray" onClick={fnResetBtn}>
                <a className="label white">
                Reset Btn
                </a>
            </button>
            <div id="adjWidth" className="btn_rect white">
                <span className="label black">AdjustWidth :</span>
                <input
                defaultValue={80}
                id="adjWidthInput"
                className="adjWidthInput label_input"
                type="Num"
                minLength={1}
                maxLength={3}
                />
            </div>
            <div id="zoomBtn" className="btn_rect white" onClick={fnZoomBtn}>
                <label htmlFor="zoom_cbx" className="label-cbx">
                <span>Zoom</span>
                <input id="zoom_cbx" type="checkbox" className="invisible" />
                <div id="zoomCheckbox" className="zoomCheckbox">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.3005 3.1328C10.4665 3.29878 10.4665 3.56787 10.3005 3.73384L5.23387 8.80051C5.06789 8.96648 4.7988 8.96648 4.63282 8.80051L1.69949 5.86718C1.53352 5.7012 1.53352 5.43211 1.69949 5.26613C1.86546 5.10016 2.13456 5.10016 2.30053 5.26613L4.93335 7.89895L9.69949 3.1328C9.86546 2.96683 10.1346 2.96683 10.3005 3.1328Z"
                        fill="white"
                    />
                    </svg>
                </div>
                </label>
            </div>
            <div id="tlFitBtn" className="btn_rect white" onClick={fnTlFitBtn}>
                <label htmlFor="tl_cbx" className="label-cbx">
                <span>timeLineFit</span>
                <input id="tl_cbx" type="checkbox" className="invisible" />
                <div id="tlfitCheckbox" className="tlfitCheckbox">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.3005 3.1328C10.4665 3.29878 10.4665 3.56787 10.3005 3.73384L5.23387 8.80051C5.06789 8.96648 4.7988 8.96648 4.63282 8.80051L1.69949 5.86718C1.53352 5.7012 1.53352 5.43211 1.69949 5.26613C1.86546 5.10016 2.13456 5.10016 2.30053 5.26613L4.93335 7.89895L9.69949 3.1328C9.86546 2.96683 10.1346 2.96683 10.3005 3.1328Z"
                        fill="white"
                    />
                    </svg>
                </div>
                </label>
            </div>
            <div className='tlDesignRect'>
              <div id="tlDesignBtn" className="btn_rect white" onClick={fnDesigin00Btn}>
                  <label htmlFor="tl_design_00" className="label-cbx">
                  <span>Face</span>
                  <input id="tl_design_00" type="checkbox" className="invisible" />
                  <div id="tlDesignBtn_Checkbox" className="tlDesignBtn_Checkbox designType00 on">
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      >
                      <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.3005 3.1328C10.4665 3.29878 10.4665 3.56787 10.3005 3.73384L5.23387 8.80051C5.06789 8.96648 4.7988 8.96648 4.63282 8.80051L1.69949 5.86718C1.53352 5.7012 1.53352 5.43211 1.69949 5.26613C1.86546 5.10016 2.13456 5.10016 2.30053 5.26613L4.93335 7.89895L9.69949 3.1328C9.86546 2.96683 10.1346 2.96683 10.3005 3.1328Z"
                          fill="white"
                      />
                      </svg>
                  </div>
                  </label>
              </div>
              <div id="tlDesignBtn" className="btn_rect white" onClick={fnDesigin01Btn}>
                  <label htmlFor="tl_design_01" className="label-cbx">
                  <span>Line</span>
                  <input id="tl_design_01" type="checkbox" className="invisible" />
                  <div id="tlDesignBtn_Checkbox" className="tlDesignBtn_Checkbox designType01">
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      >
                      <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.3005 3.1328C10.4665 3.29878 10.4665 3.56787 10.3005 3.73384L5.23387 8.80051C5.06789 8.96648 4.7988 8.96648 4.63282 8.80051L1.69949 5.86718C1.53352 5.7012 1.53352 5.43211 1.69949 5.26613C1.86546 5.10016 2.13456 5.10016 2.30053 5.26613L4.93335 7.89895L9.69949 3.1328C9.86546 2.96683 10.1346 2.96683 10.3005 3.1328Z"
                          fill="white"
                      />
                      </svg>
                  </div>
                  </label>
              </div>
            </div>
            </div>
            <div className="btn_group_right">
            <button
                id="createBtn"
                className="btn_rect green"
                onClick={fnCreateBtn}
            >
                <div className="plus_btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={8}
                    height={8}
                    viewBox="0 0 8 8"
                    fill="none"
                >
                    <path d="M0 4H8" stroke="white" />
                    <path d="M4 0L4 8" stroke="white" />
                </svg>
                </div>
                <span className="label white">Create</span>
            </button>
            </div>
        </div>
        </div>
        <div className="uiList_contain">
          <div className="title">Timeline Setting</div>
          <div className="uiList">
              <div className="frame-list-row">
                <div className="list-row">
                    <div className="list-row-label-1">
                    <div className="list-row-label-1-badge">Label</div>
                    </div>
                    <div className="list-row-line" />
                    <div className="list-row-label-2">
                    <div className="list-row-label-2-badge">spec</div>
                    </div>
                    <div className="list-row-line" />
                    <div className="list-row-label-3">
                    <div className="list-row-label-3-badge">easing</div>
                    </div>
                    <div className="list-row-line" />
                    <div className="list-row-label-4">
                    <div className="list-row-label-4-badge">duration</div>
                    </div>
                    <div className="list-row-line" />
                    <div className="list-row-label-5">
                    <div className="list-row-label-5-badge">delay</div>
                    </div>
                    <div className="list-row-line" />
                    <div className="list-row-label-6">
                    <div className="list-row-label-6-badge">
                        visible delay timeLine
                    </div>
                    </div>
                    <div className="list-row-line" />
                    <div className="list-row-label-7">
                    <div className="list-row-label-7-badge">delete btn</div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
      </>
    );
}

export default animate_timeline;
