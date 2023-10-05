var titlecontainer = document.createElement("div");
titlecontainer.setAttribute("id", "title");
titlecontainer.setAttribute("class", "text-center mt-5");
document.body.appendChild(titlecontainer);
var title = document.createElement("h3");
title.innerHTML = "Cricket Game";
document.getElementById("title").appendChild(title);
var row = document.createElement("div");
row.setAttribute("class", "row mt-5");
row.setAttribute("id", "row");
document.body.appendChild(row);
var column1 = document.createElement("div");
column1.setAttribute("class", "col-sm-4 text-center");
column1.setAttribute("id", "column1");
document.getElementById("row").appendChild(column1);
var column2 = document.createElement("div");
column2.setAttribute("class", "col-sm-4 text-center");
column2.setAttribute("id", "column2");
document.getElementById("row").appendChild(column2);
var column3 = document.createElement("div");
column3.setAttribute("class", "col-sm-4 text-center");
column3.setAttribute("id", "column3");
document.getElementById("row").append(column3);
var titlescrore1 = document.createElement("h5");
titlescrore1.innerHTML = "ASquad Score 1";
document.getElementById("column1").appendChild(titlescrore1);
var scrore1 = document.createElement("h2");
scrore1.innerHTML = "0";
scrore1.setAttribute("id", "score1");
document.getElementById("column1").appendChild(scrore1);
var button1 = document.createElement("button");
button1.setAttribute("class", "btn btn-info ");
button1.setAttribute("id", "hit1");
// button1.setAttribute("onclick", game.displayRuns);
button1.innerHTML = "Hit1";
document.getElementById("column1").appendChild(button1);
var timerTitle = document.createElement("h5");
timerTitle.innerHTML = "TIMER";
timerTitle.style.color = "blue";
document.getElementById("column2").appendChild(timerTitle);
var startGameBtn = document.createElement("button");
startGameBtn.setAttribute("class", "btn btn-success mt-3");
startGameBtn.setAttribute("id", "startGame");
startGameBtn.innerHTML = "Start Game";
document.getElementById("column2").appendChild(startGameBtn);
var timer = document.createElement("h2");
timer.innerHTML = "0";
timer.style.color = "red";
timer.setAttribute("id", "timer");
document.getElementById("column2").appendChild(timer);
var titlescrore2 = document.createElement("h5");
titlescrore2.innerHTML = "BSquad Score 2";
document.getElementById("column3").appendChild(titlescrore2);
var scrore2 = document.createElement("h2");
scrore2.innerHTML = "0";
scrore2.setAttribute("id", "score2");
document.getElementById("column3").appendChild(scrore2);
var button2 = document.createElement("button");
button2.setAttribute("class", "btn btn-info disabled");
button2.setAttribute("id", "hit2");
button2.innerHTML = "Hit 2";
document.getElementById("column3").appendChild(button2);
var row_table = document.createElement("div");
row_table.setAttribute("class", "row mt-5");
row_table.setAttribute("id", "row_table");
document.body.appendChild(row_table);
//three column
var table_column1 = document.createElement("div");
table_column1.setAttribute("class", "col-sm-5 text-center");
table_column1.setAttribute("id", "table_column1");
document.getElementById("row_table").appendChild(table_column1);
var table_column2 = document.createElement("div");
table_column2.setAttribute("class", "col-sm-2 text-center");
table_column2.setAttribute("id", "table_column2");
document.getElementById("row_table").appendChild(table_column2);
var table_column3 = document.createElement("div");
table_column3.setAttribute("class", "col-sm-5 text-center");
table_column3.setAttribute("id", "table_column3");
document.getElementById("row_table").append(table_column3);
//table 1
var table1 = document.createElement("table");
table1.setAttribute("class", "table");
table1.setAttribute("id", "table1");
document.getElementById("table_column1").appendChild(table1);
// thead 1
var thead1 = document.createElement("thead");
thead1.innerHTML =
    "<tr><th>Team 1</th><th>B1</th><th>B2</th><th>B3</th><th>B4</th><th>B5</th><th>B6</th><th>Total</th></tr>";
document.getElementById("table1").appendChild(thead1);
//column entities
thead1.innerHTML +=
    '<tr id="t11"><th>P1</th></tr><tr id="t12"><th >P2</th></tr><tr  id="t13"><th >P3</th></tr><tr  id="t14"><th >P4</th></tr><tr  id="t15"><th >P5</th></tr><tr id="t16"><th  >P6</th></tr><tr  id="t17"><th>P7</th></tr><tr  id="t18"><th>P8</th></tr><tr  id="t19"><th>P9</th></tr><tr id="t110"><th>P10</th></tr>';
//table 2
var table2 = document.createElement("table");
table2.setAttribute("class", "table");
table2.setAttribute("id", "table2");
document.getElementById("table_column3").appendChild(table2);
//thead 2
var thead2 = document.createElement("thead");
thead2.innerHTML =
    "<tr><th>Team 2</th><th>B1</th><th>B2</th><th>B3</th><th>B4</th><th>B5</th><th>B6</th><th>Total</th></tr>";
document.getElementById("table2").appendChild(thead2);
//column entities
thead2.innerHTML +=
    '<tr  id="t21"><th>P1</th></tr><tr id="t22"><th >P2</th></tr><tr  id="t23"><th>P3</th></tr><tr id="t24"><th  >P4</th></tr><tr  id="t25"><th >P5</th></tr><tr  id="t26"><th>P6</th></tr><tr  id="t27"><th>P7</th></tr><tr  id="t28"><th >P8</th></tr><tr id="t29"><th >P9</th></tr><tr  id="t210"><th >P10</th></tr>';
