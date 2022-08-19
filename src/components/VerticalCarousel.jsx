import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cn from "classnames"


const VerticalCarousel = (array) => {
    console.log(array.data.length)
    const [activeIndex, setActiveIndex] = useState(0);

    // Used to determine which items appear above the active item
    const halfwayIndex = Math.ceil(array.data.length / 2);

    // Usd to determine the height/spacing of each item
    const itemHeight = 52;

    // Used to determine at what point an item is moved from the top to the bottom
    const shuffleThreshold = halfwayIndex * itemHeight;

    // Used to determine which items should be visible. this prevents the "ghosting" animation
    const visibleStyleThreshold = shuffleThreshold / 4;

    const determinePlacement = (itemIndex) => {
        // If these match, the item is active
        if (activeIndex === itemIndex) return 0;

        if (itemIndex >= halfwayIndex) {
            if (activeIndex > itemIndex - halfwayIndex) {
                return (itemIndex - activeIndex) * itemHeight;
            } else {
                return -(array.data.length + activeIndex - itemIndex) * itemHeight;
            }
        }

        if (itemIndex > activeIndex) {
            return (itemIndex - activeIndex) * itemHeight;
        }

        if (itemIndex < activeIndex) {
            if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
                return (array.data.length - (activeIndex - itemIndex)) * itemHeight;
            }
            return -(activeIndex - itemIndex) * itemHeight;
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => {
                if (prevIndex + 1 > array.data.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, 1350)
        return () => clearInterval(intervalId)
    })

    return (<div className="container">
        <section className="outer-container">
            <div className="carousel-wrapper">
                <div className="carousel">
                    <div className="slides">
                        <div className="carousel-inner">
                            {array.data.map((item, i) => (
                                <p
                                    className={cn("carousel-item", {
                                        active: activeIndex === i,
                                        visible: Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                                    })}
                                    key={item.text}
                                    style={{
                                        transform: `translateY(${determinePlacement(i)}px)`
                                    }}
                                >
                                    <span><img style={{display: "inline"}} src={require("../" + item.image)}
                                               alt={item.name}/> </span> <span>{item.text}</span>
                                </p>
                                //300 1.333em / 1.6 Lato, Helvetica, Arial, sans-serif
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
};

VerticalCarousel.propTypes = {
    data: PropTypes.array.isRequired
};

export default VerticalCarousel;
