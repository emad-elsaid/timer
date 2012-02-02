/*
 *      timer.js
 *      
 *      Copyright 2012 Blaze Boy <blazeeboy@gmail.com>
 *      
 *      This program is free software; you can redistribute it and/or modify
 *      it under the terms of the GNU General Public License as published by
 *      the Free Software Foundation; either version 2 of the License, or
 *      (at your option) any later version.
 *      
 *      This program is distributed in the hope that it will be useful,
 *      but WITHOUT ANY WARRANTY; without even the implied warranty of
 *      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *      GNU General Public License for more details.
 *      
 *      You should have received a copy of the GNU General Public License
 *      along with this program; if not, write to the Free Software
 *      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 *      MA 02110-1301, USA. 
 */
var Timer = function(DOM_element){
	
	this.start_t = null;
	this.interval = null;
	this.DOM = DOM_element;
	
	/**
	 * toggle start stop of current timer
	 */
	this.toggle = function(){
		this.interval==null? this.start() : this.end();
	}

	/**
	 * start timer ticking
	 */
	this.start = function(){
		
		// create the starting point
		this.start_t = new Date();
		
		// store this in another reference to be accessible from update function
		var myself = this;
		
		// updating document with time
		var inline_update = function(){ myself.update(); }
		
		// execute this function every 10 milliseconds to give the speed effect
		this.interval = setInterval( inline_update, 10);
	}

	/**
	 * stop updating the DOM and clear the interval from object
	 */
	this.end = function(){
		clearInterval(this.interval);
		this.interval = null;
	}
	
	 this.update = function(){
			
			// get the ellapsed milliseconds
			var ellapsed = ( (new Date()-this.start_t)/1000 );
			// calculate minutes
			var minutes  = ellapsed<60 ? 0 : Math.floor(Math.floor(ellapsed)/60);
			// fix to 3 digits after the floating point
			ellapsed = (ellapsed%60).toFixed( 3 );
			// get teh time element
			// set minutes : seconds.milliseconds 
			this.DOM.innerHTML = minutes.toString() + ':' + ellapsed;
	}


}
