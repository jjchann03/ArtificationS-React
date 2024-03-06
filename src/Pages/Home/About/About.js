import './about.css'

export default function About(){
    return(
        <div className="about-container">
            <h2>About Us</h2>
            <p className='about-p'>As the world of AI is revolutionizing all the normal things around you, 
                we here at Artification Studios have thought of transforming the world of wall art,
                 home decor, and painting with AI. What makes us different is that we can even get
                  you custom scenaries to transforming your interiors. All you have to do 
                  is tell us what type of product you need and ORDER.
            </p>
            <button className='read-more' style={{"marginTop": 2+"rem"}}>Read More</button>
        </div>
    )
}