class Calculator {
    add(a: number, b: number): number {
        this.logMessage("add method called")
        return a + b
    }
    subtract(a: number, b: number): number {
        this.logMessage("subtract method called")
        return a - b
    }
    multiply(a: number, b: number): number {
        this.logMessage("multiply method called")
        return a * b
    }
    divide(a: number, b: number): number {
        this.logMessage("divide method called")
        if (b == 0) {
            throw new Error("Cannot divide by 0")
        }
        return a/b
    }

    isThisALuckNumber(a: number): boolean {
        this.logMessage("lucky method called")
        if (a == this.generateRandomNumber()) return true
        return false
    }

    generateRandomNumber(): number {
        return Math.floor(Math.random() * 10) + 1
    }

    logMessage(msg: string) {
        console.log(msg)
    }
}

export default Calculator