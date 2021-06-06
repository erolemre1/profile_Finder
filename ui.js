class UI {
  constructor() {
    this.profilContainer = document.querySelector("#profileContainer");
    this.alert = document.querySelector("#alert");
    this.alert2 = document.querySelector("#alert2");

    this.searchProfile = document.querySelector("#searchProfile");
  }

  showProfile(profile) {
    this.profilContainer.innerHTML = `
        
        <div class="card card-body">
<div class="row">
<div class="col-md-3>


        </div>
        <div class=" despriction>
        <center>
        <img class="imgm" src="${profile.picture.large}"></center>
        <h4> Contact </h4>

        <ul class="list-group">
        <li class="list-group-item">
        <span> Username :</span>  ${searchProfile.value}
       
              </li>
        <li class="list-group-item">

        <span>  Name :</span> ${profile.name.first} ${profile.name.last} 
        </li>
        <li class="list-group-item">
      <span> Country :</span>  ${profile.location.country}
     
            </li>
          
            <li class="list-group-item">
            <span>   Gender :</span>  ${profile.gender} 
          
                 </li>
              
                 </li>
                 <li class="list-group-item">
                 <span>    Age :</span> ${profile.dob.age} 
               
                      </li>
            <li class="list-group-item">
            <span>      Mail :</span>  <a href="mailto:${profile.email}" >${profile.email}  </a>
                 </li>
                 <li class="list-group-item">
                 <span>  Phone Number :</span>  <a href="tel:+${profile.phone}">${profile.phone}</a>
                      </li>
                      <li class="list-group-item">
                      <span>     Address</span> =  <br> 
                      <a href="http://maps.google.com/?q=1200 ${profile.location.country} ${profile.location.city}
                       ${profile.location.street.name}  ${profile.location.street.number} " target="_blank"> <span> City :</span>  ${profile.location.city}, <br> <span> State : </span>${profile.location.state} <br> <span>Street  : </span>${profile.location.street.name} ${profile.location.street.number}, <br> <span>Post Code :</span> ${profile.location.postcode}</a>

                           </li>
        </ul>

        </div>
        </div>
        </div>
`;
  }

  showAlert(inf) {
    this.alert.innerHTML = `${inf} is not found!`;
    setTimeout(() => {
      this.alert.innerHTML = "";
    }, 1500);
  }

  showAlert2(inf) {
    this.alert2.innerHTML = `${inf}  found.`;
    setTimeout(() => {
      this.alert2.innerHTML = "";
    }, 1500);
  }
  clear() {
    this.profilContainer.innerHTML = "";
    this.alert.innerHTML = "";
  }
}
