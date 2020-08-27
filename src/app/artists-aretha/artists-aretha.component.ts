import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-artists-aretha',
  templateUrl: './artists-aretha.component.html',
  styleUrls: ['./artists-aretha.component.scss']
})
export class ArtistsArethaComponent implements OnInit {
  
  artistsDobDisplay;
  artistsSongDisplay;
  artistsGenreDisplay;

  //artists Reactive Form
    artistsForm = new FormGroup({
    artistsDob: new FormControl('',[Validators.required]),
    artistsSong: new FormControl('',[Validators.required]),    
    artistsGenre: new FormControl('',[Validators.required, Validators.minLength(3)])    

  })

  get artistsGenre() {return this.artistsForm.get('artistsGenre')}

  get artistsSong() {return this.artistsForm.get('artistsSong')}

  get artistsDob() {return this.artistsForm.get('artistsDob')}


    // Form handler for the Reactive Form - presently just prints song in console 
    onSubmit(){
      console.log(`${this.artistsForm.value.artistsSong}`)
    }


  constructor() { }

  ngOnInit(): void {
  }

}
