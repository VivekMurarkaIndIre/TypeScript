

function getLength(val: string | any[]){
    if(typeof val === "string"){
        const numOfWords = val.split(" ").length;
        return `${numOfWords} words`;
    }
    return val.length;
}

const wordCount = getLength("Hello World");
wordCount.length; //Property 'length' does not exist on type 'number'.
const arrayLength = getLength([1, 2, 3, 4, 5]);

console.log(wordCount);
console.log(arrayLength);

// ============================================================================
// FUNCTION OVERLOADS - IN-DEPTH EXPLANATION
// ============================================================================

// TO avoid this use function overload

// ----------------------------------------------------------------------------
// HOW FUNCTION OVERLOADS WORK:
// ----------------------------------------------------------------------------
// 1. Overload signatures (lines 20-21): These are TYPE DECLARATIONS only
//    - They tell TypeScript: "When you call this function with X, expect Y"
//    - They don't contain implementation code
//    - Multiple overloads can exist for different input/output combinations
//
// 2. Implementation signature (line 22): This is the ACTUAL FUNCTION
//    - Must be compatible with ALL overload signatures
//    - Contains the actual implementation code
//    - TypeScript uses this at runtime, but type-checking uses the overloads

function getLengths(val: string): string;
function getLengths(val: any[]): number;
function getLengths(val: string | any[]): string | number {
    if (typeof val === "string") {
        const numOfWords = val.split(" ").length;
        return `${numOfWords} words`;
    }
    return val.length;
}

// ----------------------------------------------------------------------------
// WHY THE IMPLEMENTATION MUST BE COMPATIBLE:
// ----------------------------------------------------------------------------
// The implementation signature must accept ALL possible inputs from overloads
// and return ALL possible outputs. Here's why:

// ✅ CORRECT: Implementation accepts string | any[] (covers both overloads)
//    Returns string | number (covers both return types)

// ❌ WRONG EXAMPLE (would cause error):
// function badOverload(val: string): string;
// function badOverload(val: any[]): number;
// function badOverload(val: any[]): number {  // ❌ Missing 'string' in parameter!
//     return val.length;
// }
// Error: "This overload signature is not compatible with its implementation signature"
// Because implementation only handles 'any[]', but overload says it can handle 'string'

// ❌ ANOTHER WRONG EXAMPLE:
// function badOverload2(val: string): string;
// function badOverload2(val: any[]): number;
// function badOverload2(val: string | any[]): string {  // ❌ Missing 'number' in return!
//     return "always string";
// }
// Error: Implementation must return string | number, not just string

// ----------------------------------------------------------------------------
// HOW TYPESCRIPT USES OVERLOADS:
// ----------------------------------------------------------------------------
const wordCount2 = getLengths("Hello World");
// TypeScript checks: "Is 'Hello World' a string?" ✅
// Matches overload: function getLengths(val: string): string
// Result: wordCount2 is typed as 'string' (not 'string | number')

const arrayLength2 = getLengths([1, 2, 3, 4, 5]);
// TypeScript checks: "Is [1,2,3,4,5] an array?" ✅
// Matches overload: function getLengths(val: any[]): number
// Result: arrayLength2 is typed as 'number' (not 'string | number')

console.log(wordCount2);
wordCount2.length; // ✅ Works! TypeScript knows wordCount2 is 'string', so .length exists
console.log(arrayLength2);

// ----------------------------------------------------------------------------
// MORE COMPLEX EXAMPLES:
// ----------------------------------------------------------------------------

// Example 1: Multiple overloads with different parameter counts
function format(input: string): string;
function format(input: number): string;
function format(input: boolean): string;
function format(input: string | number | boolean): string {
    // Implementation must handle all three types
    return String(input);
}

const str1 = format("hello");    // string → string
const str2 = format(42);          // number → string
const str3 = format(true);        // boolean → string

// Example 2: Overloads with optional parameters
function createUser(name: string, age: number): { name: string; age: number };
function createUser(name: string): { name: string; age?: number };
function createUser(name: string, age?: number): { name: string; age?: number } {
    if (age !== undefined) {
        return { name, age };
    }
    return { name };
}

const userWithAge = createUser("Alice", 30);  // { name: string; age: number }
const userWithoutAge = createUser("Bob");      // { name: string; age?: number }

// Example 3: Overloads with different return types based on input
function parseValue(input: "string"): string;
function parseValue(input: "number"): number;
function parseValue(input: "boolean"): boolean;
function parseValue(input: "string" | "number" | "boolean"): string | number | boolean {
    switch (input) {
        case "string": return "parsed";
        case "number": return 42;
        case "boolean": return true;
    }
}

const parsedStr = parseValue("string");   // Type: string
const parsedNum = parseValue("number");   // Type: number
const parsedBool = parseValue("boolean"); // Type: boolean

// ----------------------------------------------------------------------------
// KEY TAKEAWAYS:
// ----------------------------------------------------------------------------
// 1. Overload signatures = Type declarations (no implementation)
// 2. Implementation signature = Actual function (must handle all cases)
// 3. Implementation must accept UNION of all overload parameters
// 4. Implementation must return UNION of all overload return types
// 5. TypeScript uses overloads for type narrowing at call sites
// 6. At runtime, only the implementation function exists