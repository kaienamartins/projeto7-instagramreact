import Sidebar from "./Sidebar";
import Posts from "./Posts";

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
        <Posts/>
      </div>
      <Sidebar/>
    </div>
    );
}

export default Body;