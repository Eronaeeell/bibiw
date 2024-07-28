onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  
    const clickSign = document.querySelector('.click-sign');
  
    document.querySelectorAll('.flower').forEach(flower => {
      flower.addEventListener('click', () => {
        alert("I am sorry bibiw\nplease do call me ya and give some update\nI won't eat before you call me");
        clickSign.style.display = 'none';
      });
    });
  };
  