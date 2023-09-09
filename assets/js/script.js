document.addEventListener('DOMContentLoaded', function () {
    const sec = document.querySelector('.sec');
    const toggle = document.querySelector('.toggle');

    toggle.addEventListener('click', function () {
        sec.classList.toggle('dark');
    });
});
