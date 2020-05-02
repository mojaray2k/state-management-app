# React Redux

## The main goal of state management is
1. Getting the `state`
2. Updating the `state`
3. Listening for changes on the `state`

## How to scale an applicaiton state correctly
1. Every component should be able to easily:
   1. Get the `state`
   2. Update the `state`
   3. Listen for changes to the `state`
   4. Get data from the `state` and only rerendering when data they need changes

## Sample Folder Structures

#### [Rails-style](https://smartlogic.io/ruby-on-rails)
The Rails-style convention of code structure suggests that code should be separated into files within function-specific folders such as Components, Actions, Reducers, Middleware, etc. The resulting folder structure resembles the way in which many [Rails](https://smartlogic.io/ruby-on-rails) projects are organized into function-specific folders for Models, Views, and Controllers. This design pattern suffices for smaller projects, but as apps grow, each of these folders can quickly become unwieldy. Each folder could contain dozens, potentially even hundreds, of files which becomes very difficult to manage.

#### [Domain-style](https://marmelab.com/blog/2015/12/17/react-directory-structure.html)
A [domain-style](https://marmelab.com/blog/2015/12/17/react-directory-structure.html) design pattern helps to address the issue of bloated, unmanageable, Rails-style folders by organizing files into folders based on app features such as User, Post, Order, etc. All files regarding Orders, for example, would be located within the Order folder, and that folder would then contain files for Order related components, actions, reducers, and helper functions. This file structure allows for quick access to relevant files when working on specific app features, and eliminates the need to search through large, cluttered folders and files.

#### [Ducks pattern](https://github.com/erikras/ducks-modular-redux)
While the domain-centric pattern is a big step in the right direction, our dev team at SmartLogic has found the [Ducks](https://github.com/erikras/ducks-modular-redux) pattern to be an even more effective way to organize our code. As in the domain-style convention, code is organized based on features of the app. The "ducks" pattern, however, combines the actions, action type constants, and reducers into a single redux file.

This consolidation of Redux-specific code leads to leaner project directories which has proved to be very beneficial as our apps grow. Additionally, when working on redux-related code, less files need to be touched. These benefits normally come at a cost, though. Combining actions, action type constants, and reducer logic could potentially result in very large redux files.
