import './Banner.scss'
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