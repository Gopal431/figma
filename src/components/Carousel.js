import React, { useState, useEffect } from 'react';
function Carousel() {
    let [currentIndex, setCurrentIndex] = useState(0)
    let [time, setTime] = useState(null)

    const [show, setShow] = useState(false);

    let imageList = [
        "https://images.unsplash.com/photo-1611095564350-2cbe940a8d99?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp",
        "https://images.unsplash.com/photo-1612832021026-375ae70f24bf?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp",
        "https://images.unsplash.com/photo-1613984431576-0beeedf617b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp",
        "https://images.unsplash.com/photo-1613969673101-c982c30287f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp"
    ]

    useEffect(() => {
        basicSetup();
    }, []);

    const basicSetup = () => {
        var myVar = setInterval(myTimer, 7000);
        // console.log(options)
    }

    const myTimer = () => {
        var d = new Date();
        if (time === null)
            setTime(d.toLocaleTimeString())

        if (d.toLocaleTimeString() !== time) {
            currentIndex = imageList.length !== currentIndex + 1 ? currentIndex + 1 : 0;
            setCurrentIndex(currentIndex)
            setTime(d.toLocaleTimeString())
        }
    }





 
    return (
        <div className='my-5'>
            <div className="relative h-56">
                <div>
                    <img className="w-full h-56 rounded-md" src={imageList[currentIndex]}></img>
                    <div className="flex flex-row justify-between">
                        <div>
                        
                        </div>
                        <div>
                         
                        </div>
                        <div className="absolute flex flex-row space-x-2 lg:px-32 lg:left-96 lg:ml-32 left-32 bottom-2">
                            {
                                imageList.map((item, index) => (
                                    index === currentIndex ? <p className="w-1 h-1 p-2 bg-red-500 border border-white rounded-full "></p> : <p className="w-1 h-1 p-2 border-2 border-white rounded-full"></p>
                                )

                                )
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Carousel