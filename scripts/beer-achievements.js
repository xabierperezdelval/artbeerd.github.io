function addSimpleProgressAchievementValue(event, item){
    const currentAchiev = document.querySelector(`#${item.parentNode.parentNode.id}`);
    let progressBar = document.querySelector(`#${currentAchiev.id} progress`);
    progressBar.value += 1;
}

function addMultipleButtonProgressAchievementValue(event, item){
    const currentAchiev = document.querySelector(`#${item.parentNode.parentNode.id}`);
    let currentButton = document.querySelector(`#${item.id}`);
    currentButton.setAttribute('disabled', true);
    let progressBar = document.querySelector(`#${currentAchiev.id} progress`);
    progressBar.value += 1;
}