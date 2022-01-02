import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Data,ColorList,Color } from '../../data';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {

  color_list: Color[] = [];
  total_votes: number = 0;
  max_votes: number = 0;

  innerWidth: any;
  num_of_cols: number = 4;

  isLoading: boolean = false;

  constructor(
    private httpService: HttpServiceService,
    private snackbar: MatSnackBar,
    ) {
   }

  ngOnInit(): void {
    this.getData();

  }

  getData(){
    // this.color_list = Data.list;
    // this.total_votes = Data.total_votes;
    // this.max_votes = Data.highest_vote_count;

    this.httpService.getColorListData().subscribe(
      (rest: any) => {
        console.log(rest)
        this.color_list = rest.colorList;
        this.total_votes = rest.total_votes;
        this.max_votes = rest.highest_vote_count;
        this.snackbar.open('Color votes updated successfully', 'Dismiss',{duration: 5000} );

      },
      error => {
        console.error(error)
        this.snackbar.open('There was a problem geting data', 'Dismiss',{duration: 5000} );
      }
    );
    
  }

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      console.log(this.num_of_cols)
      this.innerWidth = window.innerWidth;
      if(this.innerWidth > 1500){
        this.num_of_cols = 4;
      }else if (this.innerWidth < 1500 && this.innerWidth >= 1200) {
        this.num_of_cols = 3;
      } else if (this.innerWidth <= 1199 && this.innerWidth >= 768) {
        this.num_of_cols = 2;
      }else if (this.innerWidth < 768){
        this.num_of_cols = 1;
      }
    }

    vote(color_id: number){
      console.log(color_id)
      this.isLoading = true;
      this.httpService.vote(color_id).subscribe( 
        rest => {console.log(rest)
          this.snackbar.open('Thank for your vote, we got it!', 'Dismiss',{duration: 5000} );

        },
        error => {
          console.error(error)
          this.snackbar.open('There was a problem, try again', 'Dismiss',{duration: 5000} );
        },
        () => {
          this.isLoading = false;
          this.getData();
        });
    }

}
