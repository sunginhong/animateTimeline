export default function TitleLabel(parent: HTMLElement ,TitleLabelText: string, TitleDescriptionText: string): void {
    const TitleLabelRect = document.createElement('div');
    TitleLabelRect.className = 'title-label-rect';
    TitleLabelRect.style.display = 'flex';
    TitleLabelRect.style.flexDirection = 'column';
    TitleLabelRect.style.alignItems = 'flex-start';
    TitleLabelRect.style.alignSelf = 'stretch';
    TitleLabelRect.style.gap = '6px';

    const TitleLabel = document.createElement('p');
    TitleLabel.className = 'title-label';
    TitleLabel.textContent = TitleLabelText;
    TitleLabel.style.display = 'flex';
    TitleLabel.style.color = '#424242';
    TitleLabel.style.fontFeatureSettings = 'liga off, clig off';
    TitleLabel.style.fontFamily = "SF Pro Display";
    TitleLabel.style.fontSize = '16px';
    TitleLabel.style.fontStyle = 'normal';
    TitleLabel.style.fontWeight = '600';    
    TitleLabel.style.lineHeight = '16px'; /* 100% */
    TitleLabel.style.margin = '0';
    TitleLabelRect.appendChild(TitleLabel);

    const TitleDescription = document.createElement('p');
    TitleDescription.className = 'title-description';
    TitleDescription.textContent = TitleDescriptionText;
    TitleDescription.style.display = 'flex';
    TitleDescription.style.color = '#7A7A7A';
    TitleDescription.style.fontFeatureSettings = 'liga off, clig off';
    TitleDescription.style.fontFamily = "Pretendard Variable";
    TitleDescription.style.whiteSpace = 'pre-wrap'; 
    TitleDescription.style.fontSize = '8px';
    TitleDescription.style.fontStyle = 'normal';
    TitleDescription.style.fontWeight = '600';
    TitleDescription.style.lineHeight = '12px'; /* 150% */
    TitleDescription.style.margin = '0';
    TitleLabelRect.appendChild(TitleDescription);
    parent.appendChild(TitleLabelRect);
}
