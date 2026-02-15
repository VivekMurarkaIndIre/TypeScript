// ============================================================================
// THE `satisfies` KEYWORD - COMPREHENSIVE GUIDE
// ============================================================================
// TypeScript 4.9+ feature that validates types WITHOUT widening them
// ============================================================================

export {}; // Make this a module to avoid global scope conflicts

// ----------------------------------------------------------------------------
// 1. THE PROBLEM: Type Annotations vs Type Inference
// ----------------------------------------------------------------------------

// ❌ PROBLEM: Using type annotation loses literal types
type Colors = "red" | "green" | "blue";
type Config = {
    color: Colors;
    size: number;
};

const config1: Config = {
    color: "red",  // Type: Colors (not "red" literal)
    size: 10
};

// When accessing, TypeScript only knows it's Colors, not the specific "red"
const color1 = config1.color;  // Type: Colors (not "red")

// ✅ SOLUTION: Using `satisfies` preserves literal types
const config2 = {
    color: "red",  // Type: "red" (literal preserved!)
    size: 10
} satisfies Config;

const color2 = config2.color;  // Type: "red" (literal preserved!)

// ----------------------------------------------------------------------------
// 2. BASIC USAGE EXAMPLES
// ----------------------------------------------------------------------------

// Example 1: Preserving literal types
type Theme = "light" | "dark" | "auto";
type Settings = {
    theme: Theme;
    fontSize: number;
};

const settings1: Settings = {
    theme: "dark",  // Type: Theme (lost literal)
    fontSize: 14
};

const settings2 = {
    theme: "dark",  // Type: "dark" (literal preserved!)
    fontSize: 14
} satisfies Settings;

// Example 2: Complex nested objects
type ApiResponse = {
    status: "success" | "error";
    data?: {
        id: number;
        name: string;
    };
    error?: string;
};

const response1: ApiResponse = {
    status: "success",
    data: { id: 1, name: "John" }
};

const response2 = {
    status: "success",  // Type: "success" (not "success" | "error")
    data: { id: 1, name: "John" }
} satisfies ApiResponse;

// ----------------------------------------------------------------------------
// 3. WHEN TO USE `satisfies`
// ----------------------------------------------------------------------------

// ✅ USE CASE 1: When you need type safety BUT want to preserve literals
type Route = "/home" | "/about" | "/contact";
type Routes = {
    [key: string]: Route;
};

const appRoutes = {
    home: "/home",
    about: "/about",
    contact: "/contact"
} satisfies Routes;

// Without satisfies: appRoutes.home would be Route (union type)
// With satisfies: appRoutes.home is "/home" (literal type)
const homeRoute = appRoutes.home;  // Type: "/home"

// ✅ USE CASE 2: Validating object structure without losing specificity
type UserRoleType = "admin" | "user" | "guest";
type UserPermissions = {
    [role in UserRoleType]: string[];
};

const userPermissions = {
    admin: ["read", "write", "delete"],
    user: ["read"],
    guest: ["read"]
} satisfies UserPermissions;

// Each property is still a string[] literal, not just string[]
const adminPerms = userPermissions.admin;  // Type: string[] (preserved)

// ✅ USE CASE 3: Ensuring object matches type while keeping exact values
type StatusCode = 200 | 404 | 500;
type EndpointConfig = {
    endpoints: {
        [key: string]: {
            method: "GET" | "POST" | "PUT" | "DELETE";
            status: StatusCode;
        };
    };
};

const endpointConfig = {
    endpoints: {
        "/users": {
            method: "GET",
            status: 200
        },
        "/posts": {
            method: "POST",
            status: 200
        }
    }
} satisfies EndpointConfig;

// Method and status are preserved as literals
const usersEndpointMethod = endpointConfig.endpoints["/users"].method;  // Type: "GET"
const usersEndpointStatus = endpointConfig.endpoints["/users"].status;  // Type: 200

