Lesson 1, Introduction of React Query

React Query is a library for fetching data in a React application

* since React is a UI library, there is no specific pattern for data fetching
* useEffect hook for data fetching and useState hook to maintain component state like loading, error or resulting data
* if the data is needed throughout the app, we tend to use state management libraries
* most of the state management libraries are good for working with client state.
Ex: 'theme' for app / whether a modal is open.
* State management libraries are not great for working with asynchronous or server state.

1. Client state, persisted in your app memory and accessing or updating it is synchronous.

2. Server state, 
* persisted remotely and requires asynchronous APIs for fetching or updating.
* has shared ownership
* data can be updated by someone else without your knowledge
* UI data may not be in sync with the remote data
* can be more challenging when you have to deal with caching, deduping multiple requests for the same data, updating stale data in the background, performance optimization etc.

Course Content

Basic queries, polling data, RQ dev tools, Create reusable query hooks, Query by ID, Parallel queries, Dynamic queries, Dependent queries, Infinite & paginated queries, Update data using mutations, Invalidate queries, Optimistic updates, Axios Interceptor. 

--------------------------------------------------------------------------------------

Lesson 6, Query Cache

React Query Cache has a default of 5 min. cache.

If a user click the link within 5 min., the loading would be false, but the fetching would be true. The OLD data would show first and fast, while the new data would show a little better later.

The request would aways ask the server to load and fetch new data, the user would see the new data first then old data second, the "loading..." won't be shown.

------------------------------------------------------------------------------------

Lesson 7, Stale Time

The default is 0 second.

If stale time set up as 30 seconds, a user click the link within 30 seconds, the loading and fetching both will be false. This means it shows only OLD data instead of asking server to load or fetch new data again. Server would save some works in this case. 

However, the drawback is that the user won't see the new data if she clicks the link within 30 seconds. Of course, if the user click the link again after 30 seconds, she would see the new data again.



