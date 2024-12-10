import CloseBtnIcon from './Components/CloseBtnIcon';
import TitleLabel from './Components/TitleLabel';
import { valOptEasing } from './Components/valOptEasing';

export default function MenuEasingCreateList(parent: HTMLElement, className: string, index: number, easingselectClick: (itemId: number) => void, easingLabelCheck: (itemId: string) => void) {
    let easings: any[][] = [[]];
    
    const menu = document.createElement('div');
    menu.setAttribute('data-index', index.toString());
    menu.className = className;
    menu.style.position = 'absolute';
    menu.style.width = '100%';
    menu.style.height = '100%';
    menu.style.top = '0';
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.backgroundColor = '#fff';
    menu.style.zIndex = '10';
    parent.appendChild(menu);
    menu.style.transform = 'translateX(100%)';

    const menuFrameTop = document.createElement('div');
    menuFrameTop.setAttribute('data-index', index.toString());
    menuFrameTop.className = 'easing-selector-frame-top';
    menuFrameTop.style.display = 'flex';
    menuFrameTop.style.alignItems = 'right';
    menuFrameTop.style.alignContent = 'space-between';
    menuFrameTop.style.gap = '4px';
    menuFrameTop.style.alignSelf = 'stretch';
    menuFrameTop.style.flexWrap = 'wrap';
    menuFrameTop.style.margin = '0px 16px 82px 16px'
    menu.appendChild(menuFrameTop);

    const closeButtonrect = document.createElement('div');
    closeButtonrect.className = 'close-button-rect';
    closeButtonrect.style.display = 'flex';
    closeButtonrect.style.alignSelf = 'right';
    closeButtonrect.style.width = '100%';
    closeButtonrect.style.margin = '0';
    closeButtonrect.style.display = 'flex';
    closeButtonrect.style.alignContent = 'space-between';
    closeButtonrect.style.alignSelf = 'stretch';
    closeButtonrect.style.flexWrap = 'wrap';
    menuFrameTop.appendChild(closeButtonrect);

    CloseBtnIcon(closeButtonrect);

    closeButtonrect.addEventListener('click', () => {
        menu.style.transform = 'translateX(100%)';
        easingselectClick(-1)
        const inputElements = document.querySelectorAll(`.ui-list-new-item-easing-input`);
        inputElements.forEach(inputElement => {
            (inputElement as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
        });
    });

    const menuFrameBottom= document.createElement('div');
    menuFrameBottom.className = 'easing-selector-frame-bottom';
    menuFrameBottom.setAttribute('data-index', index.toString());
    menuFrameBottom.style.display = 'flex';
    menuFrameBottom.style.alignItems = 'center';
    menuFrameBottom.style.alignContent = 'space-between';
    menuFrameBottom.style.gap = '22px';
    menuFrameBottom.style.alignSelf = 'stretch';
    menuFrameBottom.style.flexWrap = 'wrap';
    menuFrameBottom.style.margin = '0px 16px 0px 16px'
    menu.appendChild(menuFrameBottom);

    TitleLabel(menuFrameBottom, 'Easing', 'Choose your\nanimation easings');

    const menuFrameBottomEasing= document.createElement('div');
    menuFrameBottomEasing.className = 'easing-selector-frame-bottom-Easing-contain';
    menuFrameBottomEasing.setAttribute('data-index', index.toString());
    menuFrameBottomEasing.style.display = 'flex';
    menuFrameBottomEasing.style.alignItems = 'center';
    menuFrameBottomEasing.style.alignContent = 'space-between';
    menuFrameBottomEasing.style.gap = '4px';
    menuFrameBottomEasing.style.alignSelf = 'stretch';
    menuFrameBottomEasing.style.flexWrap = 'wrap';
    menuFrameBottom.appendChild(menuFrameBottomEasing);

    // 옵션 리스트 생성
  

    // 이벤트 리스너 추가
    const easingLabelCheckArray: [string][] = [];
    let EasingUniqueArr: [string][] = [];
    let EasingThumbs: HTMLElement | null = null;

     // 옵션 리스트 추가
    valOptEasing.forEach((option, optionIndex) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'easing-selector-option';
        optionElement.id = `opt-${index}-${optionIndex}`;
        optionElement.setAttribute('data-easings', option.label);
        optionElement.style.display = 'flex';
        optionElement.style.padding = '2px 8px';
        optionElement.style.justifyContent = 'center';
        optionElement.style.alignItems = 'center';
        optionElement.style.cursor = 'pointer';
        optionElement.style.gap = '4px';
        optionElement.style.borderRadius = '35px';
        optionElement.style.backgroundColor = '#F0F0F0';
        optionElement.style.transition = 'background-color 0.3s ease';
        menuFrameBottomEasing.appendChild(optionElement);

        const optionLabelElement = document.createElement('p');
        optionElement.className = 'easing-selector-label';
        optionLabelElement.style.alignItems = 'center';
        optionLabelElement.style.fontFamily = "Pretendard Variable";
        optionLabelElement.style.fontSize = '8px';
        optionLabelElement.style.margin = '0';
        optionLabelElement.style.fontStyle = 'normal';
        optionLabelElement.style.fontWeight = '600';
        optionLabelElement.style.color = '#737373';
        optionLabelElement.style.lineHeight = '16px';
        optionLabelElement.style.pointerEvents = 'none';
        optionLabelElement.style.transition = 'background-color 0.3s ease';
        optionLabelElement.textContent = option.label;
        optionElement.appendChild(optionLabelElement);
        
        optionElement.addEventListener('mouseover', () => {
            //hover event
          
        });
        optionElement.addEventListener('mouseout', () => {
            //hover event
        });
        
        optionElement.addEventListener('click', function(event) {
            const target = event.target as HTMLElement;
            if (!target.classList.contains('easing-selector-label')) return;

            const value = target.getAttribute('data-easings');

            const inputElements = document.querySelectorAll(`.ui-list-new-item-easing-input`);
            for (let i = 0; i < inputElements.length; i++) {
                const inputElement = inputElements[i] as HTMLInputElement;
                if(index === i) {
                    const inputElementsItem = document.querySelectorAll(`.ui-list-new-item-easing-input.input-rect`+i);
                    inputElementsItem.forEach(item => {
                        (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 1)";
                    });
                } else {
                    const inputElementsItem = document.querySelectorAll(`.ui-list-new-item-easing-input.input-rect`+i);
                    inputElementsItem.forEach(item => {
                        (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
                    });
                }
            }

            if (target.classList.contains('active')) {
                target.classList.remove('active');
                optionElement.style.backgroundColor = '#F0F0F0';
                optionLabelElement.style.color = '#737373';
                const indexToRemove = easingLabelCheckArray.findIndex(item => item[0] === value);
                if (indexToRemove !== -1) {
                    easingLabelCheckArray.splice(indexToRemove, 1);
                }
                easingLabelCheck("None")
            } else {
                Array.from(menuFrameBottomEasing.children).forEach(child => {
                    (child as HTMLElement).classList.remove('active');
                    (child as HTMLElement).style.backgroundColor = '#F0F0F0';
                    (child as HTMLElement).querySelector('p')!.style.color = '#737373';
                    easingLabelCheckArray.length = 0;
                });

                target.classList.add('active');
                optionElement.style.backgroundColor = option.bgColor;
                optionLabelElement.style.color = '#424242';
                easingLabelCheckArray.push([value]);
                easingLabelCheck(value);
            }

            const uniqueSet = new Set(easingLabelCheckArray.map(item => JSON.stringify(item)));
            EasingUniqueArr = Array.from(uniqueSet).map(item => JSON.parse(item)) as [string][];
            EasingUniqueArr.sort();
            
            easings[index] = EasingUniqueArr;
        });
      });

    return menu;
}

MenuEasingCreateList.update = function (EasingMenuSelectIndex: number, className: string): void {
    const menus = document.querySelectorAll(`.${className}`);
    menus.forEach((menu, idx) => {
        if (idx === EasingMenuSelectIndex) {
            (menu as HTMLElement).style.transform = 'translateX(0)';
        } else {
            (menu as HTMLElement).style.transform = 'translateX(100%)';
        }
        const inputElements = document.querySelectorAll(`.ui-list-new-item-easing-input`);
            for (let i = 0; i < inputElements.length; i++) {
                const inputElement = inputElements[i] as HTMLInputElement;
                if(EasingMenuSelectIndex === i) {
                    const inputElementsItem = document.querySelectorAll(`.ui-list-new-item-easing-input.input-rect`+i);
                    inputElementsItem.forEach(item => {
                        (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 1)";
                    });
                } else {
                    const inputElementsItem = document.querySelectorAll(`.ui-list-new-item-easing-input.input-rect`+i);
                    inputElementsItem.forEach(item => {
                        (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
                    });
                }
            }
    });
};

