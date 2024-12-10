export default function CloseBtnIcon(parent: HTMLElement) {
    // Close button
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '0';
    closeButton.style.right = '0';
    closeButton.style.alignSelf = 'flex-end';
    closeButton.style.margin = '10px';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.backgroundColor = 'transparent';

    const closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    closeIcon.setAttribute('width', '10');
    closeIcon.setAttribute('height', '10');
    closeIcon.setAttribute('viewBox', '0 0 10 10');
    closeIcon.setAttribute('fill', 'none');
    closeIcon.style.transition = 'transform 0.3s ease';

    closeButton.addEventListener('mouseover', () => {
        closeIcon.style.transform = 'rotate(-180deg)';
    });
    closeButton.addEventListener('mouseout', () => {
        closeIcon.style.transform = 'rotate(0deg)';
    });

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M1 1L9 9');
    path1.setAttribute('stroke', '#424242');
    path1.setAttribute('stroke-linecap', 'round');

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M9 1L1 9');
    path2.setAttribute('stroke', '#424242');
    path2.setAttribute('stroke-linecap', 'round');

    closeIcon.appendChild(path1);
    closeIcon.appendChild(path2);
    closeButton.appendChild(closeIcon);

    parent.appendChild(closeButton);
}
