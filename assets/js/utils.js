function copyToClipboard(text) {
    const input = document.createElement('textarea');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    drawCopiedText();
    document.body.removeChild(input);

    function drawCopiedText() {
        const copiedText = document.createElement('div');
        copiedText.classList.add('copied-text');
        copiedText.innerText = 'Copied!';

        copiedText.style.position = 'fixed';
        copiedText.style.bottom = '100px';
        copiedText.style.left = '50%';
        copiedText.style.transform = 'translateX(-45%)';

        document.body.appendChild(copiedText);

        setTimeout(() => {
            copiedText.remove();
        }, 1000);
    }
}

