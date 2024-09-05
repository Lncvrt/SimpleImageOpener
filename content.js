let isCtrlShiftHeld = false;

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey) {
    isCtrlShiftHeld = true;
  }
});

document.addEventListener('keyup', function(event) {
  if (!event.ctrlKey || !event.shiftKey) {
    isCtrlShiftHeld = false;
    document.body.style.cursor = '';
  }
});

document.addEventListener('mousemove', function(event) {
  if (event.target.tagName.toLowerCase() === 'img') {
    if (isCtrlShiftHeld) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = '';
    }
  }
});

document.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'img' && isCtrlShiftHeld) {
    const img = event.target;
    if (img.complete && img.naturalHeight !== 0) {
      const imageUrl = img.src;
      window.open(imageUrl, '_blank', 'width=800,height=600');
    } else {
      console.log("Image not fully loaded.");
    }
  }
});