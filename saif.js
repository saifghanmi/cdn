const cssFile = document.createElement('link');
cssFile.rel = 'stylesheet';
cssFile.href = 'file.css';
document.head.appendChild(cssFile);




  const urlParams = new URLSearchParams(window.location.search);
  const darkmode54 = urlParams.get('darkmode54');

  if (darkmode54 === '1') {
    // enable your code here
    
    console.log("hello")

    
  } else {
    // disable your code here
    
    console.log("7obbi")

    
  }
