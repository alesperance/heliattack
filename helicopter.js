
// Helicopter class
//----------------------------------
var Helicopter = function(game, x, y) {
  this.game = game;
  this.x = x;
	this.y = y;
  this.velocity = 1;
	this.health = 100;
  this.pitch_angle = 0;
	this.turret_angle = 0;
	this.missiles = 3;
	this.sprite_sheet = new Image();
	this.sprite_sheet.src = "helicopter.png";
};

Helicopter.prototype = {
	x: 0,
	y: 0,
	velocity: 0,
	
	render: function(context) {
		// Render helicopter with pitch angle, missiles, and targeted turret
		context.save();
		context.translate(this.x, this.y);
		context.rotate(this.pitch_angle);
		context.translate(-65, -4);
		context.save();
		context.translate(90, 35);
		context.rotate(this.turret_angle);
		context.drawImage(this.sprite_sheet, 100, 56, 25, 8, -5, 0, 25, 8);
		context.restore();
		context.drawImage(this.sprite_sheet, 0, 0, 131, 52, 0, 0, 131, 52);
		context.translate(56, 35);
		for(i = 0; i < this.missiles; i++) {
			context.translate(2,2);
		  context.drawImage(this.sprite_sheet, 75, 56, 17, 8, 0, 0, 17, 8);
		}
		context.restore();
	},
	
	update: function(elapsedTime, inputState) {
	  
		// Move the helicopter
		this.move(inputState);	
		
		// TODO: Fire weapons
	
	},
	
	move: function(inputState) {
		if(inputState.up) {
			this.y -= this.velocity * 2;
		} else if(inputState.down) {
			this.y += this.velocity * 5;
		}
		if(inputState.left) {
			this.pitch_angle = -Math.PI/10;
			this.x -= this.velocity * 2;
		} else if(inputState.right) {
			this.pitch_angle = Math.PI/8;
		  this.x += this.velocity * 5;
		} else {
			this.pitch_angle = 0;
		}
	}
};