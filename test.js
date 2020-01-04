const buildPages = (arrLength, limit = 2) => {
    let pages = [];
    for(let i = 0; i < arrLength; i += limit) {
      let end = (i + limit < arrLength) ? i + limit : arrLength;
      pages.push([i, end]);
    }
    return pages;
    // [[0,20],[20,40],[40,55]] - return value should look like this.
  }

  console.log(buildPages(6));