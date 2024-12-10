
export default function SpecOptionElem(parent: HTMLElement, index: number, optionIndex: number, option: { label: string }): void {
    const optionElement = document.createElement('div');
    optionElement.className = 'spec-selector-option';
    optionElement.id = `opt-${index}-${optionIndex}`;
    optionElement.setAttribute('data-specs', option.label);
    optionElement.style.display = 'flex';
    optionElement.style.padding = '2px 8px';
    optionElement.style.justifyContent = 'center';
    optionElement.style.alignItems = 'center';
    optionElement.style.cursor = 'pointer';
    optionElement.style.gap = '4px';
    optionElement.style.borderRadius = '35px';
    optionElement.style.backgroundColor = '#D9F7E6';
    optionElement.style.transition = 'background-color 0.3s ease';

    const optionLabelElement = document.createElement('p');
    optionLabelElement.style.alignItems = 'center';
    optionLabelElement.style.fontFamily = "Pretendard Variable";
    optionLabelElement.style.fontSize = '8px';
    optionLabelElement.style.margin = '0';
    optionLabelElement.style.fontStyle = 'normal';
    optionLabelElement.style.fontWeight = '600';
    optionLabelElement.style.color = '#03A94D';
    optionLabelElement.style.lineHeight = '16px';
    optionLabelElement.style.pointerEvents = 'none';
    optionLabelElement.style.transition = 'background-color 0.3s ease';
    optionElement.appendChild(optionLabelElement);

    parent.appendChild(optionElement);
    
}

