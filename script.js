function highlightComments(code, lang = 'cpp') {
            if (lang === 'cpp') {
                return code
                    .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')                    // C++ single-line
                    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');         // C-style block comment
            } else if (lang === 'python') {
                return code.replace(/(#.*)/g, '<span class="comment">$1</span>');              // Python comment
            }
            return code;
        }


        const studyData = [
            {
                title: "1. What is a Programming Language?",
                explanation: "It's how you talk to computers, like using Hindi or English to talk to people. Computers are super dumb and need precise instructions. You give commands using languages like C, C++, or Python. If you mess up the grammar (syntax!), the computer won't understand and won't run your code. The ultimate goal is to automate tasks, from complex calculations to running your favorite video game.",
                professional_answer: "A programming language is a formal set of instructions that allows humans to communicate with computers and develop software. It provides a structured syntax and semantics for writing commands that a computer can interpret and execute. Essentially, it acts as the intermediary, translating human logic into machine-understandable code. Common examples include C, C++, and Python, each with its own strengths and applications for different types of programming tasks, ranging from system-level programming to web development and data science.",
                code_cpp: `// C/C++ Example: The classic "Hello, World!"\n#include <stdio.h> // Standard Input/Output library\n\nint main() {\n    printf("Hello, World!\\n"); // Prints text to the console, '\\n' for newline\n    return 0; // Indicates successful program execution\n}`,
                code_python: `# Python Example: "Hello, World!" - super concise!\nprint("Hello, World!") # Prints text to the console, automatically adds a newline`,
                practical_title: "Calculating the sum of two numbers (a fundamental operation):",
                practical_cpp: `// C/C++ Example\nint a = 2, b = 3; // Declare two integer variables and assign values\nprintf("Sum: %d\\n", a + b); // '%d' is a placeholder for an integer value\n// Output: Sum: 5`,
                practical_python: `a = 2 # Python infers the type, no explicit 'int' needed\nb = 3\nprint("Sum:", a + b)  # Output: Sum: 5`,
                quiz: [
                    {
                        question: "Which of these is a valid variable name in C?",
                        options: ["1var", "var_1", "var-1", "var 1"],
                        answer: 1,
                        explanation: "Variable names can't start with a digit or contain spaces/hyphens."
                    },
                    {
                        question: "What does a programming language do?",
                        options: [
                            "It translates human logic into machine code.",
                            "It makes computers faster.",
                            "It is only used for games.",
                            "It stores data permanently."
                        ],
                        answer: 0,
                        explanation: "Programming languages translate human logic into instructions computers can execute."
                    },
                    {
                        question: "Which of the following is NOT a programming language?",
                        options: ["Python", "C++", "HTML", "Java"],
                        answer: 2,
                        explanation: "HTML is a markup language, not a programming language."
                    },
                    {
                        question: "Why can't you just tell a computer 'make me a game' and expect it to work?",
                        options: [
                            "Because computers only understand binary or structured code, not plain human language.",
                            "Because computers hate games.",
                            "Because it will crash your system.",
                            "Because games require high RAM."
                        ],
                        answer: 0,
                        explanation: "Computers don't understand natural human language unless we use structured code through a programming language."
                    },
                    {
                        question: "If you remove the semicolon at the end of a statement in C++, what happens?",
                        options: [
                            "The program guesses and runs anyway.",
                            "The program prints an error and doesn't run.",
                            "The program prints a warning but continues.",
                            "It only affects Windows computers."
                        ],
                        answer: 1,
                        explanation: "C++ requires strict syntax. Missing a semicolon leads to a compile-time error."
                    },
                    {
                        question: "Which analogy best explains what a programming language is?",
                        options: [
                            "Like a hammer used to build buildings.",
                            "Like grammar in English that helps form correct sentences.",
                            "Like a power cable for the computer.",
                            "Like a color scheme for your code editor."
                        ],
                        answer: 1,
                        explanation: "Just like grammar in a language helps form correct sentences, syntax in programming helps create valid instructions for computers."
                    },
                    {
                        question: "Which of these tasks can be done using a programming language?",
                        options: [
                            "Turning on your monitor",
                            "Changing Wi-Fi password",
                            "Making a calculator app",
                            "Charging your phone"
                        ],
                        "answer": 2,
                        "explanation": "Creating applications like a calculator is exactly what programming languages are for."
                    },
                    {
                        "question": "Which of these languages is case-sensitive (treats `Print` and `print` differently)?",
                        "options": ["Python", "HTML", "SQL", "Scratch"],
                        "answer": 0,
                        "explanation": "Python is case-sensitive, so `print` is valid, but `Print` will throw an error."
                    }

                ],
                interview_qa: [
                    {
                        question: "Why do we need different programming languages?",
                        answer: "Different languages are optimized for different tasks, such as system programming, web development, or data science."
                    },
                    {
                        question: "Name two compiled and two interpreted languages.",
                        answer: "Compiled: C, C++. Interpreted: Python, JavaScript."
                    },
                    {
                        question: "What is the difference between a compiled and an interpreted language?",
                        answer: "Compiled languages are translated into machine code before execution, while interpreted languages are executed line-by-line at runtime."
                    },
                    {
                        question: "How would you explain a programming language to someone who has never used a computer?",
                        answer: "I'd say it's like giving instructions to a super-literal robot. Just like we use Hindi or English to talk to people, we use programming languages like Python or C++ to talk to computers. But we have to be 100% clear and follow strict grammar — or the robot just stops working."
                    },
                    {
                        question: "If all programming languages can talk to a computer, why don't we just use one?",
                        answer: "Because different tasks need different tools. Some languages are better for speed (like C++), others for simplicity (like Python), and some for web stuff (like JavaScript). It's like not using a hammer to eat soup — wrong tool!"
                    },
                    {
                        question: "What happens when you write code in a programming language?",
                        answer: "The code gets translated by a compiler or interpreter into machine code — 0s and 1s — that your CPU can execute. It's like translating English into robot-speak."
                    },
                    {
                        question: "Is it possible to create your own programming language?",
                        answer: "Yes! You can build a custom language using tools like parsers, tokenizers, and compilers. But it's a complex task and usually done for very specific needs or research."
                    },
                    {
                        question: "What's the difference between a programming language and a markup language?",
                        answer: "A programming language performs logic, decisions, and calculations (like Python or C++). A markup language like HTML is used for formatting and displaying content, not for logic or instructions."
                    },
                    {
                        question: "Why is syntax so important in programming languages?",
                        answer: "Because computers are not creative. If you miss a semicolon or use a wrong keyword, they don't guess — they just crash. Syntax is like the strict grammar they must follow."
                    }
                ],
               flashcard: {
                question: "What is a programming language?",
                answer: "A programming language is a formal set of instructions that can be used to produce various kinds of output, including software applications, scripts, or other sets of instructions for computers to follow."
                }

            },
            {
                title: "2. What is an Integer?",
                explanation: "Whole numbers. No decimals, no fractions. Think `1, -5, 42, 0`. Great for counting stuff like how many students are in class, or how many steps you've walked. They are perfect for anything that exists in complete, distinct units.",
                professional_answer: "An integer is a fundamental primitive data type used to represent whole numbers, both positive and negative, without any fractional or decimal component. It's ideal for counting discrete items or values where precision beyond whole units is not required. Integers are typically stored in fixed-size memory locations and are optimized for fast arithmetic operations.",
                code_cpp: `int age = 21; // In C/C++, you explicitly declare 'int' for whole numbers`,
                code_python: `age = 21  # In Python, you just assign; Python dynamically infers it's an integer`,
                practical_title: "Counting steps in a fitness app:",
                practical_cpp: `int steps = 10000; // C/C++ stores 10,000 steps\nprintf("Total steps today: %d\\n", steps);`,
                practical_python: `steps = 10000  # Python stores 10,000 steps\nprint("Total steps today:", steps)`,
                flashcard: {
                    question: "What is an integer?",
                    answer: "A whole number without decimals or fractions. Examples: -5, 0, 42."


                },
                quiz: [
                    {
                        question: "Which of these is NOT an integer?",
                        options: ["42", "-5", "3.14", "0"],
                        answer: 2,
                        explanation: "3.14 is a floating-point number, not an integer."
                    },
                    {
                        question: "What is the value of 'int x = 7.9;' in C?",
                        options: ["7.9", "8", "7", "Error"],
                        answer: 2,
                        explanation: "Assigning 7.9 to an int truncates the decimal, so x becomes 7."
                    },
                    {
                        question: "What is the range of values for a 32-bit signed integer?",
                        options: ["-2^31 to 2^31-1", "-2^63 to 2^63-1", "0 to 2^32-1", "0 to 2^64-1"],
                        answer: 0,
                        explanation: "A 32-bit signed integer can represent values from -2^31 to 2^31-1."
                    },
                    {
                        question: "What happens if you try to store a decimal in an integer variable in C++?",
                        options: [
                            "The program crashes.",
                            "The decimal is rounded up.",
                            "The decimal is truncated.",
                            "It works fine."
                        ],
                        answer: 2,
                        explanation: "In C++, storing a decimal in an integer variable truncates the decimal part."
                    },
                    {
                        question: "Which of these is a valid integer declaration in Python?",
                        options: ["int x = 5;", "x = 5", "var x = 5;", "int x; x = 5;"],
                        answer: 1,
                        explanation: "In Python, you just write 'x = 5'. No type declaration needed."
                    },
                    {
                        question: "What is the output of this code? `int x = -10; printf(\"%d\", x);`",
                        options: ["-10", "10", "0", "Error"],
                        answer: 0,
                        explanation: "-10 is a valid integer and will print as is."
                    },
                    {
                        question: "Why do we use integers in programming?",
                        options: [
                            "For counting, indexing, and controlling program flow where only whole numbers make sense.",
                            "To store text data.",
                            "For high-precision calculations.",
                            "To represent colors."
                        ],
                        answer: 0,
                        explanation: "Integers are used for counting, indexing, and controlling program flow where only whole numbers make sense."
                    },
                    {
                        question: "Which of these is NOT an integer?",
                        options: ["42", "-5", "3.14", "0"],
                        answer: 2,
                        explanation: "3.14 is a floating-point number, not an integer."
                    },
                    {
                        question: "What is the value of 'int x = 7.9;' in C?",
                        options: ["7.9", "8", "7", "Error"],
                        answer: 2,
                        explanation: "Assigning 7.9 to an int truncates the decimal, so x becomes 7."
                    },
                    {
                        question: "What is the range of values for a 32-bit signed integer?",
                        options: ["-2^31 to 2^31-1", "-2^63 to 2^63-1", "0 to 2^32-1", "0 to 2^64-1"],
                        answer: 0,
                        explanation: "A 32-bit signed integer can represent values from -2^31 to 2^31-1."
                    },
                    {
                        question: "What happens if you try to store a decimal in an integer variable in C++?",
                        options: [
                        "The program crashes.",
                        "The decimal is rounded up.",
                        "The decimal is truncated.",
                        "It works fine."
                        ],
                        answer: 2,
                        explanation: "In C++, storing a decimal in an integer variable truncates the decimal part."
                    },
                    {
                        question: "Which of these is a valid integer declaration in Python?",
                        options: ["int x = 5;", "x = 5", "var x = 5;", "int x; x = 5;"],
                        answer: 1,
                        explanation: "In Python, you just write 'x = 5'. No type declaration needed."
                    },
                    {
                        question: "What is the output of this code? `int x = -10; printf(\"%d\", x);`",
                        options: ["-10", "10", "0", "Error"],
                        answer: 0,
                        explanation: "-10 is a valid integer and will print as is."
                    },
                    {
                        question: "Why do we use integers in programming?",
                        options: [
                        "For counting, indexing, and controlling program flow where only whole numbers make sense.",
                        "To store text data.",
                        "For high-precision calculations.",
                        "To represent colors."
                        ],
                        answer: 0,
                        explanation: "Integers are used for counting, indexing, and controlling program flow where only whole numbers make sense."
                    },
                    {
                        question: "What will happen in Python if you do: `x = 5.0; type(x)`?",
                        options: [
                        "<class 'int'>",
                        "<class 'float'>",
                        "<class 'str'>",
                        "SyntaxError"
                        ],
                        answer: 1,
                        explanation: "5.0 is a floating-point number, not an integer, so type(x) will return <class 'float'>."
                    },
                    {
                        question: "Which real-world example is best represented by an integer?",
                        options: [
                        "Temperature recorded with decimals",
                        "The number of students in a class",
                        "The weight of a fruit",
                        "The average of three test scores"
                        ],
                        answer: 1,
                        explanation: "Number of students is always a whole number — an ideal case for integers."
                    },
                    {
                        question: "Which of these statements about integers is TRUE?",
                        options: [
                        "Integers can have fractional parts.",
                        "Integers are only used in Python.",
                        "Integers can be positive, negative, or zero.",
                        "Integers can store text values."
                        ],
                        answer: 2,
                        explanation: "Integers are whole numbers, which can be positive, negative, or zero."
                    }
                ],
                interview_qa: [
                    {
                        question: "Why are integers important in programming?",
                        answer: "They are used for counting, indexing, and controlling program flow where only whole numbers make sense."
                    },
                    {
                        question: "How are negative integers stored in memory?",
                        answer: "Negative integers are typically stored using two's complement representation in binary."
                    }
                ]
            },
            {
                title: "3. What is a Float/Double?",
                explanation: "Numbers with decimals, like `3.14, -0.5, 100.0`. Use them for precision, like calculating your GPA, the exact cost of that extra samosa, or measurements. They are used when you need to represent fractional values.",
                professional_answer: "A float or double is a data type used to represent real numbers (numbers with decimal points or fractional components). In C and C++, 'float' is typically used for single-precision floating-point numbers, offering less precision and range, while 'double' is used for double-precision, offering greater precision and range. In Python, all decimal numbers are automatically treated as 'float' type.",
                code_cpp: `// C/C++: Declaring float and double for varying precision\nfloat pi = 3.14f; // 'f' suffix indicates float literal\ndouble bigNum = 123.456789;`,
                code_python: `// Python: Decimal numbers are floats by default\npi = 3.14\nprice = 99.99`,
                practical_title: "Calculating average marks for your semester:",
                practical_cpp: `float avg = (85.5f + 90.0f + 78.5f) / 3.0f; // Ensure division is floating-point\nprintf("Average: %.2f\\n", avg); // '%.2f' for two decimal places`,
                practical_python: `avg = (85.5 + 90.0 + 78.5) / 3 # Python automatically handles float division\nprint("Average:", round(avg, 2))`,
                flashcard: {
                    question: "What is a float?",
                    answer: "A data type for numbers with decimals (fractional values)."
                },
                quiz: [
                    {
                        question: "Which of these is a double in C++?",
                        options: ["int x = 5;", "float y = 2.5f;", "double z = 3.14159;", "char c = 'A';"],
                        answer: 2,
                        explanation: "'double z = 3.14159;' declares a double-precision floating-point variable."
                    },
                    {
                        question: "What is the output of: float x = 5/2; printf(\"%f\", x); ?",
                        options: ["2.5", "2.0", "2", "Error"],
                        answer: 1,
                        explanation: "5/2 is integer division (result 2), then stored as 2.0 in float."
                    },
                    {
                    question: "Which of these is a double in C++?",
                    options: [
                        "int x = 5;",
                        "float y = 2.5f;",
                        "double z = 3.14159;",
                        "char c = 'A';"
                    ],
                    answer: 2,
                    explanation: "'double z = 3.14159;' declares a double-precision floating-point variable."
                },
                {
                    question: "What is the output of: float x = 5/2; printf(\"%f\", x); ?",
                    options: [
                        "2.5",
                        "2.0",
                        "2",
                        "Error"
                    ],
                    answer: 1,
                    explanation: "5/2 is integer division (result 2), then stored as 2.0 in float."
                },
                {
                    question: "Which of these values is a valid float in Python?",
                    options: [
                        "price = 99.99",
                        "value = '3.14'",
                        "height = 175",
                        "temp = 0"
                    ],
                    answer: 0,
                    explanation: "Decimal values in Python are stored as float automatically when assigned like price = 99.99."
                },
                {
                    question: "Why would you use a float instead of an int in a program?",
                    options: [
                        "To store long text data",
                        "To store exact decimal values like currency or averages",
                        "To loop through characters",
                        "To store boolean true/false values"
                    ],
                    answer: 1,
                    explanation: "Floats are used when precise decimal values are needed, such as GPA, prices, or averages."
                },
                {
                    question: "Which one is more precise in C++: float or double?",
                    options: [
                        "float",
                        "double",
                        "They are the same",
                        "None of the above"
                    ],
                    answer: 1,
                    explanation: "double is more precise and can store larger decimal values compared to float."
                },
                {
                    question: "In Python, what type is returned by the expression: 10 / 4?",
                    options: [
                        "int",
                        "float",
                        "str",
                        "bool"
                    ],
                    answer: 1,
                    explanation: "Python automatically performs floating-point division when using the '/' operator."
                }
                ],
                interview_qa: [
                    {
                        question: "When would you use a float instead of an int?",
                        answer: "When you need to represent numbers with fractional or decimal parts, such as measurements or averages."
                    },
                    {
                        question: "What is the difference between float and double?",
                        answer: "A double provides more precision and a larger range than a float, but uses more memory."
                    }
                ]
            },
            {
                title: "4. What is a Variable?",
                explanation: "A named box in memory where you store data (numbers, text, whatever!). You give the box a unique name, put your 'stuff' inside, and then you can access or change that 'stuff' whenever you need it later in your program. It's like having labeled containers for your important items.",
                professional_answer: "A variable is a named storage location in memory that holds a value which can be changed during program execution. It serves as a symbolic name for a physical memory address, allowing programmers to refer to data by a descriptive name rather than its actual memory location. Variables are fundamental for storing and manipulating data within a program.",
                code_cpp: `int marks = 90; // C/C++: 'marks' is a variable of type integer storing 90`,
                code_python: `marks = 90  # Python: 'marks' is a variable storing 90 (type inferred)`,
                practical_title: "Storing your friend's name for a greeting:",
                practical_cpp: `char friendName[] = "Ravi"; // C/C++: Character array to store a string (name)\nprintf("Hello, %s!\\n", friendName);`,
                practical_python: `friend_name = "Ravi"  # Python: String variable storing a name\nprint("Hello,", friend_name, "!")`,
                flashcard: {
                    question: "What is a variable?",
                    answer: "A named storage location in memory for data."
                },
                quiz: [
                    {
                        question: "Which is a valid variable declaration in Python?",
                        options: ["int x = 5;", "x = 5", "var x = 5;", "int x; x = 5;"],
                        answer: 1,
                        explanation: "In Python, you just write 'x = 5'. No type declaration needed."
                    },
                    {
                        question: "What happens if you use an uninitialized variable in C?",
                        options: ["It defaults to 0", "It causes a syntax error", "It may contain garbage value", "It prints 'null'"],
                        answer: 2,
                        explanation: "Uninitialized variables in C contain unpredictable (garbage) values."
                    },
                    {
        question: "Which is a valid variable declaration in Python?",
        options: ["int x = 5;", "x = 5", "var x = 5;", "int x; x = 5;"],
        answer: 1,
        explanation: "In Python, you just write 'x = 5'. No type declaration needed."
    },
    {
        question: "What happens if you use an uninitialized variable in C?",
        options: ["It defaults to 0", "It causes a syntax error", "It may contain garbage value", "It prints 'null'"],
        answer: 2,
        explanation: "Uninitialized variables in C contain unpredictable (garbage) values."
    },
    {
        question: "Which of the following is NOT a valid variable name?",
        options: ["_value", "2value", "value_2", "val2"],
        answer: 1,
        explanation: "Variable names cannot start with a digit."
    },
    {
        question: "What does a variable actually store?",
        options: ["Its memory address", "Its name", "A fixed value forever", "A value that can change during execution"],
        answer: 3,
        explanation: "A variable stores a value that can change during the program’s execution."
    },
    {
        question: "What is the purpose of a variable in programming?",
        options: ["To repeat code automatically", "To store data with a name for later use", "To write comments", "To end a program"],
        answer: 1,
        explanation: "Variables store data in memory so you can use or modify it later in your program."
    }
                ],
                interview_qa: [
                    {
                        question: "Can variable names start with a number?",
                        answer: "No, variable names must start with a letter or underscore."
                    },
                    {
                        question: "Why do we use variables?",
                        answer: "Variables allow us to store, reuse, and manipulate data in a program."
                    }
                ]
            },
            {
                title: "5. What are Data Types?",
                explanation: "Data types tell the computer what kind of data you're storing: whole number (`int`), decimal (`float`), single character (`char`), true/false (`bool`), or a bunch of characters (`string`). It's crucial because it helps the computer understand how to store, process, and perform operations on that data efficiently.",
                professional_answer: "A data type defines the kind of data a variable can hold, dictating the range of values it can take, the operations that can be performed on it, and the amount of memory it occupies. Common primitive data types include integers (`int`), floating-point numbers (`float`, `double`), characters (`char`), and booleans (`bool`), along with more complex types like strings and objects. Choosing the correct data type is essential for memory efficiency and accurate computation.",
                code_cpp: `// C/C++: Explicit data type declarations are common\nint a = 5;      // integer\nfloat b = 2.5;  // decimal\nchar c = 'A';   // single character`,
                code_python: `a = 5      # Python infers type: integer (int)\nb = 2.5    # Python infers type: float\nc = 'A'    # Python infers type: string (str) for single chars as well`,
                practical_title: "Boolean (true/false) in different languages:",
                practical_cpp: `// C typically uses 1 for true, 0 for false\nint isPassedC = 1;\n\n// C++ has a dedicated boolean type\nbool isPassedCPP = true;`,
                practical_python: `is_passed = True  # Python uses True/False (capitalized)`,
                flashcard: {
                    question: "What is a data type?",
                    answer: "A classification that tells the compiler/interpreter what kind of value a variable holds."
                },
                quiz: [
                    {
                        question: "Which of these is NOT a primitive data type?",
                        options: ["int", "float", "string", "bool"],
                        answer: 2,
                        explanation: "'string' is not a primitive type in C/C++; it's a class in C++ and a built-in type in Python."
                    },
                    {
                        question: "What is the size of a 'char' in C?",
                        options: ["1 byte", "2 bytes", "4 bytes", "Depends on compiler"],
                        answer: 0,
                        explanation: "A 'char' is always 1 byte in C."
                    },
                    {
        question: "Which of these is NOT a primitive data type?",
        options: ["int", "float", "string", "bool"],
        answer: 2,
        explanation: "'string' is not a primitive type in C/C++; it's a class in C++ and a built-in type in Python."
    },
    {
        question: "What is the size of a 'char' in C?",
        options: ["1 byte", "2 bytes", "4 bytes", "Depends on compiler"],
        answer: 0,
        explanation: "A 'char' is always 1 byte in C."
    },
    {
        question: "Which data type is best for storing True/False values?",
        options: ["char", "int", "bool", "float"],
        answer: 2,
        explanation: "'bool' is specifically used for boolean values like True and False."
    },
    {
        question: "What will be the data type of '5.0' in Python?",
        options: ["int", "float", "str", "bool"],
        answer: 1,
        explanation: "In Python, a number with a decimal point is treated as a float by default."
    },
    {
        question: "Why is choosing the correct data type important?",
        options: ["To make the code look longer", "To confuse other programmers", "To ensure memory efficiency and correctness", "To avoid writing functions"],
        answer: 2,
        explanation: "Using the right data type ensures optimal memory usage and accurate results during operations."
    }
                ],
                interview_qa: [
                    {
                        question: "Why are data types important?",
                        answer: "They help the computer know how much memory to allocate and what operations are valid."
                    },
                    {
                        question: "Can you change a variable's data type after declaration in C?",
                        answer: "No, in C the data type is fixed at declaration. In Python, types are dynamic."
                    }
                ]
            },
            {
                title: "6. What is Input/Output?",
                explanation: "Input is how you give info to the computer (like typing your age into a form or clicking a button). Output is how the computer shows you results (like printing your marks on the screen, showing an image, or saving a file). It's the way your program interacts with the outside world.",
                professional_answer: "Input refers to the process of receiving data from an external source, such such as user keyboard entry, mouse clicks, files, or network streams. Output is the process of displaying or sending data from the program to an external destination, such as the console, a graphical user interface, a file, or a network. I/O operations are crucial for user interaction and data persistence.",
                code_cpp: `// C Example: Using scanf for input, printf for output\n#include <stdio.h>\n\nint main() {\n    int age;\n    printf("Enter your age: ");\n    scanf("%d", &age); // Reads an integer from console\n    printf("You are %d years old!\\n", age); // Prints the age\n    return 0;\n}`,
                code_python: `age = input("Enter your age: ") # 'input()' reads a line of text from console\nprint("You are", age, "years old!") # 'print()' displays text to console`,
                practical_title: "Taking two numbers as input and printing their sum:",
                practical_cpp: `// C++ Example: Using cin for input, cout for output\n#include <iostream>\n\nint main() {\n    int x, y;\n    std::cout << "Enter two numbers: ";\n    std::cin >> x >> y; // Reads two integers from console\n    std::cout << "Sum: " << x + y << std::endl; // Prints the sum\n    return 0;\n}`,
                practical_python: `x = int(input("Enter first number: ")) # Reads input as string, converts to int\ny = int(input("Enter second number: ")) # Reads input as string, converts to int\nprint("Sum:", x + y)`,
                flashcard: {
                    question: "What is input/output (I/O)?",
                    answer: "Input is data received by the program; output is data sent from the program."
                },
                quiz: [
                    {
                        question: "Which function is used for input in C?",
                        options: ["printf", "scanf", "input", "cin"],
                        answer: 1,
                        explanation: "'scanf' is used for input in C."
                    },
                    {
                        question: "What does 'print()' do in Python?",
                        options: ["Takes input", "Displays output", "Declares a variable", "None of the above"],
                        answer: 1,
                        explanation: "'print()' displays output to the console in Python."
                    },
                    {
                        question: "How do you read a full line of text in C?",
                        options: ["scanf(\"%s\", str);", "gets(str);", "fgets(str, sizeof(str), stdin);", "readline(str);"],
                        answer: 2,
                        explanation: "fgets is safer and reads a line of text including spaces."
                    },
                    {
        question: "Which function is used for input in C?",
        options: ["printf", "scanf", "input", "cin"],
        answer: 1,
        explanation: "'scanf' is used for input in C."
    },
    {
        question: "What does 'print()' do in Python?",
        options: ["Takes input", "Displays output", "Declares a variable", "None of the above"],
        answer: 1,
        explanation: "'print()' displays output to the console in Python."
    },
    {
        question: "How do you read a full line of text in C?",
        options: ["scanf(\"%s\", str);", "gets(str);", "fgets(str, sizeof(str), stdin);", "readline(str);"],
        answer: 2,
        explanation: "fgets is safer and reads a line of text including spaces."
    },
    {
        question: "Which function is used to take input from the user in Python?",
        options: ["input()", "scanf()", "cin", "getchar()"],
        answer: 0,
        explanation: "'input()' reads user input from the console as a string in Python."
    },
    {
        question: "What is the purpose of I/O in programming?",
        options: ["To process data internally", "To connect to the internet", "To interact with users or external systems", "To execute loops"],
        answer: 2,
        explanation: "I/O allows a program to receive data (input) and present results or information (output)."
    }
                ],
                interview_qa: [
                    {
                        question: "How do you read a string input in C?",
                        answer: "You can use 'scanf(\"%s\", str);' or 'fgets(str, size, stdin);' for safer input."
                    },
                    {
                        question: "What is standard input and output?",
                        answer: "Standard input is usually the keyboard; standard output is usually the screen/console."
                    }
                ]
            },
            {
                title: "7. What is a Conditional Statement (if/else)?",
                explanation: "These let your program make decisions, like a fork in the road. \"If it's raining, take an umbrella. Else, if it's sunny, wear sunglasses. Otherwise, just go without anything.\" They control the flow of your program based on whether certain conditions are true or false.",
                professional_answer: "A conditional statement allows a program to execute different blocks of code based on whether a specified condition evaluates to true or false. This enables decision-making and branching logic within the program's flow of execution. Common constructs include `if`, `else if` (or `elif`), and `else` statements.",
                code_cpp: `int marks = 80;\nif (marks >= 33) { // Check if marks are 33 or more\n    printf("Pass\\n");\n} else { // If not, then it's a fail\n    printf("Fail\\n");\n}`,
                code_python: `marks = 80\nif marks >= 33: # Check if marks are 33 or more\n    print("Pass")\nelse: # If not, then it's a fail\n    print("Fail")`,
                practical_title: "Checking if a number is even or odd:",
                practical_cpp: `int n = 4;\nif (n % 2 == 0) { // Using the modulo operator (%) to check for remainder 0\n    printf("Even\\n");\n} else {\n    printf("Odd\\n");\n}`,
                practical_python: `n = 4\nif n % 2 == 0: # Using the modulo operator (%) to check for remainder 0\n    print("Even")\nelse:\n    print("Odd")`,
                flashcard: {
                    question: "What does an 'if' statement do?",
                    answer: "It allows the program to make decisions based on conditions."
                },
                quiz: [
                    {
                        question: "What is the output of: if (5 > 3) printf(\"Yes\"); else printf(\"No\"); ?",
                        options: ["Yes", "No", "Error", "Nothing"],
                        answer: 0,
                        explanation: "5 > 3 is true, so 'Yes' is printed."
                    },
                    {
                        question: "Which Python keyword is used for an alternative condition?",
                        options: ["elseif", "elif", "else if", "otherwise"],
                        answer: 1,
                        explanation: "'elif' is used for else-if in Python."
                    },
                    {
                        question: "What will this print? x = 10; if x > 5: print('Hi') else print('Bye')",
                        options: ["Hi", "Bye", "Error", "Nothing"],
                        answer: 0,
                        explanation: "x is 10, which is greater than 5, so 'Hi' is printed."
                    },
                    {
        question: "What is the output of: if (5 > 3) printf(\"Yes\"); else printf(\"No\"); ?",
        options: ["Yes", "No", "Error", "Nothing"],
        answer: 0,
        explanation: "5 > 3 is true, so 'Yes' is printed."
    },
    {
        question: "Which Python keyword is used for an alternative condition?",
        options: ["elseif", "elif", "else if", "otherwise"],
        answer: 1,
        explanation: "'elif' is used for else-if in Python."
    },
    {
        question: "What will this print? x = 10; if x > 5: print('Hi') else print('Bye')",
        options: ["Hi", "Bye", "Error", "Nothing"],
        answer: 0,
        explanation: "x is 10, which is greater than 5, so 'Hi' is printed."
    },
    {
        question: "What happens if the 'if' condition is false and there's no 'else'?",
        options: ["It prints an error", "The program crashes", "Nothing is executed", "It always runs the next line"],
        answer: 2,
        explanation: "If the condition is false and there's no 'else', the block is skipped."
    },
    {
        question: "Which operator is typically used to compare two values in a condition?",
        options: ["=", "==", "!=", "++"],
        answer: 1,
        explanation: "'==' is the equality operator used to compare values."
    }
                ],
                interview_qa: [
                    {
                        question: "Can you nest if statements?",
                        answer: "Yes, you can put one if statement inside another for complex logic."
                    },
                    {
                        question: "What happens if no condition is true in an if-elif-else chain?",
                        answer: "The 'else' block (if present) is executed; otherwise, nothing happens."
                    }
                ]
            },
            {
                title: "8. What is a Loop? (for, while)",
                explanation: "Loops let you repeat actions without writing the same code over and over. Like telling your friend, \"Do 10 push-ups!\" (he repeats it 10 times). A `for` loop is usually for when you know how many times to repeat, and a `while` loop is for when you repeat as long as a condition remains true.",
                professional_answer: "A loop is a control structure that allows repeated execution of a block of code as long as a specified condition is met or for a predefined number of iterations. The `for` loop is typically used for iterating over a sequence or a fixed range, while the `while` loop continues execution as long as its condition remains true. Loops are essential for automating repetitive tasks and processing collections of data.",
                code_cpp: `// C/C++ for loop: iterates from 0 up to (but not including) 5\nfor (int i = 0; i < 5; i++) {\n    printf("%d ", i); // Prints the current value of i\n}\n// Output: 0 1 2 3 4`,
                code_python: `# Python for loop: iterates through a range of numbers\nfor i in range(5):\n    print(i, end=" ") # 'end=" "' prevents newline, prints space instead\n# Output: 0 1 2 3 4`,
                practical_title: "Printing numbers from 1 to 5:",
                practical_cpp: `// C/C++ while loop\nint i = 1;\nwhile (i <= 5) {\n    printf("%d ", i);\n    i++; // Increment i to avoid infinite loop\n}`,
                practical_python: `# Python while loop\ni = 1\nwhile i <= 5:\n    print(i, end=" ")\n    i += 1`,
                flashcard: {
                    question: "What is a loop?",
                    answer: "A structure that repeats a block of code multiple times."
                },
                quiz: [
                    {
                        question: "Which loop is best when you know the number of iterations?",
                        options: ["for", "while", "do-while", "if"],
                        answer: 0,
                        explanation: "A 'for' loop is ideal when the number of iterations is known."
                    },
                    {
                        question: "What is the output of: for (int i=0; i<3; i++) printf(\"%d \", i); ?",
                        options: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
                        answer: 0,
                        explanation: "The loop prints 0, 1, and 2."
                    },
                    {
                        question: "How does a while loop start in C?",
                        options: ["while (i <= 10) {", "while i <= 10:", "do { while (i <= 10);", "for (i = 0; i <= 10; i++) {"],
                        answer: 0,
                        explanation: "A while loop in C starts with 'while (condition) {'."
                    },
                     {
        question: "Which loop is best when you know the number of iterations?",
        options: ["for", "while", "do-while", "if"],
        answer: 0,
        explanation: "A 'for' loop is ideal when the number of iterations is known."
    },
    {
        question: "What is the output of: for (int i=0; i<3; i++) printf(\"%d \", i); ?",
        options: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        answer: 0,
        explanation: "The loop prints 0, 1, and 2."
    },
    {
        question: "How does a while loop start in C?",
        options: ["while (i <= 10) {", "while i <= 10:", "do { while (i <= 10);", "for (i = 0; i <= 10; i++) {"],
        answer: 0,
        explanation: "A while loop in C starts with 'while (condition) {'."
    },
    {
        question: "Which Python keyword starts a loop that repeats as long as a condition is true?",
        options: ["repeat", "loop", "while", "check"],
        answer: 2,
        explanation: "'while' is used in Python to run a loop while a condition is true."
    },
    {
        question: "What happens if a loop’s condition is never false?",
        options: ["The loop runs once", "The loop is skipped", "It causes an infinite loop", "It shows an error"],
        answer: 2,
        explanation: "If the loop condition is always true, the loop will run infinitely unless broken manually."
    }
                ],
                interview_qa: [
                    {
                        question: "What is an infinite loop?",
                        answer: "A loop that never ends because its condition is always true."
                    },
                    {
                        question: "How do you exit a loop early?",
                        answer: "Use the 'break' statement to exit a loop before it finishes."
                    }
                ]
            },
            {
                title: "9. What is a Function?",
                explanation: "A function is like a mini-program inside your main program. You give it a name, some input (called parameters), and it does a specific task, often giving you back some output. Think of a samosa shop: you give money (input), they make and give you a samosa (output). Functions help keep your code organized and prevent you from repeating yourself (DRY principle!).",
                professional_answer: "A function is a reusable, self-contained block of code designed to perform a specific task. It can accept inputs (known as parameters or arguments) and may produce an output (a return value). Functions promote modularity, code reusability, and simplify debugging by breaking down complex problems into smaller, manageable units.",
                code_cpp: `// C/C++ function to add two integers\nint add(int a, int b) { // 'int' before add means it returns an int\n    return a + b; // Returns the sum of a and b\n}`,
                code_python: `def add(a, b): # 'def' keyword defines a function\n    return a + b # Returns the sum of a and b`,
                practical_title: "Function to check if a number is positive:",
                practical_cpp: `// C++ function returning a boolean value\nbool isPositive(int n) { // 'bool' indicates it returns true or false\n    return n > 0;\n}`,
                practical_python: `def is_positive(n):\n    return n > 0`,
                flashcard: {
                    question: "What is a function?",
                    answer: "A reusable block of code that performs a specific task."
                },
                quiz: [
                    {
                        question: "Which keyword is used to define a function in Python?",
                        options: ["function", "def", "func", "define"],
                        answer: 1,
                        explanation: "'def' is used to define a function in Python."
                    },
                    {
                        question: "What is the return type of 'main' in C?",
                        options: ["void", "int", "char", "float"],
                        answer: 1,
                        explanation: "'main' returns an int in standard C."
                    },
                    {
                        question: "How do you call a function named 'calculate' in C?",
                        options: ["calculate()", "call calculate", "calculate[]", "execute calculate()"],
                        answer: 0,
                        explanation: "You call a function in C by using its name followed by parentheses."
                    },
                    {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        answer: 1,
        explanation: "'def' is used to define a function in Python."
    },
    {
        question: "What is the return type of 'main' in C?",
        options: ["void", "int", "char", "float"],
        answer: 1,
        explanation: "'main' returns an int in standard C."
    },
    {
        question: "How do you call a function named 'calculate' in C?",
        options: ["calculate()", "call calculate", "calculate[]", "execute calculate()"],
        answer: 0,
        explanation: "You call a function in C by using its name followed by parentheses."
    },
    {
        question: "Which of these is a benefit of using functions?",
        options: ["Increases repetition", "Makes code more complicated", "Promotes modularity", "Slows down execution"],
        answer: 2,
        explanation: "Functions promote modularity by breaking code into manageable parts."
    },
    {
        question: "What does a 'return' statement do in a function?",
        options: ["It prints the result", "It exits the program", "It returns a value from the function", "It declares a new function"],
        answer: 2,
        explanation: "'return' sends a value back to the caller of the function."
    }
                ],
                interview_qa: [
                    {
                        question: "What is a parameter?",
                        answer: "A parameter is a variable listed in a function's definition to accept input values."
                    },
                    {
                        question: "Why use functions?",
                        answer: "Functions promote code reuse, modularity, and easier debugging."
                    }
                ]
            },
            {
                title: "10. What is an Array/List?",
                explanation: "An array (or list in Python) is like a row of tiffin boxes all lined up. Each box holds one item, and you can access any box by its number (called an index, usually starting from 0). Arrays in C/C++ are typically fixed-size and hold the same type of data, while Python lists are super flexible, can grow/shrink, and hold different types of stuff.",
                professional_answer: "An array (or list in Python) is a linear data structure that stores a collection of elements, typically of the same data type, in contiguous memory locations. Elements are accessed via an index, which represents their position within the collection. While C/C++ arrays are fixed-size, Python lists are dynamic arrays that can grow or shrink and hold elements of different types, offering greater flexibility.",
                code_cpp: `// C++ Array: fixed size, elements of same type\nint arr[3] = {1, 2, 3}; // An array of 3 integers\n\n// C++ Vector: dynamic array (more flexible)\n#include <vector>\nstd::vector<int> v = {1, 2, 3}; // A vector (dynamic array) of integers`,
                code_python: `# Python List: dynamic, can hold mixed types\narr = [1, 2, 3] # A list of integers\nmixed_list = [1, "hello", 3.14] # A list with mixed types`,
                practical_title: "Storing marks of 5 students:",
                practical_cpp: `int marks[5] = {80, 75, 90, 60, 85}; // C/C++ array to store 5 integer marks`,
                practical_python: `marks = [80, 75, 90, 60, 85]  # Python list to store 5 marks`,
                flashcard: {
                    question: "What is an array?",
                    answer: "A collection of elements stored in contiguous memory locations."
                },
                quiz: [
                    {
                        question: "What is the index of the first element in a C array?",
                        options: ["0", "1", "-1", "Depends on compiler"],
                        answer: 0,
                        explanation: "Array indices start at 0 in C/C++ and Python."
                    },
                    {
                        question: "Which of these is a valid Python list?",
                        options: ["arr = [1, 2, 3]", "arr = (1, 2, 3)", "arr = {1, 2, 3}", "arr = <1, 2, 3>"],
                        answer: 0,
                        explanation: "Square brackets are used for lists in Python."
                    },
                    {
                        question: "How do you declare an array of 10 integers in C?",
                        options: ["int arr[10];", "array int[10];", "int[10] arr;", "declare arr[10] as int;"],
                        answer: 0,
                        explanation: "int arr[10]; declares an array of 10 integers in C."
                    },
                    {
        question: "What is the index of the first element in a C array?",
        options: ["0", "1", "-1", "Depends on compiler"],
        answer: 0,
        explanation: "Array indices start at 0 in C/C++ and Python."
    },
    {
        question: "Which of these is a valid Python list?",
        options: ["arr = [1, 2, 3]", "arr = (1, 2, 3)", "arr = {1, 2, 3}", "arr = <1, 2, 3>"],
        answer: 0,
        explanation: "Square brackets are used for lists in Python."
    },
    {
        question: "How do you declare an array of 10 integers in C?",
        options: ["int arr[10];", "array int[10];", "int[10] arr;", "declare arr[10] as int;"],
        answer: 0,
        explanation: "int arr[10]; declares an array of 10 integers in C."
    },
    {
        question: "What makes a Python list more flexible than a C array?",
        options: ["Lists are faster", "Lists are stored in RAM", "Lists can grow, shrink, and hold mixed types", "Lists don't need memory"],
        answer: 2,
        explanation: "Python lists are dynamic and can hold elements of different types."
    },
    {
        question: "What is the main purpose of using an array?",
        options: ["To perform complex math", "To store multiple values in a single variable", "To display text", "To take user input"],
        answer: 1,
        explanation: "Arrays store multiple values in contiguous memory using a single name."
    }
                ],
                interview_qa: [
                    {
                        question: "Can arrays hold different data types in C?",
                        answer: "No, all elements in a C array must be of the same type."
                    },
                    {
                        question: "How do you find the length of a list in Python?",
                        answer: "Use the 'len()' function."
                    }
                ]
            },
            {
                title: "11. What is a String?",
                explanation: "A string is just a bunch of characters (letters, numbers, symbols) stuck together, like your name \"Amit\", \"hello123\", or \"chai_paani\". It's how computers handle text data, whether it's a single word, a sentence, or an entire paragraph.",
                professional_answer: "A string is a data type used to represent sequences of characters. In C, strings are typically implemented as null-terminated character arrays (`char[]`), requiring manual memory management. C++ provides a more robust `std::string` class, offering various string manipulation functionalities. Python's strings are immutable sequences of Unicode characters, providing powerful built-in methods for text processing.",
                code_cpp: `// C-style string: character array terminated by '\\0'\nchar name[] = "Amit"; // String "Amit" stored as an array of characters\n\n// C++ string object: safer and easier to use\n#include <string>\nstd::string name_cpp = "Amit";`,
                code_python: `name = "Amit" # Python: strings are enclosed in quotes`,
                practical_title: "Concatenating (joining) two strings:",
                practical_cpp: `// C++: Using '+' operator for string concatenation\n#include <string>\nstd::string first = "Hello ";\nstd::string last = "World!";\nstd::string full = first + last; // Result: "Hello World!"`,
                practical_python: `first = "Hello "\nlast = "World!"\nfull = first + last  # Python: Using '+' for string concatenation\n# Result: "Hello World!"`,
                flashcard: {
                    question: "What is a string?",
                    answer: "A sequence of characters used to represent text."
                },
                quiz: [
                    {
                        question: "How do you declare a string in C?",
                        options: ["char s[] = \"abc\";", "string s = 'abc';", "str s = \"abc\";", "s = \"abc\";"],
                        answer: 0,
                        explanation: "In C, strings are character arrays."
                    },
                    {
                        question: "Are Python strings mutable?",
                        options: ["Yes", "No", "Sometimes", "Only in Python 2"],
                        answer: 1,
                        explanation: "Python strings are immutable."
                    },
                    {
                        question: "What function would you use to find the length of a string in C++?",
                        options: ["length()", "size()", "strlen()", "str.size()"],
                        answer: 2,
                        explanation: "strlen() is used to find the length of a C-style string."
                    },
                    {
        question: "How do you declare a string in C?",
        options: ["char s[] = \"abc\";", "string s = 'abc';", "str s = \"abc\";", "s = \"abc\";"],
        answer: 0,
        explanation: "In C, strings are declared as character arrays, e.g., char s[] = \"abc\";"
    },
    {
        question: "Are Python strings mutable?",
        options: ["Yes", "No", "Sometimes", "Only in Python 2"],
        answer: 1,
        explanation: "Strings in Python are immutable, meaning their content cannot be changed after creation."
    },
    {
        question: "Which C++ object provides string manipulation functions?",
        options: ["char[]", "std::string", "text", "cstring"],
        answer: 1,
        explanation: "C++ offers the std::string class with powerful string operations."
    },
    {
        question: "Which method returns the number of characters in a C++ string object?",
        options: ["length()", "size()", "strlen()", "Both length() and size()"],
        answer: 3,
        explanation: "Both length() and size() methods return the number of characters in a C++ string."
    },
    {
        question: "How would you concatenate two strings in Python?",
        options: ["Using + operator", "Using , operator", "Using join()", "Using & operator"],
        answer: 0,
        explanation: "You can concatenate strings in Python using the + operator."
    }
                ],
                interview_qa: [
                    {
                        question: "How do you concatenate strings in C++?",
                        answer: "Use the '+' operator with std::string objects."
                    },
                    {
                        question: "What is a null-terminated string?",
                        answer: "A string in C that ends with a special '\0' character to mark its end."
                    }
                ]
            },
            {
                title: "12. What is a Pointer?",
                explanation: "A pointer is like a slip of paper with an address written on it. It doesn't hold the actual data, but tells you *where* that data is stored in the computer's memory. This lets you directly mess with memory. (Bhai, Python mein yeh nahi hota! Python handles all the memory stuff for you automatically, so you don't directly deal with pointers.)",
                professional_answer: "A pointer is a variable that stores the memory address of another variable. Pointers are extensively used in C and C++ for direct memory access, dynamic memory allocation, and efficient array manipulation. They offer fine-grained control over memory but also introduce risks like memory leaks and segmentation faults. Python, being a higher-level language, abstracts away direct memory management; variables in Python are references to objects, not pointers to memory addresses in the C/C++ sense.",
                code_cpp: `int var = 10; // An integer variable\nint *ptr = &var; // 'ptr' is a pointer storing the memory address of 'var'\nprintf("Value of var: %d\\n", *ptr); // '*ptr' dereferences the pointer, giving the value at that address`,
                code_python: `# Python does not have explicit pointers in the C/C++ sense.\n# All variables in Python are references to objects, and the interpreter handles memory management automatically.\n# This simplifies programming but removes direct memory access.`,
                practical_title: "Swapping two numbers using pointers (C/C++), and Python's way:",
                practical_cpp: `void swap(int *a, int *b) { // Function takes pointers to integers\n    int temp = *a; // Store value at address 'a'\n    *a = *b;       // Put value from address 'b' into address 'a'\n    *b = temp;     // Put stored value into address 'b'\n}`,
                practical_python: `# In Python, swapping variables is much simpler due to its nature of handling references:\na = 5\nb = 10\na, b = b, a # Swaps the values of a and b directly\n# a is now 10, b is now 5`,
                flashcard: {
                    question: "What is a pointer?",
                    answer: "A variable that stores the memory address of another variable."
                },
                quiz: [
                    {
                        question: "Which symbol is used to declare a pointer in C?",
                        options: ["&", "*", "@", "#"],
                        answer: 1,
                        explanation: "The '*' symbol is used to declare a pointer."
                    },
                    {
                        question: "Does Python have explicit pointers?",
                        options: ["Yes", "No", "Only in Python 2", "Only for lists"],
                        answer: 1,
                        explanation: "Python abstracts away pointers; you don't use them directly."
                    },
                    {
                        question: "What does this declaration mean? int *p;",
                        options: ["p is an integer", "p is a pointer to an integer", "p is a pointer to a pointer", "None of the above"],
                        answer: 1,
                        explanation: "int *p; means p is a pointer that points to an integer variable."
                    },
                    {
        question: "Which symbol is used to declare a pointer in C?",
        options: ["&", "*", "@", "#"],
        answer: 1,
        explanation: "The '*' symbol is used to declare a pointer."
    },
    {
        question: "Does Python have explicit pointers?",
        options: ["Yes", "No", "Only in Python 2", "Only for lists"],
        answer: 1,
        explanation: "Python abstracts away pointers; you don't use them directly."
    },
    {
        question: "What does this declaration mean? int *p;",
        options: ["p is an integer", "p is a pointer to an integer", "p is a pointer to a pointer", "None of the above"],
        answer: 1,
        explanation: "int *p; means p is a pointer that points to an integer variable."
    },
    {
        question: "Which operator gives the address of a variable in C?",
        options: ["*", "&", "%", "$"],
        answer: 1,
        explanation: "The '&' operator returns the memory address of a variable."
    },
    {
        question: "What does *ptr do in C?",
        options: ["Declares a pointer", "Accesses the address", "Accesses the value stored at the pointer’s address", "Converts an integer to a pointer"],
        answer: 2,
        explanation: "*ptr is used to dereference the pointer and access the value at the memory address it points to."
    }

                ],
                interview_qa: [
                    {
                        question: "What is pointer arithmetic?",
                        answer: "Performing operations (like increment/decrement) on pointers to navigate memory."
                    },
                    {
                        question: "What is a null pointer?",
                        answer: "A pointer that doesn't point to any valid memory location (usually set to NULL or nullptr)."
                    }
                ]
            },
            {
                title: "13. What is a Class and Object?",
                explanation: "Think of a class as a blueprint or a recipe (e.g., a recipe for making samosas). It describes what kind of properties (like filling, shape) and behaviors (like 'fry' or 'eat') something will have. An object is the actual thing you make from that blueprint (e.g., an actual, edible samosa). In programming, it's fundamental to Object-Oriented Programming (OOP) for organizing your code.",
                professional_answer: "A class is a user-defined blueprint or template for creating objects. It encapsulates data (attributes or properties) and methods (functions) that operate on that data. An object is an instance of a class, representing a concrete entity created from the class blueprint. Classes and objects are fundamental concepts in object-oriented programming (OOP) in languages like C++ and Python, promoting modularity, reusability, and data abstraction.",
                code_cpp: `class Car { // Define a Class 'Car'\n  public:\n    std::string color; // Attribute: color of the car\n    void accelerate() { /*...*/ } // Method: car can accelerate\n};\n\nCar myCar; // Create an Object 'myCar' from the 'Car' Class\nmyCar.color = "red"; // Access and set the 'color' attribute\nmyCar.accelerate(); // Call the 'accelerate' method`,
                code_python: `class Car: # Define a Class 'Car'\n    def __init__(self, color): # Constructor: initializes object attributes\n        self.color = color     # Attribute: color of the car\n\n    def accelerate(self): # Method: car can accelerate\n        pass # Placeholder for acceleration logic\n\nmy_car = Car("red") # Create an Object 'my_car' from the 'Car' Class, setting color\nmy_car.accelerate() # Call the 'accelerate' method`,
                practical_title: "Class for a Student, representing student data:",
                practical_cpp: `class Student { // Class definition for Student\n  public:\n    int roll; // Roll number attribute\n    std::string name; // Name attribute\n};\n\nStudent s; // Create a Student object 's'\ns.roll = 1; // Set its roll number\ns.name = "Amit"; // Set its name`,
                practical_python: `class Student: # Class definition for Student\n    def __init__(self, roll, name): # Constructor\n        self.roll = roll\n        self.name = name\n\ns = Student(1, "Amit") # Create a Student object 's' with initial roll and name`,
                flashcard: {
                    question: "What is a class?",
                    answer: "A blueprint for creating objects (instances) with specific attributes and methods."
                },
                quiz: [
                    {
                        question: "Which keyword is used to define a class in C++?",
                        options: ["object", "class", "struct", "define"],
                        answer: 1,
                        explanation: "'class' is used to define a class in C++."
                    },
                    {
                        question: "What is an object?",
                        options: ["A variable", "A function", "An instance of a class", "A data type"],
                        answer: 2,
                        explanation: "An object is an instance of a class."
                    },
                    {
                        question: "How do you access an object's attribute in Python?",
                        options: [".attribute", "->attribute", "attribute()", "get.attribute()"],
                        answer: 0,
                        explanation: "You access an object's attribute in Python using the dot (.) notation."
                    },
                    {
        question: "Which keyword is used to define a class in C++?",
        options: ["object", "class", "struct", "define"],
        answer: 1,
        explanation: "'class' is used to define a class in C++."
    },
    {
        question: "What is an object?",
        options: ["A variable", "A function", "An instance of a class", "A data type"],
        answer: 2,
        explanation: "An object is an instance of a class."
    },
    {
        question: "How do you access an object's attribute in Python?",
        options: [".attribute", "->attribute", "attribute()", "get.attribute()"],
        answer: 0,
        explanation: "You access an object's attribute in Python using the dot (.) notation."
    },
    {
        question: "What is the purpose of the __init__ method in Python classes?",
        options: ["To delete the object", "To define attributes", "To initialize the object", "To print values"],
        answer: 2,
        explanation: "__init__ is a constructor method used to initialize the object when it is created."
    },
    {
        question: "Which access specifier allows members to be accessed only within the class in C++?",
        options: ["public", "private", "protected", "default"],
        answer: 1,
        explanation: "The 'private' access specifier restricts access to class members from outside the class."
    }],
                interview_qa: [
                    {
                        question: "What is encapsulation?",
                        answer: "Encapsulation is bundling data and methods that operate on that data within a class."
                    },
                    {
                        question: "Can you have multiple objects from the same class?",
                        answer: "Yes, you can create many objects from a single class blueprint."
                    }
                ]
            },
            {
                title: "14. What is Inheritance?",
                explanation: "Inheritance lets a class (child) acquire properties and behaviors from another class (parent). It's like inheriting traits from your parents! This saves you from writing the same code again and again.",
                professional_answer: "Inheritance is an OOP mechanism where a new class (derived/child) is created from an existing class (base/parent), inheriting its attributes and methods. It promotes code reuse and establishes an 'is-a' relationship.",
                code_cpp: `class Animal { public: void eat() {} };\nclass Dog : public Animal { public: void bark() {} };`,
                code_python: `class Animal:\n    def eat(self): pass\nclass Dog(Animal):\n    def bark(self): pass`,
                practical_title: "Dog inherits eat() from Animal:",
                practical_cpp: `Dog d;\nd.eat(); // inherited\nd.bark(); // own method`,
                practical_python: `d = Dog()\nd.eat()\nd.bark()`,
                flashcard: {
                    question: "What is inheritance?",
                    answer: "A class acquiring properties and behaviors from another class."
                },
                quiz: [
                    {
                        question: "Which symbol is used for inheritance in C++?",
                        options: [":", "->", "::", "#"],
                        answer: 0,
                        explanation: "':' is used for inheritance in C++."
                    },
                    {
                        question: "Can a child class override parent methods?",
                        options: ["Yes", "No", "Only in Python", "Only in C++"],
                        answer: 0,
                        explanation: "Child classes can override parent methods in both C++ and Python."
                    },
                    {
        question: "Which symbol is used for inheritance in C++?",
        options: [":", "->", "::", "#"],
        answer: 0,
        explanation: "':' is used for inheritance in C++."
    },
    {
        question: "Can a child class override parent methods?",
        options: ["Yes", "No", "Only in Python", "Only in C++"],
        answer: 0,
        explanation: "Child classes can override parent methods in both C++ and Python."
    },
    {
        question: "What type of relationship does inheritance establish?",
        options: ["has-a", "is-a", "uses-a", "belongs-to"],
        answer: 1,
        explanation: "Inheritance creates an 'is-a' relationship between child and parent classes."
    },
    {
        question: "Which keyword is used in Python to create a derived class?",
        options: ["extends", "inherits", "class", "super"],
        answer: 2,
        explanation: "'class' is used in Python to define both base and derived classes."
    },
    {
        question: "What is the base class in the following code? class Dog(Animal):",
        options: ["Dog", "Animal", "Base", "None"],
        answer: 1,
        explanation: "The base (parent) class is 'Animal'."
    }
                ],
                interview_qa: [
                    {
                        question: "What is a base class?",
                        answer: "The parent class from which properties are inherited."
                    },
                    {
                        question: "What is the main benefit of inheritance?",
                        answer: "Code reuse and hierarchical organization."
                    }
                ]
            },
            {
                title: "15. What is the difference between Compilation and Interpretation?",
                explanation: "Compilation is like cooking the whole meal first, then serving. You prepare everything (translate all code to machine language) *before* anyone eats. Interpretation is like cooking and serving one bite at a time. The code is translated and run line by line. C/C++ are compiled, while Python is interpreted.",
                professional_answer: "Compilation is a process where the entire source code of a program is translated into machine code or an intermediate bytecode by a compiler *before* execution. This results in an executable file that can run independently and typically offers faster execution. Interpretation, on the other hand, involves executing code line by line at runtime by an interpreter, without a prior complete translation step. Interpreted languages often offer greater flexibility and easier debugging.",
                code_cpp: `// C/C++ are compiled languages.\n// You first run a compiler (like 'g++') to translate all your source code\n// into an executable file, which you then run separately.\n// Command: g++ my_program.cpp -o my_program\n// Then: ./my_program`,
                code_python: `# Python is an interpreted language.\n# You run the script directly using the Python interpreter.\n# The interpreter reads and executes the code line by line.\n# Command: python my_script.py`,
                practical_title: "How to run a simple program:",
                practical_cpp: `// For C code (e.g., 'hello.c'):\ngcc hello.c -o hello_executable\n./hello_executable`,
                practical_python: `// For Python code (e.g., 'hello.py'):\npython hello.py`,
                flashcard: {
                    question: "What is compilation?",
                    answer: "Translating the entire source code to machine code before execution."
                },
                quiz: [
                    {
                        question: "Which language is typically compiled?",
                        options: ["Python", "C", "JavaScript", "HTML"],
                        answer: 1,
                        explanation: "C is a compiled language."
                    },
                    {
                        question: "What is the main advantage of interpretation?",
                        options: ["Faster execution", "Easier debugging", "More memory", "None"],
                        answer: 1,
                        explanation: "Interpreted languages are easier to debug and modify quickly."
                    },
                    {
                        question: "Which of these is a compiled language?",
                        options: ["Python", "C++", "JavaScript", "Ruby"],
                        answer: 1,
                        explanation: "C++ is a compiled language, unlike Python and JavaScript which are interpreted."
                    },
                    {
    question: "What is the output of a compiler?",
    options: ["Source code", "Executable file", "Bytecode", "Syntax tree"],
    answer: 1,
    explanation: "A compiler translates source code into an executable file (machine code)."
},
{
    question: "Which runs line by line at runtime?",
    options: ["Compiler", "Assembler", "Interpreter", "Linker"],
    answer: 2,
    explanation: "An interpreter executes code line by line during runtime."
},
{
    question: "What is the main advantage of compilation?",
    options: ["Faster execution", "Easier debugging", "More memory", "None"],
    answer: 0,
    explanation: "Compiled code generally runs faster than interpreted code."
}
                ],
                interview_qa: [
                    {
                        question: "Can a language be both compiled and interpreted?",
                        answer: "Yes, some languages like Java use both compilation and interpretation steps."
                    },
                    {
                        question: "What is bytecode?",
                        answer: "Bytecode is an intermediate code between source and machine code, often used in interpreted languages."
                    }
                ]
            },
            {
                title: "16. What is the difference between C, C++, and Python in one line?",
                explanation: "Think of them as different tools for different jobs. C is your old-school, super fast, but basic screwdriver (low-level). C++ is like that screwdriver but with a whole toolbox attached (adds OOP). Python is your modern, easy-to-use power drill (high-level, very flexible).",
                professional_answer: "C is a procedural, low-level language providing direct memory access and fine-grained control; C++ is an extension of C that primarily adds object-oriented programming (OOP) features and enhanced abstraction for complex systems; Python is a high-level, interpreted language known for its simplicity, readability, vast standard library, and rapid development capabilities.",
                code_cpp: `// C: Procedural, direct memory control\nprintf("Hello from C\\n");\n\n// C++: Object-Oriented, system programming\n#include <iostream>\nstd::cout << "Hello from C++" << std::endl;`,
                code_python: `print("Hello from Python")  # Python: High-level, interpreted, versatile`,
                practical_title: "Which language to choose for a project?",
                practical_cpp: `// C/C++: Ideal for operating systems, embedded systems, game engines, and performance-critical applications.`,
                practical_python: `// Python: Excellent for web development (backend), data science, machine learning, scripting, and automation.`,
                flashcard: {
                    question: "Which language is best for rapid prototyping?",
                    answer: "Python, due to its simplicity and flexibility."
                },
                quiz: [
                    {
                        question: "Which language is object-oriented by design?",
                        options: ["C", "C++", "Python", "Both C++ and Python"],
                        answer: 3,
                        explanation: "Both C++ and Python support object-oriented programming."
                    },
                    {
                        question: "Which language is considered low-level?",
                        options: ["C", "C++", "Python", "Java"],
                        answer: 0,
                        explanation: "C is considered a low-level language."
                    },
                    {
                        question: "What feature does C++ have that C doesn't?",
                        options: ["Classes", "Functions", "Pointers", "Preprocessor directives"],
                        answer: 0,
                        explanation: "C++ supports classes for object-oriented programming, which C lacks."
                    },
                    {
    question: "Which language is most suitable for beginners due to its readability?",
    options: ["C", "C++", "Python", "Assembly"],
    answer: 2,
    explanation: "Python has a clean syntax that's easier for beginners to read and write."
},
{
    question: "Which language requires manual memory management?",
    options: ["Python", "C++", "C", "Both C and C++"],
    answer: 3,
    explanation: "Both C and C++ require manual memory management using pointers."
}

                ],
                interview_qa: [
                    {
                        question: "Why is Python preferred for beginners?",
                        answer: "Python has simple syntax and is easy to read and write."
                    },
                    {
                        question: "Where is C still used today?",
                        answer: "C is used in embedded systems, operating systems, and performance-critical applications."
                    }
                ]
            },
            {
                title: "17. What is a Comment?",
                explanation: "A comment is like a sticky note you stick on your code—it helps *you* (and other programmers) remember what's going on or understand complex parts, but the computer completely ignores it when it runs the program. It's purely for human readability and documentation.",
                professional_answer: "A comment is a non-executable line or block of text within the source code used by programmers to explain or annotate logic, provide context, or temporarily disable code for debugging purposes. Compilers and interpreters ignore comments during program execution, making them crucial for improving code readability, maintainability, and collaboration.",
                code_cpp: `// This is a single-line comment in C/C++\n\n/*\n This is a\n multi-line comment\n in C/C++.\n*/`,
                code_python: `# This is a single-line comment in Python\n\n# Multi-line comments in Python are usually done with multiple single-line comments\n# Or, often, as docstrings for functions/classes (but that's different)`,
                practical_title: "Using comments to explain calculations:",
                practical_cpp: `int tax = income * 0.1; // Calculate 10% tax on income`,
                practical_python: `# Calculate 10% tax on income\ntax = income * 0.1`,
                flashcard: {
                    question: "What is a comment?",
                    answer: "A note in the code ignored by the compiler/interpreter."
                },
                quiz: [
                    {
                        question: "Which symbol starts a single-line comment in C++?",
                        options: ["//", "#", "/*", "<!--"],
                        answer: 0,
                        explanation: "'//' starts a single-line comment in C++."
                    },
                    {
                        question: "Are comments executed by the program?",
                        options: ["Yes", "No", "Only in Python", "Only in C"],
                        answer: 1,
                        explanation: "Comments are ignored by the compiler/interpreter."
                    },
                    {
                        question: "What will this print? printf('Hello'); /* Comment here */ printf('World');",
                        options: ["HelloWorld", "Hello World", "Error", "Nothing"],
                        answer: 1,
                        explanation: "The comment does not affect the execution; it prints 'Hello World'."
                    }
                ],
                interview_qa: [
                    {
                        question: "Why are comments important?",
                        answer: "They help explain code, making it easier to understand and maintain."
                    },
                    {
                        question: "Can comments be used to disable code?",
                        answer: "Yes, you can comment out code to prevent it from running."
                    }
                ]
            },
            {
                title: "18. What is a Header File / Import Statement?",
                explanation: "Header files (in C/C++) or import statements (in Python) are like calling your friend for help—you bring in extra tools or code written by others (libraries or modules) into your program. This saves you from writing everything from scratch and lets you use powerful, pre-built functionalities.",
                professional_answer: "A header file (in C/C++) contains declarations for functions, classes, and variables that are defined elsewhere, allowing the compiler to perform type checking and link the program correctly. An import statement (in Python and other languages) allows a program to bring in and utilize external code modules or packages, providing access to their defined functionalities. Both mechanisms promote code reusability and modular programming.",
                code_cpp: `// C: Include standard input/output functions\n#include <stdio.h>\n\n// C++: Include input/output streams\n#include <iostream>`,
                code_python: `import math # Imports the 'math' module to use mathematical functions\nfrom datetime import date # Imports 'date' specifically from 'datetime' module`,
                practical_title: "Including a math library to use square root:",
                practical_cpp: `// C++: Include <cmath> for mathematical functions\n#include <cmath>\ndouble result = sqrt(25.0); // Uses sqrt function from cmath`,
                practical_python: `import math # Import the math module\nresult = math.sqrt(25) # Use the sqrt function from the math module`,
                flashcard: {
                    question: "What does an import statement do?",
                    answer: "It brings in external code or libraries into your program."
                },
                quiz: [
                    {
                        question: "Which is a valid header file in C?",
                        options: ["#include <stdio.h>", "import stdio", "#header stdio.h", "include stdio.h"],
                        answer: 0,
                        explanation: "'#include <stdio.h>' is the correct syntax."
                    },
                    {
                        question: "How do you import a module in Python?",
                        options: ["#include <math>", "import math", "using math", "require 'math'"],
                        answer: 1,
                        explanation: "'import math' is the correct way in Python."
                    },
                    {
                        question: "What is the purpose of #include <iostream> in C++?",
                        options: ["To include standard input/output stream objects", "To define the main function", "To perform mathematical operations", "To include string handling functions"],
                        answer: 0,
                        explanation: "#include <iostream> is used to include the standard input/output stream objects in C++."
                    },
                    {
    question: "What happens if you forget to include a necessary header file in C?",
    options: ["Code runs fine", "Compiler will throw an error", "It will use default settings", "Only warnings appear"],
    answer: 1,
    explanation: "The compiler throws an error because it doesn’t recognize the functions you’re using without the header."
},
{
    question: "Which Python statement imports only the 'sqrt' function from the math module?",
    options: ["import sqrt from math", "from math import sqrt", "include math.sqrt", "math.sqrt = import"],
    answer: 1,
    explanation: "'from math import sqrt' imports only the sqrt function from the math module."
}

                ],
                interview_qa: [
                    {
                        question: "Why use header files?",
                        answer: "They allow code reuse and modular programming by separating declarations from definitions."
                    },
                    {
                        question: "What happens if you import the same module twice in Python?",
                        answer: "Python only loads a module once per program run, so no harm is done."
                    }
                ]
            },
            {
                title: "19. What is a Syntax Error?",
                explanation: "A syntax error is like a spelling or grammar mistake in your code—the computer gets totally confused because you broke its specific rules and simply refuses to work. Your program won't even start running; the compiler or interpreter will usually yell at you (with an error message!) and point to where the mistake is.",
                professional_answer: "A syntax error occurs when code violates the predefined grammatical rules or structural conventions of the programming language. This prevents the compiler from successfully translating (or the interpreter from understanding) the source code, thus halting program compilation or execution. Common examples include missing semicolons, unmatched parentheses, or incorrect keyword usage.",
                code_cpp: `printf("Hello, World!" // Missing closing parenthesis and semicolon\n// Error: expected ')' before ';' token`,
                code_python: `print("Hello, World!"  # Missing closing parenthesis\n# SyntaxError: unexpected EOF while parsing`,
                practical_title: "Common mistakes that cause syntax errors:",
                practical_cpp: `int a = 5 // Error: missing semicolon at end of statement`,
                practical_python: `if True # Missing colon after the condition\n    print("Yes")  # SyntaxError: expected ':'`,
                flashcard: {
                    question: "What is a syntax error?",
                    answer: "A mistake in code that breaks the language's rules."
                },
                quiz: [
                    {
                        question: "What happens when a syntax error is found?",
                        options: ["The program runs with warnings", "The program stops compiling/interpreting", "It is ignored", "It prints 'null'"],
                        answer: 1,
                        explanation: "A syntax error prevents the program from running."
                    },
                    {
                        question: "Which of these is a syntax error in Python?",
                        options: ["print('Hello')", "if x == 5:", "for i in range(5)", "x = 10"],
                        answer: 2,
                        explanation: "Missing colon after 'for' is a syntax error."
                    },
                    {
                        question: "How do you fix a syntax error?",
                        options: ["By ignoring it", "By rewriting the code", "By using a debugger", "By adding comments"],
                        answer: 1,
                        explanation: "You fix a syntax error by correcting the code according to the language rules."
                    },
                    {
    question: "Which of the following is a syntax error in C?",
    options: [
        "int x = 5;",
        "printf(\"%d\", x);",
        "if (x > 3) printf(\"Hi\");",
        "int y = 5",
    ],
    answer: 3,
    explanation: "Missing semicolon after variable declaration is a syntax error in C."
},
{
    question: "What kind of error is caused by forgetting a closing parenthesis in Python?",
    options: [
        "Runtime Error",
        "Logical Error",
        "Syntax Error",
        "Type Error"
    ],
    answer: 2,
    explanation: "Forgetting a closing parenthesis causes a syntax error because it breaks the language's structure."
}

                ],
                interview_qa: [
                    {
                        question: "How can you avoid syntax errors?",
                        answer: "By carefully following the language's grammar and using code editors with syntax highlighting."
                    },
                    {
                        question: "What is a common cause of syntax errors in C?",
                        answer: "Missing semicolons at the end of statements."
                    }
                ]
            },
            {
  "title": "20. What is the output of basic programs?",
  "explanation": "This question is all about tracing code: reading it line by line and figuring out exactly what it *does* and what it will show or produce. It tests your basic understanding of how operations work and how variables change values.",
  "professional_answer": "The output of a program is the tangible result produced by the program's execution. This typically involves displaying values, messages, or other processed data to the user on a console, graphical interface, or by writing to a file or other external system. Determining the output requires a clear understanding of the program's logic, data flow, and execution path.",
  "code_cpp": "int a = 5, b = 3;\nprintf(\"%d\", a + b); // Prints the sum of a and b\n// Output: 8",
  "code_python": "a = 5\nb = 3\nprint(a + b) # Prints the sum of a and b\n# Output: 8",
  "practical_title": "Multiplying two numbers and printing the result:",
  "practical_cpp": "int a = 4, b = 5;\nprintf(\"%d\", a * b); // Multiplies a and b, then prints the result\n// Output: 20",
  "practical_python": "a = 4\nb = 5\nprint(a * b)  # Multiplies a and b, then prints the result\n# Output: 20",
  "flashcard": {
    "question": "What does 'output' mean in programming?",
    "answer": "The result produced by running a program."
  },
  "quiz": [
    {
      "question": "What is the output of: int a = 2, b = 3; printf(\"%d\", a + b); ?",
      "options": ["5", "6", "23", "Error"],
      "answer": 0,
      "explanation": "2 + 3 = 5, so '5' is printed."
    },
    {
      "question": "What is the output of: print(2 * 3) in Python?",
      "options": ["5", "6", "23", "Error"],
      "answer": 1,
      "explanation": "2 * 3 = 6, so '6' is printed."
    },
    {
      "question": "What will this print? int x = 10; printf(\"%d\", x++);",
      "options": ["10", "11", "Error", "Nothing"],
      "answer": 0,
      "explanation": "x++ prints the value before incrementing, so it prints 10."
    },
    {
      "question": "What is the output of: a = 10; b = 2; print(a // b)?",
      "options": ["5", "5.0", "5.00", "Error"],
      "answer": 0,
      "explanation": "Floor division 10 // 2 is 5."
    },
    {
      "question": "What will this C code output? int a = 3, b = 2; printf(\"%d\", a * b + 1);",
      "options": ["7", "6", "5", "Error"],
      "answer": 0,
      "explanation": "3 * 2 + 1 = 7."
    },
    {
      "question": "Output of: x = 4; x += 2; print(x)?",
      "options": ["4", "2", "6", "Error"],
      "answer": 2,
      "explanation": "x += 2 increases x from 4 to 6."
    },
    {
      "question": "What is printed: int a = 1; printf(\"%d\", ++a);",
      "options": ["1", "2", "Error", "Undefined"],
      "answer": 1,
      "explanation": "++a pre-increments a to 2 before printing."
    },
    {
      "question": "Python output: print(\"Hello\" + \"World\")?",
      "options": ["HelloWorld", "Hello World", "Hello+World", "Error"],
      "answer": 0,
      "explanation": "String concatenation gives 'HelloWorld'."
    }
  ],
  "interview_qa": [
    {
      "question": "How do you predict the output of a program?",
      "answer": "By tracing the code line by line and understanding variable changes."
    },
    {
      "question": "Why is it important to know the output?",
      "answer": "It helps verify that your code behaves as expected."
    },
    {
      "question": "Can two different programs give the same output?",
      "answer": "Yes, different logic or syntax can produce the same result."
    },
    {
      "question": "Does syntax affect the output?",
      "answer": "Yes. Syntax errors prevent any output, and even small mistakes can change behavior."
    },
    {
      "question": "What tools can help you check output?",
      "answer": "Debuggers, print statements, IDEs, and online compilers help trace and verify output."
    }
  ]
},
            {
                title: "21. What is Encapsulation?",
                explanation: "Encapsulation means bundling data (variables) and methods (functions) that work on that data into a single unit, called a class. It helps protect the data from outside interference and misuse. Think of it as putting your valuables in a locker—you control who can access them!",
                professional_answer: "Encapsulation is an OOP principle that restricts direct access to some of an object's components, usually by making variables private and providing public getter/setter methods. This promotes data hiding, modularity, and maintainability.",
                code_cpp: `class Student {\n  private:\n    int marks; // private data\n  public:\n    void setMarks(int m) { marks = m; } // public method\n    int getMarks() { return marks; }\n};`,
                code_python: `class Student:\n    def __init__(self):\n        self.__marks = 0 # private variable\n    def set_marks(self, m):\n        self.__marks = m\n    def get_marks(self):\n        return self.__marks`,
                practical_title: "Protecting student marks from direct modification:",
                practical_cpp: `Student s;\ns.setMarks(95);\nprintf(\"Marks: %d\\n\", s.getMarks());`,
                practical_python: `s = Student()\ns.set_marks(95)\nprint(\"Marks:\", s.get_marks())`,
                flashcard: {
                    question: "What is encapsulation?",
                    answer: "Bundling data and methods together and restricting direct access to some components."
                },
                quiz: [
                    {
    question: "Which keyword is used to restrict access to class members in C++?",
    options: ["public", "private", "protected", "static"],
    answer: 1,
    explanation: "'private' restricts access to class members."
  },
  {
    question: "How do you make a variable private in Python?",
    options: ["Use '__' before the name", "Use 'private' keyword", "Use '#'", "You can't"],
    answer: 0,
    explanation: "Prefixing with '__' makes it private in Python."
  },
  {
    question: "What is encapsulation?",
    options: [
      "A technique to inherit behavior from another class",
      "A process to execute functions in a loop",
      "Bundling data and functions together while hiding implementation details",
      "A way to declare global variables"
    ],
    answer: 2,
    explanation: "Encapsulation combines data and methods while restricting direct access to internal details."
  },
  {
    question: "Which of the following is NOT an advantage of encapsulation?",
    options: ["Code modularity", "Code reusability", "Data hiding", "Increased memory usage"],
    answer: 3,
    explanation: "Encapsulation helps reduce complexity, not increase memory usage."
  },
  {
    question: "Which access specifier allows access only within the same class?",
    options: ["public", "protected", "private", "global"],
    answer: 2,
    explanation: "'private' restricts access to the members of the same class only."
  },
  {
    question: "What do getters and setters do in encapsulation?",
    options: [
      "Initialize the class",
      "Modify inheritance behavior",
      "Provide controlled access to private variables",
      "Compile the code"
    ],
    answer: 2,
    explanation: "Getters and setters allow controlled access to private members."
  },
  {
    question: "Which of the following best supports encapsulation in Python?",
    options: [
      "Using global variables",
      "Using '__' prefix for private variables",
      "Using inline functions",
      "Avoiding class usage"
    ],
    answer: 1,
    explanation: "Prefixing with '__' makes variables private to the class."
  },
  {
    question: "What happens if you try to access a private variable directly in Python?",
    options: [
      "It prints the value",
      "It raises an AttributeError",
      "It works only in Python 2",
      "The variable gets converted to string"
    ],
    answer: 1,
    explanation: "Accessing a private variable directly raises an AttributeError."
  }
                ],
                interview_qa: [
                    {
                        question: "Why is encapsulation important?",
                        answer: "It protects data, improves security, and makes code easier to maintain."
                    },
                    {
                        question: "How do you access private data?",
                        answer: "Through public getter and setter methods."
                    }
                ]
            },
            {
                title: "22. What is Inheritance?",
                explanation: "Inheritance lets a class (child) acquire properties and behaviors from another class (parent). It's like inheriting traits from your parents! This saves you from writing the same code again and again.",
                professional_answer: "Inheritance is an OOP mechanism where a new class (derived/child) is created from an existing class (base/parent), inheriting its attributes and methods. It promotes code reuse and establishes an 'is-a' relationship.",
                code_cpp: `class Animal { public: void eat() {} };\nclass Dog : public Animal { public: void bark() {} };`,
                code_python: `class Animal:\n    def eat(self): pass\nclass Dog(Animal):\n    def bark(self): pass`,
                practical_title: "Dog inherits eat() from Animal:",
                practical_cpp: `Dog d;\nd.eat(); // inherited\nd.bark(); // own method`,
                practical_python: `d = Dog()\nd.eat()\nd.bark()`,
                flashcard: {
                    question: "What is inheritance?",
                    answer: "A class acquiring properties and behaviors from another class."
                },
                quiz: [
                    {
    question: "Which symbol is used for inheritance in C++?",
    options: [":", "->", "::", "#"],
    answer: 0,
    explanation: "':' is used for inheritance in C++."
  },
  {
    question: "Can a child class override parent methods?",
    options: ["Yes", "No", "Only in Python", "Only in C++"],
    answer: 0,
    explanation: "Child classes can override parent methods in both C++ and Python."
  },
  {
    question: "Which keyword is used to define a class in Python?",
    options: ["define", "struct", "class", "object"],
    answer: 2,
    explanation: "'class' is used to define a class in Python."
  },
  {
    question: "What does inheritance promote in programming?",
    options: ["Code repetition", "Code reuse", "Compilation speed", "Slower execution"],
    answer: 1,
    explanation: "Inheritance promotes code reuse by allowing child classes to use parent functionality."
  },
  {
    question: "Which of the following best describes inheritance?",
    options: [
      "Copying code from one class to another",
      "A way to prevent method overriding",
      "A class acquiring properties and behaviors from another class",
      "A syntax rule in C++"
    ],
    answer: 2,
    explanation: "Inheritance allows a child class to acquire properties from a parent class."
  },
  {
    question: "In Python, what goes inside the parentheses of a class to inherit another?",
    options: ["The parent class name", "self", "init", "void"],
    answer: 0,
    explanation: "The name of the parent class goes inside the parentheses of the child class definition."
  },
  {
    question: "Which type of inheritance allows one class to inherit from multiple classes?",
    options: ["Multilevel", "Multiple", "Hierarchical", "Single"],
    answer: 1,
    explanation: "Multiple inheritance allows one class to inherit from more than one base class."
  },
  {
    question: "What is the output if 'Dog' inherits from 'Animal' and both have a 'speak()' method, and Dog's method is called?",
    options: [
      "Animal's speak() runs",
      "Dog's speak() runs",
      "Both run",
      "It gives an error"
    ],
    answer: 1,
    explanation: "Dog's method overrides the one from Animal, so Dog's speak() runs."
  },
                ],
                interview_qa: [
                    {
                        question: "What is a base class?",
                        answer: "The parent class from which properties are inherited."
                    },
                    {
                        question: "What is the main benefit of inheritance?",
                        answer: "Code reuse and hierarchical organization."
                    }
                ]
            },
            {
                title: "23. What is Polymorphism?",
                explanation: "Polymorphism means 'many forms.' It lets you use the same function or method name to do different things depending on the object. For example, a 'draw()' function might draw a circle or a square depending on the object.",
                professional_answer: "Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms. Types: compile-time (overloading) and runtime (overriding).",
                code_cpp: `class Animal { public: virtual void speak() { printf(\"Animal\n\"); } };\nclass Dog : public Animal { public: void speak() override { printf(\"Dog\n\"); } };\nAnimal *a = new Dog();\na->speak(); // Output: Dog` ,
                code_python: `class Animal:\n    def speak(self): print(\"Animal\")\nclass Dog(Animal):\n    def speak(self): print(\"Dog\")\na = Dog()\na.speak() # Output: Dog`,
                practical_title: "Calling the same method on different objects:",
                practical_cpp: `Animal *a1 = new Animal();\nAnimal *a2 = new Dog();\na1->speak(); // Animal\na2->speak(); // Dog`,
                practical_python: `a1 = Animal()\na2 = Dog()\na1.speak() # Animal\na2.speak() # Dog`,
                flashcard: {
                    question: "What is polymorphism?",
                    answer: "Different objects responding to the same function call in different ways."
                },
                quiz: [
                    {
    question: "Which of these best shows polymorphism?",
    options: ["int x = 5;", "Dog and Cat both have 'speak()'", "int arr[5];", "void print(int)"],
    answer: 1,
    explanation: "Dog and Cat both having 'speak()' is polymorphism."
  },
  {
    question: "What are the two main types of polymorphism?",
    options: ["Static and dynamic", "Public and private", "Base and derived", "None"],
    answer: 0,
    explanation: "Static (compile-time) and dynamic (runtime)."
  },
  {
    question: "Which concept allows a method to act differently based on the object?",
    options: ["Abstraction", "Inheritance", "Polymorphism", "Encapsulation"],
    answer: 2,
    explanation: "Polymorphism allows the same method to behave differently based on the object."
  },
  {
    question: "Which keyword is used in C++ to achieve runtime polymorphism?",
    options: ["virtual", "final", "override", "public"],
    answer: 0,
    explanation: "The 'virtual' keyword enables runtime polymorphism in C++."
  },
  {
    question: "In Python, how is polymorphism commonly achieved?",
    options: ["Method overloading", "Method overriding", "Pointers", "Header files"],
    answer: 1,
    explanation: "Python supports runtime polymorphism through method overriding."
  },
  {
    question: "What does the 'override' keyword indicate in C++?",
    options: ["Create a new function", "Access a private method", "Override a base class method", "Copy a class"],
    answer: 2,
    explanation: "'override' explicitly states that a method overrides a base class version."
  },
  {
    question: "Which principle allows using a base class pointer to call derived class method?",
    options: ["Abstraction", "Encapsulation", "Polymorphism", "Composition"],
    answer: 2,
    explanation: "Polymorphism allows base class pointers to call derived class methods dynamically."
  },
  {
    question: "Which of these is an example of compile-time polymorphism?",
    options: ["Method overriding", "Virtual functions", "Function overloading", "Abstract class"],
    answer: 2,
    explanation: "Function overloading is an example of compile-time polymorphism."
  }
                ],
                interview_qa: [
                    {
                        question: "What is method overriding?",
                        answer: "A child class provides its own implementation of a method defined in its parent class."
                    },
                    {
                        question: "Why is polymorphism useful?",
                        answer: "It makes code flexible and extensible."
                    }
                ]
            },
            {
                title: "24. What is Abstraction?",
                explanation: "Abstraction means hiding complex details and showing only the essentials. Like driving a car: you use the steering wheel and pedals, but don't need to know how the engine works!",
                professional_answer: "Abstraction is an OOP concept that exposes only the necessary features of an object while hiding the implementation details. It simplifies interface and reduces complexity.",
               
                code_cpp: `class Shape { public: virtual void draw() = 0; }; // Abstract class\nclass Circle : public Shape { public: void draw() override { /* ... */ } };`,
                code_python: `from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def draw(self): pass\nclass Circle(Shape):\n    def draw(self): pass`,
                practical_title: "Abstract class for shapes:",
                practical_cpp: `Shape *s = new Circle();\ns->draw();`,
                practical_python: `s = Circle()\ns.draw()`,
                flashcard: {
                    question: "What is abstraction?",
                    answer: "Hiding complex details and showing only the essentials."
                },
                quiz: [
                     {
    question: "Which keyword is used for abstraction in Python?",
    options: ["abstract", "@abstractmethod", "private", "None"],
    answer: 1,
    explanation: "@abstractmethod is used for abstraction in Python."
  },
  {
    question: "Why use abstraction?",
    options: ["To hide details", "To make code longer", "To slow down code", "None"],
    answer: 0,
    explanation: "Abstraction hides details and simplifies usage."
  },
  {
    question: "Which C++ concept is used to create abstraction?",
    options: ["Virtual functions", "Templates", "Abstract classes", "Pointers"],
    answer: 2,
    explanation: "Abstract classes with pure virtual functions are used for abstraction in C++."
  },
  {
    question: "What is a pure virtual function in C++?",
    options: ["A function that always returns zero", "A function without a body", "A static function", "A public function"],
    answer: 1,
    explanation: "A pure virtual function is declared with '= 0' and has no implementation in the base class."
  },
  {
    question: "Which module is used for abstraction in Python?",
    options: ["math", "os", "abc", "sys"],
    answer: 2,
    explanation: "The 'abc' module is used for defining abstract base classes in Python."
  },
  {
    question: "Can an abstract class be instantiated directly?",
    options: ["Yes", "No", "Only in Python", "Only in C++"],
    answer: 1,
    explanation: "Abstract classes cannot be instantiated directly."
  },
  {
    question: "What must a class do to implement an abstract method in Python?",
    options: ["Ignore it", "Call it using super()", "Override it", "Pass it to init"],
    answer: 2,
    explanation: "The subclass must override the abstract method to be concrete."
  },
  {
    question: "Which of the following is a benefit of abstraction?",
    options: ["Code duplication", "More memory use", "Security and simplicity", "Direct memory control"],
    answer: 2,
    explanation: "Abstraction improves security and simplifies interfaces by hiding unnecessary details."
  }
                ],
                interview_qa: [
                    {
                        question: "How does abstraction help in programming?",
                        answer: "It reduces complexity and makes code easier to use."
                    },
                    {
                        question: "What is an abstract class?",
                        answer: "A class that cannot be instantiated and often contains abstract methods."
                    }
                ]
            }
        ];

        let currentConceptIndex = 0;
        const navContainer = document.getElementById('navigation');
        const contentContainer = document.getElementById('content-display');

        function renderConcept(index) {
            currentConceptIndex = index;
            const concept = studyData[index];

            const contentHTML = `
                <div class="flex justify-end mb-4">
                        <div class="flex items-center space-x-2 bg-amber-50 border border-amber-300 px-3 py-2 rounded-lg shadow-sm">
                                <span class="text-sm font-semibold text-amber-700">🎯 Interview Mode</span>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" id="interview-toggle" class="sr-only peer">
                                <div class="w-11 h-6 bg-gray-300 peer-checked:bg-green-500 rounded-full peer transition-all duration-300"></div>
                                <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
                            </label>
                        </div>
                </div>



                <p class="text-lg text-stone-700 mb-6">
                    ${concept.explanation.replace(/`([^`]+)`/g, '<code class="bg-stone-200 text-stone-800 font-mono py-1 px-2 rounded-md text-sm">$1</code>')}
                </p>

                <div id="professional-answer" class="hidden bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-r-lg mb-6">
                    <h4 class="font-bold mb-2">🎓 How to say it professionally:</h4>
                    <p>${concept.professional_answer}</p>
                </div>

                <div class="mb-6">
                    <h4 class="font-bold text-lg mb-2 text-stone-800">📚 Basic Examples:</h4>
                    <div class="flex border-b border-stone-300 mb-4">
                        <button class="code-tab py-2 px-4 font-semibold text-stone-600 focus:outline-none rounded-t-lg" data-lang="cpp">💻 C / C++</button>
                        <button class="code-tab py-2 px-4 font-semibold text-stone-600 focus:outline-none rounded-t-lg" data-lang="python">🐍 Python</button>
                    </div>
                    <div id="code-display">
                        <pre class="code-block" data-code="cpp" data-lang="C++">${highlightComments(concept.code_cpp.replace(/</g, '&lt;').replace(/>/g, '&gt;'), 'cpp')}</pre>
                        <pre class="code-block hidden" data-code="python" data-lang="Python">${highlightComments(concept.code_python.replace(/</g, '&lt;').replace(/>/g, '&gt;'), 'python')}</pre>
                    </div>
                </div>

                <div>
                    <h4 class="font-bold text-lg mb-2 text-stone-800">🚀 More practical examples:</h4>
                    <p class="text-stone-600 mb-4">${concept.practical_title}</p>
                    <div class="flex border-b border-stone-300 mb-4">
                        <button class="code-tab-practical py-2 px-4 font-semibold text-stone-600 focus:outline-none rounded-t-lg" data-lang="cpp">💻 C / C++</button>
                        <button class="code-tab-practical py-2 px-4 font-semibold text-stone-600 focus:outline-none rounded-t-lg" data-lang="python">🐍 Python</button>
                    </div>
                    <div id="practical-code-display">
                        <pre class="code-block" data-code-practical="cpp" data-lang="C++">${highlightComments((concept.practical_cpp || '').replace(/</g, '&lt;').replace(/>/g, '&gt;'), 'cpp')}</pre>
                        <pre class="code-block hidden" data-code-practical="python" data-lang="Python">${highlightComments((concept.practical_python || '').replace(/</g, '&lt;').replace(/>/g, '&gt;'), 'python')}</pre>
                    </div>
                </div>

                ${concept.quiz && concept.quiz.length > 0 ? `
                    <div class="mt-6">
                        <button id="quiz-btn" class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">Quiz Yourself</button>
                    </div>
                ` : ''}
            `;

            contentContainer.innerHTML = contentHTML;
            updateActiveNav();
            addEventListeners();

            if (concept.quiz && concept.quiz.length > 0) {
                document.getElementById('quiz-btn').onclick = () => showQuiz(concept.quiz);
            }

            // Set default active tabs for both code sections
            switchTab(document.querySelector('.code-tab[data-lang="python"]'), '.code-tab', '[data-code]');
            switchTab(document.querySelector('.code-tab-practical[data-lang="python"]'), '.code-tab-practical', '[data-code-practical]');
        }



        function switchTab(tabElement, tabSelector, codeSelector) {
            if (!tabElement) return; // Ensure element exists
            document.querySelectorAll(tabSelector).forEach(t => t.classList.remove('active'));
            tabElement.classList.add('active');
            
            const lang = tabElement.dataset.lang;
            document.querySelectorAll(codeSelector).forEach(block => {
                const blockLangAttr = block.dataset.code || block.dataset.codePractical; // Check both attributes
                if (blockLangAttr === lang) {
                    block.classList.remove('hidden');
                } else {
                    block.classList.add('hidden');
                }
            });
        }
        
        function addEventListeners() {
            document.getElementById('interview-toggle').addEventListener('change', (e) => {
                document.getElementById('professional-answer').classList.toggle('hidden', !e.target.checked);
                document.getElementById('general-answer').classList.toggle('hidden', e.target.checked);
            });

            // Add event listeners for general code tabs
            document.querySelectorAll('.code-tab').forEach(tab => {
                tab.addEventListener('click', () => switchTab(tab, '.code-tab', '[data-code]'));
            });

            // Add event listeners for practical example tabs
            document.querySelectorAll('.code-tab-practical').forEach(tab => {
                tab.addEventListener('click', () => switchTab(tab, '.code-tab-practical', '[data-code-practical]'));
            });
        }

        function updateActiveNav() {
            document.querySelectorAll('.nav-link').forEach((link, i) => {
                if (i === currentConceptIndex) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        function init() {
            navContainer.innerHTML = studyData.map((concept, index) => 
                `<a href="#" class="nav-link block font-medium p-3 rounded-lg" data-index="${index}">${concept.title.split('. ')[1]}</a>`
            ).join('');

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    renderConcept(parseInt(e.target.dataset.index));
                });
            });

            renderConcept(0); // Load the first concept on initial page load
        }

        document.addEventListener('DOMContentLoaded', init);

        // Quiz modal logic
        function showQuiz(quiz) {
            if (!quiz) return;
            let currentQuizIndex = 0;
            function renderQuizQuestion(idx) {
                const q = quiz[idx];
                // Add a progress indicator
                let quizHTML = `<div id='quiz-modal' class='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 quiz-fade-in'>
                    <div class='bg-white p-0 rounded-2xl shadow-2xl border border-amber-200 w-full max-w-sm text-left relative animate-modal'>
                        <div class='rounded-t-2xl bg-amber-400 px-6 py-3 flex items-center justify-between'>
                            <h3 class='font-bold text-lg text-white'>Quiz Yourself</h3>
                            <span class='text-xs text-white opacity-80'>${idx + 1} of ${quiz.length}</span>
                        </div>
                        <div class='p-6'>
                            <div class='mb-4'>
                                <div class='mb-4 font-medium text-stone-900 text-base'>${idx + 1}. ${q.question}</div>`;
                q.options.forEach((opt, j) => {
                    quizHTML += `<button class='quiz-option block w-full text-left py-2 px-4 mb-2 rounded-lg border border-stone-200 bg-stone-50 hover:bg-amber-100 transition-all duration-150 font-medium' data-a='${j}'>${opt}</button>`;
                });
                quizHTML += `<div class='quiz-feedback text-sm text-green-700 mt-2 hidden'></div></div>`;
                quizHTML += `<div class='flex justify-between mt-6'>
                    <button id='prev-quiz' class='quiz-nav-btn bg-stone-200 hover:bg-stone-300 text-stone-700 font-semibold py-1.5 px-4 rounded-lg transition-all duration-100' ${idx === 0 ? 'disabled' : ''}>Prev</button>
                    <button id='next-quiz' class='quiz-nav-btn bg-stone-200 hover:bg-stone-300 text-stone-700 font-semibold py-1.5 px-4 rounded-lg transition-all duration-100' ${idx === quiz.length - 1 ? 'disabled' : ''}>Next</button>
                    <button id='close-quiz' class='quiz-nav-btn bg-amber-400 hover:bg-amber-500 text-white font-bold py-1.5 px-4 rounded-lg ml-2 transition-all duration-100'>Close</button>
                </div></div></div></div>`;
                // Replace modal if exists, else insert
                const oldModal = document.getElementById('quiz-modal');
                if (oldModal) oldModal.remove();
                document.body.insertAdjacentHTML('beforeend', quizHTML);
                // Animate modal in
                setTimeout(() => {
                    document.getElementById('quiz-modal').classList.add('quiz-fade-in-active');
                }, 10);
                // Option selection logic
                document.querySelectorAll('.quiz-option').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const aIdx = +this.dataset.a;
                        const feedback = this.parentElement.querySelector('.quiz-feedback');
                        document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('bg-amber-200', 'ring-2', 'ring-amber-400'));
                        this.classList.add('bg-amber-200', 'ring-2', 'ring-amber-400');
                        if (aIdx === q.answer) {
                            feedback.textContent = 'Correct! ' + (q.explanation || '');
                            feedback.classList.remove('hidden', 'text-red-700');
                            feedback.classList.add('text-green-700');
                        } else {
                            feedback.textContent = 'Incorrect. ' + (q.explanation || '');
                            feedback.classList.remove('hidden', 'text-green-700');
                            feedback.classList.add('text-red-700');
                        }
                    });
                });
                document.getElementById('close-quiz').onclick = () => {
                    document.getElementById('quiz-modal').remove();
                };
                document.getElementById('prev-quiz').onclick = () => {
                    if (currentQuizIndex > 0) {
                        currentQuizIndex--;
                        renderQuizQuestion(currentQuizIndex);
                    }
                };
                document.getElementById('next-quiz').onclick = () => {
                    if (currentQuizIndex < quiz.length - 1) {
                        currentQuizIndex++;
                        renderQuizQuestion(currentQuizIndex);
                    }
                };
            }
            renderQuizQuestion(currentQuizIndex);
            // Inject modern modal styles if not already present
            if (!document.getElementById('quiz-modal-style')) {
                const style = document.createElement('style');
                style.id = 'quiz-modal-style';
                style.textContent = `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                #quiz-modal, #quiz-modal * { font-family: 'Inter', system-ui, sans-serif; }
                #quiz-modal .quiz-fade-in { opacity: 0; transition: opacity 0.2s; }
                #quiz-modal.quiz-fade-in-active { opacity: 1; }
                #quiz-modal .animate-modal { animation: quizModalPop 0.22s cubic-bezier(.4,1.4,.6,1) 1; }
                @keyframes quizModalPop { 0% { transform: scale(0.92); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
                #quiz-modal .quiz-option { cursor: pointer; }
                #quiz-modal .quiz-option.bg-amber-200 { background: #fde68a !important; border-color: #fbbf24 !important; }
                #quiz-modal .quiz-option.ring-2 { box-shadow: 0 0 0 2px #fbbf24; }
                #quiz-modal .quiz-nav-btn[disabled] { opacity: 0.5; cursor: not-allowed; }
                #quiz-modal .quiz-feedback { min-height: 1.5em; transition: color 0.15s; }
                #quiz-modal .quiz-feedback.text-red-700 { color: #b91c1c; }
                #quiz-modal .quiz-feedback.text-green-700 { color: #15803d; }
                #quiz-modal .quiz-nav-btn { outline: none; }
                `;
                document.head.appendChild(style);
            }
        }

        // Flashcard renderer
let flashcardMode = false;
        function renderFlashcard(index) {
    currentConceptIndex = index;
    const concept = studyData[index];
    const flashcard = concept.flashcard || {
        question: "No flashcard available.",
        answer: "N/A"
    };

    contentContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-[60vh]">
            <div class="relative w-full max-w-md mx-auto perspective px-4">
                <div class="flip-card text-center" id="flashcard">
                    <div class="flip-card-inner bg-gradient-to-br from-white via-amber-50 to-white border border-amber-200 rounded-2xl shadow-xl">

                        <div class="flip-card-front px-6 py-20 flex flex-col items-center justify-center">
                            <h2 class="text-2xl font-bold text-stone-800 mb-4">🧠 Flashcard</h2>
                            <div class="text-lg text-stone-700 mb-4">${flashcard.question}</div>
                            <button id="show-answer" class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded shadow transform hover:scale-105 transition">Show Answer</button>
                        </div>

                        <div class="flip-card-back bg-white px-6 py-20 flex flex-col items-center justify-center">
                            <div class="text-green-700 text-lg font-semibold mb-4">${flashcard.answer}</div>
                            <button id="hide-answer" class="bg-gray-300 hover:bg-gray-400 text-stone-800 font-semibold py-1 px-3 rounded shadow transform hover:scale-105 transition">Back</button>
                        </div>

                    </div>
                </div>

                <div class="flex justify-between mt-6">
                    <button id="prev-flashcard" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow transform hover:scale-105 transition">⬅ Prev</button>
                    <button id="next-flashcard" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow transform hover:scale-105 transition">Next ➡</button>
                </div>
            </div>
        </div>
    `;

    const card = document.getElementById('flashcard');
    document.getElementById('show-answer').onclick = () => {
        card.classList.add('flipped');
    };
    document.getElementById('hide-answer').onclick = () => {
        card.classList.remove('flipped');
    };

    document.getElementById('prev-flashcard').onclick = () => {
        if (currentConceptIndex > 0) renderFlashcard(currentConceptIndex - 1);
    };
    document.getElementById('next-flashcard').onclick = () => {
        if (currentConceptIndex < studyData.length - 1) renderFlashcard(currentConceptIndex + 1);
    };
}



        // Add flashcard mode toggle button in header
        function addFlashcardToggle() {
        const header = document.querySelector('header');
        if (!document.getElementById('flashcard-toggle')) {
            const btn = document.createElement('button');
            btn.id = 'flashcard-toggle';
            btn.className = 'ml-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded';
            btn.textContent = 'Flashcards Mode';

            btn.onclick = () => {
                flashcardMode = !flashcardMode;
                btn.textContent = flashcardMode ? 'Cheat Sheet Mode' : 'Flashcards Mode';
                if (flashcardMode) {
                    renderFlashcard(currentConceptIndex);
                } else {
                    renderConcept(currentConceptIndex);
                }
            };

            header.appendChild(btn);

            // Optional: Toggle mode with keyboard shortcut (press "f")
            document.addEventListener('keydown', (e) => {
                if (e.key === 'f') {
                    btn.click();
                }
            });
        }
        }


        document.addEventListener('DOMContentLoaded', () => {
            addFlashcardToggle();
            init();
        });