Instruktioner för att använda mitt Elektronik-API:

1. Ställ dig i roten av projektet och skriv i terminalen npm install för att installera alla npm paket.
2. Du måste även köra npm install för strapi mappen. För att gå till mappen skriver du i terminalen cd [mappnamn].
3. När du har installerat klart måste du starta både strapi och express, båda måste vara igång samtidigt.
4. För att starta express ställer du dig i roten av projekten och skriver 'npm start'. Serveradressen för express är http://localhost:8008
5. Öppna sedan en ny terminal och ställ dig i mappen för strapi och skriv 'npm run develop' för att starta strapi. Serveradressen för strapi är http://localhost:1337/api

6. Jag har skapat fyra samlingar (computers, mobiles, audio-systems och televisons) för mitt API. För att kunna ta fram alla information om samtliga samlingar, använder du dessa endponts för express:
   /computers
   /mobiles
   /audio
   /televisions

För strapi:
/computers
/mobiles
/audio-systems
/televisions

7. Du kan även välja att se just en specifik produkt för respektive samling genom produktens id som endpoint, exempel på detta kan vara; http://localhost:8008/computers/3. Nu ser du endast datorn som har id:et 3.

CRUD operationer
För att kunna göra alla CRUD operationer ska du ha POSTMAN installerat på din dator. Har du inte det kan du installera det enkelt här: https://www.postman.com/downloads/

- GET

1. GET använder du för att hämta alla information med endpoints, exempel: localhost:8008/[samling] och localhost:8008/[samling]/[id]

- POST

1. Välj POST, sedan väljer du body, klicka i raw och välj JSON.
2. Genom post kan du skapa ett nytt objekt, genom JSON i format: { "data": { "name": "name", "description": "info", "maker": "maker", "price": price, "processor": "processor" }}
3. Det är viktigt att varje egenskap matchar, samt vilket datatyp som används, kolla därför alltid hur interfacet ser ut för respektive samling för att skicka rätt objekt. Id sköts automatiskt och behövs därför inte skrivas.

- PUT

1. Du kan även uppdatera ett objekt ifall något inte stämmer.
2. Välj PUT och uppdatera adressfältet till det objekt du vill uppdatera. localhost:8008/[samling]/[id].
3. Enklast är ifall du kopierar objektet och klistar in, för att sedan ändra det du behöver ändra.

- DELETE

1. Du kan även radera ett objekt. Observera ifall du gör detta är objektet borta.
2. Du väljer DELETE och skriver vilket objekt du vill radera; localhost:8008/[samling]/[id]