//result
var result = document.createElement("h3");
result.setAttribute("id", "result");
document.getElementById("table_column2").appendChild(result);
// GETTING ALL THE QUERIES NEEDED
var timerDisplay = document.getElementById("timer");
var hitOne = document.getElementById("hit1");
var hitTwo = document.getElementById("hit2");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        //VARIABLES DECALRED FOR DISPLAYING RUNS AND FOR SUM OF THEM
        this.players = 1;
        this.balls = 1;
        this.total = 0;
        this.teamTotal = 0;
        this.team = 1;
        this.startGame = function () {
            document.getElementById("startGame").setAttribute("disabled", "true");
            document.getElementById("hit1").removeAttribute("disabled");
            _this.startTimer();
        };
        this.toggle = 1;
        this.running = 0;
        this.seconds = 0;
        this.randomRunGenerator = function () {
            var run = Math.floor(Math.random() * 7);
            return run;
        };
        this.displayRuns = function () {
            if (_this.players < 11) {
                if (_this.players === 1) {
                    _this.startTimer();
                }
                var run = _this.randomRunGenerator();
                var run_data = document.createElement("td");
                run_data.innerHTML = "".concat(run);
                document.getElementById("t".concat(_this.team).concat(_this.players)).appendChild(run_data);
                if (run === 0) {
                    _this.displayPlayerTotal();
                    for (var i = _this.balls; i <= 6; i++) {
                        var emptyCell = document.createElement("td");
                        emptyCell.innerHTML = "-";
                        document
                            .getElementById("t".concat(_this.team).concat(_this.players))
                            .appendChild(emptyCell);
                    }
                    _this.players++;
                    _this.balls = 1;
                    _this.total = 0;
                }
                // If the batsman has played all 6 balls
                else if (_this.balls === 6) {
                    _this.displayPlayerTotal();
                    _this.players++;
                    _this.balls = 1;
                    _this.total = 0;
                }
                else {
                    _this.balls++;
                    _this.total += run;
                    _this.teamTotal += run;
                    document.getElementById("score".concat(_this.team)).innerHTML = _this.teamTotal;
                }
            }
            ;
        };
        this.displayPlayerTotal = function () {
            var totalCell = document.createElement("td");
            totalCell.innerHTML = "<b style=\"color:dodgerblue\">".concat(_this.total, "</b>");
            document.getElementById("t".concat(_this.team).concat(_this.players)).appendChild(totalCell);
        };
        this.startTimer = function () {
            if (!_this.running) {
                _this.startTime = new Date().getTime();
                _this.tInterval = setInterval(_this.displayTime, 1);
                _this.running = 1;
            }
        };
        this.displayTime = function () {
            _this.updatedTime = new Date().getTime();
            _this.difference = _this.updatedTime - _this.startTime;
            _this.seconds = Math.floor((_this.difference % (1000 * 60)) / 1000);
            _this.seconds = _this.seconds < 10 ? "0" + _this.seconds : _this.seconds;
            timerDisplay.innerHTML = _this.seconds + "s";
            if (_this.seconds == 59) {
                _this.resetTimer();
            }
        };
        this.resetTimer = function () {
            _this.difference = 0;
            _this.running = 0;
            _this.seconds = "0";
            timerDisplay.innerHTML = _this.seconds + "s";
            clearInterval(_this.tInterval);
            if (_this.toggle === 1) {
                hitOne.setAttribute("class", "btn btn-info disabled");
                hitOne.removeEventListener("click", game.displayRuns, false);
                hitTwo.setAttribute("class", "btn btn-info");
                hitTwo.addEventListener("click", game.displayRuns);
                _this.team = 2;
                _this.players = 1;
                _this.balls = 1;
                _this.total = 0;
                _this.teamTotal = 0;
                _this.toggle = 0;
            }
            else {
                hitTwo.setAttribute("class", "btn btn-info disabled");
                hitTwo.removeEventListener("click", game.displayRuns, false);
                _this.handleWinner();
            }
        };
        this.handleWinner = function () {
            var team1 = parseInt(document.getElementById("score1").innerHTML);
            var team2 = parseInt(document.getElementById("score2").innerHTML);
            if (team1 > team2) {
                document.getElementById("result").innerHTML = "team 1 is the winner";
            }
            else if (team1 < team2) {
                document.getElementById("result").innerHTML = "team 2 is the winner";
            }
            else {
                document.getElementById("result").innerHTML = "Match Tied";
            }
        };
    }
    return Game;
}());
var game = new Game();
document.getElementById("hit1").addEventListener("click", game.displayRuns);
document.getElementById("startGame").addEventListener("click", game.startGame);
// Create 'Generate Result' button
var generateResultBtn = document.createElement("button");
generateResultBtn.setAttribute("class", "btn btn-success mt-3");
generateResultBtn.setAttribute("id", "generateResult");
generateResultBtn.innerHTML = "Generate Result";
document.getElementById("table_column2").appendChild(generateResultBtn);
// Add an event listener to the 'Generate Result' button
document.getElementById("generateResult").addEventListener("click", game.handleWinner);
document.getElementById("startGame").addEventListener("click", game.startGame);
