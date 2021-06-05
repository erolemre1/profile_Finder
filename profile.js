
class Profile {
    constructor(){
        this.clientid ="";
        this.clientSecret ="";

    }


    async getProfile (first){

       

        const profile = await profileResponse.json();


        return {
            profile  
        }

    }
}