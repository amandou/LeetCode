function qtosVizinhos(grid,i,j,col,row){
    let vizinhos = 0
    if(i+1 < row)
        if(grid[i+1][j] == 1)
            vizinhos++
    if(j+1 < col)
        if(grid[i][j+1] == 1)
            vizinhos++
    if(j-1 >=0)
        if(grid[i][j-1] == 1)
            vizinhos++
    if(i-1 >=0)
        if(grid[i-1][j] == 1)
            vizinhos++
    return vizinhos
}

var islandPerimeter = function(grid) {
    let nCol= grid[0].length
    let nRow = grid.length
    sum = 0
    for(let i=0;i<nRow;i++){
        for(let j=0;j<nCol;j++){
            if(grid[i][j]==1){
                if(qtosVizinhos(grid,i,j,nCol,nRow) == 0)
                    sum+=4
                if(qtosVizinhos(grid,i,j,nCol,nRow) == 1)
                    sum+=3  
                if(qtosVizinhos(grid,i,j,nCol,nRow) == 2)
                    sum+=2
                if(qtosVizinhos(grid,i,j,nCol,nRow) == 3)
                    sum+=1 
            }
        }
    }
    return sum
};