import MenuSpecCreateList from './MenuSpecCreateList';

export default class MenuSpecs {
    update(specMenuSelectIndex:number, className:string): void {
        return MenuSpecCreateList.update(specMenuSelectIndex, className);
    }

    create(parent: HTMLElement, className: string, index: number, specSelectClick: (itemId: number) => void, specsLabelCheck: (itemId: string[]) => void): void {
        MenuSpecCreateList(parent, className, index, specSelectClick, specsLabelCheck);
    }
}
