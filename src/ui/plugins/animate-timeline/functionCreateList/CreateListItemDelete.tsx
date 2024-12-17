var selDelIndex = 0;
export default function CreateListItemDelete(parent: HTMLElement, index: number, listWidth: number, handleDeleteClick: () => void): void {
    const parentElement = parent.parentElement;

    const deleteElement = document.createElement('p');
    // deleteElement.setAttribute('data-index', index.toString());
    // deleteElement.className = "ui-list-new-item-delete";

    if (parentElement) {
        deleteElement.setAttribute('data-index', parentElement.getAttribute('data-index'));
        deleteElement.className = "ui-list-new-item-delete " + "input-elem-" + parentElement.getAttribute('data-index');
    }
    
    deleteElement.style.display = "flex";
    deleteElement.style.alignItems = "center";
    deleteElement.style.justifyContent = "center";
    deleteElement.style.width = listWidth + "px";
    deleteElement.style.height = "100%";
    deleteElement.style.cursor = "pointer";
    parent.appendChild(deleteElement);

    const svgNS = "http://www.w3.org/2000/svg";
    const deleteIconSvgElement = document.createElementNS(svgNS, "svg");
    // iconSvgElement.className = "delayVisLabelSvg";
    deleteIconSvgElement.setAttribute("xmlns", svgNS);
    deleteIconSvgElement.setAttribute("width", "14");
    deleteIconSvgElement.setAttribute("height", "14");
    deleteIconSvgElement.setAttribute("viewBox", "0 0 14 14");
    deleteIconSvgElement.setAttribute("fill", "none");
    deleteElement.appendChild(deleteIconSvgElement);
    
    const deletaIconSvgPath = document.createElementNS(svgNS, "path");
    deletaIconSvgPath.setAttribute(
        'd',
        'M4.08331 12.25C3.76248 12.25 3.48783 12.1358 3.25935 11.9073C3.03088 11.6788 2.91665 11.4042 2.91665 11.0833V3.5H2.33331V2.33333H5.24998V1.75H8.74998V2.33333H11.6666V3.5H11.0833V11.0833C11.0833 11.4042 10.9691 11.6788 10.7406 11.9073C10.5121 12.1358 10.2375 12.25 9.91665 12.25H4.08331ZM9.91665 3.5H4.08331V11.0833H9.91665V3.5ZM5.24998 9.91667H6.41665V4.66667H5.24998V9.91667ZM7.58331 9.91667H8.74998V4.66667H7.58331V9.91667Z'
    );
    deletaIconSvgPath.setAttribute('stroke-linecap', 'round');
    deletaIconSvgPath.setAttribute('stroke-linejoin', 'round');
    deletaIconSvgPath.setAttribute('fill', '#737373');
    deletaIconSvgPath.style.transition = "fill 200ms cubic-bezier(0.15, 0, 0.15, 1)";
    deleteIconSvgElement.appendChild(deletaIconSvgPath);

    deleteElement.addEventListener('mouseover', () => {
        deletaIconSvgPath.setAttribute('fill', '#000');
    });

    deleteElement.addEventListener('mouseout', () => {
        deletaIconSvgPath.setAttribute('fill', '#737373');
    });

    deleteElement.addEventListener('click', function(event: Event) {
        handleDeleteClick();
        selDelIndex = Number(this.parentElement.getAttribute('data-index'));
        // console.log(Number(this.parentElement.getAttribute('data-index')))
    });
    
}

CreateListItemDelete.indexUpdate = function (): void {
    const deleteElements = document.querySelectorAll('.ui-list-new-item-delete') as NodeListOf<HTMLElement>;

    deleteElements.forEach((item, i) => {
        const parentElement = item.parentElement;
        if (parentElement) {
            item.setAttribute('data-index', parentElement.getAttribute('data-index'));
            item.className = "ui-list-new-item-delete " + "input-elem-" + parentElement.getAttribute('data-index');
        }
    });
};

CreateListItemDelete.delIndexUpdate = function (): number {

    return CreateListItemDelete.delIndexUpdateSet(selDelIndex);
};

CreateListItemDelete.delIndexUpdateSet = function (index): number {

    return index;
};

