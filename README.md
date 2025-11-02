# Procesverslag



## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Kaa Leung Ho

  #### Je startniveau:
  Rood

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="images/homepagina.png" width="375px" alt="Homepagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="images/productdetailpagina.png" width="375px" alt="Product Detailpagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Tijdens het testen van webtoegankelijkheid is de laptop in voice-overmodus gezet om de content toegankelijkheid te evalueren.
  Hieronder vindt je de lijst met interessante observaties en bevindingen die uit de test naar voren kwamen.

  1. Content
  Er is geen sprake van beeldspraak, idiomen en ingewikkelde metaforen, maar wel veel slogans zoals 'Gear up' en 'Just do it'.

  2. Global code
  Er is een duidelijke titel voor ieder webpagina op de website.
  Ieder pagina is in het Engels geschreven, maar met <html lang=nl-NL..> vertaald naar Nederlands.

  3. Keyboard
  Visible focus = gele uitlijning om de geselecteerde elementen
  Keyboard focus = de toetsenbordnavigatie volgt eerst de volgorde van links naar rechts, terwijl bij het selecteren van elementen de navigatie vervolgens van boven naar beneden verloopt.

  4. Mobile and Touch
  Rotation: 90graden naar links en rechts werken prima, maar 180graden blijkt niet te werken (wat normaal is op de meeste telefoons).
  Buttons: Goede CTA's;
  - Goede ontwerp van Fitt's Law: Knoppen zijn groot en dichtbij genoeg zodat ze eenvoudig te klikken zijn, vooral op mobiele apparaten.
  - Goede ontwerp van Hick's Law: Eén duidelijke primaire knop werkt beter dan meerdere concurrerende acties.
  - Goede ontwerp bij Proximity & Visual Hierarchy: De elementen die dicht bij elkaar staan worden als samenhangend gezien; afstand creëert scheiding en hiërarchie.

  5. Headings
  De headings van de website staan niet op chronologische volgorde.

  6. Lists
  Dropdownmenu's maken gebruiken van de <ul> en <li> tags.

  7. Images
  De visuele elementen hebben geen alt attribute, maar er wordt aria-label gebruikt voor in de plaats.

  8. Media (Video and Audio)
  Er is sprake van bewegend beeld in de hero-sectie van de landingspagina. Deze mediabestanden worden automatisch afgespeeld als een soort gif-bestand.
  Er is de mogelijkheid om erop te klikken, en een uitgebreide video met een horizontale scrolbar kom tevoorschijn. Deze videobestand kan worden gepauzeerd.

  9. Controls
  De website maakt onderscheid tussen knoppen en links. Knoppen worden aangegeven met <button>, en links worden aangegeven met <a>.
  De skiplink is boven de Jordan logo (linksbovenin het scherm).

  10. Appearance
  Er is geen sprake van light en dark mode, en high constrast mode.

  11. Animation
  Er is sprake van animatie maar het is heen subtiel. De animatie wordt ingezet om de gebruiker visuele feedback te geven bij het selecteren van een element.

  12. Color contrast
  Hoe groter het lettertype en hoe breder de lijn, hoe beter leesbaar het is met een lager contrast.

  Kleine kopjes zoals <h3> zijn wat minder goed leesbaar omdat het vóór een afbeelding staat, zonder een donkere overlapping.
  Titels en koppen bij secties zijn wel goed leesbaar. 
  
  

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="images/breakdownschets1" width="375px" alt="breakdown van de hele pagina">

  <img src="images/breakdownschets2" width="375px" alt="breakdown van de hele pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het opzetten van HTML ging vrij redelijk eenvoudig. De breakdownschetsen helpen mij om beter de indeling van content te begrijpen.

  ### Agenda voor meeting
  samen met je groepje opstellen

  Kaa Leung Ho
  - Breakdownschets nakijken
  - Html structuur controleren of het matcht met breakdownschets
  - Groenlicht krijgen voor css

  Kaj-Benjamin Sitanala
  - Breakdownschets controleren voor goedkeuring
  - html op orde zetten zonder id’s en classes
  - vragen over inline (nesting) dingen die niet netjes zijn

  Lisa Mandemakers
  - Hoe ga ik de slider op de homepage aanpakken?
  - Breakdownschets nagaan
  - De divs / classes op sommige plekken, correct gebruikt of niet?
  - Kijken of mijn Html semantisch correct is
  - Css  opzet checken
  - Ik wil minder gaan nesten en onnodige divs gbruiken, hoe pak ik dit aan

  Robin Yildiz
  - HTML controleren
  - CSS controleren

  ### Verslag van meeting
  SVG > JPEG of andere vormen van afbeeldingen, want het neemt minder bytes in beslag.
  Daarnaast zijn SVGs eenvoudiger aan te passen bij Light en Dark Mode.

  Aria-Label is belangrijk bij Text to Speech (Toegankelijkheid)
  Span ALLEEN GEBRUIKEN bij repeated links.

  Bij carousel altijd list items gebruiken.
  
</details>


## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  In deze week begonnen wij met CSS. Ik had altijd al een beetje moeite met dit onderdeel. Ik heb daarom veel met flexbox en grid lopen     oefenen, zodat ik deze onderdelen eenvoudiger kan implementeren in mijn website.


  ### Agenda voor meeting
  samen met je groepje opstellen

  Kaa Leung Ho
  - De verbeterde html van de 1e webpagina nakijken;
  - Flexbox in de eerste en tweede navigatie controleren;
  - Hero-section controleren;
  - Hamburger menu: css of javascript?
  - Vraag bij uitklapbare dropdown menu :hover - hoe uitwerken in javascript?

  Kaj-Benjamin Sitanala
   - Geen specifieke vragen
   - HTML controleren
   - CSS controleren

  Lisa Mandemakers
  - Hoe pak ik de grid layout aan want er zit een hele kleine schaduw in
  - Waarom werkt een scrollstate wel op <img> en niet op <li>
  - Hoe kan ik mijn ticker, smooth maken
  - Mag je bij onzichtbare tekst: display none doen of visibility hidden?

  Robin Yildiz
  - Niets specifieks


  ### Verslag van meeting
  Hamburgermenu kan je zowel met css als met Javascript gedaan worden - eigen voorkeur.

- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  <img src="images/wcag1.jpeg" width="375px" alt="breakdown van de hele pagina">
  <img src="images/wcag2.jpeg" width="375px" alt="breakdown van de hele pagina">
  <img src="images/wcag3.jpeg" width="375px" alt="breakdown van de hele pagina">
  <img src="images/wcag4.jpeg" width="375px" alt="breakdown van de hele pagina">
  <img src="images/wcag5.jpeg" width="375px" alt="breakdown van de hele pagina">

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
