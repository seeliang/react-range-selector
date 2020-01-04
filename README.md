[![Build Status](https://travis-ci.org/seeliang/react-range-selector.svg?branch=master)](https://travis-ci.org/seeliang/react-range-selector)
[![codecov.io](https://codecov.io/github/seeliang/react-range-selector/coverage.svg?branch=master)](https://codecov.io/github/seeliang/react-range-selector?branch=master)
[![npm version](https://badge.fury.io/js/react-two-points-range-selector.svg)](https://badge.fury.io/js/react-two-points-range-selector)
[![npm](https://img.shields.io/npm/dy/react-two-points-range-selector.svg)](https://npm-stat.com/charts.html?package=react-two-points-range-selector)
[![Dependencies](https://david-dm.org/seeliang/react-range-selector.svg)](https://david-dm.org/seeliang/react-range-selector)

# React two points range selector
the [html5 input range](https://www.w3.org/wiki/HTML/Elements/input/range) only supports one point, and it's not easy to use for mobile. this npm pack is an alternative solution with input checkbox

## Demo 
[Demo page](http://seeliang.github.io/react-range-selector/)

* [use as a package](https://github.com/seeliang/react-range-selector/blob/master/demo/import-set/form.js)
* [use as a plugin](https://github.com/seeliang/react-range-selector/blob/master/app.html#L35)

## Features
 * based on [BEM](https://css-tricks.com/bem-101/)
 * has "is-start " class, "in-range" and "is-end" class for special styling set
 * support initial selected range
 * support customize range
 * standalong react [plugin](https://cdn.rawgit.com/seeliang/react-range-selector/master/build/js/react-range-selector.js) with options set for your quick prototype, [check the Demo](http://seeliang.github.io/react-range-selector/)


## License

MIT licensed

## Release
### 2.0.4
* fix: update webpack build for package

### 2.0.3
* fix: use `/lib`

### 2.0.2
* fix: incomplete src code

### 2.0.1
* fix: empty package
* chore: licence update

### 2.0
* BREAKING: `rangeUpdate` return object [data](https://github.com/seeliang/react-range-selector/pull/57/files#diff-3d89a121d9489b4df1b85aa9fb02ef15R50) with `values`, `section`, `selectedIndex`
* BREAKING: [move to flat css structure](https://github.com/seeliang/react-range-selector/pull/57/commits/e2ab48a341449d24b20f47b0e039881cd8196b2b)
* FEAT: `initialFormState` to [generate initial state from data](https://github.com/seeliang/react-range-selector/pull/57/files#diff-3d89a121d9489b4df1b85aa9fb02ef15R32)
* FEAT: `generatePropsWithData` [mapping data to RangerSelector](https://github.com/seeliang/react-range-selector/pull/57/files#diff-3d89a121d9489b4df1b85aa9fb02ef15R44)
* CHORE: recover lint
### 1.3.0
* add package feature 

### 1.2.0
* MIT licensed

### 1.1.1
* reduce package size: move test and demo code from build package
* add npmignore

### 1.1.0
* add feature: pass state to parent component (rangeUpdate)

### 1.0.2
* fix single selected not showing bug
* add unit test for the bug
### 1.0.1
#### Refactor:

 * Main
 * checkbox
 * folder structure
#### Test:
 * Enzyme test in main
 * snapshot update

#### Chore: 
 * update React to 16
 * dev dependencies update
 * replace deprecated dependency 
 * eslint rule update

#### Docs:
* dependency badge
* download badge

[details](https://trello.com/b/TbKcN5vL/range-selector)

## Special thanks
* [Jacob Bass](http://jacobbass.net/resume/) -- amazing guy :)

[![Analytics](https://ga-beacon.appspot.com/UA-71361289-1/two-points/read-me)](https://github.com/igrigorik/ga-beacon)
