const addToFooter = () => {
    console.log('hello script 2');
    const footerElem = document.getElementById('footer-id');
    footerElem.innerText = `Hello Footer ${new Date().getFullYear()} `;
  }

  addToFooter();