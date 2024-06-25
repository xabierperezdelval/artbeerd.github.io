function addSimpleProgressAchievementValue(event, item){
    const currentAchiev = document.querySelector(`#${item.parentNode.parentNode.id}`);
    let progressBar = document.querySelector(`#${currentAchiev.id} progress`);
    progressBar.value += 1;
    if (progressBar.value >= progressBar.max) {
        updateAchievementLevel(currentAchiev);
    }
}

function addMultipleButtonProgressAchievementValue(event, item){
    const currentAchiev = document.querySelector(`#${item.parentNode.parentNode.id}`);
    let currentButton = document.querySelector(`#${item.id}`);
    currentButton.setAttribute('disabled', true);
    let progressBar = document.querySelector(`#${currentAchiev.id} progress`);
    progressBar.value += 1;
    if (progressBar.value >= progressBar.max) {
        updateAchievementLevel(currentAchiev);
    }
}

function updateAchievementLevel(currentAchiev) {
    let progressBar = document.querySelector(`#${currentAchiev.id} progress`);
    let levelTitle = document.querySelector(`#${currentAchiev.id} .achievement-level-title`);
    let icon = document.querySelector(`#${currentAchiev.id} i`);
    progressBar.value = 0;
    levelTitle.innerHTML = "Level 1";
    levelTitle.classList.remove('is-disabled');
    icon.classList.remove('is-disabled');
}