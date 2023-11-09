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