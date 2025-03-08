const productContainers = [...document.querySelectorAll('.more-container')];
const nxtBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    nxtBtn[i].addEventListener('click', () => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
        item.scrollLeft -= containerWidth;
    });
});