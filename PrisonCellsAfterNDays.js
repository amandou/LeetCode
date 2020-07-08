var prisonAfterNDays = function(cells, N) {
    for (let i=0;i<(N-1)%14+1;i++){
          var dayN = []
          for (let j=0;j<cells.length;j++ ){ 
              if(j-1 < 0)
                  dayN.push(0)
              else{
                  if (j+1 >= cells.length)
                      dayN.push(0)
                  else if (cells[j-1] == 0 && cells[j+1] == 0) 
                      dayN.push(1)
                  else if (cells[j-1] == 1 && cells[j+1] == 1)
                      dayN.push(1)
                  else
                      dayN.push(0)
              }  
          }
          cells = dayN.slice()
      }
      return cells
      
  };