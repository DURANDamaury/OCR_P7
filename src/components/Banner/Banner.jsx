import './Banner.scss'

//Banner.
//for this version, text is always display. So, to not see text, you have to send an empty one. 
function Banner({img,txt})
    {
        return (
            <div className="banner">
                <img src={img} alt="banner" />
                <div className="banner_Filter"></div>
                <div className="banner_txt">{txt}</div>
            </div>
        )
    }

export default Banner