import Card from "./Card"
const cards = [
    {
        title: "Brand Recognition",
        sub: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content",
        icon: "../../public/images/icon-brand-recognition.svg"
    },
    {
        title: "Detailed Records",
        sub: "Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions",
        icon: "../../public/images/icon-detailed-records.svg"
    },
    {
        title: "Fully Customizable",
        sub: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
        icon: "../../public/images/icon-fully-customizable.svg"
    },
]
const Statistics = ({ short, link, handleCopy }) => {
    return (
        <div className='statistic'>
            {
                short.length == 0 ? <></> :

                    <div className="result-cards">
                        <p>
                            {link}
                        </p>
                        <span>
                            <p>
                                {short.full_short_link
                                }
                            </p>
                            <button onClick={handleCopy}>Copy</button>
                        </span>
                    </div>
            }
            <div className="title-stat">
                <h3>Advanced Statistics</h3>
                <p>Track how your links are performing accross the web with <br />our advanced Statistics dashboard</p>
            </div>
            <div className="stat-card">
                {cards.map((item, id) =>
                    <Card item={item} key={id} />

                )}
                <hr className="line-hr" />
            </div>
        </div>
    )
}

export default Statistics