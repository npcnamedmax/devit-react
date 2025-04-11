const getOffset = (side, element) => {
    switch (side) {
        case 'top':
            return element.getBoundingClientRect().top;
        case 'bottom':
            return element.getBoundingClientRect().bottom;
        case 'left':
            return element.getBoundingClientRect().left;
        case 'right':
            return element.getBoundingClientRect().right;
    }
};
export { getOffset };
