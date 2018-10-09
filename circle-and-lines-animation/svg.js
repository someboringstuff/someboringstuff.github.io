(function() {

  const options = {
    w: 300,
    h: 300,
    radius: 150,
    bgC: "#eee",
    strC: "#000",
    startAngle: Math.PI/2
  };

  const svg = document.getElementById("logo-animated"),
        horizontal = document.querySelectorAll(".horizontal"),
        vertical = document.querySelectorAll(".vertical"),
        circle = document.getElementById("circle-svg"),
        halfCircle = document.getElementById("half-circle");

  function setSVG() {
    svg.setAttribute("width", options.w);
    svg.setAttribute("height", options.h);

    circle.setAttribute('cx', options.w/2);
    circle.setAttribute('cy', options.h/2);
    circle.setAttribute('r', options.radius - 1);

    halfCircle.setAttribute('d', ["M", options.w/2-1, 1, "A", options.w/2, options.w/2-1, 1, 0, 1, options.w/2-1, options.w].join(" "));
  }

  var linesSVG = [],
      angle = options.startAngle;

  for (var i = 0; i < 4; i++) {
    linesSVG.push({
      ver: vertical[i],
      hor: horizontal[i],
      angle: angle
    });

    angle += Math.PI/4;
  }

  setSVG();


  setInterval(function() {
    linesSVG.forEach(function(line) {
      line.hor.setAttribute('x1', options.w/2 + Math.cos(line.angle)*(options.radius - 1));
      line.hor.setAttribute('y1', options.w/2 + Math.sin(line.angle)*(options.radius - 1));
      line.hor.setAttribute('x2', options.w/2);
      line.hor.setAttribute('y2', options.w/2 + Math.sin(line.angle)*(options.radius - 1));

      line.ver.setAttribute('x1', options.w/2);
      line.ver.setAttribute('y1', 1);
      line.ver.setAttribute('x2', options.w/2 + Math.cos(line.angle)*(options.radius - 1));
      line.ver.setAttribute('y2', options.w/2 + Math.sin(line.angle)*(options.radius - 1));

      line.angle += 0.005;

      if(line.angle > Math.PI * 3/2) {
        line.angle = Math.PI/2;
      }
    });



  }, 9);



})();