export const FunctionMultiMenuOut = () => {
    const uiMenuEasingSub = document.querySelectorAll(`.ui-menu-easing-sub`);
    uiMenuEasingSub.forEach(item => {
        (item as HTMLElement).style.transform = 'translateX(100%)';
        (item as HTMLElement).style.transition = 'transform 0s ease';
    });

    const uiMenuSpecSub = document.querySelectorAll(`.ui-menu-spec-sub`);
    uiMenuSpecSub.forEach(item => {
        (item as HTMLElement).style.transform = 'translateX(100%)';
        (item as HTMLElement).style.transition = 'transform 0s ease';
    });
}
