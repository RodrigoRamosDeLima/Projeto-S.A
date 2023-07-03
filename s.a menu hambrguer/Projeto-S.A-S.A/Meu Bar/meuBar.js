
let inpDisplay = document.getElementById("display")


function Pesquisar(){
    
    let inpSpirits = document.getElementById("spirits").value 

    let drinks = ""

    switch (inpSpirits){

        case "bourbonWhisky":
        drinks = '<a href="oldfashioned.html">Old Fashioned</a><br><a href="whiskysour.html">Whisky Sour</a>'
        break;
       
        case "cachaca":
        drinks = '<a href="caipirinha.html">Caipirinha</a><br><a href="raboDeGalo.html">Rabo de Galo</a>'
        break

        case "campari":
        drinks = '<a href="negroni.html">Negroni</a>'
        break

        case "fernet":
        drinks = '<a href="hankyPanky.html">Hanky Panky</a>'
        break 

        case "gin":
        drinks = '<a href="ginTonica.html">Gin Tônica</a><br><a href="negroni.html">Negroni</a><br><a href="dryMartini.html">Dry Martini</a><br><a href="hankyPanky.html">Hanky Panky</a>'
        break

        case "rum":
        drinks = '<a href="cubaLibre.html">Cuba Libre</a><br><a href="maiTai.html">Mai Tai</a><br><a href="mojito.html">Mojito</a>'    
        break

        case "ryeWhisky":
        drinks = '<a href="sazerac.html">Sazerac</a><br><a href="oldfashioned.html">Old Fashioned</a><br><a href="whiskysour.html">Whisky Sour</a>'
        break

        case "tequila":
        drinks = '<a href="margarita.html">Margarita</a>'    
        break

        case "vermouthDry":
        drinks = '<a href="dryMartini.html">Dry Martini</a><br><a href="negroni.html">Negroni</a>'
        break

        case "vermouthRosso":
        drinks = '<a href="negroni.html">Negroni</a><br><a href="raboDeGalo.html">Rabo de Galo</a>'    
        break

        case "vodka":
        drinks = '<a href="bloodyMary.html">Bloody Mary</a><br><a href="moscowMule.html">Moscow Mule</a><br><a href="whiteRussian.html">White Russian</a>'    
        break
    }
inpDisplay.innerHTML = drinks    

}