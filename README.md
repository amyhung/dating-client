# DatingYou
A dating application built on top of Angular, NGRX, Bootstrap and RxJS.

Backend is built with .Net Core 3.1 . Check out here: [DatingYou Backend](https://github.com/eneajaho/dating-api).

App showcase gallery: [here](https://imgur.com/a/r6bIrfG)

## How to run
- Clone the repository
- Install dependencies
- Run application

```bash
git clone https://github.com/eneajaho/dating-client.git
npm install
ng serve -o
```


## What's included
- NGRX Store (eager & lazy loaded store modules)
- Authentication & Authorization
- CRUD & Pagination (server side)
- Multiple layouts architecture 
- Light & Dark Mode
- Image uploading


### Main folder structure
    .
    ├── core                      # Core Module manages global services, interceptors and other configs.
    │   ├── configs
    │   ├── guards
    │   ├── interceptors
    │   ├── models
    │   ├── services
    │   └── core.module.ts
    ├── layout                    # Layout Module manages navigation components, layouts and theme service.
    │   ├── components
    │   ├── containers
    │   ├── services
    │   └── layout.module.ts
    ├── pages                     # Pages is where lazy loaded and eager modules live
    │   ├── auth
    │   ├── settings
    │   └── members
    ├── shared                    # Shared Module includes the most used components in the app. 
    │   ├── components
    │   ├── directives
    │   ├── pipes
    │   ├── validators
    │   └── shared.module.ts
    ├── store                     # Manages and initializes the Root Store Module (NGRX Store)
    │   ├── effects
    │   ├── reducers
    │   └── root-store.module.ts
    ├── app.component.ts
    ├── app.module.ts  
    └── app-routing.module.ts
    
### Feature modules folder structure (auth, members, settings etc.)
     
    module                    
    ├── containers
    ├── components
    ├── services
    ├── guards
    ├── store
    └── module.ts


### Todo
- Filter/sort functionality
- Likes functionality
- Private messages (using SignalR) functionality
- Upgrade to Angular 10
- SSR (Angular Universal)
- Testing 

#### License: MIT

#### Author: [Enea Jahollari](https://github.com/eneajaho)
