
# CSS

Cascading Style Sheet: usato per formattare il layout di una pagina web. Utilizza i selettori per accedere agli elementi dell'albero HTML. **Style sheet** è una lista di regole, ogni regola consiste in uno o più selettori ed un declaration block

```
[SELECTORs] { /* declaration block */

    /* list of rules*/
    {key}: {value};
    ...
}
```

## Simple class selectors

### Selectors

Usati per selezionare gli elementi HTML a cui si deve dare uno stile. Vi è una grande varietà di selettori CSS disponibile, consente di assegnare con precisione gli elementi a cui dare lo stile:
- Element selector
- Simple selector
- Attribute selector
- Pseudo class selector
- Pseudo element selector
- Combinators and multiple selectors

Esempio di selettore case insentive che assegna uno stile a tutti i relativi elementi

```CSS
p {
    color: red;
}
```

### Class selectors (simple)

```CSS
.classname {
    key: value;
}
```

```HTML
    <p class="classname1 classname2 ..."></p>
```

- classname: classe del nome di ogni valore senza spazi aggiunge una classe HTML
- Gli elementi multipli in un documento possono avere lo stesso class value
- un elemento singolo può avere classi multiple separate da uno spazio bianco

### ID selector (simple)

`#idName`

Un # seguito dall'ID name di n dato elemento. Un elemento può avere **un solo**. È il metodo più efficiente per selezionare un elemento singolo.

```
#idName {
    key: value;
    ...
}
```

```HTML
    <p id="idName"></p>
```

### Universal selector

```CSS
*{
    key: value;
}
```

Permette di selezionare tutti gli elementi in una pagina. Raramente utilizzato per applicare uno stile a tutti gli elementi su una pagina, spesso usato in combinazione con altri selectors.
Il suo utilizzo in pagine grandi può avere un impatto percettibile sulle performance, il suo caricamento può essere più lento.  Non ci sono molti casi in cui conviene usarlo.

## Selectors combinators 

In CSS, i combinators permettono di combinare selezioni multiple insieme che permette di selezionare elementi dentro altri elementi o adiacenti ad altri:
- **Descendant selectors**: rappresentati da uno spazio tra le i selettori, permettono di selezionare elemento dentro un altro (non necessariamente un diretto discendente)
- **Child selector** `>`: permette di selezionare un elemento che è immediatamente figlio di un altro elemento
- **Fratello adiacente** `+`: permette di selezionare un elemento che è l'immediato fratello di un altro (ad esempio immediatamente a destra di questo, allo stesso livello della gerarchia)
- **Fratello generale** (general sibling selector) `~`: permette di selezionare ogni elementi che sono fratelli di un altro (ad esempio allo stesso livello della gerarchia, ma non necessariamnte accanto)

```CSS
section p {
  color: blue;
}

section > p {
  background-color: yellow;
}

h2 + p {
  text-transform: uppercase;
}

h2 ~ p {
  border: 1px dashed black;
}
```

## Multiple selectors

È possibile scrivere selettori multipli separati da virgola per applicare le stesse regole a stessi elementi

```CSS
h2 ~ p {
  border: 1px dashed black;
}
```

## Attribute

Gli attribute selectors sono un tipo speciale di selettori che corrisponderà ai loro attributi e ai valori. La sintassi generica consiste in delle parentesi quadre `[]` che contengono il nome dell'attributo seguito da una condizione opzionale che corrisponde al valore dell'attributo. I selettori attributo possono essere divisi in due categorie: presence e substring (ed i rispettivi valori)

`[name_of_attr]` : selezionerà tutti gli elementi con il `name_of_attr` qualsiasi sia il suo valore

`[attr=val]`: selezionerà tutti gli elementi con l'attributo `attr` ma solo se il suo valore è val

`[attr~=val]`: selezionerà tutti gli elementi con `attr`, ma solo se il valore val è separato dallo spazio della lista dei valori contenuti nel valore di attr

## Pseudo class

È una keyword preceduta dai due punti `:` che è aggiunta alla fine dei selettori per specificare che si vuole stilizzare gli elementi selezionati solo quando sono in un certo stato. 

