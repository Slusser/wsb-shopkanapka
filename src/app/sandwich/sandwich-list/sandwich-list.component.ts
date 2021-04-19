import { Component, OnInit, ViewChild } from '@angular/core';
import { SandwichService } from '../sandwich.service';

@Component({
  selector: 'wsb-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styles: [
  ]
})
export class SandwichListComponent implements OnInit {

  @ViewChild('querryInput') querryInputElement;

  public sandwiches = this.sandwichService.getSandwiches();

  constructor(private sandwichService: SandwichService) { }

  public find(querry){
   this.sandwiches = this.sandwichService.querrySandwiches(querry)
  }

  public find2(){
    const querry = this.querryInputElement.nativeElement.value;
    this.sandwiches = this.sandwichService.querrySandwiches(querry)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  console.log(this.querryInputElement)}

}
