## Live-Server Extension

Zum starten des Entwicklungsservers nutzen Sie die "Live-Server" Extension (Erweiterungen).

## Die wichtigsten 'klassischen' HTML-Elemente

<table><thead><tr><th>HTML-Element</th><th>Verwendungszweck</th><th>Voreingestellte CSS-Regeln</th></tr></thead><tbody><tr><td><code>&lt;html&gt;</code></td><td>Das Wurzelelement, das den gesamten Inhalt der Webseite umschließt</td><td>Keine voreingestellten CSS-Regeln</td></tr><tr><td><code>&lt;head&gt;</code></td><td>Enthält Metadaten über die Webseite, wie Titel, Skripte und CSS-Dateien</td><td>Keine voreingestellten CSS-Regeln</td></tr><tr><td><code>&lt;body&gt;</code></td><td>Enthält den sichtbaren Inhalt der Webseite, einschließlich Text, Bilder, Videos und anderen Elementen</td><td><code>margin: 8px</code></td></tr><tr><td><code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code></td><td>Überschriften verschiedener Größen</td><td><code>font-size</code>, <code>margin-top</code>, <code>margin-bottom</code></td></tr><tr><td><code>&lt;p&gt;</code></td><td>Absatz</td><td><code>margin-top</code>, <code>margin-bottom</code></td></tr><tr><td><code>&lt;a&gt;</code></td><td>Hyperlink</td><td><code>color</code>, <code>text-decoration</code></td></tr><tr><td><code>&lt;img&gt;</code></td><td>Bild</td><td><code>display: block</code>, <code>max-width: 100%</code></td></tr><tr><td><code>&lt;ul&gt;</code></td><td>Ungeordnete Liste</td><td><code>margin-top</code>, <code>margin-bottom</code>, <code>margin-left</code>, <code>list-style-type</code></td></tr><tr><td><code>&lt;ol&gt;</code></td><td>Geordnete Liste</td><td><code>margin-top</code>, <code>margin-bottom</code>, <code>margin-left</code>, <code>list-style-type</code></td></tr><tr><td><code>&lt;li&gt;</code></td><td>Listenpunkt</td><td><code>margin-top</code>, <code>margin-bottom</code></td></tr><tr><td><code>&lt;div&gt;</code></td><td>Container für andere Elemente</td><td>Keine voreingestellten CSS-Regeln</td></tr><tr><td><code>&lt;span&gt;</code></td><td>Inline-Container für Text oder andere Elemente</td><td>Keine voreingestellten CSS-Regeln</td></tr><tr><td><code>&lt;form&gt;</code></td><td>Formular für die Eingabe von Daten</td><td>Keine voreingestellten CSS-Regeln</td></tr><tr><td><code>&lt;input&gt;</code></td><td>Eingabefeld für Formulare</td><td><code>display: block</code>, <code>margin-top</code>, <code>margin-bottom</code>, <code>margin-left</code>, <code>margin-right</code></td></tr><tr><td><code>&lt;button&gt;</code></td><td>Schaltfläche für Formulare</td><td><code>display: inline-block</code>, <code>margin-top</code>, <code>margin-bottom</code>, <code>margin-left</code>, <code>margin-right</code></td></tr><tr><td><code>&lt;select&gt;</code></td><td>Dropdown-Menü für Formulare</td><td><code>display: inline-block</code>, <code>margin-top</code>, <code>margin-bottom</code>, <code>margin-left</code>, <code>margin-right</code></td></tr></tbody></table>

## Die wichtigsten HTML5 Elemente

