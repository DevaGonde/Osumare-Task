
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('span');

        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight;

            faqItems.forEach(i => {
                i.querySelector('.faq-answer').style.maxHeight = null;
                i.querySelector('.faq-question span').classList.remove('open');
            });

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.add('open');
            }
        });
    });

    let currentCard = 0;
    const cards = document.querySelectorAll('.pharma-card');
    const totalCards = cards.length;

    document.getElementById('left-btn').addEventListener('click', () => {
        cards[currentCard].style.display = 'none';
        currentCard = (currentCard - 1 + totalCards) % totalCards;
        cards[currentCard].style.display = 'flex';
    });

    document.getElementById('right-btn').addEventListener('click', () => {
        cards[currentCard].style.display = 'none';
        currentCard = (currentCard + 1) % totalCards;
        cards[currentCard].style.display = 'flex';
    });


});