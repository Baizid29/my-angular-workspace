import {Component} from '@angular/core';

@Component({
	selector:'app-home',
	template:`
		<h2>{{title}}</h2>
		<P>Online Shopping Application</P>
	`,
	styles:['h2{text-align:center; background-color:tomato; color:white}']
})

export class HomeComponent
{
	title:string ='Shopping Home';
}