
def read_puzzle():
    arr1 = []
    arr2 = []
    with open('Day1Input.txt') as file:
        lines = file.readlines()
        for line in lines:
            split = line.split(" ")
            split = [x.rstrip() for x in split if x != '']
            arr1.append(int(split[0]))
            arr2.append(int(split[1]))
    return arr1, arr2


def part_1():
    print("Part 1")
    puzzle = read_puzzle()
    arr1 = puzzle[0]
    arr2 = puzzle[1]
    arr1.sort()
    arr2.sort()
    diffs = []
    for i in range(len(arr1)):
        diff = abs(arr1[i] - arr2[i])
        diffs.append(diff)
    print(f"Answer Part1: {sum(diffs)}")

def part_2():
    print("Part 2")
    puzzle = read_puzzle()
    arr1 = puzzle[0]
    arr2 = puzzle[1]
    arr1.sort()
    arr2.sort()

    count = {}
    
    for num in arr2:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1
    
    need_to_sum = []
    
    for num in arr1:
        if num in count.keys():
            value = num * count[num]
            need_to_sum.append(value)
        else:
            need_to_sum.append(0)
    print(f"Answer2: {sum(need_to_sum)}")

if __name__ == "__main__":
  part_1()
  part_2()