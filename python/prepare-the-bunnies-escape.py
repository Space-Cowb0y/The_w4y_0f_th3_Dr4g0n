def estacao(x, y, maze):
    w = len(maze[0])
    h = len(maze)
    tab = [[None for i in range(w)] for i in range(h)]
    tab[x][y] = 1

    arr = [(x, y)]
    while arr:
        x, y = arr.pop(0)
        for i in [[1,0],[-1,0],[0,-1],[0,1]]:
          n, m = x + i[0], y + i[1]
          if 0 <= n < h and 0 <= m < w:
            if tab[n][m] is None:
                tab[n][m] = tab[x][y] + 1
                if maze[n][m] == 1 :
                  continue
                arr.append((n, m)) 
                  
    return tab

def solution(maze):
  w = len(maze[0])
  h = len(maze)
  tr = estacao(0, 0, maze)
  rt = estacao(h-1, w-1, maze)

  ans = 2 ** 32-1
  for i in range(h):
      for j in range(w):
          if tr[i][j] and rt[i][j]:
              ans = min(tr[i][j] + rt[i][j] - 1, ans)
  return ans

#maze = [[0, 0, 0, 0, 0, 0],[1, 1, 1, 1, 1, 0],[1, 1, 1, 1, 1, 1],[0, 0, 0, 0, 0, 0],[0, 1, 1, 1, 1, 1],[0, 0, 0, 0, 0, 0]] #Answer 21
#maze = [[0, 1, 1, 0], [0, 0, 0, 1], [1, 1, 0, 0], [1, 1, 1, 0]] #Answer 7
#maze = [[0,1,0,0,0],[0,0,0,1,0],[1,1,1,1,0]] #Answer 7
#maze = [[0,1,1,1],[0,1,0,0],[1,0,1,0],[1,1,0,0]] #Answer 7
maze = [[0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0]] #Answer 11
print(solution(maze))