<table><thead><tr><th>HTML-Element</th><th>Verwendungszweck</th><th>Voreingestellte CSS-Regeln</th></tr></thead><tbody><tr><td><code>&lt;article&gt;</code></td><td>Ein in sich geschlossener, thematischer Inhalt, der unabhängig vom Rest der Seite stehen kann</td><td><code>display: block</code></td></tr><tr><td><code>&lt;aside&gt;</code></td><td>Ein Bereich, der als Nebeninhalt dient, der nicht direkt mit dem Hauptinhalt der Seite zusammenhängt</td><td><code>display: block</code></td></tr><tr><td><code>&lt;header&gt;</code></td><td>Enthält den Kopfteil der Seite, wie Logo, Navigation und Überschrift</td><td><code>display: block</code></td></tr><tr><td><code>&lt;footer&gt;</code></td><td>Enthält den Fußteil der Seite, wie Copyright-Informationen und Links</td><td><code>display: block</code></td></tr><tr><td><code>&lt;nav&gt;</code></td><td>Enthält eine Navigation</td><td><code>display: block</code></td></tr><tr><td><code>&lt;section&gt;</code></td><td>Enthält einen thematischen Abschnitt der Seite</td><td><code>display: block</code></td></tr><tr><td><code>&lt;main&gt;</code></td><td>Enthält den Hauptinhalt der Seite</td><td><code>display: block</code></td></tr><tr><td><code>&lt;figure&gt;</code></td><td>Enthält eine Abbildung und optional eine Bildunterschrift</td><td><code>display: inline-block</code></td></tr><tr><td><code>&lt;figcaption&gt;</code></td><td>Enthält die Bildunterschrift für <code>&lt;figure&gt;</code></td><td><code>display: block</code></td></tr><tr><td><code>&lt;audio&gt;</code></td><td>Enthält Audio-Inhalt</td><td>Keine voreingestellten CSS-Regeln</td></tr><tr><td><code>&lt;video&gt;</code></td><td>Enthält Video-Inhalt</td><td><code>display: inline-block</code>, <code>max-width: 100%</code></td></tr><tr><td><code>&lt;source&gt;</code></td><td>Gibt eine alternative Version von Audio- oder Video-Inhalt an</td><td>Keine voreingestellten CSS-Regeln</td></tr><tr><td><code>&lt;embed&gt;</code></td><td>Ermöglicht das Einbetten von externen Inhalten wie Videos und Audio-Dateien</td><td><code>display: inline-block</code></td></tr><tr><td><code>&lt;datalist&gt;</code></td><td>Gibt eine Liste von Optionen für ein <code>&lt;input&gt;</code>-Feld an</td><td>Keine voreingestellten CSS-Regeln</td></tr><tr><td><code>&lt;details&gt;</code></td><td>Erstellt eine aufklappbare Liste mit Details</td><td><code>display: block</code></td></tr><tr><td><code>&lt;summary&gt;</code></td><td>Enthält den Titel der aufklappbaren Liste von Details</td><td><code>display: list-item</code></td></tr></tbody></table>

## CSS Notes

Grundlegende Begriffe und deren Bedeutung sollten bekannt sein. Darunter fallen z.B.:

- Selektoren (e.g. element, class, id, attribute)
- Regeln (e.g. font-size, font-family, display,...)
- Unterschiede zwischen den Einheiten (relativ (vw/%/rem) vs absolut (px))

### Flexbox

CSS Flexbox (auch als Flexible Box Layout oder kurz Flexbox bezeichnet) ist eine Technik in CSS, mit der du flexible und dynamische Layouts für Webseiten erstellen kannst. Mit Flexbox kannst du Elemente innerhalb eines Containers positionieren und ausrichten, ohne dass du spezifische Abstände oder Größen für jedes einzelne Element festlegen musst.

Flexbox basiert auf einem Container-Element, das die Flex-Container genannt wird, und auf den darin enthaltenen Flex-Items. Die Flex-Container definiert die Größe und Ausrichtung des Layouts, während die Flex-Items die Inhalte enthalten, die innerhalb des Layouts platziert werden sollen.

Um Flexbox zu verwenden, musst du zunächst den Container als Flex-Container definieren, indem du ihm das CSS-Attribut "display: flex;" zuweist. Sobald dies geschehen ist, kannst du die Flex-Items innerhalb des Containers auf verschiedene Arten positionieren und ausrichten.

