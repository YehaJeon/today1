import './Y42.css';

function Y42() {
    return (
        <div className="Y42">
            <div className="background42">
                <div className="modal42">
                    <span className="birth42">요한 님의 생일은?</span>
                    <div className="date42">
                        <input className="month42" type="number"></input>
                        <span className="monthSpan42">월</span>
                        <input className="day42" type="number"></input>
                        <span className="daySpan42">일</span>
                    </div>
                    <button className="next42">다음</button>
                    <div className="dote42">
                        <nav className="dote142"></nav>
                        <nav className="dote242"></nav>
                        <nav className="dote342"></nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Y42;
