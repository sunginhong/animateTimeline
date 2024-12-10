export default function CreateListItemLines(parent: HTMLElement, lineWidth: number, bgColor: string): void {

    const label = document.createElement('div');
    label.className = "ui-list-new-item-line";
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.justifyContent = "center";
    label.style.width = lineWidth + "px";
    label.style.height = "100%";
    label.style.backgroundColor = bgColor;
    parent.appendChild(label);

}