```CSS
classname:active { /**/ }
classname:checked { /**/ }
classname:disabled { /**/ }
classname:empty { /**/ }
classname:enabled { /**/ }
classname:first { /**/ }
classname:focus { /**/ }
classname:hover { /**/ }
classname:not() :nth-child() :nth-last-child() { /**/ }
classname:read-only :required :visited { /**/ }
```

Gli pseudo elementi sono come pseudo classi, ma hanno differenze. Sono keywords precedute da due colonne che possono essere aggiunte alla fine di selettori per selezionare una certa parte di un elemento

```CSS
::after
::before
::first-letter
::first-line
::selection 
::backdrop

/* All elements with an attribute "href", which values
   start with "http", will be added an arrow after its
   content (to indicate it's an external link) */
[href^=http]::after { 
    content: '⤴';
}

```

## Rules

### Color values

Può essere dichiarato come:

```CSS
Text : tomato
RGB : rgb(255, 99, 71)
HEX : #ff6347
HSL : hsl(9, 100%, 64%)
RGBA : rgba(255, 99, 71, .5) //trasparent
HSLA : hsla(9, 100%, 64%, .5) //trasparent
```

### Text color

La proprietà color setta il colore del contenuto in primo piano dell'elemento selezionato (solitamente un testo ma può essere anche una coppia di altre cose, come l'underline o l'overline su un testo usando la proprietà text-decoration)

```CSS
p {
    color: #f000;
}

```

### Text decoration

Specifica l'aspetto delle linee decorative usate sul testo.

```CSS
 /* Keyword values */
text-decoration: none;                /* No text decoration */
text-decoration: underline red;       /* Red underlining */
text-decoration: underline wavy red;  /* Red wavy underlining */

/* Global values */
text-decoration: inherit;
text-decoration: initial;
text-decoration: unset;

```

Per settare decorazioni individuali su singole dichiarazioni utilizzare: `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.

### Test transform

```CSS
 /* Keyword values */
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: none;
/* Global values */
text-transform: inherit;
text-transform: initial;
text-transform: unset;
```

### Text shadow

Aggiunge ombre al testo. Ogni ombra è descritta dalla combinazione di offset X e Y dall'elemento

```CSS
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;
/* offset-x | offset-y | color */
text-shadow: 5px 5px #558ABB;
/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;
/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;
```

### Text align

Come il testo è allineato al relativo blocco padre. Non controlla l'allineamento degli elementi del blocco ma solo il loro contenuto inline

```CSS
 /* Keyword values */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
/* Global values */
text-align: inherit;
text-align: initial;
text-align: unset;
```

### Line height

La proprietà line-height imposta la quantità di spazio utilizzata per le righe, ad esempio nel testo. Negli elementi a livello di blocco, specifica l'altezza minima delle caselle di riga all'interno dell'elemento. Negli elementi in linea non sostituiti, specifica l'altezza utilizzata per calcolare l'altezza del box linea.

```CSS
/* Keyword value */
line-height: normal;
/* <length> values */
line-height: 30px;
/* <percentage> values */
line-height: 34%;
/* Global values */
line-height: inherit;
line-height: initial;
line-height: unset;
```

### Letter spacing

Proprietà che specifica il comportamento della spaziatura tra caratteri di testo (same for `word-spacing`)

```CSS
/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;
/* Keyword values */
letter-spacing: normal;
/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;

```
### Font size

La proprietà font-size specifica la dimensione del carattere. L'impostazione della dimensione del carattere può modificare la dimensione di altri elementi, poiché viene utilizzata per calcolare il valore delle unità em ed ex.

```CSS
 /* <relative-size> values */
