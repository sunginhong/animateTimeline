import MenuEasingCreateList from './MenuEasingCreateList';

export default class MenuEasing {
    update(easingMenuSelectIndex:number, className:string): void {
        return MenuEasingCreateList.update(easingMenuSelectIndex, className);
    }
    menuEasingDelete(index: number): void {
        return MenuEasingCreateList.menuEasingDelete(index);
    }
    create(parent: HTMLElement, className: string, index: number, easingSelectClick: (itemId: number) => void, easingLabelCheck: (itemId: string) => void): void {
        MenuEasingCreateList(parent, className, index, easingSelectClick, easingLabelCheck);
    }
}
