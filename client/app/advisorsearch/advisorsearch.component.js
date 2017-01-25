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

  /*@ngInject*/
  constructor () {
    this.arrayPosition = 0;
    this.question1 = {
      question:"Do you have any pets?",
      answers: ["yes", "no"]
    };
    this.question1b = {
      question:"What kind?",
      answers: ["dog", "cat", "fish", "bird", "other"]
    };
    this.question2 = {
      question:"Which would you prefer?",
      answers: ["Visiting a history, art, or science museum", "Going to a pro sports game or music event"]
    };
    this.question3 = {
      question:"How do you feel about technology?",
      answers: ["Embrace it", "Use it, but struggles to keep up with constant changes", "Don't like it"]
    };
    this.question4 = {
      question:"Would you consider yourself more analytical and logical or emotional and big picture?",
      answers: ["Analytical and Logical", "Emotional and Big Picture"]
    };
    this.question5 = {
      question:"Do you believe money can buy you happiness?",
      answers: ["Yes", "No"]
    };
    this.question6 = {
      question:"Karaoke?",
      answers: ["I like to sing", "I like to watch others sing"]
    };
    this.question7 = {
      question:"Surprises",
      answers: ["Like them", "Dislike them"]
    };
    this.questions = [this.question1, this.question1b, this.question2, this.question3,
                      this.question4, this.question5, this.question6, this.question7];
    this.currentQuestion = this.question1;
  }
  next() {
    if(this.arrayPosition < this.questions.length - 1){
      this.arrayPosition++;
    }
    console.log(this.arrayPosition);
    this.currentQuestion = this.questions[this.arrayPosition];
  }
  previous() {
    if(this.arrayPosition > 0){
      this.arrayPosition--;
    }
    console.log(this.arrayPosition);  
    this.currentQuestion = this.questions[this.arrayPosition];
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
