score = 0
answer_holder = ""
drawn_sketch = ""
counter = 0
timer_check = ""

function preload(){
    model = ml5.imageClassifier("DoodleNet")
}

function setup(){
    myCanvas = createCanvas(350,350)
    myCanvas.center()
    background("white")
    myCanvas.mouseReleased(classifyCanvas)
}

function classifyCanvas(){
    model.classify(myCanvas,gotResults)
}

quick_draw_contents = ["flashlight","belt","mushroom","pond","strawberry","pineapple","sun","cow","ear",
"bush","pliers","watermelon","apple","baseball","feather","leaf","lollipop","crown","ocean","horse",
"mountain","mosquito","mug","hospital","castle","angel","underwear","traffic_light","cruise_ship","marker",
"blueberry","flamingo","face","hockey_stick","bucket","campfire","asparagus","skateboard","door",
"suitcase","skull","cloud","paint_can","hockey_puck","steak","house_plant","sleeping_bag","snowman",
"arm","crayon","fan","star","rain","animal_migration","door"]

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
    strokeWeight(13)
    stroke("black")
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
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

function clearCan(){
    background("white")
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("sketchName").innerHTML = "Your Sketch : " + results[0].label
        document.getElementById("conf").innerHTML = "Accuracy : " + Math.round(results[0].confidence * 100) + "%"
        drawn_sketch = results[0].label
    }
}

function nextSketch(){
    counter = 0
    updateCan()
    timer_check = ""
    answer_holder = ""
}