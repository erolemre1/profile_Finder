

const profile = new Profile();
const ui =new UI ();

const searchProfile = document.querySelector("#searchProfile");

const btn = document.querySelector(".btn");


btn.addEventListener("click",function () {


const inf = searchProfile.value;

if(inf !== ""){
profile.getProfile(inf).then(res => { 
    if(res.profile.length===0){

    }else {
     ui.showProfile(res.profile.results[0]);
     console.log(res)
    }
})
}

});




