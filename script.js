const descriptions = [
    ["Smart Home Automation System", "Develop an intelligent home automation system that integrates IoT devices, sensors, and voice recognition technology. Users can control lighting, temperature, security, and other household appliances through a centralized mobile app or voice commands."],
  
    ["Virtual Fitness Coach", "Create a virtual fitness coach application that utilizes computer vision to analyze users' workout form and provides real-time feedback. The app can generate personalized workout plans, track progress, and offer virtual coaching sessions to help users achieve their fitness goals."],
  
    ["Blockchain-Based Supply Chain Management", "Implement a decentralized and transparent supply chain management system using blockchain technology. This project aims to enhance traceability, reduce fraud, and optimize logistics by leveraging smart contracts and distributed ledger technology."],
  
    ["Augmented Reality Museum Guide", "Develop an augmented reality (AR) application for museums that enhances the visitor experience. Users can use their smartphones or AR glasses to access additional information, 3D models, and interactive exhibits as they explore the museum."],
  
    ["Personal Finance Assistant", "Build a comprehensive personal finance assistant that helps users manage their budgets, track expenses, and set financial goals. The application could provide insights into spending patterns, offer investment advice, and support cryptocurrency portfolio tracking."],
  
    ["AI-Powered Language Learning Platform", "Create an innovative language learning platform that leverages artificial intelligence to personalize lessons based on individual learning styles. The system can include speech recognition, natural language processing, and adaptive learning algorithms to enhance language acquisition."],
  
    ["Community Health Monitoring System", "Design a community health monitoring system that collects and analyzes health data from wearable devices, such as smartwatches and fitness trackers. The platform could provide early warnings for potential health issues, encourage preventive measures, and offer valuable insights to healthcare providers."],
  
    ["Virtual Reality Mental Health Therapy", "Develop a virtual reality (VR) application for mental health therapy and relaxation. Users can immerse themselves in calming environments, participate in guided meditation, and engage in therapeutic exercises to reduce stress and anxiety."],
  
    ["Eco-Friendly Transportation App", "Build a mobile application that promotes eco-friendly transportation options, such as carpooling, bike-sharing, and electric vehicle rentals. The app can provide real-time information on available services, emission savings, and incentives for choosing sustainable transportation."],
  
    ["Smart Agriculture Monitoring System", "Create an intelligent agriculture monitoring system that utilizes sensors, drones, and satellite imagery to optimize crop management. The platform can offer insights into soil health, crop growth, and pest detection, helping farmers make data-driven decisions for better yields and sustainability."]
  ];  

function addCards() {

    for (let i = 0; i < 10; i++) {

        const projects = document.getElementsByClassName('projects')

        const card = document.createElement('div')
        card.className = 'card'
        const title = document.createElement('p')
        title.className = 'title'
        const text = document.createTextNode(descriptions[i][0])
        title.appendChild(text)

        const para = document.createElement('p')
        const paraText = document.createTextNode(descriptions[i][1])
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