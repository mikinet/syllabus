(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{231:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),u=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=u(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,p=h["".concat(i,".").concat(d)]||h[d]||b[d]||o;return n?s.a.createElement(p,a(a({ref:t},c),{},{components:n})):s.a.createElement(p,a({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),s=n(6),o=(n(0),n(231)),i={id:"instructors",title:"Instructor Notes",sidebar_label:"Instructor Notes"},a={unversionedId:"git/instructors",id:"git/instructors",isDocsHomePage:!1,title:"Instructor Notes",description:"Want to make a change to this week but don't have the time? Click here",source:"@site/docs/git/mentors.md",slug:"/git/instructors",permalink:"/git/instructors",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/git/mentors.md",version:"current",sidebar_label:"Instructor Notes",sidebar:"Git",previous:{title:"Homework",permalink:"/git/homework"}},l=[{value:"IMPORTANT - Setup Needed For Students",id:"important---setup-needed-for-students",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Lesson Aims",id:"lesson-aims",children:[]},{value:"Lesson Background &amp; Discussion",id:"lesson-background--discussion",children:[]},{value:"Lesson Structure",id:"lesson-structure",children:[]},{value:"Exercises Overview",id:"exercises-overview",children:[{value:"Exercise 1",id:"exercise-1",children:[]},{value:"Exercise 2",id:"exercise-2",children:[]},{value:"Exercise 3",id:"exercise-3",children:[]},{value:"Exercise 4 &amp; 5",id:"exercise-4--5",children:[]},{value:"Exercise 6",id:"exercise-6",children:[]},{value:"Exercise 7",id:"exercise-7",children:[]},{value:"Exercise 8",id:"exercise-8",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Want to make a change to this week but don't have the time? Click ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title="}),"here")),Object(o.b)("p",null,"Want to report a bug in this week? Click ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title="}),"here")),Object(o.b)("h2",{id:"important---setup-needed-for-students"},"IMPORTANT - Setup Needed For Students"),Object(o.b)("p",null,"If you are teaching this class in the coming weeks you ",Object(o.b)("strong",{parentName:"p"},"must")," instruct your students to complete the instructions below."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./preparation"}),"Git Preparation")),Object(o.b)("p",null,"If you students do not arrive with these steps completed then you will lose a lot of time on your first lesson. You should consider running short mid-week sessions the week before to help students get set up."),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("h2",{id:"lesson-aims"},"Lesson Aims"),Object(o.b)("p",null,"Git and GitHub are vast topics, and learners have historically struggled a lot with them. We have very intentionally reduced the scope of what we're teaching here to just things which are immediately useful. This is both to reduce cognitive load, and to try to ensure the things we ",Object(o.b)("em",{parentName:"p"},"do")," teach actually stick (because struggling with ",Object(o.b)("em",{parentName:"p"},"how")," to submit your homework is really demoralising, whether you've excelled at the homework, or struggled with it)."),Object(o.b)("p",null,"The aims are:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To get the learners able to submit homework."),Object(o.b)("li",{parentName:"ol"},"To set the learners up so that in the coming weeks they can practice basic Git workflows via their ordinary homework."),Object(o.b)("li",{parentName:"ol"},"To see that Git maybe has ",Object(o.b)("em",{parentName:"li"},"some"),' use to them for now (via "checkpoint" commits), and encourage frequent commits.')),Object(o.b)("p",null,"We've purposefully left out anything which may require resolving merge conflicts (merging, pulling after an initial build, reverting), as well as branches in general. These will be introduced later in the course, when they're actively useful for the learners. For now, they don't ",Object(o.b)("em",{parentName:"p"},"need")," them, so we won't overload them."),Object(o.b)("p",null,"We also intentionally opted to avoid the command line. This was much debated, but the consensus was that ",Object(o.b)("inlineCode",{parentName:"p"},"git")," is not the most friendly command line tool for your first experience, and Git is complicated and scary enough without loading in more learning alongside it. Again, ",Object(o.b)("inlineCode",{parentName:"p"},"git")," will come later, after the learners have used the command line for something else."),Object(o.b)("h2",{id:"lesson-background--discussion"},"Lesson Background & Discussion"),Object(o.b)("p",null,"This lesson was discussed at length and has been archived here:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/syllabus/issues/77"}),"https://github.com/CodeYourFuture/syllabus/issues/77")),Object(o.b)("p",null,"Further discussion can take place in:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"#cyf-module-git")),Object(o.b)("h2",{id:"lesson-structure"},"Lesson Structure"),Object(o.b)("p",null,"This class was designed to be taught through lots of worked examples (both teacher-led, and as individual and group exercises). A full four hours is allocated to it, but the actual taught content is relatively light. There should be plenty of time for questions, and it's recommended to take them as they come up. The class is very linear, so any confusion early on is likely to compound."),Object(o.b)("p",null,"First, we try to give the learners experience of the problems Git solves before introducing Git as a solution, through real-world non-coding examples."),Object(o.b)("p",null,"We then introduce Git in a concrete use-case similar to the examples shown."),Object(o.b)("p",null,"Before the learners use Git, we point them at the cheatsheet. They ",Object(o.b)("em",{parentName:"p"},"will")," forget things and get stuck in the coming weeks, so we try to keep reminding them where to look if this happens."),Object(o.b)("p",null,"Show them each step of the teacher-led demo. There aren't many steps, but there are a lot of little ideas to teach at each stage. Then they do the same thing themselves."),Object(o.b)("p",null,"Commit messages, commit hygiene, when to commit, etc are all skills that are hard to teach, particularly when the learner has never written code before - the learners will hopefully work them out over time. Don't worry too much about them fully grasping the intricacies here, but try to seed some things to think about, which they will hopefully understand more over time."),Object(o.b)("h2",{id:"exercises-overview"},"Exercises Overview"),Object(o.b)("h3",{id:"exercise-1"},"Exercise 1"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aim"),": To show the student a concrete example of the problem they are trying to solve with using Git."),Object(o.b)("p",null,"Let this exercise open a discussion about why this is hard and how this could become completely unmanageable in a larger system."),Object(o.b)("p",null,"Open questions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It's manageable for three versions, what about 100 versions?"),Object(o.b)("li",{parentName:"ul"},"Have you ever seen this problem before?"),Object(o.b)("li",{parentName:"ul"},"What would happen if 100 people need the final version?")),Object(o.b)("h3",{id:"exercise-2"},"Exercise 2"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aim"),": To show the way that Git can solve the collaboration problem that Git can solve."),Object(o.b)("p",null,"Give the students some time to discuss as a class how they felt it."),Object(o.b)("p",null,"Open questions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"What would happen if we have lists of 100 items?"),Object(o.b)("li",{parentName:"ul"},"What if there were 100 people with their lists to merged together?")),Object(o.b)("h3",{id:"exercise-3"},"Exercise 3"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aim"),": Hands on experience of cloning a repository."),Object(o.b)("p",null,"You should expect a host of small issues and problems with the students doing this. Work closely with them in small groups to resolve these issues."),Object(o.b)("p",null,"This exercise may draw out for a long time with all manner of login issues, UI issues, and general confusion. Let it take as long as it takes. Make sure every learner has succeeded before moving on."),Object(o.b)("h3",{id:"exercise-4--5"},"Exercise 4 & 5"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aim"),": Hands on experience creating a Pull Request."),Object(o.b)("p",null,"Again, you should expect a host of small issues and problems with the students doing this. Work closely with them in small groups to resolve these issues."),Object(o.b)("h3",{id:"exercise-6"},"Exercise 6"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aim"),": A follow on exercise that demonstrates how a file can can be added to a Pull Request."),Object(o.b)("p",null,"This small exercise demonstrates a key misunderstanding that students have around how they can add files to a Pull Request."),Object(o.b)("p",null,"You should prompt and call attention to how we should always write good commit messages. Don't write \"",Object(o.b)("em",{parentName:"p"},"Changes"),'". Do write "',Object(o.b)("em",{parentName:"p"},"Added an answer to the other-file.txt file"),'".'),Object(o.b)("h3",{id:"exercise-7"},"Exercise 7"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aim"),": A follow on exercise that demonstrates how a file can can be added to a Pull Request."),Object(o.b)("h3",{id:"exercise-8"},"Exercise 8"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aim"),": A rounding off exercises that shows the solution to the first problem that we discussed."),Object(o.b)("p",null,"Open questions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Do you think this is easier to tell what has changed in the files?"),Object(o.b)("li",{parentName:"ul"})))}u.isMDXComponent=!0}}]);