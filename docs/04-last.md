
# Frontend

Nel front-end risiede l'interfaccia della web application come le immagini i bottoni e tutti gli altri elementi grafici e le interazioni con l'utente finale. Tecnologie usate:
- <b>HTML</b>: linguaggio di markup utilizzato per definire la struttura del documento HTML
- <b>CSS</b>: cascade language utilizzato per definire regole, stile e behaviors di elementi htm
- <b>JS & TS</b>: linguaggio di programmazione usati per l'iterazione con l'utente e la application logic

Utilizzare il DOM può essere ripetitivo e difficile da gestire, per semplificare ciò basta utilizzare un framework Javascript. In questo modo è possibile evitare di gestire il DOM direttamente:

- React.js: JS & TS, più di una libreria, minimale dal design
- Angular: TS, piattaforma completa, non molto flessibile
- Vue.js: TS & TS, progressive framework, sistema a plugin
- Svelte.js: compila il javascript, no virtual DOM, minimalista e flessibile
- Solid.js: compila JS, no virtual DOM, alte performance
- Alpine.js: usa JS con l'HTML, estende l'html, leggero

Tutti i framework di FE, Javascript e Typescript non hanno molte features che hanno molti linguaggi di programmazione, come l'abilità di divedere il codice in diversi file ed organizzare il codice. Per risolvere questo problema bisogna utilizzare un <b>bundler</b> che organizza un set di file sorgenti in un singolo file:

- <b>Webpack</b>: long-term caching mecanism, code splitting and lazy loading, handles the dependecies automatically
- <b>Rollup</b>: aiuta l'ottimizzazione di applicazioni, supporta tree-shaking e scope-hoisting, offre più elasticità
    - Tree-shaking is the process of analyzing the code files that are required to run your application and then including only code that is actually used by your application.
- <b>Snowpack</b>: builda le dipendenze una volta sola, alte performance, supporta lazy loading (tecnica usata sulle pagine web per velocizzarne il caricamento. Questa soluzione si basa su un principio: ottenere il contenuto più pesante come le immagini e i video quando servono. Senza appesantire i tempi necessari per mostrare la prima parte della pagina)

CSS come linguaggio ha gli stessi problemi di JS. È difficile organizzare il codice in file diversi ed a CSS mancano molte feature utili, per risolvere questi problemi possiamo usare un bundler, chiamati preprocessors:

- SASS: organizza il css in diversi file, migliora il CSS, logica condizionale
- Less: libreria js, non ha logica condizionale, offre funzioni già create
- Stylus: combinazione di SASS e Less, logica condizionale e postfix conditional, support all mixins.

I preprocessors CSS e JS sono anche utilizzati per sviluppare un set di stili, funzionalità e widget pronti per essere utilizzati in una web application. Questi sono chiamati framework CSS, sono di base un insieme di codici JS e CSS che risolvono problemi comuni e permettono di salvare molto tempo:

- Bootstrap: più popolare, fully-feature, mature and customizable
- Foundation: mobile first, generic style, email design and animations
- Bulma: aestethic design, easy to customize, no js
- Tailwind: atomic css, reusable components, no design

# Backend

Ogni computer che è connesso ad internet può inviare messaggi attraverso internet ad un altro computer:
    - <b>Client</b> il computer che invia un messaggio,
    - <b>Server</b> il computer che riceve un messaggio.

Tuttavia, il pc non può ricevere messaggi di default, bisogna che sia in grado di ricevere messaggi. La maggiorparte dei linguaggi di programmazione ha delle caratteristiche per fare diventare un computer un server e permettere di ricevere messaggi. Tra gli aspetti legati a reti di computer, vi sono anche le <b>porte socket</b>. Nonostante il supporto di molti linguaggi di programmazione, è difficile scrivere dei back-end da zero, di conseguenza si utilizzano dei framework.

I <b>packages</b>, sono di solito liberie per semplificare lo sviluppo che prendono il vantaggio di soluzioni già scelte, come performare calcoli matematici, connessioni a database o gestire l'autenticazione di utenti. Per installare questi packages si utilizzando dei package manager (`npm` per js, `maven` per java, `composer` per php ...). Un database aiuta a salvare e gestire i dati, solitamente è runnato in un computer diverso e bisogna effettuare dei setup nel backend per comunicare con quest'ultimo.

- <b>Mysql</b>: database relazione, singolo processo, made for high volumes of read;
- <b>PostgreSQL</b>: object relational db, multi process, for high volume I/O;
- <b>MongoDB</b>: JSON document db, distribuito, per dati non strutturati.

