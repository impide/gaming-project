import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MediaSocials, MediaSocialsIcons } from '../core/data/mediaSocials-icons';
import { FeedBacks, TopFeedbackList } from '../core/data/topFeedback-lists';
import { GamesPath, TopGamesLists } from '../core/data/topGames-lists';

@Component({
  selector: 'app-main-space',
  templateUrl: './main-space.component.html',
  styleUrls: ['./main-space.component.scss']
})
export class MainSpaceComponent implements OnInit {

  // Lists Top Games
  games: GamesPath[] = TopGamesLists;

  // Lists Top Feedbacks
  feedbacks: FeedBacks[] = TopFeedbackList;

  // Lists Social Icons
  mediaSocials: MediaSocials[] = MediaSocialsIcons;

  constructor() { }

  ngOnInit(): void {
  }



  onContact(form: NgForm) {

  }

}


