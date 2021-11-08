export default function GameColors({
    colors,
    choosedCard
}) {
    
    return (
        <div className="contentGame">
            <section className="randomColor">
                <div 
                    className="color" 
                    style={{ backgroundColor: colors.rightColor.color }}
                >
                    {colors.rightColor.name}
                </div>
            </section>
            <section className="contentCards">
            {
                colors.arrayColors.map((color, index) => {
                    return (
                        <div 
                            key={color.indexName} 
                            className="card"
                            style={{ 
                                backgroundColor: color.color, 
                                borderRadius: index === 0 ? "0 0 0 25px" : 
                                index === 3 ? "0 0 25px 0" : 
                                "0 0 0 0"
                            }}
                            onClick={() => choosedCard(color.color)}
                        >
                            {color.name}
                        </div>
                    )
                })
            }
            </section>
        </div>
    );
}