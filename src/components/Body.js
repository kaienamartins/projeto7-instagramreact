import Sidebar from "./Sidebar";

function Story(props){
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} alt="icon"/>
      </div>
      <div class="usuario">{props.user}</div>
    </div>
  );
}

const StoryJSX = [
  {img:"assets/img/9gag.svg" , user: "9gag"},
  {img:"assets/img/meowed.svg", user: "meowed"},
  {img:"assets/img/barked.svg", user: "barked"},
  {img:"assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
  {img:"assets/img/wawawicomics.svg", user:"wawawicomics"},
  {img:"assets/img/respondeai.svg", user:"respondeai"},
  {img:"assets/img/filomoderna.svg", user: "filomoderna"},
  {img:"assets/img/memeriagourmet.svg", user:"memeriagourmet"},
];

function UserTop(props){
  return(
    <div class="usuario">
      <img src={props.image} alt="icon"/>
    </div>
  );
}

const postOneUserJSX = [
  {image:"assets/img/meowed.svg"},
];

const postTwoUserJSX = [
  {image: "assets/img/barked.svg"}
];

function Action(props){
  return(
    <div class="acoes">
      <ion-icon name={props.actionicon}></ion-icon>
    </div>
  );
}

const actionJSX = [
  {actionicon:"ellipsis-horizontal"},
];

function Content(props){
  return(
    <img src={props.contentpic} alt="post"/>
  );
}

const ContentOneJSX = [
  {contentpic:"assets/img/gato-telefone.svg"},
];

const contentTwoJSX = [
  {contentpic:"assets/img/dog.svg"},
];


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

const bookmark = [
  {bookmark:"bookmark-outline"}
];

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
        {StoryJSX.map((item) => <Story img={item.img} user={item.user}/>
          )}
          <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
        <div class="posts">
          <div class="post">
            <div class="topo">
              <div class="usuario">
                {postOneUserJSX.map((item) => <UserTop image={item.image}/>)}meowed
              </div>
              <div class="acoes">
                {actionJSX.map((item) => <Action actionicon={item.actionicon}/>)}
              </div>
            </div>
  
            <div class="conteudo">
              {ContentOneJSX.map((item) => <Content contentpic={item.contentpic}/>)} 
            </div>
  
            <div class="fundo">
              <div class="acoes">
                <div>
                  <BottomActions heart="heart-outline" chatbubble="chatbubble-outline" plane="paper-plane-outline"/>
                </div>
                <div>
                  {bookmark.map((item) => <Bookmark bookmark={item.bookmark}/>)}
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
                {postTwoUserJSX.map((item) => <UserTop image={item.image}/>)}barked
              </div>
              <div class="acoes">
                {actionJSX.map((item) => <Action actionicon={item.actionicon}/>)}
              </div>
            </div>
  
            <div class="conteudo">
              {contentTwoJSX.map((item) => <Content contentpic={item.contentpic}/>)}
            </div>
  
            <div class="fundo">
              <div class="acoes">
                <div>
                  <BottomActions heart="heart-outline" chatbubble="chatbubble-outline" plane="paper-plane-outline"/>
                </div>
                <div>
                  {bookmark.map((item) => <Bookmark bookmark={item.bookmark}/>)}
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