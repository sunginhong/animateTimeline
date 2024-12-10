export default function CreateListItemDuration(parent: HTMLElement, index: number, listWidth: number, handleDurationClick: () => void): void {

    const durationElement = document.createElement('p');
    durationElement.className = "ui-list-new-item-duration";
    durationElement.style.display = "flex";
    durationElement.style.alignItems = "center";
    durationElement.style.justifyContent = "center";
    durationElement.style.width = listWidth + "px";
    durationElement.style.height = "100%";
    durationElement.style.overflow = "hidden";
    parent.appendChild(durationElement);

    const inputElement = document.createElement('input');
    inputElement.className = "ui-list-new-item-duration-input";
    // inputElement.type = "number";
    // inputElement.defaultValue = (Math.floor(Math.random() * 6) + 3) + "00"; // Random duration
    inputElement.defaultValue = "duration(ms)"
    inputElement.style.position = "relative";
    inputElement.style.width = (listWidth-6) + "px";
    inputElement.style.height = "calc(100% - 4px)";
    // inputElement.style.color = "rgba(66, 66, 66, 1)";
    inputElement.style.color = "#B3B3B3";
    inputElement.style.textAlign = "center";
    inputElement.style.alignItems = "center";
    inputElement.style.justifyContent = "center";
    inputElement.style.fontSize = "8px";
    inputElement.style.fontWeight = "600";
    inputElement.style.lineHeight = "16px";
    inputElement.style.border = "0";
    inputElement.style.backgroundColor = "transparent";
    inputElement.style.outline = "none";
    inputElement.style.userSelect = "none";
    inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    durationElement.appendChild(inputElement);

    inputElement.addEventListener('click', function(event: Event) {
        handleDurationClick();
    });
    
    inputElement.addEventListener('focus', () => {
        inputElement.value = "";
        // inputElement.style.color = "rgba(3, 199, 90, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 1)";
    });

    inputElement.addEventListener('active', () => {
        // inputElement.style.color = "rgba(3, 199, 90, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 1)";
    });

    inputElement.addEventListener('blur', () => {
        inputElement.value = inputElement.value === "" ? "duration(ms)" : inputElement.value;
        // inputElement.style.color = "rgba(66, 66, 66, 1)";
        inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
    });

    parent.addEventListener('click', function(event: Event) {
        if (event.target !== durationElement && event.target !== inputElement) {
            // inputElement.style.color = "rgba(66, 66, 66, 1)";
            inputElement.style.border = "1px solid rgba(3, 199, 90, 0)";
        }
    });

}

