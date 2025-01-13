module.exports = Object.freeze({
    rules: Object.freeze({
        "descriptive/adjacent-overload-signatures": "error",
        "descriptive/array-type": "error",
        "descriptive/await-thenable": "error",
        "descriptive/ban-tslint-comment": "error",
        "descriptive/consistent-generic-constructors": "error",
        "descriptive/consistent-indexed-object-style": "error",
        "descriptive/consistent-type-assertions": "error",
        "descriptive/consistent-type-definitions": "error",
        "descriptive/curly": "error",
        "descriptive/dot-notation": "error",
        "descriptive/eqeqeq": "error",
        "descriptive/explicit-function-return-type": "error",
        "descriptive/explicit-member-accessibility": [
			"error",
			{
				"overrides": {
					"constructors": "off"
				}
			}
		],
        "descriptive/for-direction": "error",
        "descriptive/max-len": [
			"error",
			{
				"code": 120,
				"ignoreComments": true,
				"ignoreUrls": true,
				"ignoreStrings": true
			}
		],
        "descriptive/max-lines": [
			"error",
			{
				"max": 300,
				"skipComments": true,
				"skipBlankLines": true
			}
		],
        "descriptive/max-lines-per-function": [
			"error",
			{
				"max": 35,
				"skipComments": true,
				"skipBlankLines": true
			}
		],
        "descriptive/max-nested-callbacks": ["error", 2],
        "descriptive/max-statements-per-line": "error",
        "descriptive/naming-convention": [
			"error",
			{
				"selector": "typeLike",
				"format": ["PascalCase"]
			},
			{
				"selector": "variable",
				"format": ["camelCase", "PascalCase", "UPPER_CASE"],
			}
		],
        "descriptive/no-async-promise-executor": "error",
        "descriptive/no-await-in-loop": "error",
        "descriptive/no-bitwise": "error",
        "descriptive/no-case-declarations": "error",
        "descriptive/no-class-assign": "error",
        "descriptive/no-compare-neg-zero": "error",
        "descriptive/no-cond-assign": "error",
        "descriptive/no-confusing-non-null-assertion": "error",
        "descriptive/no-console": "warn",
        "descriptive/no-constant-binary-expression": "error",
        "descriptive/no-constant-condition": "error",
        "descriptive/no-control-regex": "error",
        "descriptive/no-debugger": "error",
        "descriptive/no-delete-var": "error",
        "descriptive/no-dupe-else-if": "error",
        "descriptive/no-duplicate-case": "error",
        "descriptive/no-empty": "error",
        "descriptive/no-empty-character-class": "error",
        "descriptive/no-empty-function": "error",
        "descriptive/no-empty-pattern": "error",
        "descriptive/no-empty-static-block": "error",
        "descriptive/no-eval": "error",
        "descriptive/no-ex-assign": "error",
        "descriptive/no-extra-boolean-cast": "error",
        "descriptive/no-fallthrough": "error",
        "descriptive/no-floating-promises": [
			"error",
			{
				"ignoreIIFE": true
			}
		],
        "descriptive/no-for-in-array": "error",
        "descriptive/no-global-assign": "error",
        "descriptive/no-inferrable-types": "error",
        "descriptive/no-invalid-regexp": "error",
        "descriptive/no-labels": "error",
        "descriptive/no-loss-of-precision": "error",
        "descriptive/no-magic-numbers": [
			"error",
			{
				"ignoreClassFieldInitialValues": true,
				"ignoreDefaultValues": true,
				"ignore": [-2, -1, 0, 1, 2, 10, 100],
                "ignoreArrayIndexes": true,
			}
		],
        "descriptive/no-misleading-character-class": "error",
        "descriptive/no-misused-promises": [
			"error",
			{
				"checksConditionals": true,
				"checksVoidReturn": false
			}
		],
        "descriptive/no-nonoctal-decimal-escape": "error",
        "descriptive/no-octal": "error",
        "descriptive/no-prototype-builtins": "error",
        "descriptive/no-regex-spaces": "error",
        "descriptive/no-self-assign": "error",
        "descriptive/no-shadow": "error",
        "descriptive/no-shadow-restricted-names": "error",
        "descriptive/no-throw-literal": "error",
        "descriptive/no-unsafe-finally": "error",
        "descriptive/no-unsafe-optional-chaining": "error",
        "descriptive/no-unused-expressions": "error",
        "descriptive/no-unused-labels": "error",
        "descriptive/no-unused-private-class-members": "error",
        "descriptive/no-unused-vars": [
            "error",
            {
                "args": "none",
                "argsIgnorePattern": "^_",
                "caughtErrors": "all",
                "caughtErrorsIgnorePattern": "^_",
                "destructuredArrayIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "ignoreRestSiblings": true
            }
        ],
        "descriptive/no-useless-backreference": "error",
        "descriptive/no-useless-catch": "error",
        "descriptive/no-useless-escape": "error",
        "descriptive/no-var": "error",
        "descriptive/no-with": "error",
        "descriptive/prefer-const": "error",
        // "descriptive/prefer-find": "error",
        "descriptive/prefer-for-of": "error",
        "descriptive/prefer-function-type": "error",
        "descriptive/prefer-optional-chain": "error",
        "descriptive/prefer-spread": "error",
        "descriptive/promise-function-async": "error",
        "descriptive/radix": "error",
        // "descriptive/require-await": "error",
        "descriptive/unified-signatures": "error",
        "descriptive/use-isnan": "error"
    })
});