font-size: smaller;
font-size: larger;
/* <length> values */
font-size: 12px;
font-size: 0.8em;
/* Global values */
font-size: inherit;
font-size: initial;
font-size: unset;
```


### Font weight

Specifica il peso (o il grassetto) del carattere. I pesi dei caratteri disponibili dipenderanno dalla famiglia di caratteri utilizzata. Alcuni tipi di carattere sono disponibili solo in normale e in grassetto.

```CSS
/* Keyword values */
font-weight: normal;
font-weight: bold;
/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;
/* Numeric keyword values */
font-weight: 100;
font-weight: 200;
/* Global values */
font-weight: inherit;
font-weight: initial;
```

### Font family

La proprietà CSS della famiglia di font specifica un elenco prioritario di uno o più nomi di famiglia di font e/o nomi di famiglia generici per l'elemento selezionato.

```CSS
/* A font family name and a generic family name */
font-family: Gill Sans Extrabold, sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;
/* A generic family name only */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
/* Global values */
font-family: inherit;
font-family: initial;
font-family: unset;
```

## Box Model

Quando un documento viene renderizzato, il browser rappresenta ogni elemento come un box rettangolare, così come gli standard CSS box (css ne determina la posizione, grandezza e proprietà di questi box). Ogni box è composto in quattro parti (o aree) definite dagli angoli: content edge, padding edge, border edge e margin edge.

## Border

La proprietà border è una abbreviazione della proprietà per settare tutti i bordi individuali in una volta: border-width, border-style e border-color. Se un valore individuale non è specificato, allora sarà settato il valore iniziale. Un border non può essere usato per specificare un valore specifico per una border-image, ma invece dei set i suoi valori iniziali, come none

```CSS
border: <width> [style] [color]
border: 1px;
border: 2px dotted;
border: medium dashed green;
border: 1px dashed black;
```

## Margin

Imposta l'area margin di tutti i quattro punti dell'elemento. 

```CSS
 /* Apply to all four sides */
