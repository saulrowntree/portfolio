import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cn from "classnames"


const VerticalCarousel = (array) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Used to determine which items appear above the active item
    const halfwayIndex = Math.ceil(array.data.length / 2);

    // Usd to determine the height/spacing of each item
    const itemHeight = 52;

    // Used to determine at what point an item is moved from the top to the bottom
    const shuffleThreshold = halfwayIndex * itemHeight;

    // Used to determine which items should be visible. this prevents the "ghosting" animation
    const visibleStyleThreshold = shuffleThreshold /32;

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
                if (prevIndex - 1 < 0) {
                    return array.data.length-1;
                }
                return prevIndex - 1;
            });
        }, 1350)
        return () => clearInterval(intervalId)
    })

    return (
        <span className="carousel-inner">
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
                    <span>{item.text}</span> <span><img style={{display: "inline"}} src={require("../" + item.image)}
                                               alt={item.name}/> </span>
                </p>
            ))}
        </span>
    );
};

VerticalCarousel.propTypes = {
    data: PropTypes.array.isRequired
};

export default VerticalCarousel;
