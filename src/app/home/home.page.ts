import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AlertController} from "@ionic/angular";
import {QuizService} from "../service/quiz.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isHidden = true;
  pseudo = '';
  difficulty: string;
  difficulties: string[] = ['Easy','Medium','Hard'];
  saveInfos = false;
  beginGame: boolean = false;
  private reponsse: string;
  quiz: Promise<unknown>;

  constructor(private alertController: AlertController, private quizService: QuizService) {}


  start() {
/*    if (this.pseudo.length<3) {
      this.isHidden=false;
    } else {
      if (this.difficulty==null) {
        this.isHidden=false;
      } else {*/
        this.quiz = this.quizService.getNFL()
        this.isHidden=true;
        this.beginGame=true;
      /*}
    }*/
  }

  answer(answer: string) {
    this.reponsse = answer
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: this.reponsse,
      message:"La reponse selectioner est "+this.reponsse,
      buttons: ["Ok"]
    });
    await alert.present();
  }

  ngOnInit(): void {
  }
}
