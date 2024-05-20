/* eslint-env node */

/** @type {import('eslint').ESLint.ConfigData[]} */
export default [
	{
		env: {
			browser: true,
			es2022: true,
			node: true,
		},
		extends: [
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:@typescript-eslint/eslint-recommended',
			'plugin:editorconfig/all',
			'plugin:import/recommended',
			'plugin:import/typescript',
			'plugin:jsdoc/recommended-typescript',
			'plugin:optimize-regex/recommended',
			'plugin:promise/recommended',
			'plugin:security/recommended',
		],
		parser: '@typescript-eslint/parser',
		parserOptions: {
			sourceType: 'module',
		},
		plugins: [
			'editorconfig',
			'jsdoc',
			'security',
			'sort-class-members',
			'unused-imports',
			'@typescript-eslint',
		],
		rules: {
			// eslint
			'array-callback-return': ['error'],
			'array-bracket-spacing': ['error', 'never'],
			'array-element-newline': ['error', 'consistent', {
				minItems: 2,
			}],
			'arrow-parens': ['error', 'as-needed'],
			'arrow-spacing': ['error'],
			'brace-style': ['error'],
			'camelcase': ['error'],
			'comma-dangle': ['error', 'always-multiline'],
			'comma-style': ['error'],
			'curly': ['error', 'all'],
			'default-case': ['error'],
			'default-case-last': ['error'],
			'default-param-last': ['error'],
			'eqeqeq': ['error'],
			'func-call-spacing': ['error'],
			'function-call-argument-newline': ['error', 'consistent'],
			'function-paren-newline': ['error', 'consistent'],
			'key-spacing': ['error'],
			'keyword-spacing': ['error'],
			'linebreak-style': ['error'],
			'new-parens': ['error', 'never'],
			'no-alert': ['error'],
			'no-confusing-arrow': ['error'],
			'no-constructor-return': ['error'],
			'no-duplicate-imports': ['error'],
			'no-eval': ['error'],
			'no-lonely-if': ['error'],
			'no-nested-ternary': ['error'],
			'no-multi-spaces': ['error'],
			'no-multiple-empty-lines': ['error', {
				max: 5,
				maxBOF: 0,
				maxEOF: 1,
			}],
			'no-plusplus': ['error'],
			'no-proto': ['error'],
			'no-promise-executor-return': ['error'],
			'no-return-await': ['error'],
			'no-script-url': ['error'],
			'no-self-compare': ['error'],
			'no-sequences': ['error'],
			'no-shadow': ['error'],
			'no-trailing-spaces': ['error'],
			'no-undefined': ['error'],
			'no-unmodified-loop-condition': ['error'],
			'no-unneeded-ternary': ['error'],
			'no-unreachable-loop': ['error'],
			'no-unused-expressions': ['error'],
			'no-unused-labels': ['error'],
			'no-unused-private-class-members': ['error'],
			'no-unused-vars': ['warn', {
				args: 'after-used',
				argsIgnorePattern: '^_',
			}],
			'no-use-before-define': ['error'],
			'no-useless-call': ['error'],
			'no-useless-computed-key': ['error'],
			'no-useless-concat': ['error'],
			'no-useless-constructor': ['error'],
			'no-useless-rename': ['error'],
			'no-useless-return': ['error'],
			'no-var': ['error'],
			'no-void': ['error'],
			'no-whitespace-before-property': ['error'],
			'object-curly-newline': ['error', {
				consistent: true,
				minProperties: 2,
			}],
			'object-curly-spacing': ['error', 'always'],
			'prefer-const': ['error'],
			'prefer-exponentiation-operator': ['error'],
			'prefer-object-has-own': ['error'],
			'prefer-object-spread': ['error'],
			'prefer-regex-literals': ['error'],
			'prefer-spread': ['error'],
			'prefer-rest-params': ['error'],
			'prefer-template': ['error'],
			'quotes': ['error', 'single'],
			'radix': ['error'],
			'require-atomic-updates': ['error'],
			'require-await': ['error'],
			'require-unicode-regexp': ['error'],
			'semi': ['error', 'never', {
				beforeStatementContinuationChars: 'always',
			}],
			'space-before-blocks': ['error', 'always'],
			'space-before-function-paren': ['error', 'never'],
			'sort-class-members/sort-class-members': ['error', {
				accessorPairPositioning: 'getThenSet',
				order: [
					'[static-properties]',
					'[static-methods]',
					'[conventional-private-properties]',
					'[properties]',
					'constructor',
					'[methods]',
					'[conventional-private-methods]',
				],
			}],
			'sort-imports': ['error', {
				allowSeparatedGroups: true,
				ignoreCase: true,
				memberSyntaxSortOrder: [
					'none',
					'multiple',
					'single',
					'all',
				],
			}],
			'no-new-func': ['off'],

			// editorconfig
			'editorconfig/indent': ['error', {
				'SwitchCase': 1,
			}],

			// jsdoc
			'jsdoc/check-tag-names': ['error', {
				definedTags: [
					'component',
					'xstate-layout',
				],
			}],
			'jsdoc/no-types': ['off'],
			'jsdoc/no-undefined-types': ['error', {
				definedTypes: [
					'RequestInit',
					'ResizeObserverCallback',
					'ResizeObserverOptions',
				],
			}],
			'jsdoc/require-jsdoc': ['error', {
				require: {
					ArrowFunctionExpression: true,
					ClassDeclaration: true,
					ClassExpression: true,
					FunctionDeclaration: true,
					FunctionExpression: true,
					MethodDefinition: true,
				},
			}],
			'jsdoc/require-param': ['error', {
				exemptedBy: ['component'],
			}],
			'jsdoc/require-returns': ['error', {
				exemptedBy: ['component'],
			}],
			'jsdoc/tag-lines': ['error', 'never', {
				startLines: 1,
			}],

			// security
			'security/detect-object-injection': ['off'],
		},
		settings: {
			jsdoc: {
				mode: 'typescript',
			},
		},
	},
]
