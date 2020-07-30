const contact = 
<div>
    <h1 className = "holderTitle">Contact me!</h1>
    <div className="contact">
        <p className="text">If you wish to contact me, please email me at Jeo961@gmail.com and I will get back to you in a couple business days</p>
        <p className="text"><a href="../files/Justin_Jones_Resume.PDF" download>Click here</a> to download my Resume!</p>
    </div>
</div>;

ReactDOM.render(
    contact,
    document.getElementById('contact')
  );