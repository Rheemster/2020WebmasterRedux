import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

	page = 0;

	
  constructor() { }

  ngOnInit(): void {
  }

	forward() {
		if (this.page == 2){
			this.page = 0;
		} else {
			this.page ++;
		}
		this.refresh();
	};
	back() {
		if (this.page == 0){
			this.page = 2;
		} else {
			this.page --;
		}
		this.refresh();
	};
	refresh(){
		if (this.page == 0){
			document.getElementById("slide-number1").style.display = "inline";
			document.getElementById("slide-number2").style.display = "none";
			document.getElementById("slide-number3").style.display = "none";

			document.getElementById("car1listings").style.display = "inline-block";
			document.getElementById("car2listings").style.display = "none";
			document.getElementById("car3listings").style.display = "none";
		} else if (this.page == 1){
			document.getElementById("slide-number1").style.display = "none";
			document.getElementById("slide-number2").style.display = "inline";
			document.getElementById("slide-number3").style.display = "none";

			document.getElementById("car1listings").style.display = "none";
			document.getElementById("car2listings").style.display = "inline-block";
			document.getElementById("car3listings").style.display = "none";
		} else if (this.page == 2){
			document.getElementById("slide-number1").style.display = "none";
			document.getElementById("slide-number2").style.display = "none";
			document.getElementById("slide-number3").style.display = "inline";

			document.getElementById("car1listings").style.display = "none";
			document.getElementById("car2listings").style.display = "none";
			document.getElementById("car3listings").style.display = "inline-block";
		}
	}


}
