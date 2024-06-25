function addSimpleProgressAchievementValue(event, item) {
  const currentAchiev = document.querySelector(
    `#${item.parentNode.parentNode.id}`
  );
  let progressBar = document.querySelector(`#${currentAchiev.id} progress`);
  progressBar.value += 1;
  if (progressBar.value >= progressBar.max) {
    progressBar.value = 0;
    updateAchievementLevel(currentAchiev);
    updateAchievementIcon(currentAchiev);
  }
  localStorage.setItem(progressBar.id, progressBar.value);
}

function addMultipleButtonProgressAchievementValue(event, item) {
  const currentAchiev = document.querySelector(
    `#${item.parentNode.parentNode.id}`
  );
  let currentButton = document.querySelector(`#${item.id}`);
  let buttonWrapper = document.querySelector(
    `#${currentAchiev.id} .buttons-wrapper`
  );
  let progressBar = document.querySelector(`#${currentAchiev.id} progress`);
  currentButton.setAttribute("disabled", true);
  localStorage.setItem(
    currentButton.id,
    currentButton.getAttribute("disabled")
  );
  progressBar.value += 1;
  if (progressBar.value >= progressBar.max) {
    progressBar.value = 0;
    buttonWrapper.querySelectorAll("*").forEach((button) => {
      button.removeAttribute("disabled");
      localStorage.removeItem(button.id);
    });
    updateAchievementLevel(currentAchiev);
    updateAchievementIcon(currentAchiev);
  }
  localStorage.setItem(progressBar.id, progressBar.value);
}

function updateAchievementLevel(currentAchiev) {
  let levelTitle = document.querySelector(
    `#${currentAchiev.id} .achievement-level-title`
  );
  let levelValue = !this.localStorage.getItem(levelTitle.id)
    ? 0
    : this.localStorage.getItem(levelTitle.id);
  levelValue++;
  levelTitle.innerHTML = `Level ${levelValue}`;
  levelTitle.classList.remove("is-disabled");
  this.localStorage.setItem(levelTitle.id, levelValue);
}

function updateAchievementIcon(currentAchiev) {
  let icon = document.querySelector(`#${currentAchiev.id} i`);
  icon.classList.remove("is-disabled");
  this.localStorage.setItem(icon.id, true);
}
