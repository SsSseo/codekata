def count_sequences(n):
    if n == 1 or n == 2:
        return n

    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2

    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
        # 이진트리적으로 봤을때 앞에 두값은 현재 i의 값과 연결되어있는 앞에 값이다
        # 그래서 그 두값을 더하니 현재의 값까지의 이동 개수가 나왔다

    return dp[n]


while True:
    n = int(input())
    if n == 0:
        break

    result = count_sequences(n)
    print(result)
