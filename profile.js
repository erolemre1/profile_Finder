class Profile {
  constructor() {
    this.clientid = "";
    this.clientSecret = "";
  }

  async getProfile(username) {
    const profileResponse = await fetch(
      `APİ_KEY=${username}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
