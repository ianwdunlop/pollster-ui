# Pollster UI
React based UI to display results from the Pollster API. Shows current polls. Click on button to vote. Shows
the percentage votes for each option in the poll.

## Running
Install required packages
```bash
npm install
```
and start up the app

```bash
npm start
```

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. You will need some data in the [API](https://github.com/ianwdunlop/pollster) so push some into it first.

## Using
When you open the app you will be presented with buttons containing the questions from each poll. If you click on one it will show you the options and the existing voting percentages. Click on one to register a vote. At the moment the percentages are not automatically updated on screen, you need to click on another poll and then go back to the one you voted on to see the changes.

## Testing
```bash
npm run test
```

## TODO
* Hide components as you navigate from poll to options
* Move the vote buttons to a separate component
* Use state to update the vote for each option
* Add some styling
