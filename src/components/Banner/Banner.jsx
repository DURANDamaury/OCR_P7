import './Banner.scss'
function Banner({img})
    {
        return (
            <div className="banner">
                <img src={img} alt="banner" />
                <div className="banner_Filter"></div>
                <div className="banner_txt">Chez vous, partout et ailleurs</div>
            </div>
        )
    }

export default Banner