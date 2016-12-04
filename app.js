const scoreboard = {
    element: document.getElementById('scoreboard'),

    update: function (score, player, total) {
        let i, results
        results = '<h2>Bowling scoreboard</h2>'
        results += '<h3>Total: <strong>' + total + '</strong></h3>'
        results += '<p><strong>Player: ' + player + '</strong></p>'
        results += '<table class="table table-bordered">'
        results += '<tr>'

        for (let i=1; i<11; i++) {
            results += '<th>Frame ' + i + '</th>'
        }

        results += '</tr>'
        results += '<tr>'
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                results += '<td>'
                for (let j in score[i]) {
                    if (score[i].hasOwnProperty(j)) {
                        let data = ''
                        if (j == 1 && score[i][1] === 10) {
                            data = 'X'
                        } else if (j == 2 && score[i][1] === 10) {
                            data = ''
                        } else if (j == 2 && (score[i][1] + score[i][2]) === 10) {
                            data = '/'
                        } else {
                            data = score[i][j]
                        }
                        if (score[i][j] === null) {
                            data = ''
                        }

                        results += data + '&nbsp'
                    }

                }

                results += '</td>'
            }
        }

        results += '</tr>'

        results += '</table>'

        this.element.innerHTML = results
    }
}

function Game(player) {
    this.player = player
    this.frameData = {}
    this.currentFrame = 0
    this.currentRoll = 1
    this.score = 0
}

Game.prototype.calculateScore = function (frame) {
    const data = this.frameData
    let newScore = 0

    for (let i in data) {
        for (let j in data[i]) {
            if (data[i][1] !== null && data[i][2] !== null){
                if (data[i][1] + data[i][2] !== 10) {
                    newScore += data[i][j]
                } else {
                    const idx = parseInt(j)
                    if (data[idx + 1][1] && data[idx + 1][2]) {
                        newScore += data[idx + 1][1] + data[idx + 1][2]
                    }
                }
            }
        }
    }

    for (let i in data) {
        if (data.hasOwnProperty(i)) {
            for (let j in data[i]) {
                const idx = parseInt(j)
                if (data.hasOwnProperty((idx + 1).toString())) {
                    if (data[idx][1] === 10) {
                        if (data[idx + 1][1] && data[idx + 1][2]) {
                            newScore += data[idx + 1][1] + data[idx + 1][2]
                        }
                    } else if (data[idx][1] + data[idx][2] === 10) {
                        newScore += data[idx + 1][1]
                    }
                }
            }
        }
    }

    this.score = newScore
}

Game.prototype.startNewFrame = function (number) {
    this.frameData[number] = {
        1: null,
        2: null
    }

    this.currentFrame = number
}

Game.prototype.finish = function () {
    console.log('Game finished')
    scoreboard.update(this.frameData, this.player, this.score)
}

Game.prototype.init = function () {
    scoreboard.update(this.frameData, this.player, this.score)
    this.startNewFrame(1)
}

Game.prototype.updateFrameData = function (points) {
    this.frameData[this.currentFrame][this.currentRoll] = points
}

Game.prototype.played = function (points) {
    this.updateFrameData(points)
    this.calculateScore()
    scoreboard.update(this.frameData, this.player, this.score)
    if (this.currentFrame === 10 && this.currentRoll === 2) {
        return this.finish()
    }

    if (points === 10) {
        return this.startNewFrame(this.currentFrame + 1)
    }

    if (this.currentRoll === 2) {
        this.startNewFrame(this.currentFrame + 1)
    }

    this.switchBall()
}

Game.prototype.play = function () {
    if (this.frameData[10] && this.frameData[10][2] !== null) {
        return
    }
    let max
    if (this.currentRoll === 2) {
        max = 10 - this.frameData[this.currentFrame][1]
    } else {
        max = 10
    }
    const points = getRandomInt(0, max)
    this.played(points)
}

Game.prototype.switchBall = function () {
    this.currentRoll = (this.currentRoll === 1) ? 2 : 1
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const game = new Game('Aleksandr')
game.init()
