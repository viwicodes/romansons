import React from 'react'

const YouTube = () => {
    const youtubeId = '-TCS7Fok6z0'
    return (
        <div style={{maxWidth: "700px",margin: "0 auto"}}>
            <div
                className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    // height: 0
                }}
            >
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write"
                    title='Inaugratin Romansons Digital Printing and publishing house'
                />
            </div>
        </div>
    )
}

export default YouTube