Una lista di diversi tipi di richieste permesse nel backend è chiamata API (Application Programming interface) e sono uno dei concetti più importanti nel BE. Questi permettono agli altri linguaggi di comunicare tra loro:

```
app.post("/orders", (request, response) => { 
    const order = new Order(request); 
    database.save(order);
    response.send("Order saved");
})

app.get("/orders", (request, response) => { 
    const orders = database.getOrders();
    response.json(orders);
})

app.delete("/orders/:id", (request, response) => {
    database.deleteOrder(request);
    response.send("Order deleted");
})
```

Per convenzione vengono chiamate REST (<b>REpresentational State Transfer</b>). In REST il tipo di richiesta ha un significato speciale: un' API che usa le REST naming convention è chiamata REST API, non è un protocollo ma una architettura.

## Infrastruttura

![alt text](images/iaas-paas-saas-diagram.png)

L'idea di base del cloud computing è il noleggio di molti di computer. Questo è anche noto come <b>IaaS</b> (Infrastructure as a Service). Dietro le quinte, queste aziende hanno un computer gigante e potente e all'interno del suo software sono in esecuzione molte Macchine virtuali (o vms). Tipicamente, questi sono gestiti da un hypervisor (suchash kvm o qemu) tramite alcuni strumenti (VMWare, Proxmox, Openstack). Quindi, per eseguire un'applicazione Web, basta una macchina virtuale da una società cloud per eseguire il nostro back-end ed un database (separato)

Con il cloud computing, è possibile configurare più VM che eseguono lo stesso software di back-end, quindi configurare una VM speciale davanti a queste denominata <b>Load Balancer</b> che ridistribuisce le richieste in modo uniforme tra le nostre macchine virtuali. Una volta terminato il periodo di traffico intenso, possiamo semplicemente spegnere alcune VM quando non ne abbiamo bisogno.

Abbiamo ancora un altro problema. Ora abbiamo molte macchine virtuali che dobbiamo creare e configurare e questo richiede molto tempo e fatica. Le società di cloud computing offrono un altro servizio chiamato PaaS (Platform as a Service). Questo ci consente di caricare il nostro codice di back-end e imposterà tutte le VM e i bilanciatori di carico per noi.

I backend vengono separati tra di loro per vere un bilanciamento del carico adeguato in base all'esigenza del singolo microservizio. Ogni microservizio non deve utilizzare lo stesso sistema di bilanciamento del carico, linguaggio di programmazione e database.

Quando un'azienda fornisce un backend e un'API che possono essere utilizzati da applicazioni esterne, questo viene chiamato <b>SaaS</b> (Software as a Service)

Cloud:
- SaaS: utente finale (Office365, Trello, SalesForce)
- PaaS: application developers (SAP cloud platform, google app engine, AWS elastic beanstalk..)
- IaaS: microsoft azure, google compute engine, AWS .

Al giorno d'oggi la maggior parte delle aziende utilizza il cloud computing per eseguire il back-end delle proprie applicazioni Web invece di acquistare e gestire i server fisici (Bare Metal).

Generalmente iniziamo il nostro back-end con un server e un database primario (alcuni database come MySQL, PostgreSQL e MongoDB che a volte sono chiamati Database Primari, perché sono i database principali utilizzati dalla nostra applicazione web) e poi inseriamo queste tecnologie aggiuntive se necessario. Se consentiamo ai nostri utenti di caricare immagini, un database primario non è adatto per archiviare tali dati, quindi potremmo utilizzare uno store BLOB come un comune servizio CDN per archiviare e caricare le immagini caricate dagli utenti.

Se nella nostra applicazione Web volessimo scaricare un po' di stress dal nostro database principale, aggiungeremo un servizio di cache, come Redis, per migliorare le prestazioni. Inoltre, se abbiamo bisogno di pianificare qualcosa o una coda di lavoro, useremmo RabbitMQ per pianificare alcune attività o messaggi.

<div style="page-break-after: always;"></div>

# Nodejs

Node.js è un runtime system open source multipiattaforma orientato agli eventi per l'esecuzione di codice JavaScript, costruito sul motore JavaScript V8 di Google Chrome. Molti dei suoi moduli base sono scritti in JavaScript, e gli sviluppatori possono scrivere nuovi moduli nello stesso linguaggio di programmazione, perfetto per applicazioni ad alta intensità di dati e in tempo reale. Node.js è un ambiente per eseguire Javascript al di fuori del browser e quindi al di fuori della sandbox del browser.

<table>
<tr>
    <th>Browser</th>
    <th>Node.js</th>
</tr>
<tr>
    <td>DOM</td>
    <td>No DOM</td>
</tr>
<tr>
    <td>Window</td>
    <td>Global</td>
