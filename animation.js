    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll('.animate-div');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target); 
                }
            });
        });

        elements.forEach(element => {
            element.style.animationPlayState = 'paused'; 
            observer.observe(element);
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
const elements = document.querySelectorAll('.zoom-out');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

elements.forEach(element => {
    element.style.animationPlayState = 'paused'; 
    observer.observe(element);
});
});

