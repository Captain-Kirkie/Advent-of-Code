
def read_puzzle():
    arr1 = []
    arr2 = []
    with open('./Day1/Day1Input.txt') as file:
        lines = file.readlines()
        for line in lines:
            split = line.split(" ")
            split = [x.rstrip() for x in split if x != '']
            arr1.append(int(split[0]))
            arr2.append(int(split[1]))
    return arr1, arr2


if __name__ == "__main__":
    result = read_puzzle()
    arr1 = result[0]
    arr2 = result[1]
    arr1.sort()
    arr2.sort()
    print(f"arr1 {arr1}")
    print(f"arr2 {arr2}")
    diffs = []
    for i in range(len(arr1)):
        diff = abs(arr1[i] - arr2[i])
        diffs.append(diff)
    print(f"Answer: {sum(diffs)}")