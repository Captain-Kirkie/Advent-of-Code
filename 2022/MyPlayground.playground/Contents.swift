import Foundation

func readTextFile(name : String) -> String? {
    do {
        guard let fileUrl = Bundle.main.url(forResource: name, withExtension: "txt") else { fatalError() }
        let data = try Data(contentsOf: fileUrl)
        if let string = String(data: data, encoding: .utf8) {
            return string;
        } else {
            print("not a valid UTF-8 sequence")
        }
    } catch {
        print(error)
    }
    return nil;
}

let data = readTextFile(name : "crates");

let lines = data!.split(whereSeparator: \.isNewline)

for line in lines {
    print(line);
}
//print(lines)

