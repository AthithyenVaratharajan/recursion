# def printNumbers():
#     for i in range(1, 11):
#         print (i)
# printNumbers()
#recursive function

def sum(n):
    if n==1:
        return 1
    return n + sum(n-1)

print(sum(5))
