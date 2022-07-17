function SuggestionAccount(props){
    return (
        <div class="sugestao">
            <div class="usuario">
            <img src={props.img} alt="icon" />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.status}</div>
                </div>
            </div>

            <div class="seguir">{props.follow}</div>
        </div>
    );
}

const SuggestionJSX = [
    {img:"assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", status: "Segue você", follow: "Seguir"},
    {img:"assets/img/chibirdart.svg", name: "chibirdart", status: "Segue você", follow: "Seguir"},
    {img:"assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar", status: "Novo no Instagram", follow: "Seguir"},
    {img:"assets/img/adorable_animals.svg", name: "adorable_animals", status: "Segue você", follow: "Seguir"},
    {img:"assets/img/smallcutecats.svg", name: "smallcutecats", status: "Segue você", follow: "Seguir"},
];


function User(props){
    return (

        <div class="usuario">
        <img src={props.img} alt="icon" />
            <div class="texto">
                <div class="userSidebar"><strong>{props.username}</strong></div>
            </div>
        </div>
    )
}

function Sidebar(){
    return (
        <div class="sidebar">
            <div class="usuario"> 
                <User img="assets/img/catanacomics.svg" username="catanacomics"/>
                <div class="texto">
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    <p>Sugestões para você</p>
                    <p class="see-all">Ver tudo</p>
                </div>
                <div class="sugestao">
                    <div>{SuggestionJSX.map((item) => <SuggestionAccount img={item.img} name={item.name} status={item.status} follow={item.follow}/>)}</div>
                </div>
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • <br /> Termos • Localizações • Contas mais relevantes • Hashtags <br />• Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

export default Sidebar;