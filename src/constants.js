export const LANGUAGE_VERSIONS = {
    "java": "15.0.2",
    "c": "10.2.0",
    "c++": "10.2.0",
    "python": "3.10.0",
    "javascript": "18.15.0",
    "typescript": "5.0.3",
    "php": "8.2.3",
    "ruby": "3.0.1",
    "rust": "1.68.2",
    "csharp": "6.12.0",
    "go": "1.16.2"
};

export const CODE_SNIPPETS = {
    javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
    typescript: `type Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
    python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
    java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    csharp:'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
    php: "<?php\n\n$name = 'Alex';\necho $name;\n",
    ruby: 
`def sum(a, b)
    a + b
    end
puts sum(3, 4)`, // Output: 7

    rust: 
`fn sum(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    println!("{}", sum(3, 4));
}`, // Output: 7


    "c++":
`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}`, // Output: 7

    go:
`package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`, // Output: 7

    c:
`int sum(int a, int b) {
    return a + b;
}

int main() {
    printf("%d", sum(3, 4));
    return 0;
}`, // Output: 7
};