// ✅ USE CASE 4: Record types with specific keys
type EventType = "click" | "hover" | "focus";
type EventHandlers = Record<EventType, (event: globalThis.Event) => void>;

const eventHandlers = {
    click: (e: globalThis.Event) => console.log("clicked"),
    hover: (e: globalThis.Event) => console.log("hovered"),
    focus: (e: globalThis.Event) => console.log("focused")
} satisfies EventHandlers;

// ----------------------------------------------------------------------------
// 4. WHEN NOT TO USE `satisfies`
// ----------------------------------------------------------------------------

// ❌ DON'T USE when you need the variable to be assignable to the type
type Animal = {
    name: string;
    age: number;
};

const dog1: Animal = {
    name: "Buddy",
    age: 5
};

// This works - dog1 is assignable to Animal
function processAnimal(animal: Animal) {
    console.log(animal.name);
}
processAnimal(dog1);  // ✅ Works

const dog2 = {
    name: "Max",
    age: 3
} satisfies Animal;

// This also works, but dog2's type is inferred, not Animal
processAnimal(dog2);  // ✅ Still works (because it satisfies Animal)

// However, if you need explicit Animal type for function parameters:
function returnAnimal(): Animal {
    // return dog2;  // ❌ Error: Type is not exactly Animal
    return dog1;  // ✅ Works: dog1 is explicitly Animal
}

// ❌ DON'T USE when you want type widening for flexibility
type FlexibleConfig = {
    value: string | number;
};

const config3: FlexibleConfig = {
    value: "hello"  // Can be reassigned to number later
};

// config3.value = 42;  // ✅ Works with type annotation

const config4 = {
    value: "hello"
} satisfies FlexibleConfig;

// config4.value = 42;  // ❌ Error: Type "hello" is not assignable to number
// The literal "hello" is preserved, so you can't assign a number

// ❌ DON'T USE when you need the type for type-level operations
type ExtractKeys<T> = keyof T;

type Keys1 = ExtractKeys<typeof dog1>;  // ✅ Works: "name" | "age"
// type Keys2 = ExtractKeys<typeof dog2>;  // Works but different inference

// ❌ DON'T USE when you want to allow additional properties
type BaseConfig = {
    name: string;
};

// With type annotation, extra properties are not allowed
const strictConfig: BaseConfig = {
    name: "test"
    // extra: "property"  // ❌ Error: extra property not allowed
};

// Note: satisfies also doesn't allow extra properties in strict mode
// But the key difference is that satisfies preserves literal types
const flexibleConfig = {
    name: "test"
    // extra: "property"  // ❌ Also not allowed with satisfies in strict mode
} satisfies BaseConfig;

// If you need extra properties, use a different approach:
type FlexibleBaseConfig = {
    name: string;
    [key: string]: unknown;  // Index signature allows extra properties
};

const configWithExtras = {
    name: "test",
    extra: "property"  // ✅ Allowed with index signature
} satisfies FlexibleBaseConfig;

// ----------------------------------------------------------------------------
// 5. COMPARISON: `as const` vs `satisfies` vs Type Annotation
// ----------------------------------------------------------------------------

type Status = "pending" | "completed";

// Method 1: Type annotation (loses literals)
const task1: { status: Status } = {
    status: "pending"
};
const status1 = task1.status;  // Type: Status

// Method 2: `as const` (preserves literals, but loses type safety)
const task2 = {
    status: "pending"
} as const;
const status2 = task2.status;  // Type: "pending"
// But no validation that "pending" is a valid Status!

// Method 3: `satisfies` (BEST: preserves literals + type safety)
const task3 = {
    status: "pending"
} satisfies { status: Status };
const status3 = task3.status;  // Type: "pending" ✅

// ----------------------------------------------------------------------------
// 6. CHALLENGES AND EDGE CASES
// ----------------------------------------------------------------------------

