export function cursor(){
const curseur = document.querySelector('.curseur');
const curseurCercle = document.querySelector('.cercle');
const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    requestAnimationFrame(() => {

        curseur.style.left = `${mouseX}px`;
        curseur.style.top = `${mouseY}px`;
    });
};

const hoverElements = document.querySelectorAll('.hovera');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        curseur.style.border = '2px solid #d8d340';
        curseurCercle.style.backgroundColor = '#d8d340';
    });

    element.addEventListener('mouseleave', () => {
        curseur.style.border = '';
        curseurCercle.style.backgroundColor = '';
    });
});

document.addEventListener('mousemove', moveCursor);
}