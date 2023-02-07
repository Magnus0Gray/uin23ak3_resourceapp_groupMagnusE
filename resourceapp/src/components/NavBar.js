import data from './resources.js'

export default function NavBar() {

    function genNav() {
        console.log(data)
        let navHTML = ""

        navHTML = mapButtons();

        document.querySelector("#navBar").innerHTML = navHTML
        console.log(navHTML)

        replaceContent(0, null, true)
    }

    function mapButtons(){
        let navHTML = ""
        let classToUse

        data.map((titler, index) => {
            if (index === 0)
                classToUse = "categoryButtonSelected"
            else
                classToUse = "categoryButton"
            navHTML +=

                `
            <button onclick="replaceContent(${index}, this, false)" class=${classToUse}>
                <h3>${titler.category}</h3>
            </button>`

            return navHTML
        })
    }

    function replaceContent(buttonID, buttonRef, isInit) {

        if (isInit === false) {

            //console.log(buttonRef)
            let clearselected, i

            clearselected = document.getElementsByClassName("categoryButtonSelected")
            for (i = 0; i < clearselected.length; ++i)
                clearselected[i].setAttribute("class", "categoryButton")
            // console.log(data[buttonID])

            buttonRef.setAttribute("class", "categoryButtonSelected")
        }

        //console.log(buttonStyleRef)

        let contentHTML = ""
        contentHTML += `<h2>${data[buttonID].category}</h2>`
        contentHTML += `<span class="articleText">${data[buttonID].text}</span>`
        contentHTML += `<section class=sources><ul></ul></section>`

        document.querySelector("#mainArticles").innerHTML = contentHTML


        let listHTML = ""
        data[buttonID].sources.map(kilder => listHTML +=
            `
          <li>
            <a href="${kilder.url}">
                ${kilder.title}
            </a>
          </li>`)

        document.querySelector("#mainArticles ul").innerHTML = listHTML
    }

    return <nav id="navBar" onLoad={genNav}></ nav>
}