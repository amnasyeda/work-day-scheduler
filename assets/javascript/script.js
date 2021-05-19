
class TimeblockObj {
    constructor(hour, todo) {
      this.hour = hour;
      this.todo = todo;
    }
  }

  window.onload = function() {
    const currentTimeblocks = getCurrentTimeblocks();
    const currentTime = moment();

    displayCurrentDate(currentTime);
  displayTimeblockRows(currentTime);

  document.querySelector('.container')
    .addEventListener('click', function(event) {
      containerClicked(event, currentTimeblocks);
    });
  setTimeblockText(currentTimeblocks);
};

function getCurrentTimeblocks() {
  const currentTimeblocks = localStorage.getItem('timeblockObjects');
  return currentTimeblocks ? JSON.parse(currentTimeblocks) : [];
}

