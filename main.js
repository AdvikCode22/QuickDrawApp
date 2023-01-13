score = 0
answer_holder = ""
drawn_sketch = ""
counter = 0
timer_check = ""

function setup(){
    myCanvas = createCanvas(350,350)
    myCanvas.center()
    background("white")
}

quick_draw_contents = ["airplane" , "ship" , "alarm_clock" , "apple" , "war_axe" , "banana" , 
"basketball" , "camera" , "book" , "cake" , "cup" , "wall_clock" , "door" , "donut" , "glasses" , 
"eye" , "candle" , "drum" , "lamp" , "foot" , "fork"]

random_number = Math.floor((Math.random() * quick_draw_contents.length) + 1)
console.log(quick_draw_contents[random_number])
targetSketch = quick_draw_contents[random_number]
document.getElementById("targetSketch").innerHTML = "Target Sketch: " + targetSketch

function updateCan(){
    background("white")
    random_number = Math.floor((Math.random() * quick_draw_contents.length) + 1)
    console.log(quick_draw_contents[random_number])
    targetSketch = quick_draw_contents[random_number]
    document.getElementById("targetSketch").innerHTML = "Target Sketch: " + targetSketch
}

function draw(){
    check_sketch()
    if(drawn_sketch == targetSketch){
        answer_holder = "set"
        score = score + 1
        document.getElementById("left1").innerHTML = "Score: " + score
    }
}

function check_sketch(){
    counter++
    document.getElementById("right1").innerHTML = "Timer: " + counter
    if(counter == 500){
        counter = 0
        timer_check = "completed"
    }

    if(timer_check == "completed" || answer_holder == "set"){
        timer_check = ""
        answer_holder = ""
        updateCan()
        counter = 0
    }
}