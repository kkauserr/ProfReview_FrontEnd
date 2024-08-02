function transition() {
    const welcomePage = document.querySelector('.welcome-page');
    welcomePage.classList.add('fade-out');

    setTimeout(() => {
        window.location.href = 'SearchPage.html';
    }, 1000);
}
