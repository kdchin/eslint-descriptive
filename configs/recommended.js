module.exports = Object.freeze({
    rules: Object.freeze({
        // safety rules
        "descriptive/ban-tslint-comment": "error",
        "descriptive/no-eval": "error",

        // normal rules
        "descriptive/await-thenable": "error",
        "descriptive/consistent-generic-constructors": "error",
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
        "descriptive/no-console": "warn",
        "descriptive/no-floating-promises": [
			"error",
			{
				"ignoreIIFE": true
			}
		],
        "descriptive/no-magic-numbers": [
			"error",
			{
				"ignoreClassFieldInitialValues": true,
				"ignoreDefaultValues": true,
				"ignore": [-2, -1, 0, 1, 2, 10, 100],
                "ignoreArrayIndexes": true,
			}
		],
        "descriptive/no-misused-promises": [
			"error",
			{
				"checksConditionals": true,
				"checksVoidReturn": false
			}
		],
        "descriptive/no-shadow": "error",
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
        "descriptive/no-var": "error",
        "descriptive/prefer-const": "error",
        "descriptive/prefer-for-of": "error",
        "descriptive/prefer-optional-chain": "error",
        "descriptive/promise-function-async": "error",
    })
});
