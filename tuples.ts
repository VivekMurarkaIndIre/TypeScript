let coordinates: [number, number] = [1, 2];

let coordinates2: [number, number, string] = [1, 2, "3"];

let coordinates3: [number, number, string] = [1, 2, 3]; // this will throw an error because the third argument is not a string


coordinates = [1, 2, 3]; // this will throw an error because this tuples only allows 2 numbers
