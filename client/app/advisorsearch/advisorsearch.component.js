'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './advisorSearch.routes';

export class AdvisorSearchComponent {
  question1 = '';
  question1b = '';
  question2 = '';
  question3 = '';
  question4 = '';
  question5 = '';
  question6 = '';
  question7 = '';
  question8 = '';
  question9 = '';
  question10 = '';
  question11 = '';
  question12 = '';
  question13 = '';
  question14 = '';
  question15 = '';
  question16 = '';
  question17 = '';
  question18 = '';
  question19 = '';
  question20 = '';
  question21 = '';
  question22 = '';
  question23 = '';
  question24 = '';
  question25 = '';
  question26 = '';
  question27 = '';
  question28 = '';
  question29 = '';
  question30 = '';
  question31 = '';
  question32 = '';
  currentQuestion = '';
  arrayPosition = '';
  questions = [];
  radio = '';
  noAnswer1 = '';
  noAnswer2 = '';
  /*@ngInject*/
  constructor () {
    this.noAnswer1 = false;
    this.noAnswer2 = false;
    this.radio = {response:""};
    this.arrayPosition = 0;
    this.question1 = {
      question:"Do you have any pets?",
      answers: ["Dog",
                "Cat",
                "Fish",
                "Bird",
                "other", 
                "no"]
    };
    this.question2 = {
      question:"Which would you prefer?",
      answers: ["Visiting a history, art, or science museum", 
                "Going to a pro sports game or music event"]
    };
    this.question3 = {
      question:"How do you feel about technology?",
      answers: ["Embrace it", 
                "Use it, but struggles to keep up with constant changes", 
                "Don't like it"]
    };
    this.question4 = {
      question:"Would you consider yourself more analytical and logical or emotional and big picture?",
      answers: ["Analytical and Logical", 
                "Emotional and Big Picture"]
    };
    this.question5 = {
      question:"Do you believe money can buy you happiness?",
      answers: ["Yes", 
                "No"]
    };
    this.question6 = {
      question:"Karaoke?",
      answers: ["I like to sing", 
                "I like to watch others sing"]
    };
    this.question7 = {
      question:"Surprises",
      answers: ["Like them", 
                "Dislike them"]
    };
    this.question8 = {
      question:"Would you rather vacation in a place where",
      answers: ["English is the native language", 
                "English is not the native language", 
                "Language is not understood at all"]
    };
    this.question9 = {
      question:"Travel",
      answers: ["Enjoy exploring new places out of my comfort zone that I have never been", 
                "Enjoy going to new places if I am part of a group or know someone living there",
                "Prefer to stay in my own country",
                "Prefer to stay n my own town/city",
                "Don't travel at all but want to",
                "Don't want to travel"]
    };
    this.question10 = {
      question:"How would your friends describe you?",
      answers: ["Outgoing", 
                "Reserved"]
    };
    this.question11 = {
      question:"How would your friends describe you?",
      answers: ["Energetic", 
                "Relaxed/Laid Back"]
    };
    this.question12 = {
      question:"How would your friends describe you?",
      answers: ["Fun", 
                "Serious"]
    };
    this.question13 = {
      question:"How would your friends describe you?",
      answers: ["Competitive", 
                "Go with the flow"]
    };
    this.question14 = {
      question:"What is your favorite Holiday?",
      answers: ["Christmas/Hanukkah/Kwanza", 
                "New Years",
                "Easter",
                "4th of July",
                "Labor Day"]
    };
    this.question15 = {
      question:"Favorite type of food?",
      answers: ["Mexican", 
                "Thai",
                "Chinese",
                "Italian"]
    };
    this.question16 = {
      question:"I am always looking for new experiences",
      answers: ["Strongly Agree",
                "Agree",
                "Disagree",
                "Strongly Disagree"]
    };
    this.question17 = {
      question:"I am willing to take risks to achieve my goals in life",
      answers: ["Strongly Agree", 
                "Agree",
                "Disagree",
                "Strongly Disagree"]
    };
    this.question18 = {
      question:"People should behave in ways that are morally and ethically correct",
      answers: ["Strongly Agree", 
                "Agree",
                "Disagree",
                "Strongly Disagree"]
    };
    this.question19 = {
      question:"If your car broke down and you were offered a ride by a stranger to the nearest mechanic, which one of the following would you feel most comfortable giving you a ride?",
      answers: ["Face 1", 
                "Face 2",
                "Face 3",
                "Face 4"]
    };
    this.question20 = {
      question:"You like to know how things work",
      answers: ["Strongly Agree", 
                "Agree",
                "Disagree",
                "Strongly Disagree"]
    };
    this.question21 = {
      question:"I prefer to work with people who are",
      answers: ["Consistent and sensible", 
                "sensitive to the feelings of others",
                "Direct and Clear",
                "Laid Back"]
    };
    this.question22 = {
      question:"Would you consider yourself Religious?",
      answers: ["Strongly Agree", 
                "Agree",
                "Disagree",
                "Strongly Disagree"]
    };
    this.question23 = {
      question:"Highest level of education you have completed",
      answers: ["High School", 
                "Two Year Degree",
                "4 Year Degree",
                "Professional Degree",
                "Advanced Degree"]
    };
    this.question24 = {
      question:"What is your political outlook",
      answers: ["Optimisitc", 
                "not sure",
                "Pessimistic",
                "Don't like or follow politics"]
    };
    this.question25 = {
      question:"In working with a professional advisor, how far can their physical location be from you?",
      answers: ["Unlimited miles: Doesn't matter, I am happy to meet in a virtual setting", 
                "150-500 miles: I am comfortable meeting virtually, but would want them in the same time zone",
                "25-150 miles: I would want them within 1.5 hours of where I live or work",
                "0-25 miles: They need to have a physical office that I can visit should I need help or have a question"]
    };
    this.question26 = {
      question:"Marital Status",
      answers: ["Married", 
                "Divorced",
                "Single"]
    };
    this.question27 = {
      question:"How many children do you have?",
      answers: ["0", 
                "1-2",
                "3-4",
                "5+"]
    };
    this.question28 = {
      question:"Are you a business owner?",
      answers: ["Yes", 
                "No"]
    };
    this.question29 = {
      question:"What is the ideal age range of the person you would like to work with?",
      answers: ["22-35", 
                "35-45",
                "45-55",
                "55-65",
                "65+"]
    };
    this.question30 = {
      question:"Would you prefer your advisor to be",
      answers: ["Male", 
                "Female",
                "Either"]
    };
    this.question31 = {
      question:"What type of planning do you need help with?",
      answers: ["Life Insurance", 
                "Financial Planning",
                "Investing"]
    };

    this.questions = [this.question1, this.question2, this.question3,
                      this.question4, this.question5, this.question6, this.question7,
                      this.question8, this.question9, this.question10, this.question11,
                      this.question12, this.question13, this.question14, this.question15,
                      this.question16, this.question17, this.question18, this.question19,
                      this.question20, this.question21, this.question22, this.question23,
                      this.question24, this.question25, this.question26, this.question27,
                      this.question28, this.question29, this.question30, this.question31];
    this.currentQuestion = this.question1;
  }
  radioButton() {
    this.noAnswer1 = true;
  }
  next() {
    if(this.noAnswer1 == false){
      this.noAnswer2 = true;
    }
    else{
      if(this.arrayPosition < this.questions.length - 1){
        this.arrayPosition++;
      }
      this.currentQuestion = this.questions[this.arrayPosition];
      this.radio.response="";
      this.noAnswer2 = false;
      this.noAnswer1 = false;
    }
  }
  previous() {
    if(this.arrayPosition > 0){
      this.arrayPosition--;
    } 
    this.currentQuestion = this.questions[this.arrayPosition];
    this.radio.response="";
    this.noAnswer2 = false;
    this.noAnswer1 = false;
  }
}

export default angular.module('conneqtorApp.advisorSearch', [uiRouter])
  .config(routes)
  .component('advisorSearch', {
    template: require('./advisorSearch.html'),
    controller: AdvisorSearchComponent, 
    controllerAs: 'advisorSearchCtrl'
  })
  .name;