margin: 1px;
/* vertical | horizontal */
margin: 5% auto;
/* top | horizontal | bottom */
margin: 1em auto 2em;
/* top | right | bottom | left */
margin: 2px 1em 0 auto;
/* Global values */
margin: inherit;
margin: initial;
margin: unset;
```

## Padding

Imposta la padding area di tutti e quattro i lati di un elemento

```CSS
/* Apply to all four sides */
padding: 1em;
/* vertical | horizontal */
padding: 5% 10%;
/* top | horizontal | bottom */
padding: 1em 2em 2em;
/* top | right | bottom | left */
padding: 5px 1em 0 1em;
/* Global values */
padding: inherit;
padding: initial;
padding: unset;
```

## Display

La proprietà display CSS specifica il tipo di riquadro di rendering utilizzato per un elemento. In HTML, i valori delle proprietà di visualizzazione predefinite sono presi dai comportamenti descritti nelle specifiche HTML o dal foglio di stile predefinito del browser/utente. Il valore predefinito in XML è inline, inclusi gli elementi SVG.
Oltre ai diversi tipi di display box, il valore none consente di disattivare la visualizzazione di un elemento; quando non ne usi nessuno, anche tutti gli elementi discendenti hanno la loro visualizzazione disattivata. Il documento viene visualizzato come se l'elemento non esistesse nell'albero del documento.

```CSS
display: block;
display: inline;
display: none;
display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;
```

## Opacity

Setta il livello di opacità per un elemento. Il livello di opacità descrive il livello di trasparenza dove 1 è non trasparente, 0.5 è il 50% e 0 è completamente trasparente. Quando si utilizza la proprietà opacity per aggiungere trasparenza allo sfondo di un elemento, anche tutti i suoi elementi figlio diventano trasparenti. Ciò può rendere difficile la lettura del testo all'interno di un elemento completamente trasparente. La regola di opacità non comprime gli elementi ma mantiene gli eventi sugli elementi.

```CSS
opacity: 0.5;
```

## Visibility

Nasconde righe e colonne di una tabella e nasconde anche un elemento senza modificare il layout.
La regola di visibilità non mantiene gli eventi sugli elementi, comunque si consiglia di non utilizzare più questa regola.
Questa regola viene utilizzata solo su Flexbox con valore di compressione.

```CSS
visibility: hidden;
visibility: visible;
visibility: collapsed;
```

## Position

Specifica come un elemento è posizionato in un documento.

- Un elemento posizionato è un elemento il cui valore di posizione calcolato è relativo, assoluto, fisso o permanente. (In altre parole, è tutto tranne che statico.)
- Un elemento posizionato relativamente è un elemento il cui valore di posizione calcolato è relativo. Le proprietà superiore e inferiore specificano l'offset verticale dalla sua posizione normale; le proprietà sinistra e destra specificano l'offset orizzontale.
- Un elemento posizionato in modo assoluto è un elemento il cui valore di posizione calcolato è assoluto o fisso. Le proprietà superiore, destra, inferiore e sinistra specificano gli offset dai bordi del blocco contenitore dell'elemento. (Il blocco contenitore è l'antenato a cui l'elemento è posizionato relativamente.) Se l'elemento ha margini, questi vengono aggiunti all'offset.
- Un elemento posizionato in modo permanente è un elemento il cui valore di posizione calcolato è permanente. Viene trattato come posizionato relativamente finché il blocco che lo contiene non supera una soglia specificata, a quel punto viene trattato come fisso.

Le proprietà top, right, bottom e left determinano la posizione finale di elementi posizionati.
Il più delle volte, gli elementi posizionati in modo assoluto con altezza e larghezza impostate su auto vengono ridimensionati in modo da adattarsi al loro contenuto. Tuttavia, è possibile fare in modo che gli elementi posizionati in modo assoluto non sostituiti riempiano lo spazio verticale disponibile specificando sia la parte superiore che quella inferiore e lasciando l'altezza non specificata (cioè auto). Allo stesso modo possono essere fatti per riempire lo spazio orizzontale disponibile specificando sia sinistra che destra e lasciando la larghezza come auto.
Salvo il caso appena descritto di elementi assolutamente posizionati che riempiono lo spazio disponibile:
- Se sono specificati sia top che bottom (tecnicamente, non auto), top vince.
- Se sono specificate sia left che la right, la sinistra vince quando la direzione è ltr (inglese, giapponese orizzontale, ecc.) e la destra vince quando la direzione è rtl (persiano, arabo, ebraico, ecc.).

```CSS
position: static;
position: relative;
top: 65px; left: 65px;
position: absolute;
top: 40px; left: 40px;
position: fixed;
bottom: 20px;
position: sticky;
top: 20px;
```

## Float

La proprietà CSS float specifica che un elemento deve essere posizionato lungo il lato sinistro o destro del suo contenitore, consentendo al testo e agli elementi inline di avvolgerlo. L'elemento viene rimosso dal normale flusso della pagina web, pur rimanendo parte del flusso (contrariamente al posizionamento assoluto).

```CSS
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;
/* Global values */
float: inherit;
float: initial;
float: unset
```

## Clear

La proprietà clear CSS specifica se un elemento può essere accanto a elementi mobili che lo precedono o deve essere spostato in basso (cancellato) al di sotto di essi. La proprietà clear si applica sia agli elementi mobili che a quelli non mobili.

```CSS
/* Keyword values */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;
/* Global values */
clear: inherit;
clear: initial;
clear: unset;
```

## Clearfix

Se un elemento contiene solo elementi mobili, la sua altezza si riduce a zero. Se vuoi che sia sempre in grado di ridimensionarsi, in modo che contenga elementi mobili al suo interno, devi cancellare automaticamente i suoi figli. Questo è chiamato clearfix, e un modo per farlo è cancellare uno pseudo-elemento ::after sostituito su di esso.

## Background

La proprietà abbreviazione di sfondo CSS ti consente di regolare tutte le opzioni di stile di sfondo disponibili contemporaneamente, inclusi l'immagine a colori, l'origine e le dimensioni, il metodo di ripetizione e altre funzionalità.

```CSS
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url("test.jpg") repeat-y;

/* Using a <box> and <background-color> */
background: border-box red;

/* A single image, centered and scaled */
background: no-repeat center/80% url("../img/image.png");
```

### Background size

Specifica la grandezza dell'immagine di background di un elemento. Può essere lasciata alla sua dimensione naturale, ristretta o costretta a scalare tutto lo spazio disponibile conservando le proprie proporzioni intriseche.

```CSS
/* Keyword values */
background-size: cover; background-size: contain;

/* One-value syntax */ /* the width of the image (height becomes 'auto') */ 
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;
```

### Background position

Definisce la posizione iniziale per ogni immagine di background

```CSS
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
```

## Cursor

Definisce quale cursorse visualizzare e quando andare sopra un altro elemento
```CSS
/* Keyword value only */
cursor: pointer;
cursor: auto;

/* Using URL and coordinates */
cursor: url(cursor1.png) 4 12, auto;
cursor: url(cursor2.png) 2 2, pointer;