Zum Beispiel kannst du mit den Attributen "justify-content" und "align-items" die horizontale und vertikale Ausrichtung der Flex-Items innerhalb des Containers steuern. Mit "flex-direction" kannst du die Ausrichtung der Flex-Items innerhalb des Containers ändern, um z.B. eine horizontale oder vertikale Ausrichtung zu erzielen.

Flexbox ermöglicht es dir auch, die Größe und das Verhalten der Flex-Items anzupassen, um sicherzustellen, dass sie sich entsprechend den Anforderungen deines Layouts verhalten. Hierzu gibt es verschiedene Attribute wie "flex-grow", "flex-shrink" und "flex-basis", mit denen du die Größe und das Verhalten der Flex-Items steuern kannst.

### Flexbox-Eigenschaften

- **`display: flex`**; 
    - Definiert den Container als Flex-Container und aktiviert Flexbox-Layout für dessen Inhalt.
- **`flex-direction`**: row | row-reverse | column | column-reverse;
    - Definiert die Ausrichtung der Flex-Items innerhalb des Containers. "row" stellt die Flex-Items in einer horizontalen Reihe dar, "row-reverse" stellt sie in umgekehrter Reihenfolge dar, "column" stellt sie in einer vertikalen Spalte dar und "column-reverse" stellt sie in umgekehrter vertikaler Reihenfolge dar.
- **`flex-wrap`**: nowrap | wrap | wrap-reverse;
    - Definiert, ob die Flex-Items in einer einzigen Reihe bleiben oder auf mehrere Zeilen umgebrochen werden sollen. "nowrap" zwingt die Flex-Items in einer einzelnen Reihe zu bleiben, "wrap" lässt sie auf mehrere Zeilen umbrechen und "wrap-reverse" lässt sie auf mehrere Zeilen umbrechen und stellt sie in umgekehrter Reihenfolge dar.
- **`justify-content`**: flex-start | flex-end | center | space-between | space-around | space-evenly;
    - Definiert, wie die Flex-Items horizontal innerhalb des Containers ausgerichtet werden sollen. "flex-start" stellt sie am Anfang des Containers dar, "flex-end" stellt sie am Ende des Containers dar, "center" stellt sie in der Mitte des Containers dar, "space-between" verteilt sie gleichmäßig im Container, "space-around" verteilt sie gleichmäßig im Container mit gleichen Abständen am Anfang und Ende und "space-evenly" verteilt sie gleichmäßig im Container mit gleichem Abstand zwischen ihnen.
- **`align-items`**: flex-start | flex-end | center | baseline | stretch;
    - Definiert, wie die Flex-Items vertikal innerhalb des Containers ausgerichtet werden sollen. "flex-start" stellt sie am Anfang des Containers dar, "flex-end" stellt sie am Ende des Containers dar, "center" stellt sie in der Mitte des Containers dar, "baseline" stellt sie auf der Baseline (Grundlinie) des Containers dar und "stretch" dehnt sie auf die volle Höhe des Containers aus.
- **`align-content`**: flex-start | flex-end | center | space-between | space-around | stretch;
    - Definiert, wie die Zeilen des Flex-Layouts innerhalb des Containers vertikal ausgerichtet werden sollen, wenn mehrere Zeilen vorhanden sind. "flex-start" stellt sie am Anfang des Containers dar, "flex-end" stellt sie am Ende des Containers dar, "center" stellt sie in der Mitte des Containers dar, "space-between" verteilt sie gleichmäßig im Container, "space-around" verteilt sie gleichmäßig im Container mit gleichen Abständen am Anfang und Ende und "stretch" dehnt sie auf die volle Höhe des Containers aus.
- **`order`**: integer;
    - Definiert die Reihenfolge, in der die Flex-Items dargestellt werden sollen. Ein kleinerer Wert stellt sie weiter vorne dar und ein größerer Wert stellt sie weiter hinten dar.
