window.addEventListener("load", function () {
  let progressBars = document.querySelectorAll("progress");
  let buttonsWrappers = document.querySelectorAll(`.buttons-wrapper`);
  let levelTitles = document.querySelectorAll(`.achievement-level-title`);
  let achievementContainers = document.querySelectorAll(
    `.achievement-container`
  );
  let icons = document.querySelectorAll(`.icon-element`);
  progressBars.forEach((pbar) => {
    if (this.localStorage.getItem(pbar.id)) {
      pbar.value = this.localStorage.getItem(pbar.id);
    }
  });
  buttonsWrappers.forEach((bWrapper) => {
    bWrapper.querySelectorAll("*").forEach((button) => {
      if (this.localStorage.getItem(button.id)) {
        button.setAttribute("disabled", true);
      }
    });
  });

  levelTitles.forEach((level) => {
    if (this.localStorage.getItem(level.id)) {
      level.classList.remove("is-disabled");
      level.innerHTML = `Level ${this.localStorage.getItem(level.id)}`;
    }
  });

  icons.forEach((icon => {
    if (this.localStorage.getItem(icon.id)) {
        icon.classList.remove("is-disabled");
      }
  }));

/*   icons.achievementContainers.forEach((achiev) => {
    if (this.localStorage.getItem(achiev.id)) {
      achiev.querySelector();
    }
  }); */
});