/* Global values */
cursor: inherit;
cursor: initial;
cursor: unset;
```

## Overflow

La proprietà CSS overflow imposta cosa fare quando il contenuto di un elemento è troppo grande per adattarsi al suo contesto di formattazione a blocchi. È una scorciatoia per overflow-x e overflow-y


```CSS
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible; 
/* Global values */
overflow: inherit; 
overflow: initial;
overflow: unset;
```

## Z-index

Imposta lo z-order di un elemento posizionato ed è discendente. Gli elementi sovrapposti con un indice z più grande coprono quelli con uno più piccolo.

```CSS
/* Keyword value */
z-index: auto;
/* <integer> values */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Negative values to lower the priority */
```

## Import dei file

I CSS possono essere aggiunti all'HTML collegandosi a un file di foglio di stile separato, importando file da fogli di stile esistenti, incorporando CSS in un tag di stile o aggiungendo stili in linea direttamente agli elementi HTML.

```CSS
<link rel="stylesheet" [type="text/css"] href="mystyles.css" [media="screen"] />
```


- L'attributo rel è impostato su stylesheet per indicare al browser che il file collegato è un CSS (Cascading Style Sheet).
- L'attributo type non è richiesto in HTML5.
- L'attributo href è dove specifichi il percorso del tuo file CSS.
- L'attributo media in un tag link specifica quando devono essere applicate le regole CSS. schermo indica per l'uso sullo schermo di un computer.

    - projection per presentazioni proiettate.
    - handheld per dispositivi palmari (in genere con schermi di piccole dimensioni).
    - print per modellare pagine Web stampate.
    - all (valore predefinito) Questo è ciò che la maggior parte delle persone sceglie.

Puoi omettere completamente l'attributo media se vuoi che i tuoi stili vengano applicati a tutti i tipi di media.

I CSS possono essere aggiunti all'HTML collegandosi a un file di foglio di stile separato, importando file da fogli di stile esistenti, incorporando CSS in un tag di stile o aggiungendo stili in linea direttamente agli elementi HTML.

Carica un foglio di stile con la regola @import

`@import "newstyles.css";`

Utile quando il progetto web ha molti file HTML, perché se vuoi aggiungere un nuovo file CSS nel tuo progetto, devi aggiungere una nuova linea di collegamento HTML a ogni singolo file HTML. In questo modo devi modificare solo un file CSS in cui importerai gli altri file. Ogni file CSS importato richiede una richiesta HTTP aggiuntiva che può rallentare il rendering della pagina.

## Responsive
### COLs system

L'idea di base è organizzare i vari componenti della pagina web attraverso un'unità di misura chiamata colonna che ha in totale 12 colonne.

```CSS

* {
    box-sizing: border-box;
}

.row::after{
    content: "";
    clear: both;
    display: block;
}

