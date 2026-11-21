--Readme document for Charlotte Huang, CHARLYH3@UCI.EDU (85298239) & Sarah Lee, sarahsl7@uci.edu (11842214)--

to-do list
- saving name function
- good morning/night function on home page

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
16


3. What online resources did you consult when completing this assignment? (list specific URLs)
https://www.w3schools.com/jsref/jsref_isnan.asp
https://www.w3schools.com/tags/att_input_type_datetime-local.asp
https://ionicframework.com/docs/api/card
https://www.w3schools.com/jsref/jsref_tolocaletimestring.asp
https://ionicframework.com/docs/angular/lifecycle 
https://ionicframework.com/docs/api/content
https://ionicframework.com/docs/api/accordion
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap
https://ionicframework.com/docs/api/picker
https://capacitorjs.com/docs/v7/apis/preferences 
https://www.w3schools.com/js/js_json_stringify.asp

images:
overnight sleep cover: https://www.shutterstock.com/image-vector/young-woman-sleeping-bed-night-healthy-2771396145?trackingId=7326656c-5561-43fa-9ae9-859651261277&listId=searchResults
sleepiness cover: https://www.shutterstock.com/image-vector/man-work-late-night-sleepy-person-2186699475?trackingId=ac9f6df6-90ad-4663-a636-9af746f25ed6&listId=searchResults
your history cover: https://www.shutterstock.com/image-vector/procrastination-do-later-put-off-until-2732770451?trackingId=5e93eb78-9fe5-4c3f-8e88-f12956278e5f&listId=searchResults


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
N/A


5. Is there anything special we need to know in order to run your code?
N/A

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
We didn't design our app with a particular type of user in mind, but we wanted to created 
designs that are minimalistic and easily accessible/usable. Our layout resembles various health
or fitness apps, so our users would also be familiar with and enjoy those types of apps.


7. Did you design your app specifically for iOS or Android, or both?
Our app was designed specifically for iOS, as we don't have a navigation bar and emphasized the look
of simplicity and clear hierarchy. Our UI also utilizes that of an iOS, such as a top left back button
as well as the typography of our pages.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
A person can log their overnight sleep by selecting their bedtime and wake-up date and time using the calendar (date/time) picker
and then pressing the "Save Sleep Log" button. We chose to support logging overnight sleep in this way because the user
can log both times right after they wake up, without having to remember to log the bedtime before sleeping.


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?



10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
We organized the overnight sleep and sleepiness logs using collapsible sections, so that in the case where the data gets long,
the user can reduce the scrolling and just focus on the category they're interested in viewing. The overnight sleep log shows
entries (ordered from the most recent date/time) of the user's bedtime, wake-up time, and total hours of sleep (so that the user
doesn't need to manually count it), and the sleepiness section shows the rating the user personally inputted in the daytime.


11. Which feature choose--using a native device resource, backing up logged data, or both?
We chose the feature of backing up logged data.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
N/A


13. If you backed up logged data, where does it back up to?
We decided to use Capacitor Preferences to back up data locally on the users' device, meaning it uses the browsers' localStoragen
when running the app on the web. The data is saved as a JSON so that it can be retrieved and displayed on the history page even 
when the user repoens or refreshes the application.

14. How does your app implement or follow principles of good mobile design?
Our app implements principles of good mobile design by incorporating a clear visual hierarchy through action cards, a sufficient
color contrast for accessibility, error prevention date/time pickers, as well as error messages that clearly explain to the user 
what went wrong so that they can properly save their logs. We also use design components, like the homepage cards and
collapsible sections in the history, to naintain design consistency ad styling.