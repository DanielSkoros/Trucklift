// Get the modal

// Get the button that opens the modal
const modalSections = document.querySelector('.services');

// Get the <span> element that closes the modal

const displayModal = (id) => {
    const modal = document.querySelector(`#${id}modal`);
    modal.style.display = "block";
    const span = document.querySelector('.close');
    modal.addEventListener('click', (event) => {
        if(event.target.tagName === 'SPAN')
        modal.style.display = "none";
    });
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};


// When the user clicks on the button, open the modal
modalSections.addEventListener('click', (event) => {
    let clickTarget = event.target;
    while(clickTarget.id === '' || clickTarget.id === undefined) {
        clickTarget = clickTarget.parentNode;
    }
    displayModal(clickTarget.id);
});



// When the user clicks anywhere outside of the modal, close it