.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}
```

### Media Query
`@media` può essere usato per applicare stili basati sul risultato di una o più media query. La regola @media deve essere inserita al livello superiore del codice o dentro qualche regola condizionale


```CSS
/* Media query */ 
@media screen and (min-width: 900px) {
    div {
        padding: 1rem 3rem;
    }
}
```

I tipi descrivono la categoria generale di dispositivo. Il tipo è opzionale è tutti i tipi verrano inseriti (se non usato) e sono : all, print e screen.

## Flexbox system

Finora, gli unici strumenti affidabili compatibili con i browser disponibili per la creazione di layout CSS erano `floats` e `positioning`. Questi vanno bene e funzionano, ma in qualche modo sono anche piuttosto limitanti e frustranti. I seguenti semplici requisiti di layout sono difﬁcili o impossibili da ottenere con tali strumenti, in qualsiasi modo conveniente e flessibile:

- Centrare verticalmente un blocco di contenuto all'interno del suo genitore.
- Facendo in modo che tutti i figli di un contenitore assumano una uguale quantità di larghezza/altezza disponibile, indipendentemente dalla larghezza/altezza a disposizione.
- Fare in modo che tutte le colonne in un layout a più colonne adottino la stessa altezza anche se contengono una quantità diversa di contenuto.

### Flexbox containers

Il layout Flexbox è più appropriato per i componenti di un'applicazione e layout su piccola scala, mentre il layout Grid è concepito per layout su scala più ampia. Per cominciare, dobbiamo selezionare quali elementi devono essere disposti come flexbox. Per fare ciò, impostiamo un valore speciale di visualizzazione sull'elemento padre degli elementi che si desidera modificare. Ad esempio

```CSS
section {
    display: flex;
}
```

Questo fa diventare l'elemento `flexbox` un container flex e i suoi figli diventeranno elementi flex.

### Flexbox model

(inserisci immagine flexbox model)

- L'asse principale (main) è l'asse che corre nella direzione in cui sono disposti gli elementi ﬂex (ad es. come righe nella pagina o colonne nella pagina). L'inizio e la fine di questo asse sono chiamati main start e main end.
- L'asse trasversale (cross axis) è l'asse che corre perpendicolarmente alla direzione in cui vengono disposti gli elementi ﬂex. L'inizio e la fine di questo asse sono chiamati cross start e cross end.
- L'elemento padre su cui è impostato display: `flex` (la `<section>` nel nostro esempio) è chiamato ﬂex container.
- Gli articoli disposti come scatole ﬂessibili all'interno del contenitore ﬂex sono chiamati articoli ﬂex (gli elementi `<article>` nel nostro esempio).

### Flexbox cols and rows

Flexbox fornisce una proprietà chiamata `ﬂex-direction` che speciﬁca in quale direzione corre l'asse principale (in quale direzione sono disposti i figli ﬂexbox). Il valore predefinito è impostato su `row`, che fa sì che vengano disposti in una riga nella direzione in cui funziona la lingua predefinita del browser (da sinistra a destra, nel caso di un browser inglese).

```CSS
flex-direction: colonna; /* riga */
```

Puoi anche disporre gli elementi ﬂex in direzione inversa (row-reverse o column reverse).

### Flexbox wrap

Un problema che sorge quando si ha una quantità fissa di larghezza o altezza nel tuo layout è che alla fine i tuoi figli Flexbox traboccheranno il loro contenitore, rompendo il layout.

Un modo per risolvere questo problema è aggiungere la seguente dichiarazione alla regola del contenitore ﬂex:

```CSS
flex-wrap: wrap
```

### Flex items size

Si tratta di un valore di proporzione senza unità che determina la quantità di spazio disponibile lungo l'asse principale che ciascun elemento flessibile occuperà rispetto ad altri elementi flessibili.


```CSS
article {
    flex: 1;
}

/* possibile anche specificare la grandezza minima dentro il valore flex */

article {
    flex: 1 200px;
}
```

In questo caso si da ad ogni elemento article lo stesso valore che significa che avranno tutti lo stesso numero di spazio rimanente dopo che il padding ed il margin sono stati settati.

Questo definisce la capacità di un elemento flessibile di crescere se necessario. Accetta un valore senza unità che funge da proporzione. Determina la quantità di spazio disponibile all'interno del contenitore flessibile che l'oggetto dovrebbe occupare.

```CSS
article {
    flex-grow: 4; /* default 0 */
}

