# routing.js
- GTFS routing in the browser
- also works offline!
- small (< 100 KB, including all data) and extremely fast (10-20 ms)
- everything in JavaScript
- made at #dbhackathon

## preprocessing
- bin/extract.js uses a simple GTFS lib to parse GTFS, extract a chunk of 7 days and store the necessary data in a small JSON
- bin/lib/gtfs.js is this simple GTFS lib. I hacked it in 3 hours ... so sorry, no comments, yet.

## routing
- web/gtfs.json is the JSON from the preprocessing.
- web/index.html is where the magic happens. I hacked that in 3 additional hours the next day.

## algorithm
Loosely based on <http://i11www.iti.kit.edu/extra/publications/dpsw-isftr-13.pdf>
1. Calculate the distance from starting point to every train station and estimate the duration to walk there (3 km/h)
2. Find the nearest station and use it's timetable to calculate all possible trips to other stations.
3. Mark that station as "checked", find the next nearest station (that's not checked) and continue with step 2.
4. When all stations are checked, find the station with the fastest trip.

## demo
Check <https://michaelkreil.github.io/routing.js/>

## conclusion
It's a showcase! It proves that routing in the browser works, is fast and makes sense.

If you like to fork, reuse, improve or take over: Please do so! You can contact me via [@MichaelKreil](https://twitter.com/michaelkreil/)
