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
        listItemContain.id = i.toString();
        listItemContain.setAttribute('data-index', i.toString());
    });
    // list.setAttribute('data-state-value-specmenu', stateSpecMenu.toString());

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

    // CreateListItemLabels.indexUpdate = function (index: string): void {
    //     const labelContainer = document.querySelectorAll('.ui-list-new-item-label') as NodeListOf<HTMLElement>;
    //     const inputElement = document.querySelectorAll('.ui-list-new-item-label-input') as NodeListOf<HTMLElement>;
    
    //     labelContainer.forEach((item, i) => {
    //         item.setAttribute('data-index', i.toString());
    //     });
    //     inputElement.forEach((item, i) => {
    //         item.setAttribute('data-index', i.toString());
    //     });
    // };
    


    // delbtn.addEventListener('click', function() {
    //     fnSpecSelectorClose();
    //     let timer1: number | undefined;
    //     let timer2: number | undefined;
    
    //     if (itemN > 0) {
    //       timer1 = window.setTimeout(() => {
    //         listArray.forEach((item, i) => {
    //           if (this.id === i.toString()) {
    //             item.remove();
    //             delbtnArray[i].remove();
    //             listArray.splice(i, 1);
    //             delbtnArray.splice(i, 1);
    //             specArrayF = [...Array(i)];
    //             specsArray.splice(i, 1);
    //             specArrayF.splice(i, 1);
    //             specs.splice(i, 1);
    //             specUniqueArrF.splice(i, 1);
    //             // specsSelectorArr.splice(i, 1);
    //             specsSelectorArr[i].remove();
    //             specsSelectorArr.splice(i, 1);
    //           }
    //         });
    //         window.clearTimeout(timer1);
    //       }, 100);
    
    //       itemN -= 1;
    //     }
    
    //     timer2 = window.setTimeout(() => {
    //       listArray.forEach((item, i) => {
    //         item.id = i.toString();
    //         delbtnArray[i].id = i.toString();
    //         item.querySelectorAll('option').forEach((option) => {
    //           option.id = i.toString();
    //         });
    //       });
    //       window.clearTimeout(timer2);
    //     }, 350);
    //   });

}


// listArray.forEach((item, i) => {
//     if (this.id === i.toString()) {
//         item.remove();
//         delbtnArray[i].remove();
//         listArray.splice(i, 1);
//         delbtnArray.splice(i, 1);
//         specArrayF = [...Array(i)];
//         specsArray.splice(i, 1);
//         specArrayF.splice(i, 1);
//         specs.splice(i, 1);
//         specUniqueArrF.splice(i, 1);
//         specsSelectorArr[i].remove();
//         specsSelectorArr.splice(i, 1);
//     }
// });


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