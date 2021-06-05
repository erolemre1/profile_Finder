class UI {

    constructor(){
        this.profilContainer=
        document.querySelector("#profileContainer");
        this.alert = document.querySelector("#alert");
    }


    showProfile(profile){
        this.profilContainer.innerHTML= `
        
        <div class="card card-body">
<div class="row">
<div class="col-md-3>


        </div>
        <div class="col-md-9 despriction>
        <img src="${profile.picture.large}">
        <h4> Contact </h4>

        <ul class="list-group">
        <li class="list-group-item">
   Name : ${profile.name.first} ${profile.name.last} 
        </li>
        <li class="list-group-item">
       Country : ${profile.location.country} <br>
     
            </li>
            <li class="list-group-item">
            Gender : ${profile.gender} 
          
                 </li>
            <li class="list-group-item">
            Mail : ${profile.email} 
                 </li>
                 <li class="list-group-item">
                 Phone Number : ${profile.phone} 
                      </li>
                      <li class="list-group-item">
                      Address =  City :  ${profile.location.city}, <br>  State : ${profile.location.state} <br> Street  : ${profile.location.street.name} ${profile.location.street.number}, <br> Post Code : ${profile.location.postcode}
                           </li>

        </ul>

        </div>
        </div>
        </div>



        
        `;
    
    }

}

