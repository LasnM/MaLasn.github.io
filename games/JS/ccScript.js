let score = 0;
    
    function clickCookie() {
      if (score < 10){
        score++;
      } else {
        score += 2;
      }
      document.getElementById('scoreValue').textContent = score;
    }

    function resetScore() {
      document.getElementById("scoreValue").textContent = "0";
      score = 0;
    }

    function loadBugReport() {
      const bugReportObject = document.getElementById('bugReport');
      if (bugReportObject) {
        bugReportObject.data = `bugReport.html?source=cookieclicker`; // Add the source parameter
      }
    }
    
    // Call this function when the cookie clicker game loads
    loadBugReport();

    // br valideerimine

    document.addEventListener("DOMContentLoaded", function() {
      document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Peatab vormi esitamise
    
        var probleemSelect = document.getElementById("probleem");
        if (probleemSelect.value !== "Probleem 1") {
          probleemSelect.style.borderColor = "red";
        } else {
          probleemSelect.style.borderColor = "green";
        }
    
        var sammud1Select = document.getElementById("samm1");
        if (sammud1Select.value !== "Samm1 2" ) {
          sammud1Select.style.borderColor = "red";
        } else {
          sammud1Select.style.borderColor = "green";
        }
    
        var sammud2Select = document.getElementById("samm2");
        if (sammud2Select.value !== "Samm2 1" ) {
          sammud2Select.style.borderColor = "red";
        } else {
          sammud2Select.style.borderColor = "green";
        }
    
        var oodatudTulemusSelect = document.getElementById("oodatudTulemus");
        if (oodatudTulemusSelect.value !== "Tulemus 2" ) {
          oodatudTulemusSelect.style.borderColor = "red";
        } else {
          oodatudTulemusSelect.style.borderColor = "green";
        }
    
        var parisTulemusSelect = document.getElementById("parisTulemus");
        if (parisTulemusSelect.value !== "Päris tulemus 1" ) {
          parisTulemusSelect.style.borderColor = "red";
        } else {
          parisTulemusSelect.style.borderColor = "green";
        }
      });
    });
    