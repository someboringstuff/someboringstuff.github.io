(function() {
	var canvas = document.getElementById('circle'),
		c = canvas.getContext('2d');

	const options = {
		w: 126,
		h: 126,
		radius: 63,
		bgC: "#eee",
		strC: "#000"
	};

	function setCanvasSize() {
		canvas.width = options.w;
		canvas.height = options.h;
	}

	function Line(angle) {
		this.angle = angle;

		this.x1 = options.w/2;
		this.y1 = 1;

		this.update = function() {
			this.angle += 0.005;
			this.x2 = options.w/2 + Math.cos(this.angle)*(options.radius - 1);
			this.y2 = options.h/2 + Math.sin(this.angle)*(options.radius - 1);

			if(this.angle > Math.PI * 3/2) {
				this.angle = Math.PI/2;
			}
		}
	}

	var lines = [],
		angle = Math.PI/2;

	for (var i = 0; i < 4; i++) {
		lines.push(new Line(angle));
		angle += Math.PI/4;
	}

	setCanvasSize();

	setInterval(function() {

		c.clearRect(0, 0, options.w, options.h);

		c.beginPath();
		c.arc(options.w/2, options.h/2, options.radius - 1, 0, Math.PI*2);
		c.strokeStyle = options.strC;
		c.lineWidth = 2;
		c.stroke(); 
		c.closePath();

		c.beginPath();
		c.arc(options.w/2, options.h/2, options.radius - 1, Math.PI/2, Math.PI * 3/2, 1);
		c.fillStyle = options.strC;
		c.fill();
		c.closePath();

		lines.forEach(function(line) {
			line.update();
			c.beginPath();
			c.moveTo(line.x1, line.y1);
			c.lineTo(line.x2, line.y2);
			c.lineTo(options.w/2, line.y2);
			c.lineJoin = "round";
			c.stroke();
			c.closePath();
		});

		

	}, 9);



})();