import CreateListItemLabels from './CreateListItemLabels';
import CreateListItemLines from './CreateListItemLines';
import CreateListItemSpec from './CreateListItemSpecs';
import CreateListItemEasing from './CreateListItemEasing';
import CreateListItemDuration from './CreateListItemDuration'
import CreateListItemDelay from './CreateListItemDelay'
import CreateListItemDelete from './CreateListItemDelete'

const listArray: HTMLElement[] = [];
export default function ListItemCreateDiv(parent: HTMLElement, className: string, index: number, listWidthArray: number[], handleLabelClick: () => void, handleSpecClick: (itemId: number) => void, handleEasingClick: (itemId: number) => void, handleDurationClick: () => void, handleDelayClick: () => void, handleDeleteClick: () => void): void {

    const list = document.createElement('div');
    list.className = className;
    parent.appendChild(list);
    listArray.push(list);
    const listItemContain = document.createElement('div');
    listItemContain.className = "ui-list-row-new-item-group";

    list.appendChild(listItemContain);
    listArray.forEach((list, i) => {
        list.id = i.toString();
        list.setAttribute('data-index', i.toString());
        listItemContain.id = i.toString();
        listItemContain.setAttribute('data-index', i.toString());
    });
    // list.setAttribute('data-state-value-specmenu', stateSpecMenu.toString());

    CreateListItemLabels(listItemContain, index, listWidthArray[0], handleLabelClick);
    CreateListItemLines(listItemContain, 1, '#F0F0F0');
    // CreateListSpec(listItemContain, parent, index, listWidthArray[1]);
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

ListItemCreateDiv.specsUpdate = function (index: number, specs: Array<string>): void {
    CreateListItemSpec.specsUpdate(index, specs);
};

ListItemCreateDiv.easingUpdate = function (index: number, easing: string): void {
    CreateListItemEasing.easingUpdate(index, easing);
};
 