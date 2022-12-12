import Foundation


func readFile(fileName: String) -> String {
    var result = "";
    do {
        guard let fileUrl = Bundle.main.url(forResource: fileName, withExtension: "txt") else { fatalError() }
        let data = try Data(contentsOf: fileUrl)
        print(data)
        result = String(bytes: data, encoding: .utf8)!;
        print(result)
    } catch {
        print(error)
    }
    return "result";
}

readFile(fileName: "calories")
