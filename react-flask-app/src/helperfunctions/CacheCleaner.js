import React from 'react';

const CacheCleaner = (cacheToRemove) => {

    if (cacheToRemove == 'all'){

    localStorage.clear();   
}
else {
    for (const items of cacheToRemove) {
    console.log(items)
    localStorage.removeItem(items)
}
}



}

export default CacheCleaner