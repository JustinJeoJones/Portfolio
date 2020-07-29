//Placed near the top of page. 
//Future needs
//add project class to be able to place multiple
const projects =  
<div className = "projectHolder">
    <h1>Check out what I've done!</h1>
    <div className="project">
        <p className="Title">This website!</p>
        <p className="Description">
            Using ReactJS, I created this website as a way to have an online portfolio/resume. Learned it within 24 hours and posted it. This website will be updated over time to reflect my skill.
        </p>
        <a className="Link" href="https://github.com/JustinJeoJones/Portfolio">Check out the code!</a>
    </div>
    <div className="project">
        <p className="Title">Melee Stream Puller</p>
        <p className="Description">
            Using C#, I created this program for people who stream video game tournaments. I noticed that there was an issue within streams where streamers would take a while to update the text on the stream, and when it did get updated, the text would end up misspelled or wrong. This fixes it by allowing the streamers to enter the link of the bracket and using 2 different api's, it will grab all of the matches and allow the streamer to just click which match is the right one and the text will automatically update on the stream.
        </p>
        <a className="Link" href="https://github.com/JustinJeoJones/Melee-Stream-Puller">Check out the code!</a>
    </div>
</div>
ReactDOM.render(
    projects,
    document.getElementById('root')
);