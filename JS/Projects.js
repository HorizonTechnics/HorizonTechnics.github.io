document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItem');
    const itemList = document.getElementById('itemList');
  
    addItemBtn.addEventListener('click', function() {
      const newItemText = itemInput.value.trim();
      if (newItemText !== '') {
        const li = document.createElement('li');
        li.textContent = newItemText;
        itemList.appendChild(li);
        itemInput.value = '';
      }
    });
  
    itemList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.parentNode.removeChild(event.target);
      }
    });
  });