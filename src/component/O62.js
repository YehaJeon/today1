import './O62.css';
import React, { useState } from 'react';

function O62() {
    let [page, pageChage] = useState(1);
    let [lastPage, lastPageChage] = useState(31);
    let [left, leftChage] = useState(false);
    let [right, rightChage] = useState(true);
    return (
        <div className="O62">
            <div className="background062">
                <div className="letterdiv062">
                    <div className="xbtn062">
                        <div className="xline1062"></div>
                        <div className="xline2062"></div>
                    </div>

                    {left && (
                        <div
                            className="leftBtn062"
                            onClick={() => {
                                pageChage(page - 1);

                                if (page === 2) {
                                    leftChage(false);
                                }
                                if (page > 2) {
                                    leftChage(true);
                                }
                                if (page < lastPage + 1) {
                                    rightChage(true);
                                }
                            }}
                        >
                            <div className="leftline1062"></div>
                            <div className="leftline2062"></div>
                        </div>
                    )}

                    <div className="letterbox062">
                        <textarea className="note062"></textarea>
                    </div>

                    {right && (
                        <div
                            className="rightBtn062"
                            onClick={() => {
                                pageChage(page + 1);

                                if (page > 0) {
                                    leftChage(true);
                                }
                                if (page === lastPage - 1) {
                                    rightChage(false);
                                }
                            }}
                        >
                            <div className="rightline1062"></div>
                            <div className="rightline2062"></div>
                        </div>
                    )}
                    <div>
                        <h1>
                            {page}/{lastPage}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default O62;
