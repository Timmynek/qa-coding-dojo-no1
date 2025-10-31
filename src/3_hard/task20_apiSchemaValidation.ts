/**
 * Task 20: 🔴 API Schema Validation (25-30 min)
 * 
 * Implement a function that validates if an object matches a schema.
 * 
 * Requirements:
 * - Check if object properties match the expected types in schema
 * - Schema format: { propertyName: 'type' }
 * - Supported types: 'string', 'number', 'boolean'
 * - All schema properties must exist in the object
 * - Return true if valid, false otherwise
 * 
 * Test cases:
 * - validateAPISchema({id:1, name:"John"}, {id:'number', name:'string'}) → true
 * - validateAPISchema({id:"1", name:"John"}, {id:'number', name:'string'}) → false
 * - validateAPISchema({}, {id:'number', name:'string'}) → false
 * 
 * Hint: Use typeof to check types
 */
export function validateAPISchema(obj: object, schema: object): boolean {
    return false;
}

