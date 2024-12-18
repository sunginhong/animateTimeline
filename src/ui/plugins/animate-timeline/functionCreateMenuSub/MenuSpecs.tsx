import MenuSpecCreateList from './MenuSpecCreateList';

export default class MenuSpecs {
    update(specMenuSelectIndex:number, className:string): void {
        return MenuSpecCreateList.update(specMenuSelectIndex, className);
    }
    menuSpecDelete(index: number, itemN: number): void {
        return MenuSpecCreateList.menuSpecDelete(index, itemN);
    }
    create(parent: HTMLElement, className: string, index: number, specSelectClick: (itemId: number) => void, specsLabelCheck: (itemId: any[][]) => void): void {
        MenuSpecCreateList(parent, className, index, specSelectClick, specsLabelCheck);
    }
}
