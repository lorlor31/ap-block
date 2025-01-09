document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne tous les éléments du bloc
    const hoverBlocks = document.querySelectorAll('.hover-text-block');

    hoverBlocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            alert('Texte survolé dans le front-end !');
        });

        block.addEventListener('click', () => {
            alert('Clic sur le texte dans le front-end !');
        });
    });
});
