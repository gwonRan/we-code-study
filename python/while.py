count = 0

while count < 3 :
    print("나 지금 작다")
    count += 1
    

while count < 10 :
    count += 1
    if count  < 4 :
        continue
    print('나는 작은 수 : ',count)
    if count == 8 :
            break
