import { m } from 'framer-motion';
import CloseBtnIcon from './Components/CloseBtnIcon';
import TitleLabel from './Components/TitleLabel';
import { valOptSpecs } from './Components/valOptSpecs';
import MenuSpecs from './MenuSpecs';
import { get } from 'http';

MenuSpecCreateList.specs = [[]];
export default function MenuSpecCreateList(parent: HTMLElement, className: string, index: number, specSelectClick: (itemId: number) => void, specsLabelCheck: (itemId: any[][]) => void) {

    let specs: any[][] = [[]];

    const menu = document.createElement('div');
    menu.className = 'ui-menu-spec-sub ' + className;
    menu.setAttribute('data-index', index.toString());
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
    menuFrameTop.className = 'specs-selector-frame-top idx-' + index.toString();
    menuFrameTop.setAttribute('data-index', index.toString());
    menuFrameTop.style.display = 'flex';
    menuFrameTop.style.alignItems = 'right';
    menuFrameTop.style.alignContent = 'space-between';
    menuFrameTop.style.gap = '4px';
    menuFrameTop.style.alignSelf = 'stretch';
    menuFrameTop.style.flexWrap = 'wrap';
    menuFrameTop.style.margin = '0px 16px 82px 16px'
    menu.appendChild(menuFrameTop);

    const closeButtonrect = document.createElement('div');
    closeButtonrect.className = 'close-button-rect idx-' + index.toString();
    closeButtonrect.setAttribute('data-index', index.toString());
    closeButtonrect.style.display = 'flex';
    closeButtonrect.style.alignSelf = 'right';
    closeButtonrect.style.width = '100%';
    closeButtonrect.style.margin = '0';
    closeButtonrect.style.display = 'flex';
    closeButtonrect.style.alignContent = 'space-between';
    closeButtonrect.style.alignSelf = 'stretch';
    closeButtonrect.style.flexWrap = 'wrap';
    menuFrameTop.appendChild(closeButtonrect);

    CloseBtnIcon(closeButtonrect, index);

    closeButtonrect.addEventListener('click', () => {
        menu.style.transform = 'translateX(100%)';
        specSelectClick(-1)
        const inputElements = document.querySelectorAll(`.ui-list-new-item-specs-input`);
        inputElements.forEach(inputElement => {
            (inputElement as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
        });
    });

    const menuFrameBottom= document.createElement('div');
    menuFrameBottom.className = 'specs-selector-frame-bottom idx-' + index.toString();
    menuFrameBottom.setAttribute('data-index', index.toString());
    menuFrameBottom.style.display = 'flex';
    menuFrameBottom.style.alignItems = 'center';
    menuFrameBottom.style.alignContent = 'space-between';
    menuFrameBottom.style.gap = '22px';
    menuFrameBottom.style.alignSelf = 'stretch';
    menuFrameBottom.style.flexWrap = 'wrap';
    menuFrameBottom.style.margin = '0px 16px 0px 16px'
    menu.appendChild(menuFrameBottom);

    TitleLabel(menuFrameBottom, 'Spec', 'Choose your\nanimation specs');

    const menuFrameBottomSpec= document.createElement('div');
    menuFrameBottomSpec.className = 'specs-selector-frame-bottom-spec-contain idx-' + index.toString();
    menuFrameBottomSpec.setAttribute('data-index', index.toString());
    menuFrameBottomSpec.style.display = 'flex';
    menuFrameBottomSpec.style.alignItems = 'center';
    menuFrameBottomSpec.style.alignContent = 'space-between';
    menuFrameBottomSpec.style.gap = '4px';
    menuFrameBottomSpec.style.alignSelf = 'stretch';
    menuFrameBottomSpec.style.flexWrap = 'wrap';
    menuFrameBottom.appendChild(menuFrameBottomSpec);

    // 옵션 리스트 생성

    // 이벤트 리스너 추가
    const specPropsArray: [string][] = [];
    let specUniqueArr: [string][] = [];
    let specThumbs: HTMLElement | null = null;

     // 옵션 리스트 추가
    valOptSpecs.forEach((option, optionIndex) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'specs-selector-option idx-' + index.toString();
        optionElement.id = `opt-${index}-${optionIndex}`;
        optionElement.setAttribute('data-specs', option.label);
        optionElement.setAttribute('data-specs-opt-idx', optionIndex.toString());
        optionElement.style.display = 'flex';
        optionElement.style.padding = '2px 8px';
        optionElement.style.justifyContent = 'center';
        optionElement.style.alignItems = 'center';
        optionElement.style.cursor = 'pointer';
        optionElement.style.gap = '4px';
        optionElement.style.borderRadius = '35px';
        optionElement.style.backgroundColor = '#F0F0F0';
        optionElement.style.transition = 'background-color 0.3s ease';
        menuFrameBottomSpec.appendChild(optionElement);

        const optionLabelElement = document.createElement('p');
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
            if (!target.classList.contains('specs-selector-option')) return;

            const value = target.getAttribute('data-specs');

            // console.log(target, value)
            // console.log(value, specs)
            
            const inputElements = document.querySelectorAll(`.ui-list-new-item-specs-input`);
            for (let i = 0; i < inputElements.length; i++) {
                const inputElement = inputElements[i] as HTMLInputElement;
                if(index === i) {
                    const inputElementsItem = document.querySelectorAll(`.ui-list-new-item-specs-input.input-rect`+i);
                    inputElementsItem.forEach(item => {
                        (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 1)";
                    });
                } else {
                    const inputElementsItem = document.querySelectorAll(`.ui-list-new-item-specs-input.input-rect`+i);
                    inputElementsItem.forEach(item => {
                        (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
                    });
                }
            }

            if (!target.classList.contains('active')) {
                if (value !== 'None') {
                    target.classList.add('active');
                    optionElement.style.backgroundColor = '#D9F7E6';
                    optionLabelElement.style.color = '#03A94D';
                    specPropsArray.push([value]);
                } else {
                    Array.from(optionElement.children).forEach(child => {
                        (child as HTMLElement).classList.remove('active');
                    });
                    specPropsArray.length = 0;
                }
            } else {
                target.classList.remove('active');
                optionElement.style.backgroundColor = '#F0F0F0';
                optionLabelElement.style.color = '#737373';
                const indexToRemove = specPropsArray.findIndex(item => item[0] === value);
                if (indexToRemove !== -1) {
                    specPropsArray.splice(indexToRemove, 1);
                }
            }

            const uniqueSet = new Set(specPropsArray.map(item => JSON.stringify(item)));
            specUniqueArr = Array.from(uniqueSet).map(item => JSON.parse(item)) as [string][];
            // specUniqueArr.sort();
            MenuSpecCreateList.specs[index] = specUniqueArr;
            // specsLabelCheck(MenuSpecCreateList.specs.flat().map(item => item[0]))
            specsLabelCheck(MenuSpecCreateList.specs)
            // console.log(MenuSpecCreateList.specs)
            specUniqueArr.sort();
            // return MenuSpecCreateList.specs[index] = specs[index]
        });
      });

    return menu;
}