```

Se tutti gli elementi hanno `flex-grow` ad 1, lo spazio rimanente nel container sarà distributo equalmente a tutti i figli. Se uno dei figli ha valore due, lo spazio rimanente sara il doppio degli altri. Numeri negativi non sono validi.

### Flex alignment

È possibile usare le features di flexbox per allineare gli elementi nell'asse principale o cross:

```CSS
div {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
```

La regola di `align-items` controlla dove si trovano gli elementi ﬂex sull'asse trasversale.
- Per impostazione predefinita, il valore è stretch, che allunga tutti gli elementi ﬂex per riempire il genitore nella direzione dell'asse trasversale. Se il genitore non ha una larghezza fissa nella direzione dell'asse trasversale, tutti gli elementi flessibili diventeranno lunghi quanto l'elemento flessibile più lungo.
- Il valore centrale nel codice sopra fa sì che gli elementi mantengano le loro dimensioni intrinseche, ma siano centrati lungo l'asse trasversale.
_ Puoi anche avere valori come flex-start e flex-end, che allineeranno tutti gli elementi rispettivamente all'inizio e alla fine dell'asse trasversale (cross).
- È possibile ignorare il comportamento align-items per singoli elementi ﬂex applicando loro la proprietà align-self.


La regola di allineamento `justify-content` controlla dove si trovano gli elementi ﬂex sull'asse principale:

- Il valore predefinito è `flex-start`, che fa sì che tutti gli elementi si trovino all'inizio dell'asse principale.
- Puoi usare `flex-end` per farli sedere alla fine.
- Il `center` è anche un valore per giustificare il contenuto e farà sì che gli elementi ﬂex si trovino al centro dell'asse principale.
- Il valore utilizzato sopra, `space-around`, è utile perché distribuisce tutti gli elementi in modo uniforme lungo l'asse principale, con un po' di spazio lasciato alle due estremità.
- C'è un altro valore, lo `space-between`, che è molto simile allo spazio intorno, tranne per il fatto che lo fa non lasciare alcuno spazio alle due estremità.

### Flexbox ordering
Ha anche delle feature per cambiare l'ordine del layout o gli elementi, senza effetto sull'ordine originale. Questa è una cosa impossibile da fare con i metodi tradizionali


```CSS
button:first-child {
    order: 1;
}
```

- Il valore di default è 0
- Gli elementi flex con valori di ordine superiori impostati su di essi appariranno più avanti nell'ordine di visualizzazione rispetto agli articoli con valori di ordine inferiori.
- Gli articoli Flex con lo stesso valore dell'ordine appariranno nell'ordine di origine.
- Puoi impostare valori di ordine negativi per far apparire gli articoli prima degli articoli con 0 impostato.

### Longhand version

Il flex è una proprietà abbreviata che può specificare fino a tre valori diversi:

- Il valore della proporzione senza unità di cui abbiamo discusso sopra. Questo può essere speciﬁcato individualmente usando la proprietà flex-grow longhand.
- Un secondo valore di proporzione senza unità è il flex-shrink, che entra in gioco quando gli articoli ﬂex stanno traboccando dal loro contenitore. Questo speciﬁca quanta parte della quantità traboccante viene sottratta alle dimensioni di ciascun articolo flessibile, per evitare che trabocchino il loro contenitore.
- Il valore della dimensione minima di cui abbiamo discusso sopra. Questo può essere speciﬁcato individualmente usando il valore flex-basis longhand.

## Grid

CSS Grid Layout (noto anche come "Grid System"), è un sistema di layout bidimensionale basato su griglia che mira a niente di meno che cambiare completamente il modo in cui progettiamo le interfacce utente basate su colonne. I CSS sono sempre stati usati per impaginare le nostre pagine web, ma non hanno mai fatto un ottimo lavoro. In primo luogo, abbiamo utilizzato le tabelle, poi i float, il posizionamento e l'inline-block, ma tutti questi metodi erano essenzialmente hack e tralasciavano molte funzionalità importanti (centratura verticale, per esempio). In secondo luogo, Flexbox ha aiutato, ma è pensato per layout unidimensionali più semplici, non complessi bidimensionali. Grid è il primo modulo CSS in assoluto creato speciﬁcamente per risolvere i problemi di layout che tutti noi ci risolviamo da quando realizziamo siti web.

Una griglia è una raccolta di linee orizzontali e verticali che allineano i nostri elementi di design. creando un modello contro il quale possiamo creare progetti in cui gli elementi non saltano o cambiano larghezza mentre ci spostiamo da una pagina all'altra, fornendo una maggiore coerenza sui nostri siti Web. Una griglia tipicamente ha colonne, righe e gaps tra le righe e le colonne, normalmente chiamati gutters. Per definire la griglia è possibile usare il valore grid della property display. Come con flexbox, cambierà nel grid layout e tutti i figli diretti saranno dei grid-items. A differenza di flexbox, gli elementi non cambierano immediatamente aspetto, dichiarando `display: grid` assegna una colonna grid e quindi gli elementi continueranno ad essere visualizzati normalmente.

```CSS
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}
```

In aggiunta, è possibile anche usare l'unità `fr` per gestire la dimensione di righe e colonne. Questa dimensione rappresenta una frazione dello spazio disponibile nel container grid.

```CSS

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /*or repeat(3, 1fr)*/
}

