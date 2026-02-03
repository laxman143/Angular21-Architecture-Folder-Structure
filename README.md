# Angular21ArchitecuteFolderStructure

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


-------------
1. Added BDD 

   installation 
    1. npm init playwright@latest
    2. npm install --save-dev @cucumber/cucumber ts-node

    Create cucumber js file and add below configuration 
       require: ['e2e/steps/**/*.ts','e2e/support/**/*.ts'],
       paths: ['e2e/features/**/*.feature'],

  
   Run BDD framework :  npm run bdd
   1. Write steps in e2e/steps folder
   2. Write cases in e2e/features folder
   3. Support folder have world.ts and hooks.ts
      - hooks file run init and close on every case
      - worlds ts file used for share command object , context and browser


 NOTE
   Run BDD - npm run bdd
   Run slow motion app : npx cucumber-js   
   If we want to pause browser for debugger - then add below statement
     await this.page.pause();


2. RUN only signle feature , Add @smoke on feature and @important on Scenario
 
  @smoke
  Feature: Products navigation from left panel

  Background:
    Given user is logged in 
    And user is on dashboard page

 @important
  Scenario: View products list from left panel
    When user clicks on Products menu from left panel
    Then user should be redirected to products page
    And product list should be displayed
    And at least one product card should be visible
    
 then run --- npx cucumber-js --tags "@important" --- command
