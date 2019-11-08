const filter = (pics, filterWord) => {
    if (filterWord === 'mens') {
        return pics.map((item) => {
            if (item[2].mens === true) {
                return item;
            } 
        });
    } else if (filterWord === 'womens') {
        return pics.map((item) => {
            if (item[2].womens === true) {
                return item;
            };
        });
    } else if (filterWord === 'childrens') {
        return pics.map((item) => {
            if (item[2].childrens === true) {
                return item;
            };
        });
    }
}

export default filter;