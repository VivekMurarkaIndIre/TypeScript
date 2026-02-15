type FileSource = {
    path: string;
}

type DBSource = {
    connectionString: string;
}

type Source = FileSource | DBSource;

function loadData(source: Source) {
    if("path" in source) {
        console.log("Loading data from file");
    } else {
        console.log("Loading data from database");
    }
}

loadData({path: "test.txt"});
loadData({connectionString: "test.txt"});

// Now still this is very inflexible way of testing
// better approach is to use type guards
function isFileSouce(source: Source): source is FileSource {
    return "path" in source;
}

function isDBSouce(source: Source): source is DBSource {
    return "connectionString" in source;
}

loadData({path: "test.txt"});
loadData({connectionString: "test.txt"});

// Another approach instance of with class
class FileSourceClass implements FileSource {
    path: string;
    constructor(path: string) {
        this.path = path;
    }
}

class DBSourceClass implements DBSource {
    connectionString: string;
    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }
}

function loadData3(source: FileSource | DBSource) {
    if(source instanceof FileSourceClass) {
        console.log("Loading data from file");
    } else {
        console.log("Loading data from database");
    }
}

loadData3(new FileSourceClass("test.txt"));
loadData3(new DBSourceClass("test.txt"));   