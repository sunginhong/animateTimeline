export const SelBorderUpdate = (type: string, index: number) => {
    const inputSpecsElements = document.querySelectorAll(`.ui-list-new-item-specs-input`);
    const inputEasingElements = document.querySelectorAll(`.ui-list-new-item-easing-input`);
    if(type === "easing") {
        inputEasingElements.forEach(item => {
            if(Number(item.getAttribute('data-index')) === index){
                (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 1)";
            } else {
                (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
            }
        });
        inputSpecsElements.forEach(item => {
            (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
        });
        return;
    }
    if(type === "specs") {
        inputSpecsElements.forEach(item => {
            if(Number(item.getAttribute('data-index')) === index){
                (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 1)";
            } else {
                (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
            }
        });
        inputEasingElements.forEach(item => {
            (item as HTMLElement).style.border = "1px solid rgba(3, 199, 90, 0)";
        });
    }
}
