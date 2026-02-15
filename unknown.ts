// unknown is a type that can be any type of value
// but it is more strict than any, as it is not assignable to any other type
// it is a type that is used to represent a value that is not known at the time of typing and forces you to check the type before using it
function process (val: unknown) {
    if(typeof val ==== "object" && !!val && "name" in val && typeof val.name === "string") {
        return val.name;
    }
    return null;
}