</tr>
<tr>
    <td>Interactive app</td>
    <td>Server side apps</td>
</tr>
<tr>
    <td>No filesystem</td>
    <td>Filesystem</td>
</tr>
<tr>
    <td>Fragmentation</td>
    <td>Versioning</td>
</tr>
<tr>
    <td>ES6 Modules</td>
    <td>CommonJS</td>
</tr>
<tr>
    <td>Browser console</td>
    <td>OS terminal</td>
</tr>
</table>

Per runnare un codice JS: `node <filename>` sul terminale. Tutte le vanilla functions (funzioni di JS senza utilizzare alcuna libreria esterna) trovate sull'oggetto window sul web browser sono trovate nel progetto global. In Node.js ci sono diverse variabilio globali. Nel browser sappiamo che abbiammo accesso all'oggetto window e possiamo ottenere un sacco di cose utili da questo globale, ad esempio un querySelector o un fetch. Non c'è oggetto window in NodeJs. In Node.js esiste un vero concetto di variabili globali.

- `_dirname`: path della directory corrente
- `filename`: filename corrente
- `require`: funzione che usa i moduli
- `module`: informazioni riguardo il modulo current modules
- `process`: informazioni riguardo l'env, quando il programma è eseguito

Quando si esegue un'applicazione Node.js si esegue un file, ma l'applicazione può essere un insieme di file. Il primo file è comunemente noto come Entrypoint o File principale. Normalmente, il codice dell'applicazione gigante verrà suddiviso in moduli. Questi sono simili ai moduli JS e React vanilla ma la sintassi è diversa, perché Node.js usa CommonJs per caricare i moduli. Di di default, ogni file in node è un modulo!

Quindi per creare un nuovo modulo, devi creare un nuovo file vuoto.

Ad esempio, creare un nuovo file in cui definiremo alcune variabili, una privata (forse un token segreto) e una variabile pubblica che vogliamo esportare. Nelle variabili globali abbiamo il modulo `global` che stampa alcune informazioni sul modulo. C'è un oggetto chiamato `exports` che deﬁnisce cosa verrà esportato dal modulo. Quindi possiamo decidere cosa può essere “pubblico” e cosa non lo è.

Infine, possiamo importare il nuovo modulo con la funzione `require global`, usando la dot path syntax. Per eseguire codice node basta `node file.js`

```
//names.js file
// local
const SECRET = "token";
// public
const name = "Danilo";

module.exports = { name }

//myconsole.js

const trace = (message) => {
    console.log(message);
}
module.exports = trace

//app.js file

const names = require("./names.js");
const trace = require("./myconsole.js");
trace(names);

```

<b>TIP personale:</b> ricorda che per gestire le varie versioni di node puoi usare nvm!!

## Built-in modules

Node.js ha molti moduli built-in. Per caricare uno di questi devi usare il loro nome invece del path nella funzione `require`. 

### OS module
Può utilizzare molte informazioni riguardo il sistema operativo e più.

```
const os = require("os");

const user = os.userInfo();
console.log(user);

console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);

```

### Path modules

Il modulo permette di interagire con i path / filesystem dei sistemi operativi

```
const path = require("path");

console.log(path.sep) // platform specific separator

// joins sequence of path using os separator
const filePath = path.join("/path", "directoryName", "fine.txt");

const base = path.basename(filePath) // get basename

const absolute = path.resolve(_dirname, "contentdir", "file.txt"); // resolve to get absolute path

```

### FS module

Permettono di interagire con il filesystem del SO e può lavorare in modo sincrono ed asincrono.

Sincrono:

```
const {readFileSync, writeFileSync} = require("fs");
// same of const fs = require("fs");
// fs.readFileSync()

const first = readFileSync("./file.txt");
const second = readFileSync("./file2.txt");

console.log(first, second);

// concatenate two file into new one (or append)

writeFileSync(
    "./file3.txt", // path
    first + second, // content
    {   // options
        flag: "a" // append
    }
);

```
Asincrono:

```
readFile("./file.txt", "utf-8", (err, result) => {
    if (err){
        console.log(err);
        return;
    }
    const first = result;
    readFile("./file2.txt", "utf-8", (err, result) => {
        if (err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./file3.txt", first+second);
    });
});
```

Alcune operazioni possono prendere molto tempo per essere elaborate, bloccando altri task. L'idea di Node.js e le operazioni sincrone è quella di gestire la concorrenza in maniera asincrona. Vi sono anche le promises e i metodi async/await.

### HTTP

Permette di instanziare un server o client http.

