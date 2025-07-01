export async function copyIP() {
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.textContent;

    try {
        await navigator.clipboard.writeText('play.meowmere.site');
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        btn.textContent = 'Error!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }
}