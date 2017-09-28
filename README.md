# Timey Wimey

#### Timey Wimey, Sept 2017

#### By Kheifer Fuller

## Description
_An application that allows a user to calculate their age in seconds on different planets as well as return the total time they have left to lift based on life expectancy._

## Setup/Installation Requirements
```console
* Ensure your computer has npm installed
```
```console
* Clone the repo
```
```console
* Build gulfile.js
```
```console
* Open index.html in your preferred browser to launch the application
```

## Specifications
| Behavior      | Input      | Output       |
| ------------- | ---------- | ------------ |
|The application should calculate the number of seconds between two dates |	9/24/1986, 9/8/2017 | 976924800  seconds |
|The application shall be able to convert seconds alive to Earth Years| seconds: 976924800 | Earth years: 30.9|
The application shall be able to convert an Earth age into the corresponding age of a selected planet | [30.3, 	"Mercury"] | 126.21 |
Given a birthday, sex, and nationality; the application should be able to return the years remaining based upon the selected planet |	[Birthday: 9/24/1986, Sex: "male", Country: "United States",	"Mercury"]| years remaining: 168.97|

# Screenshots

* _Selection Form_
![image of animal](https://github.com/kheifer/timeline/blob/master/images/image1.png)
* _Results_
![image of animal](https://github.com/kheifer/timeline/blob/master/images/image2.png)


# Known Bugs
* Ages outside stated range don't return a life expectancy
* Only able to select sex assigned at birth

## Technologies Used
* javascript
* jQuery
* atom
* node
* gulp

### License
Copyright &copy; 2017 Kheifer Fuller