```
const http = require("http");

// run a basic HTTP server, non vi è URL nella logica REST

const server = http.createServer((req, res) => {
    res.write("Response");
    res.end();
})

// listen to TCP port 8080
server.listen(8080)

// esempio di routing REST

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home page")
    }
    if (req.url === "/about"){
        res.end("About")
    }
    res.end("<h1>404</h1>");
})

```

## NPM

Node Package Manager (npm) è il node package manager di node.js, grazie al quale è possibile caricare e condividere il codice. I pacchetti sono moduli esterni con le loro dipendenze. Non vi è controllo qualità, è possibile trovare codice non funzionante o malware

Install locally the package and its dependencies

`npm <i | install> <package name>`

Install globally the package and its dependencies

`npm <i | install> -g <package name>`

Uninstall

`npm <u | uninstall> <package name>`

Initialize the manifest of the project (package.json che conserva informazioni importanti riguardo il progetto ed i packages)

`npm init [-y]`

### Package.json

File più importante che definisce alcune informazioni importanti riguardo al progetto:

- Nome, descrizione e versione del progetto
- Nome dell'autore
- Alcuni script che possono essere personalizzati
- Main del progetto
- Lista delle dipendenze e la loro versione
- Lista delle dependenze di sviluppo e la loro versione

Permettono di committare e deployare il progetto senza le dipendenze installate, può essere installate anche dopo la prima run. Quando un pacchetto viene installato (ad esempio localmente), nel progetto viene creata automaticamente una cartella denominata `node_modules` dove vengono installati i pacchetti. Infine, quando abbiamo bisogno di caricare il nome di un pacchetto (come bootstrap), è possibile usare solo il nome del pacchetto (`require(“bootstrap”)`). Questo meccanismo permette di differenziarsi da moduli personali e moduli di terze parti. Inoltre, un pacchetto può richiedere molte dipendenze e questa cartella potrebbe diventare davvero pesante in termini di spazio su disco. Quindi, quando il progetto è pronto per il commit e la distribuzione, è sufficiente caricare l'intero progetto senza la cartella `node_modules` e avviare l'installazione `npm` per installare tutte le dipendenze definite nel file `package.json` (quindi aggiungere `node_modules` nel proprio `.gitignore`).

## Events

In `Node.js`è possibile ascoltare alcuni eventi specifici e successivamente runnare callback sul trigger. È possibile definire eventi personalizzati. Per gestire ed utilizzare eventi è necessario usare dei moduli built.in . Per gestire questi eventi possiamo usare `EventEmitter` dai built-in module `events`.

```
const EventEmitter = require("events");

// custom event emitter
const customEmitter = new EventEmitter();

// listen specific event
customEmitter.on("response", (name, age) => {
    console.log("data received " + name + " " + age);
})

// can have multiple callbacks for the same event
customEmitter.on("response", () => {
    console.log("other logic")
});

// the order MATTER

// emit specific event

customEmitter.emit("response", "Mario", 35);

```

### Http

I moduli http creano un server che è un'istanza `EventEmitter` e ha i suoi eventi, come l'evento di richiesta che viene attivato quando un utente fa una richiesta al nostro server.

```
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
    res.end("Welcome");
});

server.listen(8080);
```

### Streams

Sono usati per leggere o scrivere in sequenza. Quando dobbiamo gestire e manipolare i dati in streaming, ad esempio il sorgente continuo o un file di grandi dimensioni, sono molto utili ed estendono la classe EventEmitter. Quattro tipi:

- <b>Writeable</b>: usati per scrivere dati sequenzialmente
- <b>Readable</b>: usati per leggere i dati sequenzialmente
- <b>Duplex</b>: usati per leggere e scrivere dati sequenzialmente
- <b>Transform</b>: i dati possono essere modificati quando scrivi o leggi

Sono utili e gestiscono anche grandi file da inviare in risposta in `http`:

```
const {createReadStream} = require("fs");
const stream = createReadStream("./bigfile");

stream.on("data", (result) => {
    //buffer size is 64kb, can be controlled with options
    console.log(result);
});

stream.on("error", (err) => {
    console.log(err);
});

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    const fileStream = fs.createReadStream("./bigfile", "utf-8");
        fileStream.on("open", () => {
            fileStream.pipe(res);
        });
        fileStream.on("error", (err) => {res.end(err)});
}).listen(8080);
```

# Express.js

È un framework di Node.js minimale e flessibile creato per sviluppare web app ed API in modo veloce e semplice. Express è costruito sul modulo http ma non è un modulo integrato ma al giorno d'oggi è uno standard per la creazione di applicazioni web:
- Rende molto più semplice la creazione di applicazioni Web con Node.js
- Utilizzato per app server, servizi API e microservizi
- Estremamente leggero, veloce e gratuito
- Controllo completo di richieste e risposte
- Il framework più popolare su Node.js
- Ottimo da utilizzare con framework lato client

