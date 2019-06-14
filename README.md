# Beep Boop

#### _A web site that outputs responses based on an input number - June 14, 2019_

#### _By **Na Hyung Choi**_

## Description

This web site takes a name and a number from a user and returns a range of numbers from 0 to the user input number with the following exceptions:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, <name>. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception applies unless the second exception does, and the same with the second and third.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Returns a range of numbers from 0 to the input number** | "4" | "0, 1, 2, 3, 4" |
| **Replaces the number "3" with "I'm sorry, Dave. I'm afraid I can't do that."** | "4" | "0, 1, 2, 'I'm sorry...', 4" |
| **Replaces the number "2" with "Boop!"** | "4" | "0, 1, 'Boop!', 'I'm sorry...', 4" |
| **Replaces the number "1" with "Beep!"** | "4" | "0, 'Beep!', 'Boop!', 'I'm sorry...', 4" |
| **Replaces any number containing a "3" with "I'm sorry..."** | "13" | "...11, 12, 'I'm sorry...'" |
| **Replaces any number containing a "2" with "Boop!"** | "13" | "...11, 'Boop!', 'I'm sorry...'" |
| **Replaces any number containing a "1" with "Boop!"** | "13" | "...'Beep!', 'Boop!', 'I'm sorry...'" |
| **Displays the input name instead of "Dave"** | "Charlie", "4" | "0, 1, 'Boop!', 'I'm sorry, Charlie...', 4" |
| **Outputs results in reverse order** | "4" | "4, 'I'm sorry...', 'Boop!', 'Beep!', 0" |

## Setup/Installation Requirements

* Clone this repository and open the .html file.
* OR go directly to the [Web page](http://schoinh.github.io/beep-boop)

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap

## Support and contact details

_Please contact Na Hyung with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Na Hyung Choi_**
