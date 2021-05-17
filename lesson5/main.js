
var table = document.createElement("table");
var thead = document.createElement("thead");
var tr = document.createElement("tr");
var tfoot = document.createElement("tfoot");
var td = document.createElement("td");
var th = document.createElement("th");

var letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];

for (var i = 0; i < letters.length; i++) {
  th.innerHTML = letters[i];

  th.style.transform = "rotate(0deg)";
  tfoot.appendChild(th);

  th.style.transform = "rotate(180deg)";
  thead.appendChild(th);
}
table.appendChild(thead);
document.body.appendChild(table);

let field = document.createElement('div');
document.body.appendChild(field);

for(let y = 0; y < 10; y++)
{
	for(let x = 0; x < 10; x++)
    {
    	let css = x ? {} : {clear:'left'};
        let content = '';
    	if(y == 0 || y == 9)
        	content = x > 0 && x < 9 ? 'ABCDEFGH'.charAt( x-1 ) : null;
        else if(x == 0 || x == 9)
        	content = 9 - y;
        else css.background = ( x + y )%2 ? '#000' : '#fff';
        
        let node = document.createElement('div');
        css.width = '60px';
        css.height = css.width;
        css.img = 'http://chess-board.ru/img/pieces/pw.svg';
        css.textAlign = 'center';
        css.float = 'left';
        for(let i in css)node.style[i] = css[i];
        if(content)
            node.innerHTML = content;
        field.appendChild(node);
        
    }
    
}