class Solution:
    def arrangeCoins(self, n: int) -> int:
        count = 0
        i = 1
        while (n>0):
            aux = i
            if(i <= n):
                i+=1
                count+=1
            else:
                break
            n-=aux
        return count
        