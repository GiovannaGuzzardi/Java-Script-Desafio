// função aceita pelo leetcode

var expect = function(val) {
    return {
        toBe: function(val2) {
            if (val !== val2) throw new Error('Not Equal');
            return true;
        },
        notToBe: function(val2) {
            if (val === val2) throw new Error('Equal');
            return true;
        }
    };
};

// Execução de testes
try {
    console.log(expect(5).toBe(5)); // { value: true }
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log(expect(5).toBe(null)); // { error: "Not Equal" }
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log(expect(5).notToBe(5)); // { error: "Equal" }
} catch (e) {
    console.log({ error: e.message });
}