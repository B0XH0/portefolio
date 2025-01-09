
export function click(){
    const show = document.getElementById("show");
    const box = document.querySelector(".showtest");
    const close = document.getElementById("close");
    
    show.addEventListener('click', () => {
        box.style.display = 'block';
    });
    
    close.addEventListener('click', () => {
        box.style.display = 'none';
    });
};
