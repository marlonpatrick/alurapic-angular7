# Alurapic

This project was developed in the [Alura](https://www.alura.com.br/) Angular course.

However, I made some modifications in order to try out some ideas and concepts, which I highlight:

- **Hexagonal / Onion / Clean Architecture**: I tried to use some concepts of these architecture models since basically they defend the same principles. My goal was to organize the project in order to reinforce the proposed boundaries in these models, to facilitate unit tests, and to separate the responsibilities of each component in the application.

- To make clear the boundaries of Clean Architecture, instead of a single project, 3 projects were created:

    - **alurapic-ui**: in the language of the Angular CLI this project is an application (ng generate application alurapic-ui). The term "UI" refers to the User Interface. This is where the main framework configurations such as the Root Module and Routings are found, as well as the components, directives and pipes used in the creation of the HTML pages that the user will interact with the application.

    - **alurapic-domain**: in the language of the Angular CLI this project is a library (ng generate library alurapic-domain). The term "domain" comes from DDD and refers to the core business of the application. In this project are the main business rules of the application, preferably without coupling with any framework. Entities such as User or Photo reside here as well as Services. Actually, I'm not using the terminology "Service" in order to try a different approach, so I use the terms:

        - Query: class responsible for executing a single query on some specific backend. Defined as an abstract class in alurapic-domain, and implemented in alurapic-infra.

        - Mutation: class responsible for performing a single write operation on some specific backend. Defined as an abstract class in alurapic-domain, and implemented in alurapic-infra.

        - UseCase: class responsible for orchestrating a use case, for example "Place Order", which may or may not use multiple Queries / Mutations. If necessary, the Queries / Mutations are obtained via dependency injection so that it is decoupled from the implementation provided in alurapic-infra (Dependency Inversion Principle).

    - **alurapic-infra**: in the language of the Angular CLI this project is a library (ng generate library alurapic-infra). The term "infra" comes from Infrastructure, which in DDD, is a layer where all code related mainly to external aspects such as persistence, messaging, web services etc. It contains the implementations of Queries / Mutations, as well as any other type of implementation that needs to be communicated with some specific backend. The goal is for clients of these services to use only the abstract classes defined in the alurapic-domain and receive implementations via dependency injection. Thus, these implementations can be replaced more easily, either in the case of a real need, or to facilitate unit testing.

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng build alurapic-domain --watch`.

Run `ng build alurapic-infra --watch`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