Per quanto riguarda il modulo `http`, è necessario creare un'istanza dell'applicazione express che abbia lo stesso metodo listen per eseguire il server `http` su una porta speciﬁca:

```
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home page");
})

app.listen(8080, () => {
    console.log("Server listen on port 8080");
})
```

## App methods

- `get`: GET request management
- `post`: POST request management
- `put`: PUT request management
- `all`: to manage all type of request
- `use`: this is responsible for middleware

## Static files

Negli esempi precedenti restituiamo semplicemente una stringa, una stringa HTML o un singolo file al client quando questo fa una richiesta GET (per esempio alla root route). Nella realtà, un'applicazione web (frontend) ha molti file, come HTML, CSS, JS, immagini, ecc. file che sono difficili da gestire uno per uno. Inoltre, questi file non cambiano nel tempo ma solo se lo sviluppatore aggiornerà il codice frontend. Infatti, l'applicazione frontend può aggiornarsi autonomamente tramite javascript, quindi può modificare l'interfaccia utente e le informazioni con lo stesso codice senza generarlo dinamicamente. Pertanto, possiamo dire che, un tipico codice frontend e tutti i suoi asset sono file “statici”.

I file statici sono in genere file che il server non deve modificare o generare. Per definirlo utilizzeremo il middleware (lo vedremo più avanti). Express gestirà tutte le richieste a questi file statici (percorsi, ecc.).File static non significa che l'applicazione non è dinamica. Una web app è una browser abb, successivamente il Js gestirà gli aspetti dinamici dell'app dinamica. Se non hai bisogno di generare dinamicamente i tuoi i dati, allora basta usare un Server Side Framework.

```
// define a special folder of static file

// our client
app.use(express.static("./www"));

// * means everything
app.all("*", (req, res) => {
    res.status(404).send("<h>404</h1>");
})

app.listen(8080)
```

## API vs SSR

API:
- JSON
- Send data
- res.json()

SSR:
- template
- send template
- res.render()

L'architettura API è una delle più utilizzate nello sviluppo di un software di back-end. Con l'API tutti i dati verranno inviati in tipo `JSON` e quindi saranno compatibili con tutti gli ambienti. Un altro metodo è quello di generare dinamicamente un intero client ad ogni richiesta, come PHP con Laravel, utilizzando il rendering di Express con un motore di rendering. L'ultimo è uno dei più complicati e non molto utilizzato per lo sviluppo del back-end al giorno d'oggi.

## Route Params

A volte, il client vorrebbe accedere ad una specifica risorsa, o magari cancellarla o aggiornarla. Per fare ciò bisogna accedere ai <i>route parameters</i>. Per accedere a questi parametri bisogna usare la variabile request ed i suoi params attribute. Successivamente possiamo conoscere tutti i parametri che sono definiti nella url route. Nella url route puoi definire i nomi dei parametri con la sintassi `:paramName`

```
// not dynamic solution
app.get("/api/products/1", (req, res) => {
    res.json(products[0]);
})

// dynamic solution
app.get("api/products/:productID", (req, res) => {
    // params are all strings same of const req.params.productID
    const {productID} = req.params;
    res.json(products[Number(productID)]);
})

```

## Query params

In aggiunta, il client dovrebbe inviare più informazioni riguardo la risorsa. Per fare ciò, bisogna accedere ai query parameters (o URL parameters). Per accedere a questi parametri bisogna usare la variabile request e l'attributo query.  

```
app.get("/api/v1/search", (req, res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    if (search){
        sortedProducts = sortedProducts
            .filter((product)=> product.name.startsWith(search))
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length<1){
        res.status(200).json({success:true, data:[]})
    }
    res.status(200).json({success:true, data:sortedProducts});
})
```

## Middleware

Sono funzioni che esegue durante le richieste al server. Ogni middleware ha accesso agli oggetti di request e response. In express ogni cosa è un middleware. Un middleware sta tra la request e la response ha anche il riferimento al middleware `next` ed è necessario chiamarlo. È possibile usare infiniti middleware

```
const logger = (req, res, next) => {
    // log the request
    console.log(req.method, req.url);
    // then i can go to the next middleware
    next();
}

app.get("/", logger, (req, res) => {res.send("Home")});
app.get("/about", logger, (req, res) => {res.send("About")});

app.listen(8080)

```

### Utilizzo

