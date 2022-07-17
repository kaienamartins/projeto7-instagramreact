import Sidebar from "./Sidebar";

function Story(props){
  return (
    <div>
      <div class="imagem">
        <img src={props.img} alt="icon"/>
      </div>
      <div class="usuario">{props.user}</div>
    </div>
  );
}

function UserTop(props){
  return(
    <div class="usuario">
      <img src={props.image} alt="icon"/>
    </div>
  );
}

function Action(props){
  return(
    <div class="acoes">
      <ion-icon name={props.actionicon}></ion-icon>
    </div>
  );
}

function Content(props){
  return(
    <img src={props.contentpic} alt="post"/>
  );
}

function BottomActions(props){
  return (
    <div> 
      <ion-icon name={props.heart}></ion-icon>
      <ion-icon name={props.chatbubble}></ion-icon>
      <ion-icon name={props.plane}></ion-icon>
    </div>
  );
}

function Bookmark(props){
  return (
    <ion-icon name={props.bookmark}></ion-icon>
  );
}

function Likes(props){
  return (
    <div>
      <img src={props.imagelike} alt="profile" />
    </div>
  );
}

function Body(){
    return (
      <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          <div class="story">
            <Story user="9gag" img="assets/img/9gag.svg"/>
          </div>
  
          <div class="story">
            <Story user="meowed" img="assets/img/meowed.svg"/>
          </div>
  
          <div class="story">
            <Story user="barked" img="assets/img/barked.svg"/>
          </div>
  
          <div class="story">
            <Story user="nathanwpylestrangeplanet" img="assets/img/nathanwpylestrangeplanet.svg"/>
          </div>
  
          <div class="story">
            <Story user="wawawicomics" img="assets/img/wawawicomics.svg"/>
          </div>
          
          <div class="story">
            <Story user="respondeai" img="assets/img/respondeai.svg"/>
          </div>
  
          <div class="story">
            <Story user="filomoderna" img="assets/img/filomoderna.svg"/>
          </div>
  
          <div class="story">
            <Story user="memeriagourmet" img="assets/img/memeriagourmet.svg"/>
          </div>

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
        <div class="posts">
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <UserTop image="assets/img/meowed.svg"/>
                meowed
              </div>
              <div class="acoes">
                <Action actionicon="ellipsis-horizontal"/>
              </div>
            </div>
  
            <div class="conteudo">
              <Content contentpic="assets/img/gato-telefone.svg"/>
            </div>
  
            <div class="fundo">
              <div class="acoes">
                <div>
                  <BottomActions heart="heart-outline" chatbubble="chatbubble-outline" plane="paper-plane-outline"/>
                </div>
                <div>
                  <Bookmark bookmark="bookmark-outline"/>
                </div>
              </div>
  
              <div class="curtidas">
                <Likes imagelike="assets/img/respondeai.svg"/>
                <div class="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
  
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <UserTop image="assets/img/barked.svg"/>
                barked
              </div>
              <div class="acoes">
                <Action actionicon="ellipsis-horizontal"/>
              </div>
            </div>
  
            <div class="conteudo">
              <Content contentpic="assets/img/dog.svg"/>
            </div>
  
            <div class="fundo">
              <div class="acoes">
                <div>
                  <BottomActions heart="heart-outline" chatbubble="chatbubble-outline" plane="paper-plane-outline"/>
                </div>
                <div>
                  <Bookmark bookmark="bookmark-outline"/>
                </div>
              </div>
  
              <div class="curtidas">
                <Likes imagelike="assets/img/adorable_animals.svg"/>
                <div class="texto">
                  Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar/>
    </div>
    );
}

export default Body;