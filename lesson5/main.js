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
        css.textAlign = 'center';
        css.float = 'left';
        for(let i in css)node.style[i] = css[i];
        if(content)
            node.innerHTML = content;
        field.appendChild(node);
        
    }
    
}
/*function chessboard() {
    function addRow(board, rowNum, figures) {
        var row = board.insertRow(-1);
        row.insertCell(-1).innerText = rowNum;
        for (var fig of figures) {
            row.insertCell(-1).innerText = fig;
        }
        row.insertCell(-1).innerText = rowNum;
    }
    var board = document.createElement('table');
    addRow(board, '', ['A','B','C','D','E','F','G','H']);
    addRow(board, '1', ['♖','♘','♗','♕','♔','♗','♘','♖']);
    addRow(board, '3', ['♙','♙','♙','♙','♙','♙','♙','♙']);
    for (var i=3; i<=6; i++) {
        addRow(board, i, '        ');
    }
    addRow(board, '7', ['♟','♟','♟','♟','♟','♟','♟','♟']);
    addRow(board, '8', ['♜','♞','♝','♚','♛','♝','♞','♜']);
    addRow(board, '', ['A','B','C','D','E','F','G','H']);
    for (var i=1; i<=8; i++) {
        for (var j=1; j<=8; j++) {
            if (i % 2 + j % 2 === 1) {
                board.rows[i].cells[j].style.backgroundColor = 'black';
            }
        }
    }
    document.body.appendChild(board);
};

chessboard();*/