// Challenge 1: Nested objects
type NestedConfig = {
    database: {
        host: string;
        port: number;
    };
    api: {
        baseUrl: string;
    };
};

const nested1: NestedConfig = {
    database: {
        host: "localhost",
        port: 5432
    },
    api: {
        baseUrl: "https://api.example.com"
    }
};

const nested2 = {
    database: {
        host: "localhost",
        port: 5432
    },
    api: {
        baseUrl: "https://api.example.com"
    }
} satisfies NestedConfig;

// nested1.database.host is string
// nested2.database.host is "localhost" (literal)

// Challenge 2: Arrays
type StringArray = string[];

const arr1: StringArray = ["a", "b", "c"];
const arr2 = ["a", "b", "c"] satisfies StringArray;

// arr1[0] is string
// arr2[0] is "a" (literal)

// Challenge 3: Union types in satisfies
type UnionType = { type: "A"; value: number } | { type: "B"; value: string };

const union1: UnionType = {
    type: "A",
    value: 42
};

const union2 = {
    type: "A",
    value: 42
} satisfies UnionType;

// union1.type is "A" | "B"
// union2.type is "A" (discriminated union preserved!)

// Challenge 4: Generic constraints
type Validator<T> = {
    validate: (value: T) => boolean;
};

const numberValidator = {
    validate: (value: number) => value > 0
} satisfies Validator<number>;

// ----------------------------------------------------------------------------
// 7. REAL-WORLD PRACTICAL EXAMPLES
// ----------------------------------------------------------------------------

// Example 1: API Route Configuration
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type RouteConfig = {
    [path: string]: {
        method: HttpMethod;
        handler: string;
    };
};

const apiRoutes = {
    "/api/users": {
        method: "GET",
        handler: "getUsers"
    },
    "/api/posts": {
        method: "POST",
        handler: "createPost"
    }
} satisfies RouteConfig;

// Accessing preserves literal types
const apiUsersMethod = apiRoutes["/api/users"].method;  // Type: "GET"

// Example 2: Theme Configuration
type ColorScheme = "light" | "dark";
type ThemeConfig = {
    colors: {
        primary: string;
        secondary: string;
    };
    scheme: ColorScheme;
};

const themes = {
    light: {
        colors: {
            primary: "#ffffff",
            secondary: "#000000"
        },
        scheme: "light" as const
    },
    dark: {
        colors: {
            primary: "#000000",
            secondary: "#ffffff"
        },
        scheme: "dark" as const
    }
} satisfies Record<ColorScheme, ThemeConfig>;

// Example 3: Form Validation Rules
type ValidationRule = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
};

type FormFields = {
    [field: string]: ValidationRule;
};

const formValidation = {
    email: {
        required: true,
        pattern: "^[\\w\\.-]+@[\\w\\.-]+\\.[a-z]{2,}$"
    },
    password: {
        required: true,
        minLength: 8,
        maxLength: 20
    },
    username: {
        required: true,
        minLength: 3,
        maxLength: 20
    }
} satisfies FormFields;

// Example 4: Feature Flags
type FeatureFlag = {
    enabled: boolean;
    rolloutPercentage: number;
};

type FeatureFlags = {
    [feature: string]: FeatureFlag;
};

const featureFlags = {
    newDashboard: {
        enabled: true,
        rolloutPercentage: 50
    },
    darkMode: {
        enabled: false,
        rolloutPercentage: 0
    }
} satisfies FeatureFlags;

// ----------------------------------------------------------------------------
// 8. BEST PRACTICES
// ----------------------------------------------------------------------------

// ✅ BEST PRACTICE 1: Use satisfies for configuration objects
type AppConfig = {
    env: "development" | "staging" | "production";
    apiUrl: string;
    timeout: number;
};

const appConfig = {
    env: "development",
    apiUrl: "http://localhost:3000",
    timeout: 5000
} satisfies AppConfig;

