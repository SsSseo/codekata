while True:
    start, end = 1, 50
    N = int(input())
    # N이 0이면 반복을 끝낸다
    if N == 0:
        break
    while True:
    	# start와 end의 중간을 구한다
        n = (start + end) // 2
        # 중간을 프린트
        print(n, end=' ')
        # n과  N이 동일하지면 반복 끝낸다
        if n == N:
            break
        # 중간 수보다 작다면 end를 줄인다
        elif n > N:
            end = n - 1
        # 중간수 보다 크다면 start를 늘린다
        else:
            start = n + 1
    # 반복이 끝나면 출력 줄을 바꾼다.
    print(sep = '\n')