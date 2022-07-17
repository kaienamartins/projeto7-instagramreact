function SuggestionAccount(props){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userpic} alt="icon"/>
            </div>
        </div>
    );
}

function AccountInfo(props){
    return(
        <div class="texto">
            <div class="nome">{props.user}</div>
            <div class="razao">{props.status}</div>
        </div> 
    );
}

function Follow(props){
    return (
        <div class="seguir">{props.follow}</div>
    );
}


function Sidebar(){
    return (
        <div class="sidebar">
            <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="icon"/>
            <div class="texto">
                <strong>catanacomics</strong>
                Catana
            </div>
            </div>
  
            <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
    
            <div class="sugestao">
                <div class="usuario">
                    <SuggestionAccount userpic="assets/img/bad.vibes.memes.svg"/>
                    <div class="texto">
                        <AccountInfo user="bad.vibes.memes" status="Segue você"/>
                    </div>
                </div>
                <Follow follow="seguir"/>
            </div>
    
            <div class="sugestao">
                <div class="usuario">
                    <SuggestionAccount userpic="assets/img/chibirdart.svg"/>
                    <div class="texto">
                        <AccountInfo user="chibirdart" status="Segue você"/>
                    </div>
                </div>
    
                <Follow follow="seguir"/>
            </div>
    
            <div class="sugestao">
                <div class="usuario">
                    <SuggestionAccount userpic="assets/img/razoesparaacreditar.svg"/>
                    <div class="texto">
                    <AccountInfo user="razoesparaacreditar" status="Novo no Instagram"/>
                    </div>
                </div>
    
                <Follow follow="seguir"/>
            </div>
    
            <div class="sugestao">
                <div class="usuario">
                    <SuggestionAccount userpic="assets/img/adorable_animals.svg"/>
                    <div class="texto">
                        <AccountInfo user="adorable_animals" status="Segue você"/>
                    </div>
                </div>
    
                <Follow follow="seguir"/>
            </div>
    
            <div class="sugestao">
                <div class="usuario">
                    <SuggestionAccount userpic="assets/img/smallcutecats.svg"/>
                    <div class="texto">
                        <AccountInfo user="smallcutecats" status="Segue você"/>
                    </div>
                </div>
    
                <Follow follow="seguir"/>
            </div>
            </div>
  
            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
  
            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

export default Sidebar;