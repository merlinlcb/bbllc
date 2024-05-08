$(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
  
      $('.parallax-section').each(function() {
        var topDistance = $(this).offset().top;
        var bgPosition = -scrollTop / 2; // Adjust the speed of parallax scrolling
  
        $(this).css('background-position', 'center ' + (bgPosition - topDistance * 0.5) + 'px');
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var homeContainer = document.getElementById('homecontainer');
    var aboutContainer = document.getElementById('aboutcontainer');
    var contactContainer = document.getElementById('contactcontainer');
    var bioContainer = document.getElementById('biocontainer');

    function generateTrianglify(container, colorPalette) {
        var pattern = Trianglify({
            width: container.clientWidth,
            height: container.clientHeight,
            cell_size: 60 + Math.random() * 100,
            variance: 0.5, // Adjust variance to control color transition
            seed: Math.random(),
            x_colors: colorPalette // Specify the color palette
        });

        container.style.backgroundImage = 'url(' + pattern.png() + ')';
    }

    // Define your color palettes
    var homeColors = ["#565554", "#2E86AB", "#EFF6EE"];
    var aboutColors = ["#2E86AB", "#EFF6EE", "#565554"];
    var contactColors = ["#EFF6EE", "#2E86AB", "#565554"];
    var bioColors = ["#565554", "#EFF6EE", "#2E86AB"];

    generateTrianglify(homeContainer, homeColors);
    generateTrianglify(aboutContainer, aboutColors);
    generateTrianglify(contactContainer, contactColors);
    generateTrianglify(bioContainer, bioColors);
});