I middleware sono un potente strumento all'interno del quale possiamo aggiungere alcuni comportamenti basati su percorsi e metodi, come la manipolazione o il controllo dei dati in input o l'autenticazione dell'utente. Per applicare un middleware a tutti i percorsi bisogna utilizzare `use` permette di aggiungere un middleware basato sulla invocazione della posizione a tutte le rotte e agli altri middleware. È possibile anche definire un path

```
app.use(logger);

// or can do also
app.use("/api", logger);
```

## Post

Per impostazione predefinita non è possibile accedere al body (payload) di una richiesta POST. È necessario impostare e utilizzare un middleware di express che analizzi il corpo della richiesta in qualcosa di leggibile, ad esempio JSON. Questo è il middleware urlencoded (il vecchio bodyParser) e il middleware json.

```
app.use(express.static("./www"))

app.use(express.urlencoded({extent:false}));
app.use(express.json());

app.post("/login", (req, res) => {
    const {email} = req.body;
    if (email){
        return res.status(200).send("Welcome back" + email);
    }

    return res.status(401).send("Email must be sent)
})

```
NOTA: The ﬂag extended : false needs to force the parsing with body-parser. This works also for PUT and DELETE methods.

## Router

Router consente agli sviluppatori di raggruppare le route di richiesta in base a una logica. Inoltre, vengono utilizzati in genere nel modello MVC. L'utilizzo dei router permette di organizzare i percorsi delle richieste in gruppi e categorie! In questo modo, puoi espandere il tuo back-end più facilmente. Inoltre puoi implementare i controller e i modelli MVC (sono middleware!)

```
//router.js

const express = require("express");

const router = express.Router();

router.get("/peoples" , (req, res) => { 
    res.send(peoples)
});

router.get("/peoples/:id", (req, res) => {
    res.send(peoples[req.params.id])
});
module.exports = router;

//app.js

const express = require("express")
const app = express()
const mainRouter = require("./router");

app.use(express.static("./www"));

//parse form data
app.use(express.urlencoded({extent:false}));

app.use(express.json());

//load router

app.use("/api", mainRouter);
```

# WS & Socket.io

Quando un utente naviga sul Web, il browser (client) invia determinate richieste tramite percorsi REST ("GET", "POST", ecc.) al server, che ospita il sito Web a cui si effettuano le richieste. Il server riceve le richieste e invia le informazioni come risposte al client, che riceve e restituisce le informazioni della risposta sulla pagina. Se hai bisogno di aggiornare alcune informazioni, devi fare più richieste al server in un intervallo di tempo. Questo approccio è chiamato <i>polling</i>. Le **WebSocket** sono diverse perché funzionano tenendo sempre aperta la connessione dal client al server. In questo modo, il server può inviare informazioni al client, anche in assenza di una richiesta esplicita da parte del cliente. I client possono comunque effettuare richieste `HTTP` al server come di consueto; tuttavia, la connessione WebSocket consente una comunicazione costante nel caso in cui vengano creati nuovi dati e quindi debbano essere renderizzati lato client.

Una connessione inizia con un **handshake HTTP** che richiede un aggiornamento per il protocollo, questo è chiamato *WebSocket Handshake request*. L'handshake inizia con una richiesta/risposta HTTP, consentendo ai server di gestire le connessioni HTTP e le connessioni WebSocket sulla stessa porta. Una volta stabilita la connessione, la comunicazione passa a un protocollo binario bidirezionale che non è conforme al protocollo HTTP. Oltre alle intestazioni di aggiornamento, il client invia un'intestazione `Sec-WebSocket-Key` contenente byte casuali con codifica `base64` e il server risponde con un hash della chiave nell'intestazione `Sec-WebSocket-Accept`. Ciò ha lo scopo di impedire a un proxy di memorizzazione nella cache di inviare nuovamente una conversazione WebSocket precedente e non fornisce alcuna autenticazione, privacy o integrità.

Una volta stabilita la connessione, il client e il server possono inviare dati WebSocket o frame di testo avanti e indietro in modalità full-duplex. I dati sono minimamente inquadrati, con una piccola intestazione seguita dal carico utile. Le trasmissioni `WebSocket` sono descritte come "messaggi", in cui un singolo messaggio può essere opzionalmente suddiviso su più frame di dati

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
    Origin: http://example.com


HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
    Sec-WebSocket-Protocol: chat
```

I `WebSocket` funzionano a livello di applicazione e possono funzionare senza un server specifico. In effetti, un server `WebSocket` può essere eseguito utilizzando un server HTTP esistente o autonomo. Per deﬁnire una connessione WebSocket devi deﬁnire un URL usando il protocollo `ws://`, invece di `http://`. Come HTTP, i WebSocket supportano la **crittografia SSL** e puoi specificarla utilizzando il protocollo `wss://`.

