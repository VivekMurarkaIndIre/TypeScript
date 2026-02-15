
// Option 1: Make the file a module (creates local scope)
// Add 'export {}' at the top to make this a module, which creates a local scope
// This allows you to use 'File' without conflicting with the global type
export {};

type File = {
    name: string;
    size: number;
    type: string;
}

type Status = {
    isOpen: boolean;
    isClosed: boolean;
    permission: "write" | "read";
}

type WritableFile = File & Status & {
    write(): void;
    permission: "write";
}

type ReadableFile = File & Status & {
    read(): void;
    permission: "read";
}

// in case of conflicting properties, the last one will be used
let file: WritableFile = {
    name: "test.txt",
    size: 100,
    type: "text",
    isOpen: true,
    isClosed: false,
    write(): void {
        console.log("Writing to file");
    },
    permission: "read" //
}


