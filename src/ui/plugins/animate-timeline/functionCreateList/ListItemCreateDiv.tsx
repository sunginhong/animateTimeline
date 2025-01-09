import './css/InputStyles.css';
import CreateListItemLabels from './CreateListItemLabels';
import CreateListItemLines from './CreateListItemLines';
import CreateListItemSpec from './CreateListItemSpecs';
import CreateListItemEasing from './CreateListItemEasing';
import CreateListItemDuration from './CreateListItemDuration'
import CreateListItemDelay from './CreateListItemDelay'
import CreateListItemDelete from './CreateListItemDelete'

let listArray: HTMLElement[] = [];
export default function ListItemCreateDiv(parent: HTMLElement, className: string, index: number, listWidthArray: number[], handleLabelClick: () => void, handleSpecClick: (itemId: number) => void, handleEasingClick: (itemId: number) => void, handleDurationClick: () => void, handleDelayClick: () => void, handleDeleteClick: () => void): void {
    const list = document.createElement('div');
    // list.className = className;
    parent.appendChild(list);
    listArray.push(list);
    const listItemContain = document.createElement('div');
    listItemContain.className = "ui-list-row-new-item-group";

    list.appendChild(listItemContain);
    listArray.forEach((list, i) => {
        list.className = "ui-list-row-new-item list-new-item-" + i.toString();
        list.id = i.toString();
        list.setAttribute('data-index', i.toString());
        // list.setAttribute('data-label-props', null);
        // list.setAttribute('data-specs-props', null);
        // list.setAttribute('data-easing-props', null);
        // list.setAttribute('data-duration-props', null);
        // list.setAttribute('data-delay-props', null);
        listItemContain.id = i.toString();
        listItemContain.setAttribute('data-index', i.toString());
    });

    CreateListItemLabels(listItemContain, index, listWidthArray[0], handleLabelClick);
    CreateListItemLines(listItemContain, 1, '#F0F0F0');
    CreateListItemSpec(listItemContain, parent, index, listWidthArray[1], handleSpecClick);
    CreateListItemLines(listItemContain, 1, '#F0F0F0');
    CreateListItemEasing(listItemContain, index, listWidthArray[2], handleEasingClick);
    CreateListItemLines(listItemContain, 1, '#F0F0F0');
    CreateListItemDuration(listItemContain, index, listWidthArray[3], handleDurationClick);
    CreateListItemLines(listItemContain, 1, '#F0F0F0');
    CreateListItemDelay(listItemContain, index, listWidthArray[4], handleDelayClick);
    CreateListItemLines(listItemContain, 1, '#F0F0F0');
    CreateListItemDelete(listItemContain, index, listWidthArray[5], handleDeleteClick);
}

ListItemCreateDiv.specsUpdate = function (index: number, specs: Array<any[][]>): void {
    CreateListItemSpec.specsUpdate(index, specs);
};

ListItemCreateDiv.easingUpdate = function (index: number, easing: string): void {
    CreateListItemEasing.easingUpdate(index, easing);
};
 
ListItemCreateDiv.listDelete = function (index: number, itemN: number): void {
    const listElement = document.querySelectorAll('.ui-list-row-new-item') as NodeListOf<HTMLElement>;
    if(index != null){
        listArray[index].remove();
        listArray.splice(index, 1);
    }
   
    const timer2 = window.setTimeout(() => {
      
        listElement.forEach((item, i) => {
            item.className = "ui-list-row-new-item list-new-item-" + i.toString();
            item.querySelectorAll('.ui-list-row-new-item-group').forEach((listItemContain) => {
                ListItemCreateDiv.indexUpdate();
                CreateListItemLabels.indexUpdate();
                CreateListItemSpec.indexUpdate();
                CreateListItemEasing.indexUpdate();
                CreateListItemDuration.indexUpdate();
                CreateListItemDelay.indexUpdate();
                CreateListItemDelete.indexUpdate();
            });
        });
        window.clearTimeout(timer2);
    }, 350);
}

ListItemCreateDiv.indexUpdate = function (): void {
    const listElement = document.querySelectorAll('.ui-list-row-new-item') as NodeListOf<HTMLElement>;
    const listItemContainElement = document.querySelectorAll('.ui-list-row-new-item-group') as NodeListOf<HTMLElement>;
    listElement.forEach((item, i) => {
        item.setAttribute('data-index', i.toString());
        item.className = "ui-list-row-new-item list-new-item-" + i.toString();
        item.id = i.toString();
    });
    listItemContainElement.forEach((item, i) => {
        item.setAttribute('data-index', i.toString());
        item.id = i.toString();
    });
};

ListItemCreateDiv.delIndexUpdate = function (): number {
    let delListIndex = CreateListItemDelete.delIndexUpdate() 
    return delListIndex;
}

ListItemCreateDiv.resetUpdate = function (): void {
    CreateListItemDelete.resetUpdate();
    listArray.forEach((list, i) => {
        list.remove();
        listArray = [];
    });
};

ListItemCreateDiv.getListProps = function (): any[] {
    let propsArr: Array<any[]> = [];

    listArray.forEach((list, i) => {
        propsArr.push([list.getAttribute('data-index'), list.getAttribute('data-label-props'), list.getAttribute('data-specs-props'), list.getAttribute('data-easing-props'), list.getAttribute('data-duration-props'), list.getAttribute('data-delay-props')]);
    })
    return propsArr;
}

ListItemCreateDiv.resetListProps = function (): any[] {
    let propsArr: Array<any[]> = [];
    listArray.forEach((list, i) => {
        list.remove();
        listArray = [];
    });
    return propsArr;
}