L'associazione immediata di alcuni gestori di eventi alla connessione consente di sapere quando la connessione è stata aperta, ha ricevuto messaggi in arrivo o si è verificato un errore.

```
var connection = new WebSocket('ws://html5rocks.websocket.org/echo')
// When the connection is open, send some data to the server
connection.onopen = function () {
    // Send the message ping to the server
    connection.send('Ping');
}

// log errors
connection.onerror = function (error) {
    console.log('WebSocket Error' + error);
}

// log messages from the server
connection.onmessage = function (e) {
    console.log('Server: ' + e.data);
}

```

`ws` è una libreria molto utilizzata per usare WebSockets in applicazioni Node.js per integrare WebSockets nelle applicazioni (da installare con npm)

```
// stand alone server

const ws = require('ws')
const connection = new ws.Server({port: 8080})

connection.on('connection', ws => {
    connection.on('message', message => {
        console.log(`Receuved message => ${message}`)
    });
    connection.send('Message from server');
})

// express server
const ws = require('ws')
const express = require('express');

const app = express();

// setup a headless websocket server
const wsServer = new ws.Server({noServer: true});
wsServer.on('connection', socket => {
    socket.on('message', message => console.log(message));
})

// 'server' is a vanilla Node.js HTTP server

server.on('upgrade', (req, socket, head) => {
    wsServer.handleUpgrade(req, socket, head, socket => {
        wsServer.emit('connection', socket, request);
    })
})

```

È un protocollo nuovo ma il suo utilzzo nelle **IoT** app sta crescendo. Tuttavia vi sono dei problemi con le ws:

- Non pensato per la comunicazione da server a server, forse è preferibile un socket UDP di basso livello
- Non pensato per la comunicazione da client a client (p2p), per questo c'è WebRTC!
- Se si utilizzano proxy, questi devono essere compatibili con WebSocket
- Il server deve supportare i WebSocket e il relativo handshake
- Il linguaggio backend deve supportare i WebSocket
- Il browser **DEVE** supportare i WebSocket (non tutti i browser supportano ws)

Quindi, vi è la necessita di  qualcosa che consenta lo sviluppo di una comunicazione full-duplex in tempo reale senza questi problemi!

## Socket.io

https://socket.io/docs/v4/

Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server. It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection.

Socket.io IS NOT a WebSocket implementation.

### Features
Here are the features provided by Socket.IO over plain WebSockets:

#### HTTP long-polling fallback
The connection will fall back to HTTP long-polling in case the WebSocket connection cannot be established. This feature was the #1 reason people used Socket.IO when the project was created more than ten years ago (!), as the browser support for WebSockets was still in its infancy. Even if most browsers now support WebSockets (more than 97%), it is still a great feature as we still receive reports from users that cannot establish a WebSocket connection because they are behind some misconfigured proxy.

#### Automatic reconnection
Under some particular conditions, the WebSocket connection between the server and the client can be interrupted with both sides being unaware of the broken state of the link. That's why Socket.IO includes a heartbeat mechanism, which periodically checks the status of the connection. And when the client eventually gets disconnected, it automatically reconnects with an exponential back-off delay, in order not to overwhelm the server.

#### Packet buffering
The packets are automatically buffered when the client is disconnected, and will be sent upon reconnection.

#### Broadcasting
#### Multiplexing

--

La base di codice di **Socket.io** è divisa in due livelli distinti:

- l'architettura di basso livello: **Engine.io**, il motore dentro **Socket.io**
- l'API di alto livello: **Socket.io** stesso

Engine.IO è responsabile di stabilire la connessione di basso livello tra il server e il client. Gestisce:

- Le varie connessioni (WebSocket o HTTP long polling)
- Il meccanismo di aggiornamento
- Il rilevamento della disconnessione

Per impostazione predefinita, il client stabilisce la connessione con il trasporto di long-polling HTTP. Sebbene WebSocket sia chiaramente il modo migliore per stabilire una comunicazione bidirezionale, l'esperienza ha dimostrato che non è sempre possibile stabilire una connessione WebSocket, a causa di proxy aziendali, firewall, ecc. 

To summarize, `Engine.IO` focuses on reliability and to upgrade, the client will:
- ensure its outgoing buffer is empty
- `put` the current transport in read-only mode
- try to establish a connection with the other transport
- if successful, close the first transport
The `Engine.IO` connection is considered as closed when:
- one HTTP request (either GET or POST) fails (for example, when the server is shutdown)
- the WebSocket connection is closed (for example, when the user closes the tab in its browser)
- `socket.disconnect()` is called on the server-side or on the client-side