// ✅ BEST PRACTICE 2: Use satisfies with Record types
type ErrorCodes = Record<string, { message: string; code: number }>;

const errorCodes = {
    NOT_FOUND: { message: "Resource not found", code: 404 },
    UNAUTHORIZED: { message: "Unauthorized access", code: 401 },
    SERVER_ERROR: { message: "Internal server error", code: 500 }
} satisfies ErrorCodes;

// ✅ BEST PRACTICE 3: Combine with `as const` for maximum type safety
type Action = {
    type: "INCREMENT" | "DECREMENT";
    payload?: number;
};

const actions = {
    increment: {
        type: "INCREMENT",
        payload: 1
    },
    decrement: {
        type: "DECREMENT",
        payload: 1
    }
} as const satisfies Record<string, Action>;

// ✅ BEST PRACTICE 4: Use for discriminated unions
type UIEvent =
    | { type: "click"; x: number; y: number }
    | { type: "keypress"; key: string }
    | { type: "scroll"; position: number };

const clickEvent = {
    type: "click",
    x: 100,
    y: 200
} satisfies UIEvent;

// Type is narrowed to the specific variant
if (clickEvent.type === "click") {
    console.log(clickEvent.x, clickEvent.y);  // ✅ TypeScript knows x and y exist
}

// ❌ AVOID: Using satisfies when you need type assignment
function acceptConfig(config: AppConfig) {
    // ...
}

// This works, but if you need to pass to a function expecting exactly AppConfig:
const configExample = { env: "development", apiUrl: "...", timeout: 1000 } satisfies AppConfig;
// acceptConfig(configExample);  // Works, but type inference might be different

// ✅ PREFER: Type annotation when you need explicit type
const explicitConfig: AppConfig = { env: "development", apiUrl: "...", timeout: 1000 };
acceptConfig(explicitConfig);  // Clear intent

// ----------------------------------------------------------------------------
// 9. SUMMARY: Decision Tree
// ----------------------------------------------------------------------------

/*
WHEN TO USE `satisfies`:
✅ You need type validation
✅ You want to preserve literal types
✅ You're defining configuration objects
✅ You're working with Record types
✅ You want discriminated unions to narrow properly

WHEN NOT TO USE `satisfies`:
❌ You need the variable to be explicitly of that type
❌ You want type widening for flexibility
❌ You need to assign to variables of that exact type
❌ You're doing type-level operations that need the exact type
❌ You want to allow additional properties beyond the type

ALTERNATIVES:
- Use type annotation (`: Type`) when you need explicit typing
- Use `as const` when you only need literal preservation (no validation)
- Use `satisfies` when you need both validation AND literal preservation
*/

// ----------------------------------------------------------------------------
// 10. PRACTICAL CHALLENGE EXAMPLES
// ----------------------------------------------------------------------------

// Challenge 1: Create a type-safe configuration system
type LogLevel = "debug" | "info" | "warn" | "error";
type LoggerConfig = {
    level: LogLevel;
    format: "json" | "text";
    output: "console" | "file";
};

const loggerConfig = {
    level: "info",
    format: "json",
    output: "console"
} satisfies LoggerConfig;

// Challenge 2: Type-safe API client configuration
type ApiClientConfig = {
    baseURL: string;
    timeout: number;
    retries: number;
    headers: Record<string, string>;
};

const clientConfig = {
    baseURL: "https://api.example.com",
    timeout: 5000,
    retries: 3,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer token"
    }
} satisfies ApiClientConfig;

// Challenge 3: State machine with satisfies
type State = "idle" | "loading" | "success" | "error";
type StateMachine = {
    [K in State]: {
        canTransitionTo: State[];
    };
};

const stateMachine = {
    idle: { canTransitionTo: ["loading"] },
    loading: { canTransitionTo: ["success", "error"] },
    success: { canTransitionTo: ["idle"] },
    error: { canTransitionTo: ["idle", "loading"] }
} satisfies StateMachine;
