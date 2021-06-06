const profile = new Profile();

const ui = new UI();

const searchProfile = document.querySelector("#searchProfile");
const loadimage = document.querySelector("#loading");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  ui.clear();

  const inf = searchProfile.value;
  console.log(inf);

  if (inf !== "") {
    profile.getProfile(inf).then((res) => {
      if (searchProfile.value.length < 4) {
        loadimage.style.display = "block";
        setTimeout(() => {
          ui.showAlert(inf);
        }, 1500);
        setTimeout(() => {
          loadimage.style.display = "none";
        }, 1500);
      }
      if (searchProfile.value.length >= 4) {
        setTimeout(() => {
          ui.showProfile(res.profile.results[0]);
        }, 1500);
      }
      if (searchProfile.value.length >= 4) {
        loadimage.style.display = "block";
        setTimeout(() => {
          ui.showAlert2(inf);
        }, 1500);
        setTimeout(() => {
          loadimage.style.display = "none";
        }, 1500);
      }
    });
  }
});
