import ListItemCreateDiv from './ListItemCreateDiv';

export default class ListItemElements {
    specsUpdate(index: number, specs: Array<string>): void {
        return ListItemCreateDiv.specsUpdate(index, specs);
    }
    easingUpdate(index: number, easing: string): void {
        return ListItemCreateDiv.easingUpdate(index, easing);
    }

    create(parent: HTMLElement, className: string, index: number, listWidthArray: number[], handleLabelClick: () => void, handleSpecClick: (itemId: number) => void, handleEasingClick: (itemId: number) => void, handleDurationClick: () => void, handleDelayClick: () => void, handleDeleteClick: () => void): void {
        return ListItemCreateDiv(parent, className, index, listWidthArray, handleLabelClick, handleSpecClick, handleEasingClick, handleDurationClick, handleDelayClick, handleDeleteClick);
    }
}