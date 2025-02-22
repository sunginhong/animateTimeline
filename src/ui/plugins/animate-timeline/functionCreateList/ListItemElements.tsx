import ListItemCreateDiv from './ListItemCreateDiv';

export default class ListItemElements {
    specsUpdate(index: number, specs: any[][]): void {
        return ListItemCreateDiv.specsUpdate(index, specs);
    }
    easingUpdate(index: number, easing: string): void {
        return ListItemCreateDiv.easingUpdate(index, easing);
    }
    listDelete(index: number, itemN: number): void {
        return ListItemCreateDiv.listDelete(index, itemN);
    }
    delIndexUpdate(): number { return ListItemCreateDiv.delIndexUpdate(); }
   
    resetUpdate(): void { return ListItemCreateDiv.resetUpdate(); }

    getListProps(): any { return ListItemCreateDiv.getListProps(); }

    resetListProps(): any { return ListItemCreateDiv.resetListProps(); }

    create(parent: HTMLElement, className: string, index: number, listWidthArray: number[], handleLabelClick: () => void, handleSpecClick: (itemId: number) => void, handleEasingClick: (itemId: number) => void, handleDurationClick: () => void, handleDelayClick: () => void, handleDeleteClick: () => void): void {
        return ListItemCreateDiv(parent, className, index, listWidthArray, handleLabelClick, handleSpecClick, handleEasingClick, handleDurationClick, handleDelayClick, handleDeleteClick);
    }
}