MenuSpecCreateList.update = function (specMenuSelectIndex: number, className: string): void {
    const menus = document.querySelectorAll(`.${className}`);
    menus.forEach((menu, idx) => {
        if (idx === specMenuSelectIndex) {
            (menu as HTMLElement).style.transform = 'translateX(0)';
        } else {
            (menu as HTMLElement).style.transform = 'translateX(100%)';
        }

        const inputElements = document.querySelectorAll(`.ui-list-new-item-easing-input`);
        for (let i = 0; i < inputElements.length; i++) {
            const inputElement = inputElements[i] as HTMLInputElement;
            if(specMenuSelectIndex === i) {
                const inputElementsItem = document.querySelectorAll(`.ui-list-new-item-specs-input.input-rect`+i);
                inputElementsItem.forEach(item => {
                    (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 1)";
                });
            } else {
                const inputElementsItem = document.querySelectorAll(`.ui-list-new-item-specs-input.input-rect`+i);
                inputElementsItem.forEach(item => {
                    (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
                });
            }
        }
    });
};

MenuSpecCreateList.menuSpecDelete = function (index: number, itemN: number): void {
    const MenuSpec = document.querySelectorAll(`.ui-menu-spec-sub`);

    MenuSpec.forEach((item, idx) => {
        if(idx === index){
            item.remove();
        }
    });
    MenuSpecCreateList.indexUpdate();
}

MenuSpecCreateList.indexUpdate = function (): void {
    const MenuSpec = document.querySelectorAll('.ui-menu-spec-sub') as NodeListOf<HTMLElement>;
    MenuSpec.forEach((item, i) => {
        item.setAttribute('data-index', i.toString());
        item.className = "ui-menu-spec-sub " + "ui-menu-spec-sub " + i.toString();

        Array.from(item.children).forEach(child => {
            if(child.classList.contains('specs-selector-frame-top')) {
                child.setAttribute('data-index', i.toString());
                child.className = "specs-selector-frame-top idx-" + i.toString();

                Array.from(child.children).forEach(closeButtonRect => {
                    if(closeButtonRect.classList.contains('close-button-rect')) {
                        closeButtonRect.setAttribute('data-index', i.toString());
                        closeButtonRect.className = "close-button-rect idx-" + i.toString();

                        Array.from(closeButtonRect.children).forEach(closeButton => {
                            if(closeButton.classList.contains('close-button')) {
                                closeButton.setAttribute('data-index', i.toString());
                                closeButton.className = "close-button idx-" + i.toString();
                            }
                        });
                    }
                });
            }
            if(child.classList.contains('specs-selector-frame-bottom')) {
                child.setAttribute('data-index', i.toString());
                child.className = "specs-selector-frame-bottom idx-" + i.toString();

                Array.from(child.children).forEach(frameBottomSpecContain => {
                    if(frameBottomSpecContain.classList.contains('specs-selector-frame-bottom-spec-contain')) {
                        frameBottomSpecContain.setAttribute('data-index', i.toString());
                        frameBottomSpecContain.className = "specs-selector-frame-bottom-spec-contain idx-" + i.toString();
                        
                        Array.from(frameBottomSpecContain.children).forEach(specsSelectorOption => {
                            if(specsSelectorOption.classList.contains('specs-selector-option')) {
                                specsSelectorOption.setAttribute('data-index', i.toString());
                                specsSelectorOption.className = "specs-selector-option idx-" + i.toString();
                                specsSelectorOption.id = `opt-${i.toString()}-${specsSelectorOption.getAttribute('data-specs-opt-idx')}`;
                            }
                        });
                    }
                });
            }
        });
    });

};

