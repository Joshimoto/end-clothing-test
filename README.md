## Table of contents

- [Project Thoughts](#project-thoughts)
- [Setup](#setup)

## Project Thoughts

### MY SOLUTION PROCESS:
When shown the requirement of rendering the component sever-side using express I was unsure of how to handle this.

I haven't worked with express before and it was unfamiliar territory for me.

When I usually encounter a problem that I am unsure of and it is a core part to the app's functionality I try a Tracer Bullet development approach.

A Tracer Bullet development approach is about creating one feature that uses all your app's core development tooling from end-to-end.

By doing the tracer bullet development, I wanted to cover:
- Setting up the initial create-react-app
- Setting up the Redux store and allowing the initial state to be populated by server-side rendering
- Creating tests to ensure the testing suite was setup correctly.
- Finally can the app run client and server-side?

### HOW DID IT GO?:
Overall I was not able to accomplish what I wanted in the three hours. I had issues with the npm scripts for running the server causing issues with the create-react-scripts.

With a lot of time trying to fix this conflict, I decided to cut my losses and move on to just implementing the client-side rendered app.

Since I couldn't cover the entire process with the Tracer Bullet development, I wanted to still try and check the rest of the processes were working. e.g. Testing, running the app client-side, etc.

I have given some more details to the sections I have covered below.

#### State Management:
I decided to go with Redux in this project instead of the ContextAPI. My reason for this is that I have more experience working with Redux than I have with the ContextAPI. Also, I am assuming since you are running a very large codebase you are probably using Redux too.

#### The Nav Component:
Since the END clothing website had a large viewport nav and a small viewport nav, I decided to go with the same approach.

Also, the components are quite different in functionality and presentation, where I feel a seperate nav component for each viewport would make the code cleaner and easier to maintain long-term.

I included the logic for loading the relevant nav type based on the user's viewport width.

I decided not to use the Redux data in the app in the end. I was running out of time and since testing is quicker without wrapping the component with the Provider, I decided just to import the data and test it that way.

#### Testing:
When it came to testing, I decided to stick to a few core tests that would show how I create tests for React apps.

I decided to cover whether or not the Nav was displaying and I also checked if the correct Nav was displayed based on the user's viewport.

#### Styling and UI Design:
When running the app you will realise I haven't spent too much time replicating the exact styling for the Nav component.

If I had more time to build a production ready app, I am confident I could style the Nav component to look the same as the Nav on the END clothing website.

In terms of how I did the styling I decided to use styled components. I really like styled components and find they help the readability of your app. They avoid having multiple div tags chucked full of class names.

#### Conclusion:
Overall, I was not able to complete what I wanted to in the 3 hours. This was due to some issues running the server correctly in my project.

I think the Tracer Bullet development did slow me down and reduced the amount of work I was able to output during the test. I do however, stick to my decision of choosing the Tracer Bullet development approach. I do agree that it might not be the best for completing a test within 3 hours.

However, since this test was about covering my work process I had to include it.

If I had more time I would have gone through the whole Tracer Bullet development process and fixed that issue with the server.

Here are some other improvements I would have done if given enough time:
- Create an api call to grab the nav data from the server if client-side rendered (I feel like the data should only come from one place - the server!)
- Got the app working for client and server-side rendering.
- Finished the implementation for the LargeViewportNav and the SmallViewportNav (Styled and fully functional)
- Hooked up the Nav to Redux so it could utilise the store data and adjusted my tests to test the Nav component wrapped in a provider.
- Created more tests to cover my util functions and any new functionality added to the project.

## Setup
Instructions for running the React app:

1 Open a terminal in the app root.

2 To install npm packages:

```
npm i
```

3 To run jest unit-tests:

```
npm test
```

4 To launch the app:

```
npm start
```
