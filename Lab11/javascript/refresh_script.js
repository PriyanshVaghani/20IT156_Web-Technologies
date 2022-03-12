window.onload = function colorchange() {
    var color = ['darkslateblue', 'darkslategray', 'darkslategrey', 'dimgray', 'dimgrey', 'darkviolet', 'deepsktblue', 'orange', 'yellow', 'brown', 'darkblue', 'darkolivegreen', 'darkgoldenrod', 'darkmagenta', 'darkgreen', 'darkorange', 'darkorchid', 'red', 'cysn', 'chocolate', 'green', 'blue'];
    document.body.style.background = color[Math.floor(Math.random() * color.length)]
}