There is also a heartbeat mechanism which checks that the connection between the server and the client is still up and running.

### Utilizzo

```
// stand alone server

const { Server } = require("socket.io");
const io = new Server({ /* options */ })

io.on("connection", (socket) => {
    // ...
});

io.listen(3000);

// with http server
const { createServer } = require("http");
const httpServer = createServer();
const io = new Server(httpServer, { /*options*/});

io.on("connection", (socket) => {
    // ....
})

```

```
// with express
const express = require("express)
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /*options*/});

io.on("connection", (socket) => {
    // ....
})

httpServer.listen(8080);

```


Una Socket è la classe fondamentale per interagire con il client. Eredita tutti i metodi di Node.js `EventEmitter`, come `emit`, `on`, `once` o `removeListener`.

```
// ogni nuova connessione è assegnata a 20 caratteri random

// server-side
io.on("connection", (socket) => {
    console.log(socket.id)
})

// client side
socket.on("connect", () => {
    console.log(socket.id)
});

// sulla creazione, la socket joina la stanza identificata dal proprio id che significa che puoi usare per messaggi privati

io.on("connection", socket => {
    socket.on("private message", (anotherSocketId, msg) => {
        socket.to(anotherSocketId).emit("private message", socket.id, msg);
    })
})

```

L'idea è quella di emettere ed elencare alcuni eventi che lo sviluppatore può definire. Ad esempio, nel client e nel server si potrebbe deﬁnire un evento chiamato “onMessage” e usarlo per scambiare messaggi, emettendo questo evento con un payload!

#### Broadcasting

Significa inviare messaggi a tutti i client connessi. Può essere fatto a livelli multpli, possiamo inviare i messaggi a tutti i client connessi, ai client sul namespace e ad una room in particolare. Per effettuare un broadcast a tutti gli eventi bisogna usare il metodo `io.socket.emit`.

```
io.on('connection',(socket) => {
    clients++;
    io.sockets.emit('broadcast', {description: clients + 'clients connected!' });
    socket.on('disconnect', () => {
        clients--;
        io.socket.emit('broadcast', { description: clients + 'clients connected!' });
    });
});
```

Se vogliamo inviare un evento a tutti ma il client lo ha causato, possiamo usare `socket.broadcast.emit`

```
io.on('connection', (socket) => {
    clients++;
    socket.emit('newclientconnect', {description: 'Hey, welcome!' });
    socket.broadcast.emit('newclientconnect', {description: client + 'clients connected' })
    socket.on ('disconnect', () => {
        clients--;
        socket.broadcast.emit('newclientconnect', { description: clients + 'clients connected!' })
    })
})

```

#### Namespaces

Socket.IO ti consente di assegnare "namespace" alle socket, il che significa essenzialmente assegnare diversi endpoint o percorsi. Questa è una funzione utile per ridurre al minimo il numero di risorse (connessioni TCP) e allo stesso tempo separare i conceetti all'interno dell'applicazione introducendo la separazione tra i canali di comunicazione. Più spazi dei nomi condividono effettivamente la stessa connessione WebSocket, salvandoci così le porte socket sul server.

Lo spazio dei nomi radice '/' è lo spazio dei nomi predefinito, a cui si uniscono i client se uno spazio dei nomi non è specificato dal client durante la connessione al server. Tutte le connessioni al server che utilizzano il lato client dell'oggetto socket vengono effettuate nel namespace predefinito. Di conseguenza per connettere i client al namespace, si ha la necessità di dare un namespace come argomento al costruttore `io` chiamato per creare una connessione ed un socket object sul lato client.

```
const nsp = io.of('/my-namespace');
nsp.on('connection', function(socket){
    console.log('someone connected');
    nsp.emit('hi', 'Hello everyone');
})
```

#### Rooms

All'interno di ogni namespace, è possibile anche definire canali arbitrari a cui i socket possono unirsi e abbandonare. Questi canali sono chiamati *rooms*: sono usate per separare ulteriormente i concetti. Le stanze condividono anche la stessa connessione socket come i namespace. Una cosa da tenere a mente durante l'utilizzo delle rooms è che possono essere unite solo sul lato server. 

You can call the join method on the socket to subscribe the socket to a given channel/room. For example, let us create rooms called `room-<room-number>` and join some clients. As soon as this room is full, create another room and join clients there.
You can also implement this in custom namespaces in the same fashion.
To leave a room, you need to call the leave function just as you called the join function on the socket.

```
const roomno = 1;
io.on('connection', function(socket){
    socket.join("room-"+roomno);

    io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. " + roomno);
})
```