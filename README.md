# NYT Article Viewer
This application utilizes html, css, bootstrap, javascript, Node.js, React, Express, Mongodb, mongoose, REST, and MVC architecture to create a webpage that enables users to search the New York Times (NYT) using the NYT API. Searches can be saved to a database and all saved articles are loaded to all users.

## Application Overview
![Start Screen](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytload.PNG)

The main page is divided into 3 main components: a search bar and two article components-one displays searched articles; one displays saved articles.

The page populates via React and articles can be interacted with to save them to a mongo database that is accessible to all users or delete an article from the database.

![App Overview](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytov.gif)

### The Search Bar
![Search Bar](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytbar.PNG)

The search bar comprises the main functionality of the app. Users can search any term or phrase and optionally limit it to a selection of years. 

![Search Year Limit](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytsearchyr.PNG)

All supplied information is then sent to a string of functions that validates the inputs. Any year supplied that is not an int and four digits is ignored. This is then sent to the api using axios.

![search API Code](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytsearchcode.PNG)

The search bar is comprised of four components: three of type input and one of type button. Props in the form of state and functions are passed to a number of these.

![search props](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytsearchprops.PNG)

### Articles
The Articles component used for **Top Articles** displays all results from the api search performed via the search bar.

The Articles component used for **Saved Articles** displays all results currently saved to the mongo database.
![Saved Articles](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytsaved.PNG)

+ On Component mount, this section is populated via a function call. This is the only "on load" function. All others are called via user interaction.

![Component Mount](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytloadcode.PNG)

Regardless of Top or Saved, the **Articles Component** takes the results and maps them to the component Article, which is repeatedly used to render each individual article with a title linking to the NYT url, author if available, section if available, date posted, and a button that either:
1. Saves an article from Top Articles to the Mongo database
2. Deletes an article from the mongo database in Saved Articles

Saving is depicted in the gif at the top of the page.
![Deleting Article](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytdel.gif)

### Challenges
One difficulty was found in synchronizing the Articles/Article components with the NYT "byline" parameter. The author of the article is provided in byline as an object by default in the "original" parameter. Some articles don't have authors, while byline in the mongo database has the final author value. 

In order to reuse the component, a function was created and passed down that allows for these three possible values of byline.

![byline](https://github.com/bshin19/NYT_Displayer/blob/master/client/public/img/nytbyline.PNG)