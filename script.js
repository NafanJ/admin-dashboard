function addCards() {

    for (let i = 0; i < 10; i++) {

        const projects = document.getElementsByClassName('projects')

        const card = document.createElement('div')
        card.className = 'card'
        const title = document.createElement('p')
        title.className = 'title'
        const text = document.createTextNode('Article Title')
        title.appendChild(text)

        const para = document.createElement('p')
        const paraText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...')
        para.appendChild(paraText)

        const buttons = document.createElement('div')
        buttons.className = 'card-buttons'
        const favourite = document.createElement('IMG')
        favourite.className = 'svg bell-icon'
        favourite.src = './assets/favourite.svg'
        const eye = document.createElement('IMG')
        eye.className = 'svg bell-icon'
        eye.src = './assets/eye.svg'
        const fork = document.createElement('IMG')
        fork.className = 'svg bell-icon'
        fork.src = './assets/source-fork.svg'

        buttons.appendChild(favourite)
        buttons.appendChild(eye)
        buttons.appendChild(fork)

        card.appendChild(title)
        card.appendChild(para)
        card.appendChild(buttons)

        projects[0].appendChild(card)
    }
}

addCards();