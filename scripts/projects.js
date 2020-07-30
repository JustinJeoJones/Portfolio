//Placed near the top of page. 
//Future needs
//add project class to be able to place multiple
const projects =  
<div className = "projectHolder">
    <h1 className= "holderTitle">Check out what I've done!</h1>
    <div className="project">
        <p className="title">This website!</p>
        <p className="description">
            Using ReactJS, I created this website as a way to have an online portfolio/resume. Learned it within 24 hours and posted it. This website will be updated over time to reflect my skill.
        </p>
        <a className="link" href="https://github.com/JustinJeoJones/Portfolio">Check out the code!</a>
    </div>
    <div className="project">
        <p className="title">Melee Stream Puller</p>
        <p className="description">
            Using C#, I created this program for people who stream video game tournaments. I noticed that there was an issue within streams where streamers would take a while to update the text on the stream, and when it did get updated, the text would end up misspelled or wrong. This fixes it by allowing the streamers to enter the link of the bracket and using 2 different api's, it will grab all of the matches and allow the streamer to just click which match is the right one and the text will automatically update on the stream.
        </p>
        <a className="link" href="https://github.com/JustinJeoJones/Melee-Stream-Puller">Check out the code!</a>
    </div>
    <div className="project">
        <p className="title">Unreal Projects</p>
        <p className="description">
            Using the Unreal Engine and following a <a href= "https://www.udemy.com/course/unrealcourse/">Udemy Unreal Course</a> I've been able to create this. This engine uses c++ to teach its students Unreal.
        </p>
        <video width="50%" height="25%" controls>
            <source src="../videos/UnrealVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <a className="link" href="">Code currently not on Github</a>
    </div>
</div>
ReactDOM.render(
    projects,
    document.getElementById('projects')
);