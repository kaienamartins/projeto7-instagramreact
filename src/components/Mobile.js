import Navbar from "./Navbar";
function Icons(props){
  return (
    <div class="fundo-mobile">
      <ion-icon name={props.home}></ion-icon>
      <ion-icon name={props.search}></ion-icon>
      <ion-icon name={props.circle}></ion-icon>
      <ion-icon name={props.heart}></ion-icon>
      <ion-icon name={props.person}></ion-icon>
    </div>
  );
}

function Mobile(){
  return (
    <div class="fundo-mobile">
      <Navbar/>
      <Icons home="home" search="search-outline" circle="add-circle-outline"
      heart="heart-outline" person="person-outline"/>
    </div>
    
  );
}

export default Mobile;