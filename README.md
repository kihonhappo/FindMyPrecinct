# Overview

I work for a county in Texas and I had a county resident call to find out which Justice of the Peace Precinct that they needed to contact. I had to use a large PDF file that was full of street names and other data set up in a table like format, it was a nightmare to find the residents address and then to determine which JP Precinct their address fell into. So I decided to use Google Maps Javascript API to create a prototype web application that I as well as residents could use to discover their JP Precinct. This is the Find My Precinct App.
 
## GIS Development Options
- [ArcGIS](https://www.arcgis.com/index.html)
- [Google Maps](https://developers.google.com/maps)

## Software Description
I decided to use Google Maps API to build the Find My Precinct Prototype Application. I was able to create a map that used coordinatees to outline the county and the JP precinct boundaries along with a marker for each JP office. I also included an input control that uses autocomplete so the user can type in their address and if the address is not valid then a popup box displays a message stating that the address is not valid. If the address is valid then the system will dynamically create and place a marker showing where your address is with in the JP boundaries and the user can then see their JP office. 

## Video Walk Through

[FindMyPrecinct Demo Video](https://youtu.be/xwNfHkoXhWI)

# Development Environment

- Visual Studio Code (VSCode)
- Google Maps
- Notepad ++
- Google Maps Javascript API

# Technologies (2023)

- JavaScript
- Google Maps API
- GitHub

# Troubleshooting

- Issue: The documentation and tutorials would show examples for using legacy api code and then sometimes show the new api code but a lot of time I found it difficult to find examples based on the new api code. 


- Issue: Difficulty in converting the bondary points from the map to the Api to create polylines.
    - Fix: I had to export each map layer as a csv data file and then copy the boundary coordinates and paste them into a custom object with in the javascript code. I tried to import the KML files but I couldn't get them to import so I had to spend a lot of time redoing my map and then exporting the data as I mentioned above.


# Useful Websites

* [Google Maps](https://developers.google.com/maps)
* [Google Maps API Documentation](https://developers.google.com/maps/documentation/javascript/get-api-key)

# Future Work

* Create a function that will show a Label that displays all of the contact and address data for the JP precinct that your address is within its boundaries.
* Have the boundaries and JP marker that the user is in to light up and cause the other JP markers and boundaries fade.
* On user address submission the applicaiton will show the fastest route to its designated JP office and show the miles to get their. 
* In the contact information include an email as well as the phone number so that if the user clicks on the phone then they can dial or if the user clicks on the email then the user's email client pops open so they can email the JP office.