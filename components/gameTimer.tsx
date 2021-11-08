export default function GameTimer({ time }) {
    return (
        <section className="containerTimer">
            <div className="timeBar">
                <div 
                    className="backgroundBar" 
                    style={{ 
                        width: time === 3 ? 
                        "100%" : time === 2 ? 
                        "66%" : time === 0 ? 
                        "0%": "33%"
                    }}
                >  
                </div>
            </div>
        </section>
    );
}