```
È possibile aggiungere un 'gap' tra colonne e righe, specificando:

```CSS
.container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 20px; /* row and column gap */
    gap: 20px /*row and column gap*/
}
```

Un fatto abbastanza basilare sul web è che non sai mai quanto sarà alto qualcosa; contenuto aggiuntivo o caratteri di dimensioni maggiori possono causare problemi con i design che tentano di essere pixel perfetti in ogni dimensione.

La funzione `minmax()` ci consente di impostare una dimensione minima e massima per una traccia, ad esempio minmax(100px, auto). La dimensione minima è 100 pixel, ma la massima è automatica, che si espanderà per adattarsi al contenuto.


```CSS
.container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
    gap: 20px /*row and column gap*/
}
```

A volte è utile poter chiedere alla griglia di creare tutte le colonne che si adattano al contenitore. Lo facciamo impostando il valore di `grid-template-columns` usando la notazione `repeat()`, ma invece di passare un numero, passa la parola chiave riempimento automatico. Per il secondo parametro della funzione utilizziamo `minmax()`, con un valore minimo pari alla dimensione minima della traccia che vorremmo avere, e un massimo di 1fr.

```CSS
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-auto-rows: minmax(100px, auto);
    gap: 20px /*row and column gap*/
}
```

Una griglia ha sempre delle linee, le quali iniziano da 1 e si riferiscono alla modalità di scrittura del documento. Pertanto in italiano o in inglese la riga di colonna 1 si trova sul lato sinistro della griglia e la riga di riga 1 in alto. Nella colonna araba la riga 1 sarebbe sul lato destro, poiché l'arabo è scritto da destra a sinistra. Possiamo posizionare le cose in base a queste righe specificando la riga iniziale e finale.

```CSS  
.item {
    grid-column-start: <number> | <name> | span <number> | span <name> | auto;
    grid-column-end: <number> | <name> | span <number> | span <name> | auto;
    grid-row-start: <number> | <name> | span <number> | span <name> | auto;
    grid-row-end: <number> | <name> | span <number> | span <name> | auto;
}
```

- `<line>` può essere un numero riferito ad una linea numerata o ad un nume riferito ad una griglia con nome
- `span <numero>`: l'elemento si estenderà sul numero fornito di tracce della griglia
- `span <nome>`: l'elemento si estenderà fino a raggiungere la riga successiva con il nome fornito
- `auto`: indica il posizionamento automatico, un intervallo automatico o un valore predefinito arco di uno

Shorthand:
```CSS
.item {
    grid-column: <start-line> / <end-line> | <start-line> / span <value>;
    grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}
```
`<start-line>` / `<end-line>` – each one accepts all the same values as the longhand version, including span

## Grid template placement

Un modo alternativo per posizionare gli elementi sulla griglia consiste nell'utilizzare la proprietà grid-template-areas e assegnare un nome ai vari elementi del progetto. Definisce un modello di griglia facendo riferimento ai nomi delle aree della griglia che sono speciﬁcate con la proprietà dell'area della griglia. La ripetizione del nome di un'area della griglia fa sì che il contenuto si estenda su quelle celle. Un punto indica una cella vuota. La sintassi stessa fornisce una visualizzazione della struttura della griglia.

```CSS
.container {
    grid-template-areas:
        " | . | none | ..."
        "...";
}
```

- `<grid-area-name>` the name of a grid area speciﬁed with grid-area 
- `.` a period signiﬁes an empty grid cell none 
- no grid areas are deﬁned


```CSS
.item {
    grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
```

Giustificazione della griglia (da parent)

```CSS
.container {
    justify-items: start | end | center | stretch;
}
```

- start – aligns items to be ﬂush with the start edge of their cell 
- end – aligns items to be ﬂush with the end edge of their cell 
- center – aligns items in the center of their cell 
- stretch – ﬁlls the whole width of the cell (this is the default)

Giustificazione della griglia (Da elemento)

```CSS
.item {
    justify-self: start | end | center | stretch;
}
```


Allineamento della griglia (da parent)

```CSS
.container {
    align-items: start | end | center | stretch;
}
```

Allineamento della griglia (da elemento)

```CSS
.item {
    align-self: start | end | center | stretch;
}
```
