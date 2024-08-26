// truthy: anything which evaluates to true
// falsy: anything which evaluates to false

const isTruthy = (name,exp) => {
    console.log(`${name}: ${Boolean(exp)}`);
}

// 1. Numbers
isTruthy("val1", 0);                // 0 evaluates to false
isTruthy("val2", 9);                // any other number evaluates to true
isTruthy("val3", -7);
isTruthy("val4", NaN);              // NaN evaluates to false
isTruthy("val5", 0n);

// 2.Boolean, null and undefined
isTruthy("val6", false);            
isTruthy("val7", true);
isTruthy("val8", null);             // null and undefined evaluate to false
isTruthy("val9", undefined);        // In general anything that represents an empty value evalauates to false 

// 3. Strings
isTruthy("val10", "");              // an empty string evaluates to false
isTruthy("val11", "Hi");
isTruthy("val12", "false");


// 4. objects
isTruthy("val13", {});              // Though it is an empty object, it evaluates to true as it is a valid object

// 5. Undefined variables
let var1;
isTruthy("val14", var1);            // Undefined variable evaluates to false