- **`flex-grow`**: number;
    - Definiert das Verhältnis, in dem die Flex-Items den verfügbaren Platz innerhalb des Flex-Containers aufnehmen sollen, wenn mehr Platz vorhanden ist, als sie benötigen. Ein höherer Wert bedeutet, dass das Flex-Item mehr Platz einnehmen kann.
- **`flex-shrink`**: number;
    - Definiert das Verhältnis, in dem die Flex-Items den verfügbaren Platz innerhalb des Flex-Containers freigeben sollen, wenn nicht genügend Platz vorhanden ist, um sie alle darzustellen. Ein höherer Wert bedeutet, dass das Flex-Item mehr Platz freigeben kann.
- **`flex-basis`**: length | auto;
    - Definiert die bevorzugte Größe des Flex-Items, bevor Flex-Grow und Flex-Shrink angewendet werden. "auto" verwendet die Größe des Inhalts des Flex-Items.
- **`flex`**: flex-grow flex-shrink flex-basis;
    - Eine Kurzform, um die Attribute Flex-Grow, Flex-Shrink und Flex-Basis in einer einzigen Zeile zu definieren.


#### Flexbox-CheatSheet

[Flexbox-CheatSheet | css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


### Die wichtigsten CSS Eigenschaften

| CSS-Regel | Beschreibung | Beispiel |
| --- |  --- |  --- |
| `color` | Definiert die Farbe des Texts | `color: red;` |
| `font-size` | Definiert die Größe des Texts | `font-size: 16px;` |
| `font-family` | Definiert die Schriftart des Texts | `font-family: Arial, sans-serif;` |
| `text-align` | Definiert die Ausrichtung des Texts | `text-align: center;` |
| `background-color` | Definiert die Hintergrundfarbe eines Elements | `background-color: yellow;` |
| `padding` | Definiert den Abstand zwischen dem Inhalt und dem Rand eines Elements | `padding: 10px;` |
| `margin` | Definiert den Abstand zwischen den Rändern von Elementen | `margin: 10px;` |
| `border` | Definiert die Eigenschaften einer Umrandung eines Elements | `border: 1px solid black;` |
| `display` | Definiert, wie ein Element angezeigt wird (z.B. als Block- oder Inline-Element) | `display: block;` oder `display: inline;` |

### Das Box-Modell

Das Box-Modell ist ein Konzept in CSS, das beschreibt, wie jedes HTML-Element als eine Box mit Inhalt, Padding, Border und Margin dargestellt wird.

- Der Inhalt ist der eigentliche Text oder die Bilder, die innerhalb der Box platziert sind.
- Das Padding ist der Abstand zwischen dem Inhalt und der Grenze der Box.
- Die Border ist die Grenze, die um den Inhalt und das Padding gezeichnet wird.
- Das Margin ist der Abstand zwischen der Border des Elements und dem nächsten Element.

Das Box-Modell ist wichtig, weil es bestimmt, wie groß jedes HTML-Element auf der Seite angezeigt wird. Wenn man das Box-Modell versteht, kann man die Größe von Elementen einfach steuern, indem man das Padding, die Border und das Margin anpasst.

Es gibt zwei Arten von Box-Modell: Das "Content-Box" Modell, bei dem die Größe des Elements nur den Inhalt des Elements umfasst und das "Border-Box" Modell, bei dem die Größe des Elements auch die Border und das Padding umfasst.

In der Regel wird das "Border-Box" Modell empfohlen, da es einfacher zu handhaben ist. Man kann das Box-Modell in CSS steuern, indem man die box-sizing Eigenschaft verwendet, um das bevorzugte Modell auszuwählen.

![Boxmodell-Image](https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png)

## Random 

![Wahrheitstabelle](https://www.rahner-edu.de/s/cc_images/teaserbox_18145092.png?t=1668349285)# E-Com-WebDev
