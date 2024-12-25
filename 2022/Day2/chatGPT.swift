import Foundation

struct Actions {
    static let rock = "rock"
    static let paper = "paper"
    static let scissors = "scissors"
}

struct MyVals {
    static let rock = 1
    static let paper = 2
    static let scissors = 3
}

struct Response {
    static let A = (action: Actions.rock, score: nil)
    static let B = (action: Actions.paper, score: nil)
    static let C = (action: Actions.scissors, score: nil)
}

struct YourMove {
    static let X = (action: Actions.rock, score: 1)
    static let Y = (action: Actions.paper, score: 2)
    static let Z = (action: Actions.scissors, score: 3)
}

struct Result {
    static let win = "win"
    static let lose = "lose"
    static let draw = "draw"
}

struct ResultVal {
    static let win = 6
    static let lose = 0
    static let draw = 3
}

struct DesiredOutcomeMap {
    static let X = Result.lose
    static let Y = Result.draw
    static let Z = Result.win
}

func rockPaperScissors(you: String, them: String) -> String {
    if you == them {
        return Result.draw
    }
    if you == Actions.paper {
        return them == Actions.rock ? Result.win : Result.lose
    } else if you == Actions.rock {
        return them == Actions.scissors ? Result.win : Result.lose
    } else if you == Actions.scissors {
        return them == Actions.paper ? Result.win : Result.lose
    }
    return nil
}

let data = try! String(contentsOf: URL(fileURLWithPath: "./strategyGuide.txt")).split(separator: "\n").filter { $0.count > 0 }

func playFullSheet(data: [Substring]) -> Int {
    var sum = 0
    for game in data {
        let game = game.split(separator: " ")
        let them = game[0]
        let me = game[1]
        let result = rockPaperScissors(you: YourMove[String(me)].action, them: Response[String(them)].action)
        sum += ResultVal[result]! + YourMove[String(me)].score
    }
    return sum
}

func win(them: String) -> String {
    if them == Actions.paper {
        return Actions.scissors
    }
    if them == Actions.rock {
        return Actions.paper
    }
    if them == Actions.scissors {
        return Actions.rock
    }
    return ""
}

func lose(them: String) -> String {
    if them == Actions.rock {
        return Actions.scissors
    }
    if them == Actions.scissors {
        return Actions.paper
    }
    if them == Actions.paper {
        return Actions.rock
    }
    return ""
}

func reachDesiredOutcome(data: [Substring]) -> Int
