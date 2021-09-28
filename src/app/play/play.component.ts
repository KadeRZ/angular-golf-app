import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  totalTicker: number = 0;
  gameOver: boolean = false;
  saveComplete: boolean = false;
  spinner: boolean

  yardsTotal = 0;
  handicapTotal = 0;
  parTotal = 0;

  gameData: any;
  courseData: any;
  difficultyNum: number;
  dataIn: boolean = false;

  tapped = [false, false, false, false];


  calculate(player) {
    this.calculateOut(player);
    this.calculateIn(player);
    player.total = player.out + player.in;

    player.ticker = 0;
    for (let i = 0; i < 18; i++) {
      if (player.holes[i].score > 0) {
        player.ticker++;
      }
    }
    if (this.gameData.players.length == 1) {
      if (player.ticker == 18) this.endGame();
    }
    this.calculateAll();
  }



  calculateAll() {
    this.totalTicker = 0;

    for (let i = 0; i < this.gameData.players.length; i++) {
    this.totalTicker += this.gameData.players[i].ticker
    }
    if (this.gameData.players.length == 1 && this.totalTicker == 18)
      this.endGame(); 
    if (this.gameData.players.length == 2 && this.totalTicker == 36)
      this.endGame();
    if (this.gameData.players.length == 3 && this.totalTicker == 54)
      this.endGame();
    if (this.gameData.players.length == 4 && this.totalTicker == 72)
      this.endGame();
  }

  calculateOut(player): void {
    player.out = 0;
    for (let i = 0; i < 9; i++) {
      player.out += player.holes[i].score;
    }
  }

  calculateIn(player): void {
    player.in = 0;
    for (let i = 9; i < 18; i++) {
      player.in += player.holes[i].score;
    }
  }

  endGame(): void {
    this.gameOver = true;

    for (let i = 0; i < this.gameData.players.length; i++) {
      if (this.gameData.players[i].total > this.parTotal)
        this.gameData.players[i].message = 'Better luck next time!';
      else if (this.gameData.players[i].total == this.parTotal)
        this.gameData.players[i].message = 'Right on Par!';
      else if (this.gameData.players[i].total < this.parTotal)
        this.gameData.players[i].message = 'Onto the PGA!!!';
    }
  }

  finishGame(): void {
    this.gameOver = false
    console.log(this.gameData)
    this.saveComplete = true;
  }

  constructor(
    private gameService: DataService,
    private coursesService: CoursesService,
  ) {}

  ngOnInit(): void {
      this.spinner = true;
      this.gameData = this.gameService.getGameObject();
      this.difficultyNum = this.gameData.difficultyNum;
      this.coursesService.getCourse(this.gameData.course).subscribe((x) => {
        this.courseData = x;
        this.dataIn = true;
        this.courseData.data.holes.forEach((x) => {
          this.parTotal += x.teeBoxes[this.difficultyNum].par;
          this.yardsTotal += x.teeBoxes[this.difficultyNum].yards;
          this.handicapTotal += x.teeBoxes[this.difficultyNum].hcp;
        });
        this.spinner = false
      });
  }
}