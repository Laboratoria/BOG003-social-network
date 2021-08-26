export const templateRegister = () => {
  const register = `
    <section id="register">
      <header>
        <img src="img/MobileRabbit.png" alt="rabbit" id="img-rabbit">
        <a href="#/LandingPage"><img src="img/Logo.png" alt="logo" id="logo"></a>
      </header>
      <h2 class="background-title">Register</h2>
      <input type="text" class="input-register" placeholder="name">
      <input type="email" class="input-register" placeholder="email">
      <input type="email" class="input-register" placeholder="check email">
      <input type="password" class="input-register" placeholder="password">
      <input type="password" class="input-register" placeholder="check password">
      <button type="button" class="btn-p"> <a href="#/">Sign Up</a></button>
      <button type="button" class="btn-p" id="btn-g">
        <img src="img/logo_google.png" alt="" id="logo-google">
        <a href="#/">Sign Up</a>
      </button>
      <button type="button" class="btn-s"> <a href="#/Loguin">Loguin</a></button>
   </section>`
  return register
}
