# Heavy-Metal-Polygons

### Background

Gentrifi is a data-visualization infographic that aims to plot recent home sales price data by NYC subway lines. This infographic attempts to illustrate the correlation between real estate prices and proximity to subway lines.

1) Recent home sales will be plotted in Google Map API along with an overlay of the NYC subway line.
2) Recent home sales price data in NYC is obtained from public databases from http://www1.nyc.gov/site/finance/taxes/property-rolling-sales-data.page.
3) User can filter through subway lines and view sales transactions near that line.

### Functionality & MVP  

User will be able to:

- [ ] Click on a subway line on Google Map
- [ ] Mouseover recent home sale markers that will display more details about the transaction

In addition, this project will include:

- [ ] A production README

### Wireframes

This infographic will consist of a single screen with a map, and nav links to the Github, my LinkedIn,
and the About modal. Clickable subway lines will be used to toggle between the subway lines.

![wireframes]
<!-- (https://github.com/appacademy/ny-portfolio-curriculum/blob/master/javascript-project/js-proposal-wireframe.jpg) -->

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for programming logic,
- `Google Map API`,
- `Browserify` to bundle js files.???

In addition to the entry file, there will be three scripts involved in this project:

`map.js`: this script will handle the logic for creating and rendering the map.

`marker.js`: this script will be responsible for handling the logic of real estate markers on the map.

`.js`: .

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and setting up the map in `map.js`. Write a basic entry file and the bare bones of all 3 scripts outlined above. Learn the how to generate the NYC subway on the map. Goals for the day:

- Get a green bundle with `Browserify`
- Learn enough to render the NYC subway map onto the map.

**Day 2**: Dedicate this day to further expand knowledge about the Google Maps API. First, think about how to generate real estate markers when filtering by subway line.

- Make each subway line in the map clickable, toggling the state of the map on click.
- Generate markers close to proximity of the subway line when toggling state.


**Day 3**: Create the automata logic backend.  Build out modular functions for handling the different grid types along with their unique neighbor checks and rule sets.  Incorporate the automata logic into the `Board.js` rendering.  Goals for the day:

- Export an `Automata` object with correct type and handling logic
- Have a functional grid on the `HTML Baz` frontend that correctly handles iterations from one generation of the game to the next


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset, and shape type
- Have a styled `HTML Baz`, nice looking controls and title
- If time: include buttons on the side to toggle the color scheme of the cells


### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Add options for different rule sets
- [ ] Add multiple choices for starting states that are interesting
- [ ] Explore multi-state versions of the game, such as the ones outlined [here](https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/modeling-natural-systems/gameOfLife2.html)
