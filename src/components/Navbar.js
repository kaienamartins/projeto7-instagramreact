function LogoInstagram(props){
  return(
    <div class="logo">
      <ion-icon name={props.logo}></ion-icon>
      <div class={props.bar}></div>
      <img src={props.img} alt="logo" />
    </div>
  );
}

function Search(props){
  return(
    <div class="pesquisa">
      <input type="text" placeholder={props.search} />
    </div>
  );
}

function Icons(props){
  return (
    <div class="icones">
        <ion-icon name={props.plane}></ion-icon>
        <ion-icon name={props.compass}></ion-icon>
        <ion-icon name={props.heart}></ion-icon>
        <ion-icon name={props.person}></ion-icon>
    </div>
  );
}

function Navbar(){
    return (
      <div class="navbar">
        <div class="container">
          <div class="logo">
            <LogoInstagram logo="logo-instagram" bar="separador" img="assets/img/logo.png" />
          </div>
  
          <div class="logo-mobile">
            <LogoInstagram logo="logo-instagram"/>
          </div>
  
          <div class="instagram-mobile">
            <LogoInstagram img="assets/img/logo.png" />
          </div>
    
          <div class="pesquisa">
            <Search search="Pesquisar"/>
          </div>
    
          <div class="icones">
            <Icons plane="paper-plane-outline" compass="compass-outline" heart="heart-outline" person="person-outline"/>
          </div>
  
          <div class="icones-mobile">
              <Icons plane="paper-plane-outline"/>
          </div>
        </div>
      </div>
    );
}

export default Navbar;