# sunchaser

This repo contains the source code for my second project of General Assembly's Software Engineering Immersive course (March 13th - June 9th 2023). 

The project is my first attempt to showcase the skills I have been picking up in React, which was totally new to me before the course.

Project 2 runs from 17th - 20th April (4 working days) and is an independent project.

___

## Deployment

[Chase the sun now via my custom domain](http://louisejones94.co.uk)

___
## Technologies Used


- React
    - Front end UI interactivity
    - Hooks
- JSX
    - Data 
- CSS
    - Flexbox
- VS Code
    - Text editing
    - Accessing Git via CLI
- Chrome developer tools
    - Inspecting elements, layout etc
    - Debugging
- Postman
    - API testing



___
## Brief

### Big Goals

1. A front-end list based React application that updates the UI and makes requests to the
   API.
2. Include data from a third-party API.
3. Build a web application from scratch, without a starter codebase.

### Technical Requirements

- Add a new item to a list
- Mark the item as complete/favorite/(watch, read, listen) later/flag/etc
- Edit an item from a list
- Remove an item from a list
- Clear/delete all items
- Clear/delete only marked items
- Fetch data from at least one 3rd party API using Axios or `fetch`.
- Make frequent Git commits with descriptive messages, explaining your commit.
- Use React Router to handle multiple pages/views.

### Full Brief

Found at https://git.generalassemb.ly/SEI-LND-71/Project-2


___
## Planning

### User Stories

User Stories

Number	Feature	Story	Bronze	Silver	Gold
1	Location finder	As a sun-seeker, I want to enter my postcode, so that I can chase the sun	Enter postcode	Enter city	Use my current location
2	Date finder	As a sun-seeker, I want to choose a date to chase the sun, so I can plan ahead 	Today only	Next 4 days date picker	
3	Initial list	As a sun-seeker, I want to see a list of sunny places near me, so that I can choose where to go	List of place names	Place names with weather conditions	Weather icons, distance from user
4	Ordered list	As a sun-seeker, I want the list to be in order with the sunniest places first, so that I can make my choice based on the amount of sun	Sunniest first	Closest first	Choose order of results (sunniest, most hours of sun, hottest, closest)
5	Number in list	As a sun-seeker, I want to see a maximum of 10 sunny places, so that I'm not overwhelmed with options	Max 10 options	Choose number of options	Paginate and choose number per page
6	User list	As a sun-seeker, I want to save my favourite sunny places to a shortlist, so I can see them all in one place	Save to list	Show/hide the list	Local storage the list
7	Delete from user list	As a sun-seeker, I want to edit my shortlist, so if somewhere is no longer sunny, it is no longer on my shortlist	Delete from list	Deleted "visited" from list	Select all and delete from list
8	Tick off "visited" places	As a sun-seeker, I want to mark sunny places as visited, so I can track where I've been or not been yet	Mark as visited		
9	More place information	As a sun-seeker, I want to find out more about sunny places so I can decide if I want to visit	Link to place on Google or tripadvisor	Show top 3 things to do from tripadvisor	Filter by types of things to do
10	Directions	As a sun-seeker, I want to get directions to a sunny place so I can figure out how to get there	Link to Google maps	Google maps API, driving only	Choose mode of transport
11	Place pages	As a sun-seeker, I want to look at the weather at each place in more detail	useParams with weather for each place		


### Wireframe

I opted for a low fidelity wireframe to show the :
![Wireframe](./images/Wireframe.png)


### Project Management
I wanted to organise my time better than Project One. I used [this Jira board](https://louisejones.atlassian.net/jira/software/c/projects/SUN/boards/1) to add in target start and end dates and time tracking estimates so I could check how realistic my original plans were.

___
## Build/Code Process

### Day 1

- Wireframe
- User Stories
- Planning
- React component diagram
- React page setup
- Linking react Router to Github Pages

### Day 2

- Getting into the meat of it
- API call
    - One for all the data
    - One for the person's location
    - Return a list of sunny places
    - Order the returned list
- User shortlist
    - Add to list
    - Mark as visited
    - Remove from list
- After some time thinking my data or code must be wrong as Aberdeen and Skye were showing as the hottest places in the UK, it turns out to just be extremely hot in the Highlands today: https://www.independent.co.uk/news/uk/met-office-scottish-highlands-scotland-britons-northern-ireland-b2321262.html


### Day 3
- Select all
    - Add all to shortlist
    - Delete all

### Day 4
- The HTTP hiccup (more on this in Challenges)
- Setting up a custom domain
- Styling (reduced time for this due to the HTTP hiccup)

___
## Challenges

### The HTTP Hiccup (and/or why didn't I test earlier!)

This was frustrating as it took up a fair amount of my limited time and is still unresolved. Unfortunately my Github Pages is hosted via HTTPS but my chosen API (which fetches data happily in Postman and localhost) is HTTP so is blocked as mixed content on Github Pages. I spent a lot of time trying to debug this, including setting up a custom domain and its DNS settings, and trying to use several proxies, each with their own issues. My lesson learned is to check and test the full API (and each major feature) on Github Pages, not just on localhost, as I would have caught the issue much sooner and potentially with enough time to pivot to a different host or a different API.

### Making reusable components flexible enough

I love the idea of reusable components for their efficiency and ease of understanding.

___
## Wins

### Planning and prioritising

After Project One, I identified a risk of getting distracted by something new and shiny (designing my own font, I'm looking at you...) so made a conscious effort to slow down and plan the project. This meant that each time I finished a ticket, the next most important piece of work was waiting for me. This massively reduced my cognitive load and therefore kept me working on the MVP rather than building something else great but unnecessary.

### React Router and Github Pages

I decided to set up my infrastructure first so that I wouldn't be panicking last minute trying to get Github Pages working (great idea, I just didn't follow through quite far enough!) After following a few tutorials and trying different ways to get React Router working with Github Pages, I finally found one that explained the steps in a way that made sense to me. I was therefore able to feed this information back to the team.

___
## Other Learnings/Takeaways

I have wanted to build something like this (although more advanced as shown in the Future Improvements section and silver/gold user stories) for a long time, so it's been really satisfying moving towards this goal. I'll definitely be working on this project beyond the scope of the course!

___
## Bugs

- API does not fetch from HTTP on Github Pages
- Marking all as visited does not cause each individual place to be marked as visited, only the button at the top

___
## Future Improvements

- Integrate Google Maps API so the list can be sorted by shortest distance/journey time first