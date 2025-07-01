insertContent('home')
highlightMe('home')
function insertContent(id) {
    const placeholder = document.getElementById('content-placeholder');
    if (placeholder) {
        switch (id) {
            case 'home':
                placeholder.innerHTML = `
                    <div class="map-address">
                    <div>
                    <h1 class="large-subtitle">Promotion et valorisation de l'environnement dans le bassin du Congo</h1>
                    <p class="p-medium"><i>Promotion ${"and"} preservation of the environment ${"in"} the Congo Basin</i></p>
                    </div>
                    <p>Le bassin du Congo est le deuxième plus grand bassin fluvial au monde après l'Amazonie, abritant une diversité remarquable d'espèces de biodiversité. Il s'agit de l'habitat d'une part importante de la forêt tropicale, couvrant une vaste zone partagée par 10 pays d'Afrique centrale. Selon certaines études, ces forêts abritent également un patrimoine génétique impressionnant d'espèces végétales et animales La région a connu une effervescence de créations d'aires protégées dans les années 1990, comptant aujourd'hui 206 réserves occupant 799 000 kilomètres carrés, soit 14,8 % de ses terres et 5 % de la zone économique exclusive marine des pays d'Afrique centrale . Malgré ces efforts, la région est confrontée à une déforestation accélérée et à des conflits liés aux différents usages de la forêt, mettant en péril la biodiversité et la durabilité des ressources naturelles</p>
                    
                    <div>
                    <h1 class="large-subtitle">Projets de développement durable pour l'intégration socio-économique dans la région des Grands Lacs</h1>
                    <p class="p-medium"><i>Sustainable development projects ${"for"} socio-economic integration ${"in"} the Great Lakes region</i></p>
                    </div>
                    <p>La région des Grands Lacs est confrontée à des défis socio-économiques importants, mais des projets de développement durable visent à favoriser son intégration socio-économique. Ces projets sont essentiels pour concilier la protection de l'environnement et les enjeux de développement économique dans la région. Ils visent à garantir des solutions durables sur les plans économique et environnemental. En effet, des actions sont nécessaires pour aider les pays de la région à poursuivre un développement vert, résilient et inclusif, leur permettant de conserver leurs ressources naturelles tout en soutenant les moyens de subsistance et en favorisant la diversification économique La population de la région des Grands Lacs, qui compte plus de 250 millions d'habitants, dépend fortement des ressources naturelles pour sa subsistance, ce qui souligne l'importance cruciale de ces projets de développement durable pour assurer la durabilité des ressources et la survie de la biodiversité de la région</p>
                    </div>
                `;
                break;
            case 'donate':
                placeholder.innerHTML = `
                <div class="donate">
                    <p class="p-medium">Faire un don</p>
                    <h1 class="large-subtitle">Y a plus de joie à donner qu'a recevoir</h1>
                    <p class="p-medium desc">There ${'is'} more joy ${'in'} giving than in receiving</p>
                    <div class="separate"></div>
                    <div class="bank-informations">
                        <div class="left">
                            <div class="input-labeled">
                                <label>INTITULE DE COMPTE</label>
                                <b>FONDATION ARBRE DE VIE</b>
                            </div>
                            <div class="input-labeled">
                                <label>NUMERO DE COMPTE</label>
                                <b>00017-25300-07316030001-90</b>
                            </div>
                            <div class="input-labeled">
                                <label>ANCIEN FORMAT</label>
                                <b>1231-0731603-00-37 / USD</b>
                            </div>
                            <div class="input-labeled">
                                <label>DEVISE</label>
                                <b>DOLLAR AMERICAIN</b>
                            </div>    
                            <div class="input-labeled">
                                <label>BANQUE</label>
                                <b>Trust Merchant Bank S.A</b>
                            </div>  
                            <div class="input-labeled">
                                <label>SWIFT</label>
                                <b>TRMSCD3L</b>
                            </div> 
                            <div class="input-labeled">
                                <label>ADRESSE</label>
                                <b>26 Avenue Lumumba. Kalemie , Congo RD</b>
                            </div>    
                            <div class="input-labeled">
                                <label>MAIL</label>
                                <b>tmb@tmb.cd</b>
                            </div>                                                                              
                        </div>
                        <div class="right">
                            <div class="input-labeled">
                            <label>ACCOUNT NAME</label>
                            <b>FONDATION ARBRE DE VIE</b>
                            </div>
                            <div class="input-labeled">
                                <label>ACCOUNT NUMBER</label>
                                <b>00017-25300-07316030001-90</b>
                            </div>
                            <div class="input-labeled">
                                <label>OLD FORMAT</label>
                                <b>1231-0731603-00-37 / USD</b>
                            </div>
                            <div class="input-labeled">
                                <label>CURRENCY</label>
                                <b>US DOLLAR</b>
                            </div>    
                            <div class="input-labeled">
                                <label>BANK NAME</label>
                                <b>Trust Merchant Bank S.A</b>
                            </div>  
                            <div class="input-labeled">
                                <label>SWIFT CODE</label>
                                <b>TRMSCD3L</b>
                            </div> 
                            <div class="input-labeled">
                                <label>ADDRESS</label>
                                <b>26 Avenue Lumumba. Kalemie , Congo RD</b>
                            </div>    
                            <div class="input-labeled">
                                <label>MAIL</label>
                                <b>tmb@tmb.cd</b>
                            </div>                          
                        </div>
                    </div>
                </div>
                `;
                break;
            case 'contact':
                placeholder.innerHTML = `<form class="contact-us-form" action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="016130b3-769f-4102-bf29-2540a90d6a8a"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Pour la Fondation Arbre de Vie"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success?title=Nous%20avons%20re%C3%A7u%20votre%20message&desc=Notre%20%C3%A9quipe%20vous%20r%C3%A9pondra%20dans%20les%2024%20heures"
                />
                <div class="input-labeled">
                <label>Nom et prénom</label>
                <input placeholder="Nom et prénom" type="text" name="name" required />
                </div>
                <div class="input-labeled">
                <label>Adresse mail</label>
                <input placeholder="Adresse mail" type="email" name="email" required />
                </div>
                <div class="input-labeled">
                <label>Message</label>
                <textarea placeholder="Message" name="message" required></textarea>
                </div>
                <div class="h-captcha" data-captcha="true"></div>
                <button type="submit">Submit Form</button>
              </form>`;
                break;
            case 'docs':
                placeholder.innerHTML = `<div id="pv-meetings">
                <div class="single-pv">
                    <div class="card">
                        <div class="pdf-preview">
                            <iframe src="../assets/docs/acte notarie.pdf" width="100%" height="100%"></iframe>
                        </div>
                        <button class="open-button" onclick="openPDF('../assets/docs/acte notarie.pdf')">Ouvrir</button>
                    </div>
                    <p class="single-pv-subtitle">Acte Notaire</p>
                </div>
                <div class="single-pv">
                    <div class="card">
                        <div class="pdf-preview">
                            <iframe src="../assets/docs/carte d'electeur.pdf" width="100%" height="100%"></iframe>
                        </div>
                        <button class="open-button" onclick="openPDF('../assets/docs/carte d'electeur.pdf')">Ouvrir</button>
                    </div>
                    <p class="single-pv-subtitle">Carte d'electeur</p>
                </div>
                <div class="single-pv">
                    <div class="card">
                        <div class="pdf-preview">
                            <iframe src="../assets/docs/Sans titre-3.pdf" width="100%" height="100%"></iframe>
                        </div>
                        <button class="open-button" onclick="openPDF('../assets/docs/Sans titre-3.pdf')">Ouvrir</button>
                    </div>
                    <p class="single-pv-subtitle">Convention de développement</p>
                </div>  
                <div class="single-pv">
                    <div class="card">
                        <div class="pdf-preview">
                            <iframe src="../assets/docs/province kivu.pdf" width="100%" height="100%"></iframe>
                        </div>
                        <button class="open-button" onclick="openPDF('../assets/docs/province kivu.pdf')">Ouvrir</button>
                    </div>
                    <p class="single-pv-subtitle">Autorisation de fonctionnement</p>
                </div> 
                <div class="single-pv">
                <div class="card">
                    <div class="pdf-preview">
                        <iframe src="../assets/docs/STATUTS Fondation Arbre de Vie.pdf" width="100%" height="100%"></iframe>
                    </div>
                    <button class="open-button" onclick="openPDF('../assets/docs/STATUTS Fondation Arbre de Vie.pdf')">Ouvrir</button>
                </div>
                <p class="single-pv-subtitle">STATUS</p>
                </div>  
                <div class="single-pv">
                    <div class="card">
                        <div class="pdf-preview">
                            <iframe src="../assets/docs/F92 FAV (1).jpg" width="100%" height="100%"></iframe>
                        </div>
                        <button class="open-button" onclick="openPDF('../assets/docs/F92 FAV (1).jpg')">Ouvrir</button>
                    </div>
                    <p class="single-pv-subtitle">F92</p>
                </div>    
                <div class="single-pv">
                    <div class="card">
                        <div class="pdf-preview">
                            <iframe src="../assets/docs/PARTNERSHIP-AND-CONSULTANCY-CONTRACT-EN.docx" width="100%" height="100%"></iframe>
                        </div>
                        <button class="open-button" onclick="openPDF('../assets/docs/PARTNERSHIP-AND-CONSULTANCY-CONTRACT-EN.docx')">Ouvrir</button>
                    </div>
                    <p class="single-pv-subtitle">Partnership Contract</p>
                </div>                  
            </div>`;
                break;
            case 'address':
                placeholder.innerHTML = `<div class="map-address">
                <p class="large-subtitle">
                    Burundi, 19, Avenue Muha, Kinanira II, Bujumbura-Mairie
                </p>
                <iframe id="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.806912413956!2d29.359626011177085!3d-3.39724844156427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c1832f9b0227cb%3A0xddd4b8c0a485e7f1!2sAve%20de%20Muha%2C%20Bujumbura%2C%20Burundi!5e0!3m2!1sen!2sus!4v1708531691203!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                                           
                </div>`;
                break;

        }
        highlightMe(id)
    }
}

function highlightMe(id) {
    for (var idOf of ['home', 'contact', 'donate', 'address', 'docs']) {
        document.getElementById(idOf).style.textDecoration = "none"
    }
    document.getElementById(id).style.textDecoration = "underline"
}

function openPDF(path) {
    window.open(path, '_blank');
}
