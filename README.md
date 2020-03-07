# Flights Weather Report

<p align="justify">
We need to make an tool that delivers a weather report for travelers. The objective is reate an algorithm that allows to obtain departure and arrival cities climate report for a given list of flights that leave the same day. The algorithm receives a csv file than contains next information.

**Travel ticket information:**

* origin: airport of origin
* destination: destination airport
* airline: airline code
* flight_num: flight number

**Departure and arrival Airports Information**

* iata_code: unique airport code
* name: name of the airport
* latitude: geographical latitude
* longitude: geographical length

***
### Installation

* Open a terminal
* You must have installed the latest version of [Node.js](https://nodejs.org/en/).

```sh
# installation steps
$ sudo apt update
$ sudo apt install nodejs
$ sudo apt install npm

# check version
$ node -v
v12.14.1

# check version
$ npm -v
6.13.4
```

* You must have installed [Mocha](https://mochajs.org/).

```sh
# Installation steps
$ sudo npm i -g mocha

# check version
$ mocha --version
7.1.0
```
```sh
#Clone repository
$ git clone git@github.com:yexhoo/flights-weather-report.git
```
```sh
# Install the dependencies.
$ cd flights-weather-report
$ npm install
```

```sh
# Run tests
$ npm run test

# Output
> flights-weather-report@1.0.0 test /home/yexhoo/Documents/git/flights-weather-report
> mocha test/*.spec.js
 
  Extractor
    ✓ Get tickets
    ✓ Get airports

  Validator
    ✓ Invalid file name
    ✓ File not found
    ✓ Empty File
    ✓ Empty file, headers removed
    ✓ Some lines does not contain required data 


  7 passing (73ms)
```


### How to run it.
***

```sh
# Get the absolute path of CSV file.
# Absolute path is needed because output file is going to be placed there.
# For example:
/home/yexhoo/Documents/report/fligths.csv
```

```sh
# Open a terminal in root project
$ cd flights-weather-report

# Run next command
$ node main.js /home/yexhoo/Documents/report/fligths.csv

File validations ...
Tickets extraction ...
Airports extraction ...
Airports weather fetching ...
Tickets weather updating ...
Output report file writing ...


# You can check the output file at same folder of original file.
$ ls -l  /home/yexhoo/Documents/report/

-rw-rw-r-- 1 yexhoo yexhoo 2965 Mar  6 13:20 fligths.csv
-rw-rw-r-- 1 yexhoo yexhoo 6518 Mar  6 20:35 output.json
```
```js
// Output file contains a JSON information about flights and weather.
{
    "tickets":[
        {
            "origin":"TLC",
            "destination":"MTY",
            "airline":"4O",
            "flightNum":"104",
            "originIata":"TLC",
            "originName":"Licenciado Adolfo Lopez Mateos International Airport",
            "originLatitude":"19.3371",
            "originLongitude":"-99.566",
            "originWeather":{
                "id":802,
                "main":"Clouds",
                "description":"scattered clouds",
                "icon":"03n"
            },
            "destinationIata":"MTY",
            "destinationName":"General Mariano Escobedo International Airport",
            "destinationLatitude":"25.7785",
            "destinationLongitude":"-100.107",
            "destinationWeather":{
                "id":803,
                "main":"Clouds",
                "description":"broken clouds",
                "icon":"04n"
            }
        },
        {
            "origin":"MTY",
            "destination":"TLC",
            "airline":"4O",
            "flightNum":"119",
            "originIata":"MTY",
            "originName":"General Mariano Escobedo International Airport",
            "originLatitude":"25.7785",
            "originLongitude":"-100.107",
            "originWeather":{
                "id":803,
                "main":"Clouds",
                "description":"broken clouds",
                "icon":"04n"
            },
            "destinationIata":"TLC",
            "destinationName":"Licenciado Adolfo Lopez Mateos International Airport",
            "destinationLatitude":"19.3371",
            "destinationLongitude":"-99.566",
            "destinationWeather":{
                "id":802,
                "main":"Clouds",
                "description":"scattered clouds",
                "icon":"03n"}
        }
    ]
}
```


```js
/* 
The cache.json file is generated/populated after each execution (at root of project).
If some airport weather information is needed, the process validates if that already 
exist at this file. If does not exist, the proecess retrieve it from Open Weather 
service. The cache.json file is updated with new value to be available for next 
iteration. Otherwise the process uses it form cache.
*/
{
    "airPorts":[
        {
            "iata":"TLC",
            "latitude":"19.3371",
            "longitude":"-99.566",
            "weather":{
            "id":802,
                "main":"Clouds",
                "description":"scattered clouds",
                "icon":"03n"
            }
        },
        {
            "iata":"MTY",
            "latitude":"25.7785",
            "longitude":"-100.107",
            "weather":{
                "id":803,
                "main":"Clouds",
                "description":"broken clouds",
                "icon":"04n"
            }
        }
    ]
}
```