# MovieApp
Movie and Series App with react


Must features of the project:
- Home page, movies page and series page
- Loading and error handling (Error handling was performed in both cases where the wrong url is given and the api is corrupted.)
- Receiving the first 21 entries after 2010 on both the movie and TV series pages and displaying them in alphabetical order.

Extra features of the project:
- Dark and Light mode
- A single component is used for TV series and movie categories ("Content" component). The necessary filtering for the data coming from the API is done thanks to the custom hook I call "useFilter". By providing the necessary props to the "Content" component, series and movie views are obtained. Thus, code duplication is avoided.



- How did you decide on the technical and architectural choices used as part of your solution?
    - First of all, I decided which knowledge about React I have . For example, I'm good at writing a high-quality css. That's why I created the "dark/light mode" feature.

	- I love creating and using custom hooks. That's why I wanted to write the filter operation with a custom hook.

  	- I created component, hooks, style files respectively. I placed the necessary files in them. I placed all the pages in the component folder such as NavBar or Content. Because it is easier to think of many things as components in react.

  	- First, I created two separate components for Movies and Series and continued that way. But I noticed that all processes are the same, only one is filtered by programType="movie" and the other by proramType="series" . And I decided to create a component called "Content". In Movies and Series components, I used this component with the "<Content name="movie" />" and "<Content name="series" />" props.

    - I also used "Context" when creating "dark and light" mode. The "Switcher" performing the toggle is located in the NavBar. I need the "toggle" information here in all other components because many elements of other components such as background color, title colors, loading icon color are shaped according to the "toggle" information. I wanted to ease this data pass operation by using "context". With this way, The toggle data available in the navbar could be used by other components.

- Are there any improvements you could make to your submission?
	Of course, Improvements I have in mind:
	- Creating "favorites list" using Redux or local storage.
	- Responsive design
	- Placing "Image Slider" in Home Page. Landing pages are always important for a high quality UI.
	- Activating the search feature.

- What would you do differently if you were allocated more time?
	- If I had a little more time I would write better css for Home Page and Error page. Also, after listing 21 entries with the custom hook, if there are more than 21 entries that meet the conditions, I would show them on a second page. I could fix minor css bugs.




Setup:

	run npm i && npm start
