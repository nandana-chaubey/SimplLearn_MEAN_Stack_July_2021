import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-exam',
  templateUrl: './tdf-exam.component.html',
  styleUrls: ['./tdf-exam.component.css']
})
export class TdfExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  questions = [
    {question:"Inside which HTML element do we put the JavaScript?",
    ans1:"<Javascript>",
    ans2:"<js>",
    ans3:"<scripting>",
    ans4:"<script>",
    correctAns:"<script>",
    },
    {question:"Where is the correct place to insert a JavaScript?",
    ans1:"Both the Head and Body Section ",
    ans2:"The Head Section",
    ans3:"The Body Section",
    ans4:"In CSS",
    correctAns:"Both the Head and Body Section",
    },
    {question:"How do you write `Hello World` in an alert box?",
    ans1:"Both the Head and Body Section ",
    ans2:"The Head Section",
    ans3:"The Body Section",
    ans4:"In CSS",
    correctAns:"Both the Head and Body Section",
    },
    {question:"Where is the correct place to insert a JavaScript?",
    ans1:"msg(Hello World)",
    ans2:"alert(Hello World)",
    ans3:"msgBox(Hello World)",
    ans4:"alertBox(Hello World)",
    correctAns:"Both the Head and Body Section",
    },
    {question:"Where is the correct place to insert a JavaScript?",
    ans1:"Both the Head and Body Section ",
    ans2:"The Head Section",
    ans3:"The Body Section",
    ans4:"In CSS",
    correctAns:"Both the Head and Body Section",
    },
  ]
}
